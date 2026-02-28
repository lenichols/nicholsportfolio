import FadeInView from '../shared/FadeInView';
import SectionHeading from '../shared/SectionHeading';
import { SkillCategory } from '@/lib/types';

const skills: SkillCategory[] = [
  {
    title: 'Cybersecurity',
    icon: '🛡',
    items: ['SOC 2 & ISO 27001', 'AppSec & SAST/DAST', 'Threat Modeling', 'Incident Response'],
  },
  {
    title: 'Strategy',
    icon: '📐',
    items: ['Fractional CTO', 'Technical Roadmaps', 'Cost Optimization', 'Team Building'],
  },
  {
    title: 'Mobile & Hybrid Apps',
    icon: '📱',
    items: ['React Native & Expo', 'Cross-Platform Development', 'React & Next.js', 'TypeScript'],
  },
  {
    title: 'Backend',
    icon: '⚙',
    items: ['Node.js & Python', 'API Design', 'Kafka & Redis', 'PostgreSQL & DynamoDB'],
  },
  {
    title: 'Cloud & DevOps',
    icon: '☁',
    items: ['AWS & GCP', 'Kubernetes & ECS', 'CI/CD Pipelines', 'Infrastructure as Code'],
  },
  {
    title: 'AI / ML',
    icon: '🤖',
    items: ['LLM Integration', 'AWS Bedrock', 'Data Pipelines', 'Intelligent Agents'],
  },
];

export default function SkillsOverview() {
  return (
    <section className="py-20 md:py-24 bg-white/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeInView>
          <SectionHeading
            title="Core Capabilities"
            subtitle="Technical expertise spanning security, architecture, and full-stack development."
          />
        </FadeInView>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <FadeInView key={skill.title} delay={i * 0.05}>
              <div className="p-6 rounded-xl border border-border-warm bg-cream hover:shadow-card-hover transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl" role="img" aria-label={skill.title}>
                    {skill.icon}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-charcoal">
                    {skill.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li
                      key={item}
                      className="text-sm text-charcoal/70 font-body flex items-start gap-2"
                    >
                      <span className="text-dusty-rose mt-1 text-xs">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
}
