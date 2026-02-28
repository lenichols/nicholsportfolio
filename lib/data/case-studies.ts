import { CaseStudy } from '../types';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'fabricfeed',
    title: 'Streamlined Textile Inventory System',
    subtitle: 'FabricFeed.io',
    date: '2025-02',
    domains: ['frontend', 'backend', 'cloud', 'architecture'],
    summary:
      'Built a full-stack textile management platform with real-time inventory tracking, custom data tables, and a cost-optimized AWS infrastructure achieving 99.99% uptime.',
    featured: true,
    diagramPath: '/fabricfeed.drawio.svg',
    videoUrl:
      'https://drive.google.com/file/d/152atCiizaHH5Xa1yO2RXZmtXHXSxnHhw/view?usp=drive_link',
    frontend: [
      'Next.js Server Components',
      'Real-time Activity Reporting',
      'Custom Data Tables & Search',
      'Results Calculations Algorithm',
    ],
    backend: [
      'AWS VPC + Load Balancer',
      'ECR with ECS Deployment to Fargate',
      'Kafka Event Streaming',
      'AWS S3 File Storage Integration',
    ],
    metrics: [
      { label: 'Uptime (Blue-Green Deploy)', value: '99.99%' },
      { label: 'Avg API Response Time', value: '300ms' },
      { label: 'Infrastructure Cost Reduction', value: '45%' },
    ],
  },
  {
    slug: 'quizqueue',
    title: 'AI-Powered Academic Study Platform & Generator',
    subtitle: 'QuizQueue.io',
    date: '2024-11',
    domains: ['ai-ml', 'backend', 'frontend', 'cloud'],
    summary:
      'Designed an AI-powered SaaS quiz generator integrating LLMs for curriculum-aligned content, with interactive dashboards for students and teachers and real-time data processing.',
    featured: true,
    diagramPath: '/QuizQueue.drawio.svg',
    videoUrl:
      'https://drive.google.com/file/d/1SCH6CilwX9Tlhzdha3L1zRWPJH70Ftvx/view?usp=drive_link',
    walkthroughUrl:
      'https://drive.google.com/file/d/1LTZm2fd_9FFxEwgh62dVKOWKLId7NgT0/view?usp=drive_link',
    frontend: [
      'Public Version using Llama',
      'Interactive Dashboard (Student/Teacher)',
      'Customize & Store Quizzes',
      'Teacher Dashboard & Reporting',
    ],
    backend: [
      'Apache Kafka Streams',
      'AWS EC2',
      'Python Data Processing',
      'Redis Time Series',
    ],
    metrics: [
      { label: 'Avg Processing Time', value: '~5 sec' },
      { label: 'Query Response', value: 'Sub-second' },
    ],
  },
  {
    slug: 'cost-optimization',
    title: 'Enterprise Cloud Cost Optimization',
    subtitle: 'Cost Optimization Strategy',
    date: '2024-08',
    domains: ['cloud', 'strategy', 'architecture', 'compliance'],
    summary:
      'Led an enterprise-level cost optimization strategy implementing service-level changes into AWS, driving a nearly $60,000/month cost reduction while maintaining ISO 27001 compliance.',
    featured: true,
    diagramPath: '/CostOptimization.drawio.svg',
    frontend: [
      'Complete Infrastructure Analysis',
      'Service Level Review',
      'Redesign & Implementation',
      'API Changes / Load Balancing',
      'Support Downgrades',
      'ISO 27001 Modifications',
      'Fullstack Code Changes',
    ],
    backend: [],
    metrics: [
      { label: 'Monthly Cost Reduction', value: '~$60K' },
      { label: 'Traffic Optimization', value: 'Modernized' },
      { label: 'Data Cleanup', value: 'Implemented' },
    ],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudy[] {
  return caseStudies.filter((cs) => cs.featured);
}
