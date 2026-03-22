import { createContext, useContext, useState, useEffect } from 'react';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured()) {
      setLoading(false);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');
  return context;
}

// Auth actions (not in context to avoid unnecessary re-renders)
export async function signInWithGoogle() {
  if (!supabase) return { error: { message: 'Supabase not configured' } };
  return supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin },
  });
}

export async function signInWithEmail(email, password) {
  if (!supabase) return { error: { message: 'Supabase not configured' } };
  return supabase.auth.signInWithPassword({ email, password });
}

export async function signUpWithEmail(email, password) {
  if (!supabase) return { error: { message: 'Supabase not configured' } };
  return supabase.auth.signUp({ email, password });
}

export async function signOut() {
  if (!supabase) return;
  return supabase.auth.signOut();
}
