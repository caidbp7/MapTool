// ─────────────────────────────────────────────────────────
//  ZoneMapper — Supabase Configuration
//  Fill in your Project URL and anon key below.
//  Find these in: Supabase Dashboard → Project Settings → API
// ─────────────────────────────────────────────────────────

// supabase-config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const SUPABASE_URL = 'https://npcwaisbspbhsaajawid.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_GShA0iQuX6MgpISeDK6Nyw_8IroZFZ5';

// Check if user has replaced placeholder values
export const isConfigured = SUPABASE_URL !== 'https://your-project-url.supabase.co';

export const supabaseClient = isConfigured 
    ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY) 
    : null;
