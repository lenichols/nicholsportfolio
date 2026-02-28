import { Metadata } from 'next';
import Image from 'next/image';
import SectionHeading from '@/app/components/shared/SectionHeading';
import FadeInView from '@/app/components/shared/FadeInView';
import Biography from '@/app/components/about/Biography';
import Timeline from '@/app/components/about/Timeline';
import CyberExperience from '@/app/components/about/CyberExperience';
import { siteConfig } from '@/lib/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about La Shauna E. Nichols — cybersecurity leader, software architect, and technical instructor with 15+ years of experience.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Hero */}
      <FadeInView className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-border-warm">
            <Image
              src="/shauna.jpg"
              alt={siteConfig.name}
              width={128}
              height={128}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
            About Me
          </h1>
          <p className="mt-2 text-charcoal/60 text-lg">{siteConfig.tagline}</p>
        </div>
      </FadeInView>

      {/* Biography */}
      <section className="mb-20">
        <Biography />
      </section>

      {/* Career Timeline */}
      <section className="mb-20">
        <FadeInView>
          <SectionHeading title="Career Timeline" align="left" />
        </FadeInView>
        <div className="mt-10">
          <Timeline />
        </div>
      </section>

      {/* Cybersecurity Experience */}
      <section className="mb-20">
        <FadeInView>
          <SectionHeading title="Cybersecurity Experience" align="left" />
        </FadeInView>
        <div className="mt-10">
          <CyberExperience />
        </div>
      </section>

      {/* Education */}
      <section>
        <FadeInView>
          <SectionHeading title="Education & Certifications" align="left" />
        </FadeInView>
        <div className="mt-10 space-y-4">
          {siteConfig.education.map((edu) => (
            <FadeInView key={edu.degree}>
              <div className="p-5 rounded-xl border border-border-warm bg-cream">
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  {edu.degree}
                </h3>
                {edu.concentration && (
                  <p className="text-sm text-dusty-rose font-medium">
                    Concentration: {edu.concentration}
                  </p>
                )}
                <p className="text-sm text-charcoal/60 mt-1">
                  {edu.school} · {edu.year}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
}
