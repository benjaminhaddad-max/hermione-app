import { useEffect, useMemo, useState } from "react";
import localSchemas from "../../data/schemaLibrary.generated.json";
import { ADMIN_EMAIL, supabase, SUPABASE_READY } from "../../lib/supabaseClient";
import MentorManager from "./MentorManager";
import ConversationViewer from "./ConversationViewer";

const CREATE_SCHEMA_LIBRARY_SQL = `create table if not exists public.schema_library (
  id text primary key,
  matiere text not null,
  source_pdf text,
  chapter text,
  legende text,
  page integer,
  image_url text not null,
  created_at timestamptz default now()
);

alter table public.schema_library enable row level security;

drop policy if exists "schema_library_select_auth" on public.schema_library;
create policy "schema_library_select_auth"
on public.schema_library
for select
using (true);

drop policy if exists "schema_library_write_auth" on public.schema_library;
create policy "schema_library_write_auth"
on public.schema_library
for insert
with check (true);

drop policy if exists "schema_library_update_auth" on public.schema_library;
create policy "schema_library_update_auth"
on public.schema_library
for update
using (true)
with check (true);

drop policy if exists "schema_library_delete_auth" on public.schema_library;
create policy "schema_library_delete_auth"
on public.schema_library
for delete
using (true);
`;

function cleanChapterName(sourcePdf) {
  const raw = String(sourcePdf || "")
    .replace(/\.pdf$/i, "")
    .replace(/^fcds[_\-\s]*/i, "")
    .replace(/^fiche\s*de\s*cours[_\-\s]*/i, "")
    .replace(/^cours[_\-\s]*/i, "")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!raw) return "Chapitre non renseigné";
  return raw.charAt(0).toUpperCase() + raw.slice(1);
}

function buildLegend(row) {
  if (row.legende && String(row.legende).trim()) return String(row.legende).trim();
  const chapter = cleanChapterName(row.source_pdf || row.sourcePdf || "");
  const page = row.page ? ` (p.${row.page})` : "";
  return `Schéma clé — ${chapter}${page}`;
}

function normalizeLocalRows(rows) {
  return (rows || []).map((r) => ({
    id: r.id,
    matiere: r.matiere || "Inconnue",
    source_pdf: r.sourcePdf || "",
    page: r.page || null,
    image_url: r.image || "",
    chapter: r.chapter || cleanChapterName(r.sourcePdf || ""),
    legende: r.legende || "",
    created_at: null,
  }));
}

