export default function SpectrumSlider({ value, leftLabel, rightLabel, color }) {
  // value is -5 to +5, map to 0-100% then clamp dot within track
  const percent = Math.max(5, Math.min(95, ((value + 5) / 10) * 100));

  const side = value < 0 ? leftLabel : value > 0 ? rightLabel : 'balanced';
  const strength = Math.abs(value) <= 1 ? 'slightly' : Math.abs(value) <= 3 ? 'moderately' : 'strongly';
  const description = value === 0
    ? `${leftLabel}/${rightLabel} orientation: balanced`
    : `${leftLabel}/${rightLabel} orientation: ${strength} ${side}`;

  return (
    <div
      className="mb-4"
      role="img"
      aria-label={description}
    >
      <div className="flex justify-between text-xs text-charcoal/60 mb-1.5 font-medium">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <div className="relative h-3 bg-charcoal/10 rounded-full overflow-hidden">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-[3px] border-white shadow-md transition-all duration-500"
          style={{ left: `calc(${percent}% - 10px)`, backgroundColor: color }}
        />
      </div>
    </div>
  );
}
