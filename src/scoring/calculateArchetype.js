import { archetypes } from '../data/archetypes';
import { houses } from '../data/houses';

export function getTopMotivations(motivations, count = 2) {
  return Object.entries(motivations)
    .sort((a, b) => b[1] - a[1])
    .slice(0, count)
    .map(([key]) => key);
}

export function normalizeStats(rawStats) {
  const display = {};
  for (const [stat, raw] of Object.entries(rawStats)) {
    // raw ranges 3-15 (3 questions × 1-5 pts each), clamp to valid range
    const clamped = Math.max(3, Math.min(15, raw));
    display[stat] = Math.round(((clamped - 3) / 12) * 9) + 1;
  }
  return display;
}

export function normalizeOrientation(rawOrientation) {
  const clampedIO = Math.max(-8, Math.min(8, rawOrientation.insideOutside));
  const clampedRR = Math.max(-8, Math.min(8, rawOrientation.righteousnessRelationship));
  return {
    insideOutside: Math.round((clampedIO / 8) * 5),
    righteousnessRelationship: Math.round((clampedRR / 8) * 5),
  };
}

// Blend absolute display stats with relative (z-score) stats so that
// universally-high stats (like empathy) don't dominate archetype matching.
// Absolute stats = honest measurement; relative stats = "is this YOUR spike?"
export function blendStats(displayStats) {
  const values = Object.values(displayStats);
  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const variance = values.reduce((sum, v) => sum + (v - mean) ** 2, 0) / values.length;
  const stdDev = Math.sqrt(variance);

  const blended = {};
  for (const [stat, value] of Object.entries(displayStats)) {
    const zScore = stdDev > 0.5 ? (value - mean) / stdDev : 0;
    const relativeScaled = Math.max(1, Math.min(10, 5 + zScore * 2));
    blended[stat] = value * 0.4 + relativeScaled * 0.6;
  }
  return blended;
}

// Reward archetypes whose weighted stats are notably HIGHER than their
// unweighted stats — i.e. the participant has a distinctive profile shape
// that matches this archetype's signature, not just generically high scores.
function calculateDistinctiveness(displayStats, statWeights) {
  const allStatKeys = Object.keys(displayStats);
  let weightedSum = 0, weightedCount = 0;
  let unweightedSum = 0, unweightedCount = 0;

  for (const stat of allStatKeys) {
    if (stat in statWeights) {
      weightedSum += displayStats[stat] * statWeights[stat];
      weightedCount += statWeights[stat];
    } else {
      unweightedSum += displayStats[stat];
      unweightedCount += 1;
    }
  }

  const weightedAvg = weightedCount > 0 ? weightedSum / weightedCount : 0;
  const unweightedAvg = unweightedCount > 0 ? unweightedSum / unweightedCount : 0;
  return Math.max(0, (weightedAvg - unweightedAvg) / 10);
}

export function calculateArchetype(displayStats, normalizedOrientation, motivations) {
  const topMots = getTopMotivations(motivations, 2);
  const blended = blendStats(displayStats);
  const scores = {};

  for (const [key, archetype] of Object.entries(archetypes)) {
    let score = 0;

    // Stat match using blended (absolute + relative) scores
    for (const [stat, weight] of Object.entries(archetype.statWeights)) {
      score += (blended[stat] || 0) * weight;
    }

    // Distinctiveness bonus: rewards profile shape match
    score += calculateDistinctiveness(displayStats, archetype.statWeights) * 8;

    // Orientation match — averaged across non-zero axes so archetypes with
    // 2 orientation weights don't get double the bonus of those with 1
    const { insideOutside: ioWeight, righteousnessRelationship: rrWeight } = archetype.orientationWeight;
    let orientationSum = 0;
    let orientationAxes = 0;
    if (ioWeight !== 0) {
      orientationSum += 1 - Math.abs(normalizedOrientation.insideOutside - ioWeight * 2.5) / 10;
      orientationAxes++;
    }
    if (rrWeight !== 0) {
      orientationSum += 1 - Math.abs(normalizedOrientation.righteousnessRelationship - rrWeight * 2.5) / 10;
      orientationAxes++;
    }
    if (orientationAxes > 0) {
      score += (orientationSum / orientationAxes) * 8;
    }

    // Motivation bonus
    for (const mot of archetype.motivationBonus) {
      if (topMots.includes(mot)) score += 5;
    }

    scores[key] = score;
  }

  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  let primary = sorted[0];
  let secondary = sorted[1];

  // Cross-house check: if top 2 are same house, consider different-house alternative
  if (archetypes[primary[0]].house === archetypes[secondary[0]].house) {
    for (let i = 2; i < sorted.length; i++) {
      if (archetypes[sorted[i][0]].house !== archetypes[primary[0]].house) {
        if (sorted[i][1] >= secondary[1] * 0.85) {
          secondary = sorted[i];
        }
        break;
      }
    }
  }

  return {
    primaryArchetype: archetypes[primary[0]],
    secondaryArchetype: archetypes[secondary[0]],
    house: houses[archetypes[primary[0]].house],
  };
}

export function computeResults(state) {
  const displayStats = normalizeStats(state.stats);
  const displayOrientation = normalizeOrientation(state.orientation);
  const topMotivations = getTopMotivations(state.motivations, 2);
  const { primaryArchetype, secondaryArchetype, house } = calculateArchetype(
    displayStats, displayOrientation, state.motivations
  );

  return {
    primaryArchetype,
    secondaryArchetype,
    house,
    displayStats,
    topMotivations,
    displayOrientation,
    skills: state.skills,
    rawMotivations: state.motivations,
  };
}
