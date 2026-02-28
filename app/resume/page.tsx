import { Metadata } from 'next';
import FadeInView from '@/app/components/shared/FadeInView';
import SectionHeading from '@/app/components/shared/SectionHeading';
import Button from '@/app/components/shared/Button';
import {
  resumeSummary,
  resumeSkills,
  resumeExperience,
  resumeEducation,
  resumeCertifications,
} from '@/lib/data/resume';

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'Resume of La Shauna E. Nichols. Strategic engineering leader with experience scaling teams and systems across software, infrastructure and security domains.',
};

export default function ResumePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Header */}
      <FadeInView>
        <div className="text-center mb-4">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
            La Shauna E. Nichols
          </h1>
          <p className="mt-2 text-sm font-mono text-charcoal/40">
            San Francisco, CA &middot; snicholstech@gmail.com
          </p>
        </div>
        <div className="flex justify-center mb-12">
          <Button href="/files/resume.pdf" variant="outline" external>
            Download PDF
          </Button>
        </div>
      </FadeInView>

      {/* Summary */}
      <FadeInView>
        <section className="mb-14">
          <p className="text-charcoal/70 leading-relaxed text-base md:text-lg">
            {resumeSummary}
          </p>
        </section>
      </FadeInView>

      {/* Skills */}
      <FadeInView>
        <section className="mb-14">
          <SectionHeading title="Skills & Technologies" align="left" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(resumeSkills).map(([category, skills]) => (
              <div key={category} className="p-5 rounded-xl border border-border-warm bg-cream">
                <h3 className="font-display text-base font-semibold text-charcoal mb-2">
                  {category}
                </h3>
                <p className="text-sm text-charcoal/60 leading-relaxed">{skills}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInView>

      {/* Experience */}
      <section className="mb-14">
        <FadeInView>
          <SectionHeading title="Work Experience" align="left" />
        </FadeInView>

        <div className="mt-8 space-y-10">
          {resumeExperience.map((job, i) => (
            <FadeInView key={`${job.company}-${job.period}`} delay={i * 0.03}>
              <div className="relative pl-6 border-l-2 border-border-warm">
                <div className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full bg-dusty-rose" />
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="font-display text-lg font-semibold text-charcoal">
                    {job.company}
                  </h3>
                  <span className="text-xs font-mono text-charcoal/40 shrink-0">
                    {job.location}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                  <p className="text-sm text-dusty-rose font-medium">{job.role}</p>
                  <span className="text-xs font-mono text-charcoal/40 shrink-0">
                    {job.period}
                  </span>
                </div>
                {job.note && (
                  <p className="text-xs text-charcoal/40 italic mb-2">{job.note}</p>
                )}
                <ul className="space-y-1.5">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="text-sm text-charcoal/70 flex items-start gap-2"
                    >
                      <span className="text-dusty-rose mt-1 text-xs shrink-0">●</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Education */}
      <FadeInView>
        <section className="mb-14">
          <SectionHeading title="Education" align="left" />
          <div className="mt-8 space-y-4">
            {resumeEducation.map((edu) => (
              <div
                key={edu.degree}
                className="p-5 rounded-xl border border-border-warm bg-cream flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1"
              >
                <div>
                  <h3 className="font-display text-base font-semibold text-charcoal">
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-charcoal/60">{edu.school}</p>
                </div>
                <span className="text-xs font-mono text-charcoal/40 shrink-0">
                  {edu.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      </FadeInView>

      {/* Certifications */}
      <FadeInView>
        <section className="mb-14">
          <SectionHeading title="Certifications" align="left" />
          <div className="mt-8 space-y-4">
            {resumeCertifications.map((cert) => (
              <div
                key={cert.title}
                className="p-5 rounded-xl border border-border-warm bg-cream"
              >
                <h3 className="font-display text-base font-semibold text-charcoal">
                  {cert.title}
                </h3>
                <p className="text-sm text-charcoal/60">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>
      </FadeInView>

      {/* References */}
      <FadeInView>
        <p className="text-center text-sm text-charcoal/50 italic mb-10">
          Professional references available upon request.
        </p>
      </FadeInView>

      {/* Bottom download CTA */}
      <FadeInView>
        <div className="text-center pt-8 border-t border-border-warm">
          <Button href="/files/resume.pdf" external>
            Download PDF Version
          </Button>
        </div>
      </FadeInView>
    </div>
  );
}
