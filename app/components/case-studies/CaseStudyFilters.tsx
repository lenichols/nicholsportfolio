'use client';

import { cn } from '@/lib/utils/cn';
import { domains } from '@/lib/data/domains';

interface CaseStudyFiltersProps {
  active: string | null;
  onChange: (slug: string | null) => void;
}

const colorMap: Record<string, string> = {
  gold: 'bg-gold/20 text-gold border-gold/30',
  rose: 'bg-dusty-rose/20 text-dusty-rose border-dusty-rose/30',
  plum: 'bg-plum/20 text-plum border-plum/30',
  teal: 'bg-teal-600/20 text-teal-700 border-teal-600/30',
};

export default function CaseStudyFilters({ active, onChange }: CaseStudyFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        onClick={() => onChange(null)}
        className={cn(
          'px-4 py-1.5 rounded-full text-sm font-mono border transition-colors',
          active === null
            ? 'bg-charcoal text-cream border-charcoal'
            : 'border-border-warm text-charcoal/60 hover:border-charcoal/30'
        )}
      >
        All
      </button>
      {domains.map((domain) => (
        <button
          key={domain.slug}
          onClick={() => onChange(active === domain.slug ? null : domain.slug)}
          className={cn(
            'px-4 py-1.5 rounded-full text-sm font-mono border transition-colors',
            active === domain.slug
              ? colorMap[domain.color]
              : 'border-border-warm text-charcoal/60 hover:border-charcoal/30'
          )}
        >
          {domain.label}
        </button>
      ))}
    </div>
  );
}
