import { createClient } from "@supabase/supabase-js";
import "react-native-url-polyfill/auto";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANONKEY;

export const supabase = createClient(supabaseUrl!, supabaseAnonKey!);
