'use client';

import { motion } from 'framer-motion';

export default function CybersecurityExperienceSection() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-6xl mx-auto">
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					className="text-3xl font-bold mb-16 text-center"
				>
					Cybersecurity & Compliance Leadership
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-gray-900/50 rounded-xl overflow-hidden border border-gray-800 p-8"
				>
					<div className="space-y-8">
						{/* SOC 2 Implementation */}
						<div className="border-l-4 border-yellow-500 pl-6 py-1">
							<h3 className="text-xl font-bold text-yellow-400">SOC 2 Type II Compliance Program</h3>
							<p className="text-gray-400 mt-2">
								<strong>Organization:</strong> Cortexia.ai (Healthcare SaaS) | <strong>Timeline:</strong> 2023–2024
							</p>
							<ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc pl-5">
								<li>Led end-to-end SOC 2 readiness, including risk assessment, control mapping (CC1–CC6), and evidence collection</li>
								<li>Authored security policies: Access Control, Incident Response, Data Retention, Vendor Risk</li>
								<li>Implemented continuous monitoring via Datadog & Splunk SIEM with alerting on anomalous activity</li>
								<li>Trained engineering team on audit responsibilities and secure development practices</li>
							</ul>
						</div>

						{/* Cloud Security Architecture */}
						<div className="border-l-4 border-teal-500 pl-6 py-1">
							<h3 className="text-xl font-bold text-teal-400">Cloud Security Posture (AWS & GCP)</h3>
							<p className="text-gray-400 mt-2">
								<strong>Organizations:</strong> Kaskara, Scratch, WYL | <strong>Scope:</strong> Multi-account cloud environments
							</p>
							<ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc pl-5">
								<li>Designed VPCs with private/public subnets, NAT gateways, and security group hardening</li>
								<li>Enforced least-privilege IAM roles and SSO integration (Okta)</li>
								<li>Configured encryption-at-rest (KMS) and in-transit (TLS 1.3, WAF, Cloudflare)</li>
								<li>Automated compliance checks using AWS Config and GCP Security Command Center</li>
							</ul>
						</div>

						{/* Threat & Vulnerability Management */}
						<div className="border-l-4 border-red-500 pl-6 py-1">
							<h3 className="text-xl font-bold text-red-400">Threat Detection & Vulnerability Management</h3>
							<p className="text-gray-400 mt-2">
								<strong>Tools:</strong> Burp Suite, Nmap, Metasploit, Wireshark, Nikto, SQLMap
							</p>
							<ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc pl-5">
								<li>Conducted internal penetration tests and DAST/SAST scans on web applications</li>
								<li>Identified and remediated OWASP Top 10 risks (e.g., XSS, IDOR, misconfigured CORS)</li>
								<li>Integrated vulnerability scanning into CI/CD pipelines (GitHub Actions)</li>
								<li>Analyzed network traffic for anomalies using Wireshark and Zeek logs</li>
							</ul>
						</div>

						{/* ISO 27001 & Risk Strategy */}
						<div className="border-l-4 border-purple-500 pl-6 py-1">
							<h3 className="text-xl font-bold text-purple-400">ISO 27001 Alignment & Risk Strategy</h3>
							<p className="text-gray-400 mt-2">
								<strong>Context:</strong> WYL, Kaskara | <strong>Focus:</strong> Data governance & third-party risk
							</p>
							<ul className="mt-3 space-y-2 text-sm text-gray-300 list-disc pl-5">
								<li>Performed gap analysis against ISO 27001 Annex A controls</li>
								<li>Implemented data classification and PII handling procedures</li>
								<li>Evaluated vendor security questionnaires (CAIQ, SIG Lite) and managed risk acceptance</li>
								<li>Documented incident response playbooks and conducted tabletop exercises</li>
							</ul>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}