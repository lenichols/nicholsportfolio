import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { caseStudies, getCaseStudyBySlug } from '@/lib/data/case-studies';
import CaseStudyDetail from '@/app/components/case-studies/CaseStudyDetail';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) return {};

  return {
    title: cs.title,
    description: cs.summary,
    openGraph: {
      title: `${cs.title} | La Shauna E. Nichols`,
      description: cs.summary,
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const cs = getCaseStudyBySlug(slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const prevSlug = idx > 0 ? caseStudies[idx - 1].slug : undefined;
  const nextSlug = idx < caseStudies.length - 1 ? caseStudies[idx + 1].slug : undefined;

  return <CaseStudyDetail caseStudy={cs} prevSlug={prevSlug} nextSlug={nextSlug} />;
}
