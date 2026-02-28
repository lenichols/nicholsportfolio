'use client';

import { useState } from 'react';
import { caseStudies } from '@/lib/data/case-studies';
import { appProjects } from '@/lib/data/projects';
import CaseStudyCard from '@/app/components/case-studies/CaseStudyCard';
import CaseStudyFilters from '@/app/components/case-studies/CaseStudyFilters';
import SectionHeading from '@/app/components/shared/SectionHeading';
import FadeInView from '@/app/components/shared/FadeInView';
import DomainTag from '@/app/components/shared/DomainTag';

export default function CaseStudiesIndex() {
  const [activeDomain, setActiveDomain] = useState<string | null>(null);

  const filtered = activeDomain
    ? caseStudies.filter((cs) => cs.domains.includes(activeDomain))
    : caseStudies;

  const filteredProjects = activeDomain
    ? appProjects.filter((p) => p.domains.includes(activeDomain))
    : appProjects;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      <FadeInView>
        <SectionHeading
          title="Case Studies"
          subtitle="In-depth explorations of architecture, engineering decisions and measurable outcomes."
        />
      </FadeInView>

      <FadeInView className="mt-10">
        <CaseStudyFilters active={activeDomain} onChange={setActiveDomain} />
      </FadeInView>

      {/* Case study cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((cs, i) => (
          <FadeInView key={cs.slug} delay={i * 0.1}>
            <CaseStudyCard caseStudy={cs} />
          </FadeInView>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-charcoal/50">
          No case studies match this filter.
        </p>
      )}

      {/* App portfolio */}
      <div className="mt-24">
        <FadeInView>
          <SectionHeading
            title="App Portfolio"
            subtitle="Additional projects and applications built across domains."
          />
        </FadeInView>

        <div className="mt-12 space-y-6">
          {filteredProjects.map((project, i) => (
            <FadeInView key={project.name} delay={i * 0.05}>
              <div className="p-6 rounded-xl border border-border-warm bg-cream hover:shadow-card-hover transition-shadow duration-200">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold text-charcoal">
                      {project.name}
                    </h3>
                    <p className="text-sm text-charcoal/60">{project.tagline}</p>
                  </div>
                  <span className="text-xs font-mono text-dusty-rose shrink-0">
                    {project.role}
                  </span>
                </div>
                <ul className="mt-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li key={h} className="text-sm text-charcoal/70 flex items-start gap-2">
                      <span className="text-dusty-rose mt-1 text-xs">●</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.domains.map((d) => (
                    <DomainTag key={d} slug={d} />
                  ))}
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </div>
  );
}
