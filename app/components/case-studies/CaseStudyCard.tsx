'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import DomainTag from '../shared/DomainTag';
import { CaseStudy } from '@/lib/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const dateLabel = new Date(caseStudy.date + '-01').toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <Link href={`/case-studies/${caseStudy.slug}`}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="h-full p-6 rounded-xl border border-border-warm bg-cream shadow-card hover:shadow-card-hover transition-shadow duration-200 flex flex-col"
      >
        <p className="text-xs font-mono text-charcoal/40 uppercase tracking-wider">
          {dateLabel}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold text-charcoal leading-snug">
          {caseStudy.title}
        </h3>
        <p className="mt-1 text-sm font-mono text-dusty-rose">{caseStudy.subtitle}</p>
        <p className="mt-3 text-sm text-charcoal/60 leading-relaxed flex-1">
          {caseStudy.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudy.domains.slice(0, 3).map((d) => (
            <DomainTag key={d} slug={d} />
          ))}
        </div>
      </motion.article>
    </Link>
  );
}
