import { CybersecurityEntry } from '../types';

export const cybersecurityEntries: CybersecurityEntry[] = [
  {
    title: 'SOC 2 Type II Readiness',
    metadata: 'Cortexia.ai (Healthcare SaaS) · 2023–2024',
    accent: 'gold',
    bullets: [
      'Led complete SOC 2 Type II program (risk assessments, CC1–CC6 control mapping, evidence collection)',
      'Authored security policies: Access Control, Incident Response, Data Retention, Vendor Risk',
      'Implemented continuous monitoring via Datadog & Splunk SIEM with alerting on anomalous activity',
      'Trained engineering team on audit responsibilities and secure development practices',
    ],
  },
  {
    title: 'Cloud Security Posture (AWS & GCP)',
    metadata: 'Kaskara, Scratch, WYL · Multi-account environments',
    accent: 'teal',
    bullets: [
      'Designed VPCs with private/public subnets, NAT gateways, and hardened security groups',
      'Enforced least-privilege IAM roles and SSO integration (Okta)',
      'Configured encryption-at-rest (KMS) and in-transit (TLS 1.3, WAF, Cloudflare)',
      'Automated compliance checks using AWS Config and GCP Security Command Center',
    ],
  },
  {
    title: 'Threat Detection & Vulnerability Management',
    metadata: 'Tools: Burp Suite, Nmap, Metasploit, Wireshark, Nikto, SQLMap',
    accent: 'rose',
    bullets: [
      'Conducted internal penetration tests and DAST/SAST scans on web applications',
      'Identified and remediated OWASP Top 10 risks (e.g., XSS, IDOR, misconfigured CORS)',
      'Integrated vulnerability scanning into CI/CD pipelines (GitHub Actions)',
      'Analyzed network traffic for anomalies using Wireshark and Zeek logs',
    ],
  },
  {
    title: 'ISO 27001 Alignment & Risk Strategy',
    metadata: 'WYL, Kaskara · Focus: Data governance & third-party risk',
    accent: 'plum',
    bullets: [
      'Performed gap analysis against ISO 27001 Annex A controls',
      'Implemented data classification and PII handling procedures',
      'Evaluated vendor security questionnaires (CAIQ, SIG Lite) and managed risk acceptance',
      'Documented incident response playbooks and conducted tabletop exercises',
    ],
  },
];
