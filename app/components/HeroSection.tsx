'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {
	const [selectedStack, setSelectedStack] = useState<'frontend' | 'backend' | 'devops' | 'strategy' | 'cybersecurity' | null>(null);

	return (
		<section className="min-h-screen relative overflow-hidden py-24 md:py-0">
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
			</div>

			<div className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-8 md:pt-0 w-full">
				<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8 md:mb-2">
					<div className="w-24 h-24 relative rounded-full mx-auto mt-20 overflow-hidden">
						<Image
							src="/shauna.jpg" 
							alt="Profile Picture"
							layout="fill"
							objectFit="cover"
							className="rounded-full"
						/>
					</div>
					<div className="space-y-3 md:space-y-4 mb-6 md:mb-2">
						<h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500">
							La Shauna E. Nichols
						</h1>
						<h2 className="text-2xl md:text-4xl font-bold text-white">Software Engineering Leadership (CTO)</h2>
						<p className="text-lg md:text-xl text-gray-400 mx-auto">
							I craft end-to-end solutions with 10+ years of experience building scalable applications and leading development teams.
						</p>
						<p className="text-base md:text-lg text-gray-500 mx-auto">
							Previously Head of Engineering at <span className="text-yellow-600"><a href="https://scratch.org" target='_blank'>Scratch</a></span> and Lead Fullstack Engineer at{' '}
							<span className="text-green-600"><a href="https://fabricfeed.io" target='_blank'>FabricFeed.io</a></span>
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-4 mb-6 md:mb-8">
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">TypeScript</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">React & Next.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-400 text-xs md:text-sm">Node.js</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Python</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-400 text-xs md:text-sm">AWS</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-500/10 rounded-full text-red-400 text-xs md:text-sm">Java</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 rounded-full text-purple-300 text-xs md:text-sm">Go</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-blue-500/10 rounded-full text-blue-400 text-xs md:text-sm">Kafka</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-sky-300/10 rounded-full text-sky-400 text-xs md:text-sm">Bedrock</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-yellow-500/10 rounded-full text-yellow-300 text-xs md:text-sm">AI/ML</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-green-500/10 rounded-full text-green-300 text-xs md:text-sm">Cybersecurity</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-red-500/10 rounded-full text-red-300 text-xs md:text-sm">Risk Analysis</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-teal-500/10 rounded-full text-teal-300 text-xs md:text-sm">CISSP</span>
						<span className="px-3 md:px-4 py-1.5 md:py-2 bg-purple-500/10 rounded-full text-purple-300 text-xs md:text-sm">Wireshark</span>
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
						href="/files/resume-2.pdf"
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

				<div className="text-slate-300 text-sm font-medium mb-8">
					Currently finishing my <span className="text-green-300">Masters in Computer Science</span> Degree with an emphasis on <strong>Cybersecurity</strong> online at <i><span className="text-red-300"><a href="https://www.coloradotech.edu/degrees/masters/computer-science" target='_blank'>Colorado Technical University</a></span></i> (Expected Graduation 6/26).
				</div>

				{/* Interactive System Architecture */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
							{/* Frontend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'frontend' ? 'bg-blue-500/20 border-blue-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('frontend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-blue-400">Frontend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Modern React Architectures
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Performance Optimization
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Responsive & Interactive UIs
									</li>
								</ul>
							</div>

							{/* Backend Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'backend' ? 'bg-purple-500/20 border-purple-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('backend')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-purple-400">Backend Development</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										API Design & Development
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Database Architecture
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Real-time Systems
									</li>
								</ul>
							</div>

							{/* DevOps Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'devops' ? 'bg-teal-500/20 border-teal-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('devops')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-teal-400">DevOps & Cloud</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										AWS Infrastructure
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										CI/CD Pipelines
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-teal-500 rounded-full" />
										Scalable Architecture
									</li>
								</ul>
							</div>
						</div>
					</motion.div>
				</div>

				{/* Projects Section */}
				<div className="w-full max-w-5xl mx-auto relative px-2 md:px-4">
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.3 }}
						className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 p-4 md:p-8"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
							{/* Cybersecurity */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'cybersecurity' ? 'bg-yellow-500/20 border-yellow-500/50' : 'bg-gray-800/50 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('cybersecurity')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-yellow-400">Cybersecurity</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										hreat Detection & Response
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Security Policy & Compliance
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
										Vulnerability Management
									</li>
								</ul>
							</div>

							{/* Strategy Layer */}
							<div
								className={`p-4 md:p-6 rounded-lg transition-colors border-2 ${
									selectedStack === 'strategy' ? 'bg-red-500/30 border-red-500/30' : 'bg-gray-800/30 hover:bg-gray-800/80 border-transparent'
								}`}
								onMouseEnter={() => setSelectedStack('strategy')}
								onMouseLeave={() => setSelectedStack(null)}
							>
								<h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-red-400">Strategy (Enterprise & Startup)</h3>
								<ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm text-gray-400">
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Technical Roadmap & Architecture Alignment
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Platform Scalability & Tech Debt Strategy
									</li>
									<li className="flex items-center gap-2">
										<div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
										Cloud Migration & Cost Optimization Strategy
									</li>
								</ul>
							</div>							
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
