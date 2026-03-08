const SECTION_LABELS = {
  startWith: { label: 'Start With', color: 'bg-teal' },
  buildInto: { label: 'Build Into', color: 'bg-gold' },
  supplement: { label: 'Supplement', color: 'bg-navy/60' },
};

export default function LearningPath({ learningPath }) {
  if (!learningPath) return null;

  return (
    <div className="space-y-4">
      {Object.entries(SECTION_LABELS).map(([key, { label, color }]) => (
        <div key={key}>
          <h4 className="text-sm font-bold text-charcoal/60 uppercase tracking-wide mb-2">
            {label}
          </h4>
          <div className="flex flex-wrap gap-2">
            {learningPath[key]?.map((school) => (
              <span
                key={school}
                className={`${color} text-white text-xs font-medium px-3 py-1.5 rounded-lg`}
              >
                {school}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
