'use client';

import { motion } from 'framer-motion';
// import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-8 md:pt-0 w-full">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-2">
				<div className="w-32 h-32 sm:w-28 md:w-24 relative rounded-full mx-auto lg:mt-20 overflow-hidden">
					<Image
						src="/shauna.jpg" 
						alt="Profile Picture"
						fill
						style={{ objectFit: 'cover' }}
						className="rounded-full shadow-lg border-2 border-white/10"
					/>
				</div>
				<div className="space-y-3 md:space-y-4 mb-6 md:mb-2">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
							La Shauna E. Nichols, MS-IT
						</h1>
						
						<h2 className="text-2xl md:text-4xl font-bold text-white">Engineering Leadership | Application Development | Software & Cloud Architecture | Artificial Intelligence | Cloud Security | Fractional CTO</h2>
						<div className="text-slate-300 text-sm font-medium mb-8">
							Currently finishing my <span className="text-green-300">Masters in Computer Science</span> online at <i><span className="text-red-300"><a href="https://www.coloradotech.edu/degrees/masters/computer-science" target='_blank'>Colorado Technical University</a></span></i> (Expected Graduation 6/26).
						</div>
						<p className="text-lg md:text-xl text-gray-400 mx-auto">
							Seasoned technology executive with 15+ years building secure, compliant, and scalable modern SaaS platforms.
						</p>
						<p className="text-base md:text-lg text-white mx-auto">
							Previously Head of Engineering at <span className="text-yellow-600"><a href="https://scratch.org" target='_blank'>Scratch</a></span> and Lead Fullstack Engineer at{' '}
							<span className="text-green-600"><a href="https://fabricfeed.io" target='_blank'>FabricFeed.io</a></span>. <strong className='text-white'>I build secure, scalable systems and guide teams toward security-first engineering practices.</strong>
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4 mb-6 md:mb-8">
						{/* Leadership & Strategy */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-300 text-xs md:text-sm">Fractional CTO</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 rounded-full text-green-300 text-xs md:text-sm">Artificial Intelligence</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-500/10 rounded-full text-red-300 text-xs md:text-sm">Risk Analysis</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-300 text-xs md:text-sm">CISSP</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-amber-500/10 rounded-full text-amber-300 text-xs md:text-sm">SOC 2</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-500/10 rounded-full text-indigo-300 text-xs md:text-sm">ISO 27001</span>

						{/* Cloud & DevOps */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">AWS</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Azure</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-indigo-300/10 rounded-full text-indigo-400 text-xs md:text-sm">Kubernetes</span>

						{/* Backend & Data */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Node.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Python</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-500/10 rounded-full text-red-400 text-xs md:text-sm">Java</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 rounded-full text-green-300 text-xs md:text-sm">Go</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-pink-500/10 rounded-full text-pink-300 text-xs md:text-sm">Rust</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-sky-500/10 rounded-full text-sky-300 text-xs md:text-sm">Snowflake</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Kafka</span>

						{/* Security & Analysis Tools */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-300 text-xs md:text-sm">Wireshark</span>

						{/* AI / Emerging Tech */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-500/10 rounded-full text-yellow-300 text-xs md:text-sm">AI/ML</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-sky-300/10 rounded-full text-sky-400 text-xs md:text-sm">Bedrock</span>

						{/* Frontend (de-emphasized but present) */}
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">React & Next.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">TypeScript</span>
						</div>
				</motion.div>

				<div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
					<a
						href="https://www.linkedin.com/in/lnicholsdev/"
						target='_blank'
						className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
					>
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
							<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
						</svg>
						Connect on LinkedIn
					</a>
					<a
						href="/files/resume.pdf"
						target="_blank"
						className="px-8 py-3 bg-black border border-gray-800 rounded-lg font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center gap-2"
					>
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
							<path
								fillRule="evenodd"
								d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
								clipRule="evenodd"
							/>
							<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
						</svg>
						View My Resume
					</a>
				</div>
			</div>
		</section>
	);
}
