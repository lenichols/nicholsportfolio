import Link from 'next/link';
import { cn } from '@/lib/utils/cn';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'ghost';
  external?: boolean;
  className?: string;
  onClick?: () => void;
}

const variants = {
  primary:
    'bg-dusty-rose text-white hover:bg-dusty-rose/90 shadow-card hover:shadow-card-hover',
  outline:
    'border-2 border-dusty-rose text-dusty-rose hover:bg-dusty-rose/5',
  ghost:
    'text-charcoal/70 hover:text-charcoal hover:bg-charcoal/5',
};

export default function Button({
  children,
  href,
  variant = 'primary',
  external,
  className,
  onClick,
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-body font-medium text-sm transition-all duration-200',
    variants[variant],
    className
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
