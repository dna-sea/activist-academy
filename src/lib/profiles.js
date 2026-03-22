import { supabase } from './supabase';
import { archetypes } from '../data/archetypes';
import { houses } from '../data/houses';

/**
 * Save quiz results to Supabase for the authenticated user.
 * Deactivates previous profiles and inserts the new one as active.
 */
export async function saveProfile(userId, results) {
  if (!supabase) return { error: { message: 'Supabase not configured' } };

  // Deactivate all previous profiles for this user
  await supabase
    .from('profiles')
    .update({ is_active: false })
    .eq('user_id', userId);

  // Insert the new active profile
  const { data, error } = await supabase.from('profiles').insert({
    user_id: userId,
    is_active: true,
    primary_archetype: results.primaryArchetype.key,
    secondary_archetype: results.secondaryArchetype.key,
    house: results.house.id,
    stats: results.displayStats,
    motivations: results.rawMotivations || {},
    orientation: results.displayOrientation,
    skills: results.skills || {},
    display_stats: results.displayStats,
    top_motivations: results.topMotivations,
    display_orientation: results.displayOrientation,
  }).select().single();

  return { data, error };
}

/**
 * Fetch the active profile for a user.
 * Returns the full results object ready for CharacterSheet rendering.
 */
export async function fetchActiveProfile(userId) {
  if (!supabase) return { data: null };

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .eq('is_active', true)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data) return { data: null, error };

  return { data: hydrateProfile(data), error: null };
}

/**
 * Fetch all profiles (history) for a user, newest first.
 */
export async function fetchProfileHistory(userId) {
  if (!supabase) return { data: [] };

  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) return { data: [], error };

  return { data: (data || []).map(hydrateProfile), error: null };
}

/**
 * Convert a database row back into the results shape the app expects.
 */
function hydrateProfile(row) {
  return {
    id: row.id,
    isActive: row.is_active,
    createdAt: row.created_at,
    primaryArchetype: archetypes[row.primary_archetype] || null,
    secondaryArchetype: archetypes[row.secondary_archetype] || null,
    house: houses[row.house] || null,
    displayStats: row.display_stats || row.stats,
    topMotivations: row.top_motivations || [],
    displayOrientation: row.display_orientation || row.orientation,
    skills: row.skills || {},
    rawMotivations: row.motivations || {},
  };
}
