'use client';

import { motion } from 'framer-motion';
// import Image from 'next/image';
// import ffIcon from "/ffeed.svg";
interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  bullets: string[];
}

export default function SecureAppDevelopment() {
 const projects: Project[] = [
    {
      id: 'fabricfeed',
      title: 'FabricFeed.io',
      subtitle: 'Textile Management Web Application & Dashboard',
      role: 'Lead Full-Stack Developer',
      bullets: [
        'Built a responsive React/Next.js frontend with real-time inventory tracking.',
        'Designed RESTful APIs in Node.js with PostgreSQL for fabric lifecycle management.',
        'Implemented role-based access control and audit logging for enterprise clients.',
      ],
    },
    {
      id: 'quizqueue',
      title: 'QuizQueue.io',
      subtitle: 'AI-Powered SaaS Quiz Generator',
      role: 'Lead Developer',
      bullets: [
        'Integrated LLMs (OpenAI, Bedrock) to generate curriculum-aligned quizzes from prompts.',
        'Architected scalable backend with serverless AWS Lambda and DynamoDB.',
        'Deployed CI/CD pipeline with GitHub Actions and automated testing suite.',
      ],
    },
    {
      id: 'wyl',
      title: 'WYL.co',
      subtitle: 'Local Discovery Platform',
      role: 'CTO & Security Program Lead',
      bullets: [
        'Developed proximity-based search using geohashing and Google Places API.',
        'Optimized frontend performance with React.memo and dynamic data fetching.',
        'Enhanced SEO with Next.js SSR and structured metadata for local business listings.',
      ],
    },
    {
      id: 'sred',
      title: 'Sred.io',
      subtitle: 'Developer Portfolio Aggregator',
      role: 'Freelance Developer',
      bullets: [
        'Built GitHub repository listing feature with OAuth, rate-limit handling, and caching.',
        'Created clean, filterable UI to showcase developer projects by language and stars.',
        'Used Vercel Edge Functions for low-latency API responses.',
      ],
    },
    {
      id: 'cortexia',
      title: 'Cortexia.ai',
      subtitle: 'AI Health Advisory SaaS Platform',
      role: 'Fullstack App Developer',
      bullets: [
        'Engineered secure agent workflows handling PHI-compliant data pipelines.',
        'Integrated HIPAA-aligned auth (Okta) and end-to-end encryption for user sessions.',
        'Designed audit-ready data retention and logging architecture for SOC 2 compliance.',
      ],
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400"
        >
          Application Development & Data Handling
        </motion.h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-xl p-5 md:p-6 hover:border-gray-700 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{project.subtitle}</p>
                  </div>
                  <span className="text-xs md:text-sm px-2.5 py-1 bg-blue-500/10 text-blue-400 rounded-full whitespace-nowrap">
                    {project.role}
                  </span>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm md:text-base">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-teal-400 mr-2 mt-0.5">✓</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );

}