export default function BackofficePage() {
  const ADMIN_LOGIN_EMAIL = (process.env.REACT_APP_BACKOFFICE_EMAIL || ADMIN_EMAIL).toLowerCase();
  const ADMIN_LOGIN_PASSWORD = process.env.REACT_APP_BACKOFFICE_PASSWORD || "";

  const [loginEmail, setLoginEmail] = useState(ADMIN_LOGIN_EMAIL);
  const [loginPassword, setLoginPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [isAdmin, setIsAdmin] = useState(() => {
    try {
      return window.sessionStorage.getItem("bo_admin_ok") === "1";
    } catch {
      return false;
    }
  });

  const [boTab, setBoTab] = useState("schemas");
  const [schemas, setSchemas] = useState([]);
  const [loadingSchemas, setLoadingSchemas] = useState(false);
  const [schemaError, setSchemaError] = useState("");
  const [source, setSource] = useState("local");
  const [matiereFilter, setMatiereFilter] = useState("all");
  const [chapterFilter, setChapterFilter] = useState("all");
  const [syncMessage, setSyncMessage] = useState("");
  const [showSqlHelp, setShowSqlHelp] = useState(false);

  useEffect(() => {
    setLoadingSchemas(true);
    setSchemaError("");
    const local = normalizeLocalRows(localSchemas);
    setSchemas(local);
    setSource(`local (${local.length})`);
    setLoadingSchemas(false);
  }, [isAdmin]);

  async function signIn() {
    setAuthError("");
    const email = String(loginEmail || "").trim().toLowerCase();
    if (email !== ADMIN_LOGIN_EMAIL) {
      setAuthError("Accès refusé : seul l'email admin est autorisé.");
      return;
    }
    if (!loginPassword) {
      setAuthError("Mot de passe requis.");
      return;
    }
    if (!ADMIN_LOGIN_PASSWORD) {
      setAuthError("Mot de passe admin non configuré côté Vercel.");
      return;
    }
    if (loginPassword !== ADMIN_LOGIN_PASSWORD) {
      setAuthError("Identifiants invalides.");
      return;
    }
    setIsAdmin(true);
    try {
      window.sessionStorage.setItem("bo_admin_ok", "1");
    } catch {}
  }

  async function signOut() {
    setIsAdmin(false);
    setLoginPassword("");
    try {
      window.sessionStorage.removeItem("bo_admin_ok");
    } catch {}
  }

  async function syncLocalToSupabase() {
    if (!supabase || !isAdmin) return;
    setSyncMessage("Synchronisation en cours...");
    const payload = normalizeLocalRows(localSchemas).map((r) => ({
      id: r.id,
      matiere: r.matiere,
      source_pdf: r.source_pdf,
      page: r.page,
      image_url: r.image_url,
      chapter: r.chapter,
      legende: buildLegend(r),
    }));
    // 1. Vider toute la table d'abord
    const { error: delError } = await supabase.from("schema_library").delete().neq("id", "");
    if (delError) {
      setSyncMessage(`Nettoyage KO (${delError.message}). Tentative upsert...`);
    }
    // 2. Insérer/upsert les nouvelles entrées
    const { error } = await supabase.from("schema_library").upsert(payload, { onConflict: "id" });
    if (error) {
      if ((error.message || "").includes("Could not find the table")) {
        setShowSqlHelp(true);
        setSyncMessage("Table manquante: exécute le SQL de création ci-dessous dans Supabase SQL Editor.");
      } else {
        setSyncMessage(`Erreur sync: ${error.message}`);
      }
      return;
    }
    setSyncMessage(`Sync OK (${payload.length} entrées). Anciennes supprimées.`);
    const { data } = await supabase
      .from("schema_library")
      .select("id,matiere,source_pdf,page,image_url,chapter,legende,created_at")
      .order("matiere", { ascending: true });
    setSchemas(data || []);
    setSource("supabase");
  }

  const matieres = useMemo(() => {
    return Array.from(new Set((schemas || []).map((s) => s.matiere).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b, "fr")
    );
  }, [schemas]);

  const chapters = useMemo(() => {
    const src = matiereFilter === "all" ? schemas : schemas.filter((s) => s.matiere === matiereFilter);
    return Array.from(new Set(src.map((s) => s.chapter || cleanChapterName(s.source_pdf)).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b, "fr")
    );
  }, [schemas, matiereFilter]);

  const filtered = useMemo(() => {
    let result = schemas;
    if (matiereFilter !== "all") result = result.filter((s) => s.matiere === matiereFilter);
    if (chapterFilter !== "all") result = result.filter((s) => (s.chapter || cleanChapterName(s.source_pdf)) === chapterFilter);
    return result;
  }, [schemas, matiereFilter, chapterFilter]);

  async function copySqlSetup() {
    try {
      await navigator.clipboard.writeText(CREATE_SCHEMA_LIBRARY_SQL);
      setSyncMessage("SQL copié. Colle-le dans Supabase > SQL Editor puis Run.");
    } catch {
      setSyncMessage("Impossible de copier automatiquement. Copie le SQL affiché à l'écran.");
    }
  }

  return (
    <div className="page bo-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Back Office</h1>
          <p className="page-sub">Bibliothèque des schémas · Accès privé</p>
        </div>
      </div>
      <div style={{ marginBottom: 12 }}>
        <a
          className="bo-btn"
          href="/schema-library-test/acides-amines-native/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Ouvrir la galerie test (Acides amines)
        </a>
      </div>

      {(!SUPABASE_READY || !ADMIN_LOGIN_PASSWORD) && (
        <div className="bo-alert">
          Variables requises manquantes (`REACT_APP_SUPABASE_URL`, `REACT_APP_SUPABASE_ANON_KEY`, `REACT_APP_BACKOFFICE_PASSWORD`).
        </div>
      )}

      <div className="bo-auth-card">
        <div className="bo-auth-row">
          <span className="bo-auth-label">Compte autorisé</span>
          <span className="bo-auth-email">{ADMIN_LOGIN_EMAIL}</span>
        </div>

        {isAdmin ? (
          <div className="bo-auth-ok">
            <span>✅ Connecté en admin</span>
            <button className="bo-btn" onClick={signOut}>Se déconnecter</button>
          </div>
        ) : (
          <div className="bo-login bo-login-form">
            <input
              className="bo-input"
              type="email"
              placeholder="Adresse email"
              autoComplete="username"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <input
              className="bo-input"
              type="password"
              placeholder="Mot de passe"
              autoComplete="current-password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") signIn();
              }}
            />
            <button className="bo-btn bo-btn-primary" onClick={signIn} disabled={!ADMIN_LOGIN_PASSWORD}>
              Se connecter
            </button>
          </div>
        )}

        {!isAdmin && (
          <p className="bo-muted">
            Connexion directe admin par email + mot de passe (sans verification email).
          </p>
        )}
        {authError && <p className="bo-error">{authError}</p>}
      </div>

      {/* Onglets Backoffice */}
      {isAdmin && (
        <div className="aventure-sub-nav" style={{ marginBottom: 16 }}>
          <button className={`aventure-sub-btn ${boTab === "schemas" ? "active" : ""}`} onClick={() => setBoTab("schemas")}>📐 Schemas</button>
          <button className={`aventure-sub-btn ${boTab === "mentors" ? "active" : ""}`} onClick={() => setBoTab("mentors")}>👨‍⚕️ Mentors</button>
          <button className={`aventure-sub-btn ${boTab === "conversations" ? "active" : ""}`} onClick={() => setBoTab("conversations")}>💬 Conversations</button>
        </div>
      )}

      {isAdmin && boTab === "mentors" && <MentorManager />}
      {isAdmin && boTab === "conversations" && <ConversationViewer />}

      {boTab === "schemas" && (<>
        {/* Onglets matière */}
        <div className="bo-matiere-tabs">
          <button
            className={`bo-matiere-tab ${matiereFilter === "all" ? "active" : ""}`}
            onClick={() => { setMatiereFilter("all"); setChapterFilter("all"); }}
          >
            Toutes ({schemas.length})
          </button>
          {matieres.map((m) => {
            const count = schemas.filter((s) => s.matiere === m).length;
            return (
              <button
                key={m}
                className={`bo-matiere-tab ${matiereFilter === m ? "active" : ""}`}
                onClick={() => { setMatiereFilter(m); setChapterFilter("all"); }}
              >
                {m === "Biochimie" ? "🧬" : m === "Biologie Cellulaire" ? "🦠" : "📚"} {m} ({count})
              </button>
            );
          })}
        </div>

        {/* Filtre chapitre */}
        {matiereFilter !== "all" && chapters.length > 1 && (
          <div className="bo-chapter-bar">
            <select
              className="bo-chapter-select"
              value={chapterFilter}
              onChange={(e) => setChapterFilter(e.target.value)}
            >
              <option value="all">Tous les chapitres ({filtered.length} schémas)</option>
              {chapters.map((c) => {
                const cnt = schemas.filter((s) => s.matiere === matiereFilter && (s.chapter || cleanChapterName(s.source_pdf)) === c).length;
                return <option key={c} value={c}>{c} ({cnt})</option>;
              })}
            </select>
          </div>
        )}

        <div className="bo-toolbar">
          <div className="bo-chip">Source: {source}</div>
          <div className="bo-chip">{filtered.length} schéma{filtered.length > 1 ? "s" : ""}</div>
        </div>

        {isAdmin && (
          <div className="bo-sync-card">
            <button className="bo-btn bo-btn-primary" onClick={syncLocalToSupabase}>
              Sync local → Supabase
            </button>
            {syncMessage && <p className="bo-muted">{syncMessage}</p>}
            {showSqlHelp && (
              <div className="bo-sql-help">
                <p className="bo-muted bo-muted-strong">
                  Action requise: crée la table dans Supabase (une seule fois).
                </p>
                <button className="bo-btn" onClick={copySqlSetup}>Copier SQL de création</button>
                <pre className="bo-sql-block">{CREATE_SCHEMA_LIBRARY_SQL}</pre>
              </div>
            )}
          </div>
        )}

        {loadingSchemas && <p className="bo-muted">Chargement des schémas...</p>}
        {schemaError && <p className="bo-error">{schemaError}</p>}

        <div className="bo-grid">
          {filtered.map((s) => (
            <article key={s.id} className="bo-card">
              <div className="bo-card-top">
                <span className="bo-tag">{s.matiere}</span>
                {s.page ? <span className="bo-page-num">p.{s.page}</span> : null}
              </div>
              <img src={s.image_url} alt={s.source_pdf || s.id} className="bo-img" loading="lazy" />
              <p className="bo-legend">{buildLegend(s)}</p>
              <p className="bo-source">{s.chapter || cleanChapterName(s.source_pdf)}</p>
            </article>
          ))}
        </div>
      </>)}
    </div>
  );
}
