'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils/cn';

const links = [
  { href: '/', label: 'Home' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-border-warm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Name / Logo */}
        <Link
          href="/"
          className="font-display text-xl font-semibold text-charcoal hover:text-dusty-rose transition-colors"
        >
          La Shauna E. Nichols (L.E.)
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-body text-sm transition-colors',
                pathname === link.href
                  ? 'text-dusty-rose font-medium'
                  : 'text-charcoal/70 hover:text-charcoal'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/resume"
            className={cn(
              'ml-2 px-4 py-2 bg-dusty-rose text-white text-sm font-medium rounded-lg hover:bg-dusty-rose/90 transition-colors',
              pathname === '/resume' && 'bg-dusty-rose/80'
            )}
          >
            Resume
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              'block w-6 h-0.5 bg-charcoal transition-transform duration-200',
              mobileOpen && 'rotate-45 translate-y-2'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-charcoal transition-opacity duration-200',
              mobileOpen && 'opacity-0'
            )}
          />
          <span
            className={cn(
              'block w-6 h-0.5 bg-charcoal transition-transform duration-200',
              mobileOpen && '-rotate-45 -translate-y-2'
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-cream border-b border-border-warm"
          >
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'font-body text-base py-2 transition-colors',
                    pathname === link.href
                      ? 'text-dusty-rose font-medium'
                      : 'text-charcoal/70'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/resume"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-2 bg-dusty-rose text-white text-sm font-medium rounded-lg text-center hover:bg-dusty-rose/90 transition-colors"
              >
                Resume
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
