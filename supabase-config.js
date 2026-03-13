// ─────────────────────────────────────────────────────────
//  ZoneMapper — Supabase Configuration
//  Fill in your Project URL and anon key below.
//  Find these in: Supabase Dashboard → Project Settings → API
// ─────────────────────────────────────────────────────────

// supabase-config.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

export const SUPABASE_URL = 'https://npcwaisbspbhsaajawid.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wY3dhaXNic3BiaHNhYWphd2lkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM0MDkzMzMsImV4cCI6MjA4ODk4NTMzM30.Xr76V-dcAUKedmnHdTjIpD5w4ponDuik5Nvzp48vM6I';

// Check if user has replaced placeholder values
export const isConfigured = true;

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
