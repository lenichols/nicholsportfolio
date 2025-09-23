'use client';

import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import BioSection from './components/BioSection';
import UpworkSection from './components/UpworkSection';

export default function FullStackPortfolio() {
	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			<HeroSection />
			<BioSection />
			<UpworkSection />
			<ProjectsSection />
			<ContactSection />
		</main>
	);
}
