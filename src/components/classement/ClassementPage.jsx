import { useState, useEffect } from "react";
import { FAKE_USERS, TOTAL_USERS_DISPLAY, getLevel, getRank, XP_REWARDS, loadRealLeaderboard } from "../../data/leaderboard";
import { supabase } from "../../lib/supabaseClient";

export default function ClassementPage({ storage, onAddXP }) {
  const userXP = storage.xp || 0;
  const streak = storage.streak || 0;
  const pseudo = storage.pseudo || "";
  const { current, nextLevel } = getLevel(userXP);

  const [realUsers, setRealUsers] = useState([]);
  useEffect(() => {
    loadRealLeaderboard(supabase).then(setRealUsers);
  }, []);

  const rank = getRank(userXP, realUsers);
  const progressPct = nextLevel
    ? Math.min(100, Math.round((userXP - current.minXP) / (nextLevel.minXP - current.minXP) * 100))
    : 100;

  const merged = [...realUsers, ...FAKE_USERS].sort((a, b) => b.xp - a.xp);
  const seen = new Set();
  const uniqueTop = merged.filter(u => {
    if (seen.has(u.pseudo)) return false;
    seen.add(u.pseudo);
    return true;
  });
  const top50 = uniqueTop.slice(0, 50);
  const userInTop50 = rank <= 50;

  return (
    <div className="page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Classement</h1>
          <p className="page-sub">{TOTAL_USERS_DISPLAY} étudiants sur Hermione</p>
        </div>
      </div>

      {/* User card */}
      <div className="rank-user-card">
        <div className="rank-user-top">
          <div className="rank-user-level">
            <span style={{ fontSize: 32 }}>{current.emoji}</span>
            <div>
              <div className="rank-user-level-name">{current.name}</div>
              <div className="rank-user-xp">{userXP.toLocaleString()} XP</div>
            </div>
          </div>
          <div className="rank-user-position">
            <span className="rank-position-num">#{rank.toLocaleString()}</span>
            <span className="rank-position-label">sur {TOTAL_USERS_DISPLAY}</span>
          </div>
        </div>

        {nextLevel && (
          <div className="rank-progress-section">
            <div className="rank-progress-labels">
              <span>{current.emoji} {current.name}</span>
              <span>{nextLevel.emoji} {nextLevel.name}</span>
            </div>
            <div className="rank-progress-track">
              <div className="rank-progress-fill" style={{ width: progressPct + "%" }} />
            </div>
            <div className="rank-progress-xp">
              {(nextLevel.minXP - userXP).toLocaleString()} XP restants
            </div>
          </div>
        )}

        {streak > 0 && (
          <div className="rank-streak">
            🔥 {streak} jour{streak > 1 ? "s" : ""} de suite
          </div>
        )}
      </div>

      {/* XP guide */}
      <p className="section-title" style={{ marginTop: 20 }}>Comment gagner des XP</p>
      <div className="xp-guide">
        {[
          { icon: "📖", label: "Lire une fiche", xp: XP_REWARDS.FICHE_LUE },
          { icon: "✅", label: "Finir un QCM", xp: XP_REWARDS.QCM_COMPLETE },
          { icon: "💯", label: "QCM score parfait", xp: XP_REWARDS.QCM_PERFECT },
          { icon: "🃏", label: "Session flashcards", xp: XP_REWARDS.FLASHCARD_SESSION },
          { icon: "🔥", label: "Revenir chaque jour", xp: XP_REWARDS.STREAK_BONUS },
        ].map((r, i) => (
          <div key={i} className="xp-guide-row">
            <span className="xp-guide-icon">{r.icon}</span>
            <span className="xp-guide-label">{r.label}</span>
            <span className="xp-guide-val">+{r.xp} XP</span>
          </div>
        ))}
      </div>

      {/* Leaderboard */}
      <p className="section-title" style={{ marginTop: 20 }}>Top 50</p>
      <div className="leaderboard">
        {top50.map((u, i) => {
          const pos = i + 1;
          const medal = pos === 1 ? "🥇" : pos === 2 ? "🥈" : pos === 3 ? "🥉" : null;
          const isMe = userInTop50 && pos === rank;
          const lvl = getLevel(u.xp);
          return (
            <div key={i} className={`lb-row ${isMe ? "lb-row-me" : ""} ${pos <= 3 ? "lb-row-top" : ""}`}>
              <span className="lb-rank">{medal || pos}</span>
              <div className="lb-info">
                <span className="lb-pseudo">{isMe ? (pseudo || "Toi") : u.pseudo}</span>
                <span className="lb-level">{lvl.current.emoji} {lvl.current.name}</span>
              </div>
              <span className="lb-xp">{u.xp.toLocaleString()} XP</span>
            </div>
          );
        })}

        {!userInTop50 && (
          <>
            <div className="lb-separator">···</div>
            <div className="lb-row lb-row-me">
              <span className="lb-rank">{rank.toLocaleString()}</span>
              <div className="lb-info">
                <span className="lb-pseudo">{pseudo || "Toi"}</span>
                <span className="lb-level">{current.emoji} {current.name}</span>
              </div>
              <span className="lb-xp">{userXP.toLocaleString()} XP</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
