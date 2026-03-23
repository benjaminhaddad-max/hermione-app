import { useCallback, useRef } from "react";
import { supabase, SUPABASE_READY } from "../lib/supabaseClient";

const DEBOUNCE_MS = 2000;

export default function useCloudStorage(userId) {
  const timerRef = useRef(null);

  const syncToCloud = useCallback(
    (state) => {
      if (!SUPABASE_READY || !supabase || !userId) return;

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(async () => {
        try {
          await supabase.from("user_progress").upsert(
            {
              user_id: userId,
              pseudo: state.pseudo || "",
              xp: state.xp || 0,
              streak: state.streak || 0,
              last_active: state.last_active || null,
              data: {
                flashcards_progress: state.flashcards_progress,
                qcm_scores: state.qcm_scores,
                fiches_lues: state.fiches_lues,
                agenda: state.agenda,
                aventure: state.aventure,
              },
              updated_at: new Date().toISOString(),
            },
            { onConflict: "user_id" }
          );
        } catch (e) {
          console.warn("Cloud sync failed:", e);
        }
      }, DEBOUNCE_MS);
    },
    [userId]
  );

  const loadFromCloud = useCallback(async () => {
    if (!SUPABASE_READY || !supabase || !userId) return null;
    try {
      const { data, error } = await supabase
        .from("user_progress")
        .select("*")
        .eq("user_id", userId)
        .single();
      if (error || !data) return null;
      return {
        pseudo: data.pseudo,
        xp: data.xp,
        streak: data.streak,
        last_active: data.last_active,
        ...(data.data || {}),
      };
    } catch {
      return null;
    }
  }, [userId]);

  return { syncToCloud, loadFromCloud };
}
