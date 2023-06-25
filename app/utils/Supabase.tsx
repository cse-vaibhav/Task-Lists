import { createClient } from "@supabase/supabase-js";
import { Database } from "@/lib/database.types";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const SUPABASE_API_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_API_KEY, {
  auth: {
    persistSession: true,
  },
});