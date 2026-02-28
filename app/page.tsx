import HeroSection from './components/home/HeroSection';
import FeaturedCaseStudies from './components/home/FeaturedCaseStudies';
import SkillsOverview from './components/home/SkillsOverview';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCaseStudies />
      <SkillsOverview />
    </>
  );
}
