import * as Sentry from '@sentry/nextjs';
import type { CookieOptions } from '@supabase/ssr';
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export function createClient() {
  const cookieStore = cookies();

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Supabase environment variables are not set.');
  }

  return createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value, ...options });
        } catch (error) {
          Sentry.captureException(error);  // Captura o erro no Sentry
          console.error(`Error setting cookie: ${name}`, error);
        }
      },
      remove(name: string, options: CookieOptions) {
        try {
          cookieStore.set({ name, value: '', ...options });
        } catch (error) {
          Sentry.captureException(error);  // Captura o erro no Sentry
          console.error(`Error removing cookie: ${name}`, error);
        }
      },
    },
  });
}

export async function validateUserSession() {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    const error = new Error('You are not allowed to perform this action.');
    Sentry.captureException(error);  // Captura o erro no Sentry
    throw error;
  }
}
