import { AppProject } from '../types';

export const appProjects: AppProject[] = [
  {
    name: 'FabricFeed.io',
    tagline: 'Textile Management Web Application & Dashboard',
    role: 'Lead Full-Stack Developer',
    highlights: [
      'Built a responsive React/Next.js frontend with real-time inventory tracking',
      'Designed RESTful APIs in Node.js with PostgreSQL for fabric lifecycle management',
      'Implemented role-based access control and audit logging for enterprise clients',
    ],
    domains: ['frontend', 'backend', 'cloud'],
  },
  {
    name: 'QuizQueue.io',
    tagline: 'AI-Powered SaaS Quiz Generator',
    role: 'Lead Developer',
    highlights: [
      'Integrated LLMs (OpenAI, Bedrock) to generate curriculum-aligned quizzes from prompts',
      'Architected scalable backend with serverless AWS Lambda and DynamoDB',
      'Deployed CI/CD pipeline with GitHub Actions and automated testing suite',
    ],
    domains: ['ai-ml', 'backend', 'cloud', 'mobile'],
  },
  {
    name: 'WYL.co',
    tagline: 'Local Discovery Platform',
    role: 'CTO & Security Program Lead',
    highlights: [
      'Developed proximity-based search using geohashing and Google Places API',
      'Optimized frontend performance with React.memo and dynamic data fetching',
      'Enhanced SEO with Next.js SSR and structured metadata for local business listings',
    ],
    domains: ['mobile', 'backend', 'strategy'],
  },
  {
    name: 'Sred.io',
    tagline: 'Developer Portfolio Aggregator',
    role: 'Freelance Developer',
    highlights: [
      'Built GitHub repository listing feature with OAuth, rate-limit handling, and caching',
      'Created clean, filterable UI to showcase developer projects by language and stars',
      'Used Vercel Edge Functions for low-latency API responses',
    ],
    domains: ['frontend', 'backend'],
  },
  {
    name: 'Cortexia.ai',
    tagline: 'AI Health Advisory SaaS Platform',
    role: 'Fullstack App Developer',
    highlights: [
      'Engineered secure agent workflows handling PHI-compliant data pipelines',
      'Integrated HIPAA-aligned auth (Okta) and end-to-end encryption for user sessions',
      'Designed audit-ready data retention and logging architecture for SOC 2 compliance',
    ],
    domains: ['ai-ml', 'cybersecurity', 'compliance'],
  },
];
