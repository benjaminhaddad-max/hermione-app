import { useEffect, useMemo, useState } from "react";
import localSchemas from "../../data/schemaLibrary.generated.json";
import { ADMIN_EMAIL, supabase, SUPABASE_READY } from "../../lib/supabaseClient";

function normalizeLocalRows(rows) {
  return (rows || []).map((r) => ({
    id: r.id,
    matiere: r.matiere || "Inconnue",
    source_pdf: r.sourcePdf || "",
    page: r.page || null,
    image_url: r.image || "",
    created_at: null,
  }));
}

export default function BackofficePage() {
  const [session, setSession] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const [authError, setAuthError] = useState("");

  const [schemas, setSchemas] = useState([]);
  const [loadingSchemas, setLoadingSchemas] = useState(false);
  const [schemaError, setSchemaError] = useState("");
  const [source, setSource] = useState("local");
  const [matiereFilter, setMatiereFilter] = useState("all");
  const [syncMessage, setSyncMessage] = useState("");

  useEffect(() => {
    if (!SUPABASE_READY || !supabase) {
      setLoadingAuth(false);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session || null);
      setLoadingAuth(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession || null);
      setAuthError("");
    });

    return () => {
      listener?.subscription?.unsubscribe();
    };
  }, []);

  const isAdmin = session?.user?.email?.toLowerCase() === ADMIN_EMAIL;

  useEffect(() => {
    async function loadSchemas() {
      setLoadingSchemas(true);
      setSchemaError("");
      try {
        if (isAdmin && supabase) {
          const { data, error } = await supabase
            .from("schema_library")
            .select("id,matiere,source_pdf,page,image_url,created_at")
            .order("matiere", { ascending: true });
          if (error) throw error;
          setSchemas(data || []);
          setSource("supabase");
        } else {
          setSchemas(normalizeLocalRows(localSchemas));
          setSource("local");
        }
      } catch (e) {
        setSchemaError(e.message || "Impossible de charger Supabase.");
        setSchemas(normalizeLocalRows(localSchemas));
        setSource("local");
      } finally {
        setLoadingSchemas(false);
      }
    }
    loadSchemas();
  }, [isAdmin]);

  async function signIn() {
    if (!supabase) return;
    setAuthError("");
    setEmailSent(false);
    const { error } = await supabase.auth.signInWithOtp({
      email: ADMIN_EMAIL,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    if (error) setAuthError(error.message || "Connexion impossible.");
    else setEmailSent(true);
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
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
    }));
    const { error } = await supabase.from("schema_library").upsert(payload, { onConflict: "id" });
    if (error) {
      setSyncMessage(`Erreur sync: ${error.message}`);
      return;
    }
    setSyncMessage(`Sync OK (${payload.length} entrées).`);
    const { data } = await supabase
      .from("schema_library")
      .select("id,matiere,source_pdf,page,image_url,created_at")
      .order("matiere", { ascending: true });
    setSchemas(data || []);
    setSource("supabase");
  }

  const matieres = useMemo(() => {
    return Array.from(new Set((schemas || []).map((s) => s.matiere).filter(Boolean))).sort((a, b) =>
      a.localeCompare(b, "fr")
    );
  }, [schemas]);

  const filtered = useMemo(() => {
    if (matiereFilter === "all") return schemas;
    return schemas.filter((s) => s.matiere === matiereFilter);
  }, [schemas, matiereFilter]);

  return (
    <div className="page bo-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Back Office</h1>
          <p className="page-sub">Bibliothèque des schémas · Accès privé</p>
        </div>
      </div>

      {!SUPABASE_READY && (
        <div className="bo-alert">
          Variables manquantes : `REACT_APP_SUPABASE_URL` / `REACT_APP_SUPABASE_ANON_KEY`.
        </div>
      )}

      <div className="bo-auth-card">
        <div className="bo-auth-row">
          <span className="bo-auth-label">Compte autorisé</span>
          <span className="bo-auth-email">{ADMIN_EMAIL}</span>
        </div>

        {loadingAuth ? (
          <p className="bo-muted">Vérification de session...</p>
        ) : isAdmin ? (
          <div className="bo-auth-ok">
            <span>✅ Connecté en admin</span>
            <button className="bo-btn" onClick={signOut}>Se déconnecter</button>
          </div>
        ) : (
          <div className="bo-login">
            <button className="bo-btn bo-btn-primary" onClick={signIn} disabled={!SUPABASE_READY}>
              Recevoir un lien de connexion
            </button>
          </div>
        )}

        {emailSent && <p className="bo-muted">Lien magique envoyé à {ADMIN_EMAIL}. Ouvre l’email puis reviens ici.</p>}
        {authError && <p className="bo-error">{authError}</p>}
      </div>

      <div className="bo-toolbar">
        <div className="bo-chip">Source: {source}</div>
        <div className="bo-chip">{schemas.length} schémas</div>
        <select
          className="ob-input"
          style={{ marginBottom: 0, height: 40 }}
          value={matiereFilter}
          onChange={(e) => setMatiereFilter(e.target.value)}
        >
          <option value="all">Toutes les matières</option>
          {matieres.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>
      </div>

      {isAdmin && (
        <div className="bo-sync-card">
          <button className="bo-btn bo-btn-primary" onClick={syncLocalToSupabase}>
            Sync local → Supabase
          </button>
          {syncMessage && <p className="bo-muted">{syncMessage}</p>}
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
            <p className="bo-source">{s.source_pdf || s.id}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
