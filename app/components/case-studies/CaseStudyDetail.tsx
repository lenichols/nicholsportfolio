import Image from 'next/image';
import Link from 'next/link';
import DomainTag from '../shared/DomainTag';
import Button from '../shared/Button';
import FadeInView from '../shared/FadeInView';
import { CaseStudy } from '@/lib/types';

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
  prevSlug?: string;
  nextSlug?: string;
}

export default function CaseStudyDetail({
  caseStudy,
  prevSlug,
  nextSlug,
}: CaseStudyDetailProps) {
  const dateLabel = new Date(caseStudy.date + '-01').toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Header */}
      <FadeInView>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-1 text-sm text-charcoal/50 hover:text-charcoal transition-colors font-body mb-8"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Case Studies
        </Link>

        <p className="text-sm font-mono text-charcoal/40 uppercase tracking-wider">
          {dateLabel}
        </p>
        <h1 className="mt-2 font-display text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
          {caseStudy.title}
        </h1>
        <p className="mt-2 font-mono text-dusty-rose text-lg">{caseStudy.subtitle}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {caseStudy.domains.map((d) => (
            <DomainTag key={d} slug={d} />
          ))}
        </div>

        <p className="mt-6 text-lg text-charcoal/70 leading-relaxed">{caseStudy.summary}</p>
      </FadeInView>

      {/* Two-column: Tech details */}
      <FadeInView className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudy.frontend.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold text-charcoal mb-4">
                {caseStudy.backend.length > 0 ? 'Frontend Architecture' : 'Implementation Details'}
              </h2>
              <ul className="space-y-2">
                {caseStudy.frontend.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <span className="text-dusty-rose mt-1 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {caseStudy.backend.length > 0 && (
            <div>
              <h2 className="font-display text-xl font-semibold text-charcoal mb-4">
                Backend Systems
              </h2>
              <ul className="space-y-2">
                {caseStudy.backend.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-charcoal/70">
                    <span className="text-plum mt-1 text-xs">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </FadeInView>

      {/* Architecture diagram */}
      <FadeInView className="mt-12">
        <h2 className="font-display text-xl font-semibold text-charcoal mb-4">
          Architecture
        </h2>
        <div className="rounded-xl overflow-hidden bg-gray-900 p-4">
          <Image
            src={caseStudy.diagramPath}
            alt={`${caseStudy.title} architecture diagram`}
            width={900}
            height={500}
            className="w-full h-auto"
          />
        </div>
      </FadeInView>

      {/* Metrics */}
      {caseStudy.metrics.length > 0 && (
        <FadeInView className="mt-12">
          <h2 className="font-display text-xl font-semibold text-charcoal mb-6">
            Key Metrics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {caseStudy.metrics.map((metric) => (
              <div
                key={metric.label}
                className="p-5 rounded-xl border border-border-warm bg-white/60 text-center"
              >
                <p className="font-display text-2xl font-bold text-dusty-rose">
                  {metric.value}
                </p>
                <p className="mt-1 text-sm text-charcoal/60">{metric.label}</p>
              </div>
            ))}
          </div>
        </FadeInView>
      )}

      {/* Video links */}
      {(caseStudy.videoUrl || caseStudy.walkthroughUrl) && (
        <FadeInView className="mt-12 flex flex-wrap gap-4">
          {caseStudy.videoUrl && (
            <Button href={caseStudy.videoUrl} external>
              Project Video
            </Button>
          )}
          {caseStudy.walkthroughUrl && (
            <Button href={caseStudy.walkthroughUrl} variant="outline" external>
              Code Walkthrough
            </Button>
          )}
        </FadeInView>
      )}

      {/* Prev / Next navigation */}
      <div className="mt-16 pt-8 border-t border-border-warm flex justify-between">
        {prevSlug ? (
          <Link
            href={`/case-studies/${prevSlug}`}
            className="text-sm text-charcoal/50 hover:text-charcoal transition-colors font-body flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Previous
          </Link>
        ) : (
          <span />
        )}
        {nextSlug ? (
          <Link
            href={`/case-studies/${nextSlug}`}
            className="text-sm text-charcoal/50 hover:text-charcoal transition-colors font-body flex items-center gap-1"
          >
            Next
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ) : (
          <span />
        )}
      </div>
    </article>
  );
}
