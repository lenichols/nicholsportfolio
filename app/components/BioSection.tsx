'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image';
// import ffIcon from "/ffeed.svg";

export default function BioSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-3xl font-bold mb-8 text-center">
					Biography
				</motion.h2>

				<div className="space-y-16">
					{/* FabricFeed Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="rounded-xl overflow-hidden border border-gray-900"
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
								<div className="space-y-6">
									<div>
										<p className="text-slate-200 pb-8">
											La Shauna E. Nichols, has nearly 20 years in Tech  Software Engineering field and has spent the last 15 years, designing and building enterprise applications at scale. She holds a graduate degree in Information Technology Management and is certified in Generative AI. As a self-taught software developer, La Shauna humbly began as a hybrid web developer in Oil & Gas then moved into software in HealthTech and Education, later working her way up to leading development teams for software initiatives both small and large. La Shauna is former Head of Infrastructure & Backend Engineering at Scratch, the world&#39;s largest learn-to-code platform, where she helped lead the teams that helped scale the platform to over 120 million users.</p>
                                            <p className="text-slate-200">
                                            Today, La Shauna is a Tech Lead and Fractional CTO. She left engineering as Chief Technology Officer at WYL, a New York Based startup, in June 2025. She operates as a hands-on leader and as a reliable technical resource to Startup Founders requiring system and software design expertise and she consults with companies on how to start and scale their application projects. La Shauna supports many STEM organizations and is the founder of one of the largest online software developer communities on the web. To add to the myriad of technical and community-driven work that she does, she is also an Executive Board Member at Chicago-based Calculated Genius who is sewing deep roots in STEM and Computer Science.
										</p>
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
