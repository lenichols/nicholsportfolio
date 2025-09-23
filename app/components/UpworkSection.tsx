'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
// import ffIcon from "/ffeed.svg";

export default function UpworkSection() {
	return (
		<section className="py-2 px-4">
			<div className="max-w-xl mx-auto">

				<div className="space-y-16">
					{/* FabricFeed Platform */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<div className="p-8">
							<div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
								<div className="space-y-6">
									<div>
                                        <a href="https://www.upwork.com/freelancers/~01a7841b230c296c05?mp_source=share" target="_blank">
                                            <Image
                                            priority
                                            src='/upwork-le.png'
                                            alt="Upwork Button"
                                            className="rounded-md"
                                            width={0}
                                            height={0}
                                            sizes="100vw"
                                            style={{ width: '100%', height: 'auto' }}
                                        />
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
