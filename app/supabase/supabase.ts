import { createClient } from '@supabase/supabase-js';
import { Database } from 'app/types/types';

export const supabaseUrl = process.env['NEXT_PUBLIC_API_SUPABASE_URL'] || '';
export const supabaseKey = process.env['NEXT_PUBLIC_API_SUPABASE_KEY'] || '';

export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
export default supabase;
