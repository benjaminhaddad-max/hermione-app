import { useState, useEffect } from "react";
import { supabase, SUPABASE_READY } from "../lib/supabaseClient";

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!SUPABASE_READY || !supabase) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  async function signUp(email, password, pseudo) {
    if (!supabase) return { error: { message: "Supabase non configuré" } };
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { pseudo } },
    });
    if (!error && data.user) {
      await supabase.from("user_progress").upsert({
        user_id: data.user.id,
        pseudo,
        xp: 0,
        streak: 0,
        data: {},
      }, { onConflict: "user_id" });
    }
    return { data, error };
  }

  async function signIn(email, password) {
    if (!supabase) return { error: { message: "Supabase non configuré" } };
    return supabase.auth.signInWithPassword({ email, password });
  }

  async function signOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    setUser(null);
  }

  return { user, loading, signUp, signIn, signOut, ready: SUPABASE_READY };
}
