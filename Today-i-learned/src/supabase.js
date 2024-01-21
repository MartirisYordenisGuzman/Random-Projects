import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qrjmjbhexpwuverubzry.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyam1qYmhleHB3dXZlcnVienJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MjU4NzEsImV4cCI6MTk5ODMwMTg3MX0.-fN19za5Ex0lN6a-OMKtQg3ne7WKZqT310bJSEsE4ag";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
