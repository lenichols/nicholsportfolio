import { getFeaturedCaseStudies } from '@/lib/data/case-studies';
import CaseStudyCard from '../case-studies/CaseStudyCard';
import SectionHeading from '../shared/SectionHeading';
import FadeInView from '../shared/FadeInView';
import Button from '../shared/Button';

export default function FeaturedCaseStudies() {
  const featured = getFeaturedCaseStudies();

  return (
    <section className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInView>
          <SectionHeading
            title="Featured Case Studies"
            subtitle="Deep dives into architecture, engineering decisions and measurable outcomes."
          />
        </FadeInView>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((cs, i) => (
            <FadeInView key={cs.slug} delay={i * 0.1}>
              <CaseStudyCard caseStudy={cs} />
            </FadeInView>
          ))}
        </div>

        <FadeInView className="mt-12 text-center">
          <Button href="/case-studies" variant="outline">
            View All Case Studies
          </Button>
        </FadeInView>
      </div>
    </section>
  );
}
