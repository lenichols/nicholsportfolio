'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '../shared/Button';
import DomainTag from '../shared/DomainTag';
import { siteConfig } from '@/lib/data/site';

const heroDomains = [
  'cybersecurity',
  'mobile',
  'cloud',
  'architecture',
  'ai-ml',
  'strategy',
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid opacity-40" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-28">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="shrink-0"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-border-warm shadow-card">
              <Image
                src="/shauna.jpg"
                alt={siteConfig.name}
                width={224}
                height={224}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center md:text-left"
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
              {siteConfig.name}
            </h1>
            <p className="mt-3 font-mono text-sm md:text-base text-dusty-rose tracking-wide">
              {siteConfig.tagline}
            </p>
            <p className="mt-4 text-charcoal/70 text-lg max-w-xl leading-relaxed">
              {siteConfig.summary}
            </p>

            {/* Domain pills */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center md:justify-start">
              {heroDomains.map((d) => (
                <DomainTag key={d} slug={d} />
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              <Button href="/case-studies">View Case Studies</Button>
              <Button href="/resume" variant="outline">
                Resume
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
