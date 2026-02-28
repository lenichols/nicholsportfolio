import { cybersecurityEntries } from '@/lib/data/cybersecurity';
import FadeInView from '../shared/FadeInView';
import { cn } from '@/lib/utils/cn';

const accentMap: Record<string, { border: string; dot: string }> = {
  gold: { border: 'border-l-gold', dot: 'text-gold' },
  rose: { border: 'border-l-dusty-rose', dot: 'text-dusty-rose' },
  plum: { border: 'border-l-plum', dot: 'text-plum' },
  teal: { border: 'border-l-teal-600', dot: 'text-teal-600' },
};

export default function CyberExperience() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {cybersecurityEntries.map((entry, i) => {
        const accent = accentMap[entry.accent] || accentMap.rose;
        return (
          <FadeInView key={entry.title} delay={i * 0.1}>
            <div
              className={cn(
                'p-6 rounded-xl border border-border-warm bg-cream border-l-4',
                accent.border
              )}
            >
              <h3 className="font-display text-lg font-semibold text-charcoal">
                {entry.title}
              </h3>
              <p className="text-xs font-mono text-charcoal/40 mt-1">{entry.metadata}</p>
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((b) => (
                  <li key={b} className="text-sm text-charcoal/70 flex items-start gap-2">
                    <span className={cn('mt-1 text-xs', accent.dot)}>●</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInView>
        );
      })}
    </div>
  );
}
