import { careerEntries } from '@/lib/data/career';
import FadeInView from '../shared/FadeInView';

export default function Timeline() {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border-warm" />

      <div className="space-y-8">
        {careerEntries.map((entry, i) => (
          <FadeInView key={entry.company} delay={i * 0.05}>
            <div className="relative pl-12 md:pl-16">
              {/* Dot */}
              <div
                className={`absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full border-2 ${
                  entry.current
                    ? 'bg-dusty-rose border-dusty-rose'
                    : 'bg-cream border-border-warm'
                }`}
              />

              <div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                  <h3 className="font-display text-lg font-semibold text-charcoal">
                    {entry.company}
                  </h3>
                  <span className="text-xs font-mono text-charcoal/40">{entry.period}</span>
                </div>
                <p className="text-sm text-dusty-rose font-medium mt-0.5">{entry.role}</p>
                <ul className="mt-2 space-y-1">
                  {entry.highlights.map((h) => (
                    <li key={h} className="text-sm text-charcoal/60 flex items-start gap-2">
                      <span className="text-border-warm mt-1 text-xs">●</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInView>
        ))}
      </div>
    </div>
  );
}
