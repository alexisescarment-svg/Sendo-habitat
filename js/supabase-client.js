/* ============================================
   CUBA NAUTA — Configuration Supabase

   SETUP (5 minutes) :
   1. Créez un compte sur https://supabase.com (gratuit)
   2. Créez un nouveau projet
   3. Dans "SQL Editor", collez et exécutez le contenu de setup/supabase-schema.sql
   4. Dans "Settings > API", copiez votre URL et anon key ci-dessous
   ============================================ */

const SUPABASE_URL  = 'VOTRE_SUPABASE_URL';
const SUPABASE_KEY  = 'VOTRE_SUPABASE_ANON_KEY';

const supabase = window.supabase
  ? window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY)
  : null;

if (!supabase) {
  console.warn('[Cuba Nauta] Supabase non configuré — contenu dynamique désactivé.');
}

window.supabaseClient = supabase;
