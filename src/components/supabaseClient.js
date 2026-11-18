import {createClient} from '@supabase/supabase-js';
//const supabaseUrl = 'https://your-supabase-url.supabase.co';
//const supabaseAnonKey = 'your-supabase-anon-key';
const supabaseUrl = 'https://cmhoanyizgynhmbaibhf.supabase.co';
const supabaseAnonKey = 'sb_publishable_icGQ8XOZeqlt3Scc3uMyYA_oBDdycdv';
export const supabase = createClient(supabaseUrl, supabaseAnonKey);