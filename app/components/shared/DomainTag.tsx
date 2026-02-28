import { cn } from '@/lib/utils/cn';
import { getDomainBySlug } from '@/lib/data/domains';

interface DomainTagProps {
  slug: string;
  className?: string;
}

const colorMap: Record<string, string> = {
  gold: 'bg-gold/10 text-gold border-gold/20',
  rose: 'bg-dusty-rose/10 text-dusty-rose border-dusty-rose/20',
  plum: 'bg-plum/10 text-plum border-plum/20',
  teal: 'bg-teal-600/10 text-teal-700 border-teal-600/20',
};

export default function DomainTag({ slug, className }: DomainTagProps) {
  const domain = getDomainBySlug(slug);
  if (!domain) return null;

  return (
    <span
      className={cn(
        'inline-block px-3 py-1 text-xs font-mono font-medium rounded-full border',
        colorMap[domain.color] || colorMap.rose,
        className
      )}
    >
      {domain.label}
    </span>
  );
}
