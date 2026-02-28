import { Domain } from '../types';

export const domains: Domain[] = [
  { slug: 'cybersecurity', label: 'Cybersecurity', color: 'gold' },
  { slug: 'cloud', label: 'Cloud & DevOps', color: 'teal' },
  { slug: 'frontend', label: 'Frontend', color: 'rose' },
  { slug: 'backend', label: 'Backend', color: 'plum' },
  { slug: 'ai-ml', label: 'AI / ML', color: 'gold' },
  { slug: 'strategy', label: 'Strategy', color: 'rose' },
  { slug: 'compliance', label: 'Compliance', color: 'plum' },
  { slug: 'architecture', label: 'Architecture', color: 'teal' },
  { slug: 'mobile', label: 'Mobile & Hybrid', color: 'rose' },
];

export function getDomainBySlug(slug: string): Domain | undefined {
  return domains.find((d) => d.slug === slug);
}
