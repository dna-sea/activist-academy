import { STAT_LABELS } from '../../utils/constants';

export default function StatBar({ stat, value, color }) {
  const percent = (value / 10) * 100;

  return (
    <div className="flex items-center gap-3">
      <span className="text-xs text-charcoal/70 w-36 text-right flex-shrink-0 font-medium truncate">
        {STAT_LABELS[stat] || stat}
      </span>
      <div
        className="flex-1 h-3 bg-charcoal/10 rounded-full overflow-hidden"
        role="meter"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={10}
        aria-label={`${STAT_LABELS[stat] || stat}: ${value} out of 10`}
      >
        <div
          className="h-full rounded-full stat-bar-fill"
          style={{ width: `${percent}%`, backgroundColor: color }}
        />
      </div>
      <span className="text-sm font-mono font-bold text-charcoal w-6 text-right" aria-hidden="true">
        {value}
      </span>
    </div>
  );
}
