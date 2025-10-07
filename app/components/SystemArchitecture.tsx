// SystemArchitecture.tsx

'use client';

import { motion } from 'framer-motion';

type StackType = 'frontend' | 'backend' | 'devops' | 'strategy' | 'cybersecurity' | null;

interface SystemArchitectureProps {
  selectedStack: StackType;
  setSelectedStack: (stack: StackType) => void;
}

export default function SystemArchitecture({ selectedStack, setSelectedStack }: SystemArchitectureProps) {
  return (
    <>
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
										Threat Detection & Response
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
    </>
  );
}