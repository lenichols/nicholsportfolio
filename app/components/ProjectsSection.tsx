'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// import ffIcon from "/ffeed.svg";

export default function ProjectsSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-16 text-center">
					Most Recent Projects
				</motion.h2>

				<div className="space-y-16">
					{/* FabricFeed Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Streamlined Textile Inventory System for Medium to Large-Scale Operations&nbsp;<span className="text-purple-500">- 2/2025</span></h3>
										<p className="text-gray-400">
											A high-performance inventory and shipmemt system with the ability of 100K+ daily transactions with real-time inventory and AI-powered recommendations.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Architecture</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Next.js Server Components</li>
												<li>• Real-time Activity Reporting</li>
												<li>• Custom Data Tables & Search</li>
												<li>• Results Calculations Algorithm</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Systems</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• AWS VPC setup + Load Balancer</li>
												<li>• ECR with ECS Deployment to Fargate</li>
												<li>• Kafka Event Streaming</li>
												<li>• AWS S3 File Storage Integration</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Key Achievements</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• 99.99% Uptime with Blue-Green Deployment</li>
											<li>• 300ms Average API Response Time</li>
											<li>• 45% Reduction in Infrastructure Costs</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">System Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										{/* FabricFeed system architecture diagram */}
										<Image
											priority
											src='/fabricfeed.drawio.svg'
											alt="FabricFeed"
											className="rounded-md"
											width={0}
											height={0}
											sizes="100vw"
											style={{ width: '100%', height: 'auto' }}
										/>
									</div>
									<div className="flex flex-col sm:flex-row justify-center gap-4 mx-8">
										<a href="https://drive.google.com/file/d/152atCiizaHH5Xa1yO2RXZmtXHXSxnHhw/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white transition-colors px-4 py-4 rounded-md hover:bg-gray-800 flex"><Image
											priority
											src='/video-light.svg'
											alt="Video Icon"
											width={15}
											height={15}
										/>&nbsp;Project (Video)
										</a>
										<a href="#" target="_blank" rel="noopener noreferrer" className="text-white transition-colors px-4 py-4 rounded-md hover:bg-gray-800 flex"><Image
											priority
											src='/video-light.svg'
											alt="Video Icon"
											width={15}
											height={15}
										/>&nbsp;Code Walkthrough
										</a>
                                    </div>

								</div>
							</div>
						</div>
					</motion.div>

					{/* AI Quiz Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">AI Powered Academic Study Platform & GeneratorSystem&nbsp;<span className="text-purple-500">- 11/2024</span></h3>
										<p className="text-gray-400">
											A scalable quiz generation platform for both students and educators using the power of LLM&apos;s and ML to take any notes document, syllabus or web page and generate a quiz. Educators can gauge profficiency and students can prep for finals.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Public Version using Llama</li>
												<li>• Interactive Dashboard (Sudent/Teacher)</li>
												<li>• Customize & Store Quizes</li>
												<li>• Teacher Dashboard & Reporting</li>
											</ul>
										</div>
										<div>
											<h4 className="text-sm font-semibold text-purple-400 mb-3">Backend Pipeline</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Apache Kafka Streams</li>
												<li>• AWS EC2</li>
												<li>• Python Data Processing</li>
												<li>• Redis Time Series</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Average 5 sec Processing</li>
											<li>• Sub-second Query Response</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Data Flow Architecture</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<Image
											priority
											src='/QuizQueue.drawio.svg'
											alt="QuizQueue"
											className="rounded-md"
											width={0}
											height={0}
											sizes="100vw"
											style={{ width: '100%', height: 'auto' }}
										/>
									</div>
									<div className="flex flex-col sm:flex-row justify-center gap-4 mx-8">
										<a href="https://drive.google.com/file/d/1SCH6CilwX9Tlhzdha3L1zRWPJH70Ftvx/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white transition-colors px-4 py-4 rounded-md hover:bg-gray-800 flex"><Image
											priority
											src='/video-light.svg'
											alt="Video Icon"
											width={15}
											height={15}
										/>&nbsp;Project (Video)
										</a>
										<a href="https://drive.google.com/file/d/1LTZm2fd_9FFxEwgh62dVKOWKLId7NgT0/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white transition-colors px-4 py-4 rounded-md hover:bg-gray-800 flex"><Image
											priority
											src='/video-light.svg'
											alt="Video Icon"
											width={15}
											height={15}
										/>&nbsp;Code Walkthrough
										</a>
                                    </div>
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								<div className="space-y-6">
									<div>
										<h3 className="text-2xl font-bold mb-4">Cost Optimization&nbsp;<span className="text-purple-500">- 08/2024</span></h3>
										<p className="text-gray-400">
											Enterprise level cost optimization strategy implementing service level changes into AWS driving a nearly $60,000 a month cost reduction. This project involved reducing infrastructure and scaling down using traffic mitigation and rate logging and limit utilization of AWS services to optimize costs.
										</p>
									</div>

									<div className="grid grid-cols-2 gap-6">
										<div>
											<h4 className="text-sm font-semibold text-blue-400 mb-3">Frontend Features</h4>
											<ul className="space-y-2 text-sm text-gray-400">
												<li>• Complete Infrastructure Analysis</li>
												<li>• Service Level Review</li>
												<li>• Redesign & Implementation</li>
												<li>• API Changes/Load Balancing</li>
												<li>• Support Downgrades</li>
												<li>• ISO 27001 Modifications</li>
												<li>• Fullstack code changes</li>
											</ul>
										</div>
									</div>

									<div className="space-y-3">
										<h4 className="text-sm font-semibold text-teal-400">Performance Metrics</h4>
										<ul className="space-y-2 text-sm text-gray-400">
											<li>• Moderatizzed traffic and saved resources</li>
											<li>• Data Cleanup Implemented</li>
										</ul>
									</div>
								</div>

								<div className="bg-black/30 rounded-xl p-6">
									<h4 className="text-sm font-semibold text-gray-400 mb-4">Cost Optimization Table</h4>
									<div className="aspect-[4/3] bg-black/50 rounded-lg p-4">
										<Image
											priority
											src='/QuizQueue.drawio.svg'
											alt="QuizQueue"
											className="rounded-md"
											width={0}
											height={0}
											sizes="100vw"
											style={{ width: '100%', height: 'auto' }}
										/>
									</div>
									<div className="flex flex-col sm:flex-row justify-center gap-4 mx-8">
										<a href="https://drive.google.com/file/d/1SCH6CilwX9Tlhzdha3L1zRWPJH70Ftvx/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white transition-colors px-4 py-4 rounded-md hover:bg-gray-800 flex"><Image
											priority
											src='/video-light.svg'
											alt="Video Icon"
											width={15}
											height={15}
										/>&nbsp;Project (Video)
										</a>
										<a href="https://drive.google.com/file/d/1LTZm2fd_9FFxEwgh62dVKOWKLId7NgT0/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-white transition-colors px-4 py-4 rounded-md hover:bg-gray-800 flex"><Image
											priority
											src='/video-light.svg'
											alt="Video Icon"
											width={15}
											height={15}
										/>&nbsp;Code Walkthrough
										</a>
                                    </div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
