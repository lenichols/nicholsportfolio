'use client';

import { motion } from 'framer-motion';

interface ExperienceItem {
  id: string;
  title: string;
  color: 'yellow' | 'teal' | 'red' | 'purple';
  metadata?: string; // Flexible field for org/timeline/tools/etc.
  bullets: string[];
}

const ExperienceCard = ({ title, color, metadata, bullets }: ExperienceItem) => {
  const accentColor = {
    yellow: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400',
    teal: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
    red: 'bg-red-500/10 border-red-500/30 text-red-400',
    purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  }[color];

  return (
    <div className="group">
      <div className={`rounded-lg border-l-4 ${accentColor} p-5 transition-all duration-300 hover:border-opacity-100`}>
        <h3 className="text-xl font-bold">{title}</h3>
        {metadata && (
          <p className="text-gray-400 text-sm mt-1 mb-3 font-mono">{metadata}</p>
        )}
        <ul className="space-y-2.5 text-gray-300">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start">
              <span className="inline-block mt-1 mr-2 text-gray-500">•</span>
              <span className="text-sm leading-relaxed">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function CybersecurityExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      id: 'soc2',
      title: 'SOC 2 Type II Readiness',
      color: 'yellow',
      metadata: 'Cortexia.ai (Healthcare SaaS) • 2023–2024',
      bullets: [
        'Led complete SOC 2 Type II program (risk assessments, CC1–CC6 control mapping, evidence collection)',
        'Authored security policies: Access Control, Incident Response, Data Retention, Vendor Risk',
        'Implemented continuous monitoring via Datadog & Splunk SIEM with alerting on anomalous activity',
        'Trained engineering team on audit responsibilities and secure development practices',
      ],
    },
    {
      id: 'cloud',
      title: 'Cloud Security Posture (AWS & GCP)',
      color: 'teal',
      metadata: 'Kaskara, Scratch, WYL • Multi-account environments',
      bullets: [
        'Designed VPCs with private/public subnets, NAT gateways, and hardened security groups',
        'Enforced least-privilege IAM roles and SSO integration (Okta)',
        'Configured encryption-at-rest (KMS) and in-transit (TLS 1.3, WAF, Cloudflare)',
        'Automated compliance checks using AWS Config and GCP Security Command Center',
      ],
    },
    {
      id: 'threat',
      title: 'Threat Detection & Vulnerability Management',
      color: 'red',
      metadata: 'Tools: Burp Suite, Nmap, Metasploit, Wireshark, Nikto, SQLMap',
      bullets: [
        'Conducted internal penetration tests and DAST/SAST scans on web applications',
        'Identified and remediated OWASP Top 10 risks (e.g., XSS, IDOR, misconfigured CORS)',
        'Integrated vulnerability scanning into CI/CD pipelines (GitHub Actions)',
        'Analyzed network traffic for anomalies using Wireshark and Zeek logs',
      ],
    },
    {
      id: 'iso',
      title: 'ISO 27001 Alignment & Risk Strategy',
      color: 'purple',
      metadata: 'WYL, Kaskara • Focus: Data governance & third-party risk',
      bullets: [
        'Performed gap analysis against ISO 27001 Annex A controls',
        'Implemented data classification and PII handling procedures',
        'Evaluated vendor security questionnaires (CAIQ, SIG Lite) and managed risk acceptance',
        'Documented incident response playbooks and conducted tabletop exercises',
      ],
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16"
        >
          Cybersecurity & Compliance Leadership
        </motion.h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <ExperienceCard {...exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}