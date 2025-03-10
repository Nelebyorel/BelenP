import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://hjjfvfvmvfurznjcuqwq.supabase.co"; // Remplace par ton URL
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqamZ2ZnZtdmZ1cnpuamN1cXdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3NTI0NTIsImV4cCI6MjA1NjMyODQ1Mn0.xbonRw2kFwJPEF9nL0pt3p2kOpeMvEat9uInCYUDMwA"; // Remplace par ta clé API publique

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;