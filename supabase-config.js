// ─────────────────────────────────────────────────────────
//  ZoneMapper — Supabase Configuration
//  Fill in your Project URL and anon key below.
//  Find these in: Supabase Dashboard → Project Settings → API
// ─────────────────────────────────────────────────────────

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL  = 'https://npcwaisbspbhsaajawid.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_GShA0iQuX6MgpISeDK6Nyw_8IroZFZ5';

// ── Validation ────────────────────────────────────────────
const isConfigured =
  SUPABASE_URL  !== 'https://npcwaisbspbhsaajawid.supabase.co' &&
  SUPABASE_ANON_KEY !== 'sb_publishable_GShA0iQuX6MgpISeDK6Nyw_8IroZFZ5' &&
  SUPABASE_URL.startsWith('https://') &&
  SUPABASE_ANON_KEY.length > 20;

export const supabaseClient = isConfigured
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

export { isConfigured, SUPABASE_URL };
