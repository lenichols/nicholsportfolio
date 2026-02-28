export interface ResumeExperience {
  company: string;
  location: string;
  role: string;
  period: string;
  note?: string;
  bullets: string[];
}

export interface ResumeEducation {
  degree: string;
  school: string;
  year: string;
}

export interface ResumeCertification {
  title: string;
  issuer: string;
}

export const resumeSummary =
  'Strategic engineering leader with extensive experience scaling teams and systems that power mission-critical business operations. I drive technical vision and organizational transformation across software, infrastructure and security domains, leading multiple engineering teams through complex product lifecycles. Skilled at building collaborative, high-trust cultures, I align engineering roadmaps with business objectives, mentor managers and individual contributors and deliver sustainable solutions that balance innovation with operational excellence.';

export const resumeSkills: Record<string, string> = {
  'Leadership & Management':
    'Agile/Scrum, Technical Roadmapping, Team Mentorship, Cross-Functional Collaboration, Hiring & Performance Management, Stakeholder Communication, Vendor Management',
  'Technical Oversight':
    'Full-Stack Architecture (React, Node.js, Python, Django, FastAPI), Cloud Infrastructure (AWS, GCP, Docker, Kubernetes), CI/CD, Database Strategy, API Design',
  'Security & Compliance':
    'SOC 2, ISO 27001, Penetration Testing, SIEM, Vulnerability Management',
  Innovation:
    'AI/ML Frameworks, AI Development Tools, Automation Strategy, R&D Leadership',
};

export const resumeExperience: ResumeExperience[] = [
  {
    company: 'WYL',
    location: 'New York, NY',
    role: 'Chief Product & Technology Officer',
    period: 'September 2024 – June 2025',
    bullets: [
      'Spearheaded the development of a Property Review and Rental Analytics Platform, enhancing data-driven decision-making for users.',
      'Designed and executed a comprehensive product roadmap aligned with strategic business goals, resulting in increased platform adoption.',
      'Directed SOC 2 compliance efforts, including gap analyses and SIEM tool implementation, fortifying cybersecurity infrastructure.',
      'Provided technical leadership to a high-performing team of five developers, fostering innovation and accountability.',
    ],
  },
  {
    company: 'Larmarka (Multiverse Venture Studio)',
    location: 'Palo Alto, CA',
    role: 'Chief Technology Officer (Fractional) / Technology Advisory',
    period: 'November 2023 – August 2024',
    bullets: [
      'Fractional CTO for venture-backed startups, accelerating product development and go-to-market.',
      'Performed technical due diligence to de-risk investments and evaluate engineering capabilities.',
      'Advised on engineering strategy, roadmaps and team scaling during growth phases.',
      'Coordinated AI/ML and cloud innovation across portfolio companies.',
    ],
  },
  {
    company: 'Scratch',
    location: 'Boston, MA',
    role: 'Senior Engineering Manager / Head of Infrastructure',
    period: 'February 2021 – November 2023',
    bullets: [
      'Modernized legacy infrastructure using Django, React, Node.js, Kubernetes.',
      'Managed backend/data pipelines for 120M+ user platform.',
      'Led 18-person technical team across QA, DevOps and software engineering.',
      'Spearheaded cloud migration to AWS & GCP, boosting system uptime.',
    ],
  },
  {
    company: 'McKesson',
    location: 'San Francisco, CA',
    role: 'Senior Software Engineer',
    period: 'October 2017 – December 2020',
    bullets: [
      'Developed enterprise apps with Angular, Java and Spring Boot, Node + ExpressJS.',
      'Re-architected APIs for performance and security, enhancing scalability.',
      'Mentored 2+ junior devs in Agile coding practices and test-driven development.',
    ],
  },
  {
    company: 'Levi Strauss',
    location: 'San Francisco, CA',
    role: 'Senior Software Engineer',
    period: 'June 2016 – December 2017',
    note: 'Contract via Agility Systems',
    bullets: [
      'Created robust search and mapping features using Google Maps API.',
      'Partnered with product team to define scalable frontend solutions in Angular.',
    ],
  },
  {
    company: 'G2 Integrated Solutions, Inc.',
    location: 'Concord, CA',
    role: 'Software Engineer / Hybrid App Developer',
    period: 'January 2015 – December 2017',
    bullets: [
      'Delivered cross-platform apps for PG&E and major utilities (iOS, Android, web).',
      'Built responsive web UIs and backend services in JavaScript and C#.',
      'Deployed 2+ iOS apps for field services adopted by PG&E, Southwest Gas, Nevada Power and other major utility companies.',
    ],
  },
  {
    company: 'University of the Pacific',
    location: 'Stockton, CA',
    role: 'Web Developer',
    period: 'June 2012 – December 2014',
    bullets: [
      'Developed frontend solutions and SharePoint workflows for campus-wide systems.',
      'Led weekly technical planning across IT and Marketing departments.',
      'Delivered responsive and engaging user interface for the University of the Pacific website.',
    ],
  },
  {
    company: 'Apple',
    location: 'Elk Grove, CA',
    role: 'Support Engineer',
    period: 'March 2009 – November 2010',
    note: 'Contract via Volt',
    bullets: [
      'Provided frontline technical support for macOS and iOS devices in a high-volume environment.',
      'Diagnosed and resolved hardware and software issues on Macs, iPads and networking equipment.',
      'Assisted users with operating system upgrades, device configurations and data migrations.',
      'Gained foundational experience with system imaging, remote troubleshooting tools and Apple enterprise support protocols.',
    ],
  },
];

export const resumeEducation: ResumeEducation[] = [
  {
    degree: 'M.S. Computer Science',
    school: 'Colorado Technical University',
    year: 'Est. Graduation: June 2026',
  },
  {
    degree: 'M.S. Information Technology',
    school: 'Colorado Technical University',
    year: '2012',
  },
  {
    degree: 'B.S. Business Administration',
    school: 'Colorado Technical University',
    year: '2008',
  },
];

export const resumeCertifications: ResumeCertification[] = [
  {
    title: 'Certificate in IBM Watson Generative & Foundational AI',
    issuer: 'IBM Watson Education',
  },
];
