'use client';

import { motion } from 'framer-motion';

export default function BioSection() {
  const bioParagraphs = [
    "La Shauna E. Nichols is a cybersecurity and software engineering leader with nearly two decades of experience designing, building, and securing enterprise-scale applications. She holds graduate degrees in Information Technology Management and Computer Science with a concentration in Cybersecurity.",
    
    "As a hands-on technical executive, she has led SOC 2 Type II readiness programs, architected secure multi-cloud environments (AWS & GCP), and embedded application security into engineering workflows using frameworks like ISO 27001, NIST, and CIS Controls.",
    
    "Previously Head of Infrastructure and Backend Engineering at Scratch—the world’s largest learn-to-code platform—she helped scale secure, resilient systems serving over 120 million users. She later served as CTO at WhoseYourLandlord (WYL), where she drove a security-by-design transformation across product and infrastructure.",
    
    "Today, she works as a Fractional CTO and Security Engineering Consultant, guiding startups and growth-stage companies through cloud security maturity, AppSec program development, and compliance readiness. She’s also a passionate advocate for equitable access to STEM education through her work with Calculated Genius and other nonprofit initiatives."
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Professional Biography
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 md:p-10 shadow-lg"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr,240px] gap-8 items-start">
            <div className="space-y-6">
              {bioParagraphs.map((text, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="text-slate-200 leading-relaxed text-base md:text-lg"
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Visual accent / future placeholder */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-gray-800 rounded-xl p-5">
                  <div className="text-sm text-gray-400 mb-3">Core Focus Areas</div>
                  <ul className="space-y-2 text-sm">
                    {[
                      'Cloud Security (AWS/GCP)',
                      'SOC 2 & ISO 27001',
                      'AppSec Program Design',
                      'Fractional CTO Advisory',
                      'Secure SaaS Architecture',
                      'STEM Equity Advocacy'
                    ].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal-400 mr-2 mt-0.5">•</span>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}