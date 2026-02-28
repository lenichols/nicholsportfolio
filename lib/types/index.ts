export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  url: string;
  location: string;
  email?: string;
  resumeUrl: string;
  social: {
    github: string;
    linkedin: string;
    twitter: string;
    upwork: string;
  };
  education: Education[];
}

export interface Education {
  degree: string;
  school: string;
  year: string;
  concentration?: string;
}

export interface Domain {
  slug: string;
  label: string;
  color: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  domains: string[];
  summary: string;
  featured: boolean;
  image?: string;
  diagramPath: string;
  videoUrl?: string;
  walkthroughUrl?: string;
  frontend: string[];
  backend: string[];
  metrics: Metric[];
}

export interface Metric {
  label: string;
  value: string;
}

export interface AppProject {
  name: string;
  url?: string;
  tagline: string;
  role: string;
  highlights: string[];
  domains: string[];
}

export interface CybersecurityEntry {
  title: string;
  metadata: string;
  accent: 'gold' | 'rose' | 'plum' | 'teal';
  bullets: string[];
}

export interface CareerEntry {
  company: string;
  role: string;
  period: string;
  highlights: string[];
  current?: boolean;
}

export interface TeachingEntry {
  title: string;
  organization: string;
  description: string;
  type: 'role' | 'course';
}

export interface SkillCategory {
  title: string;
  icon: string;
  items: string[];
}
