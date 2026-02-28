import { cn } from '@/lib/utils/cn';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-charcoal/60 font-body text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          'mt-4 h-0.5 w-16 bg-dusty-rose',
          align === 'center' && 'mx-auto'
        )}
      />
    </div>
  );
}
