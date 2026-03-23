const KEY = "hermione_v2";

function getDefaultState() {
  return {
    user: { prenom: "", classe: "", fac: "", onboarded: false },
    pseudo: "",
    xp: 0,
    streak: 0,
    last_active: null,
    flashcards_progress: {},
    qcm_scores: {},
    fiches_lues: {},
    agenda: { sessions: [] },
    aventure: { levels: {}, unlocked_mentors: [] },
    device_id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).slice(2),
  };
}

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return getDefaultState();
    const saved = JSON.parse(raw);
    // Merge avec les defaults pour éviter les clés manquantes
    return { ...getDefaultState(), ...saved };
  } catch {
    return getDefaultState();
  }
}

function save(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
}

import { useState } from "react";

export default function useStorage() {
  const [state, setState] = useState(load);

  function update(updater) {
    setState(prev => {
      const next = typeof updater === "function" ? updater(prev) : updater;
      save(next);
      return next;
    });
  }

  return [state, update];
}
