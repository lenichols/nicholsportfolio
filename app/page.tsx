'use client';

import { useState, useEffect } from 'react';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import BioSection from './components/BioSection';
import UpworkSection from './components/UpworkSection';
import CybersecurityExperienceSection from './components/CybersecurityExperienceSection';
import SystemArchitecture from './components/SystemArchitecture';
import SecureAppDevelopment from './components/SecureAppDevelopment';

export default function FullStackPortfolio() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | 'strategy' | 'cybersecurity' | null>(null);


	// Optional: Add a subtle background when user scrolls
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		console.log('Scroll event detected', isScrolled);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const scrollToSection = (id: string) => {
		setIsMenuOpen(false);
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({
				top: element.offsetTop - 80, 
				behavior: 'smooth',
			});
		}
	};

	return (
		<main className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white">
			{/* Mobile Hamburger Menu */}
			<nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
				<div className="px-4 py-3 flex justify-between items-center">
					<span className="text-lg font-bold">🤍</span>
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="text-white focus:outline-none"
						aria-label="Toggle menu"
					>
						{isMenuOpen ? (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
							</svg>
						) : (
							<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
							</svg>
						)}
					</button>
				</div>

				{/* Mobile Menu Dropdown */}
				{isMenuOpen && (
					<div className="px-4 py-4 space-y-3 border-t border-gray-800">
						<button onClick={() => scrollToSection('hero')} className="block w-full text-left text-gray-300 hover:text-white">
							Home
						</button>
						<button onClick={() => scrollToSection('bio')} className="block w-full text-left text-gray-300 hover:text-white">
							Bio
						</button>
						<button onClick={() => scrollToSection('upwork')} className="block w-full text-left text-gray-300 hover:text-white">
							Upwork
						</button>
						<button onClick={() => scrollToSection('projects')} className="block w-full text-left text-gray-300 hover:text-white">
							Projects
						</button>
						<button onClick={() => scrollToSection('cybersecurity')} className="block w-full text-left text-gray-300 hover:text-white">
							Cybersecurity
						</button>
						<button onClick={() => scrollToSection('contact')} className="block w-full text-left text-gray-300 hover:text-white">
							Contact
						</button>
					</div>
				)}
			</nav>

			{/* Sections with IDs for anchor navigation */}
			<section id="hero">
				<HeroSection />
			</section>
			<section id="bio">
				<BioSection />
			</section>

			<section id="cybersecurity">
				<SecureAppDevelopment />
			</section>

			<section id="cybersecurity">
				<CybersecurityExperienceSection />
			</section>
			

			<section id="architecture">
				<SystemArchitecture selectedStack={selectedStack} setSelectedStack={setSelectedStack} />
			</section>
			
			<section id="projects">
				<ProjectsSection />
			</section>
			<section id="upwork">
				<UpworkSection />
			</section>
			
			<section id="contact">
				<ContactSection />
			</section>
		</main>
	);
}