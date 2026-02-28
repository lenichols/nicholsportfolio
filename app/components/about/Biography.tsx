import FadeInView from '../shared/FadeInView';

const paragraphs = [
  'La Shauna E. Nichols is a cybersecurity and software engineering leader with nearly two decades of experience designing, building and securing enterprise-scale applications. She holds graduate degrees in Information Technology Management and Computer Science with a concentration in Cybersecurity.',
  'As a hands-on technical executive, she has led SOC 2 Type II readiness programs, architected secure multi-cloud environments (AWS & GCP) and embedded application security into engineering workflows using frameworks like ISO 27001, NIST and CIS Controls.',
  'Previously Head of Infrastructure and Backend Engineering at Scratch, the world\'s largest learn-to-code platform, she helped scale secure, resilient systems serving over 120 million users. She later served as CTO at WhoseYourLandlord (WYL), where she drove a security-by-design transformation across product and infrastructure.',
  'Today, she works as a Fractional CTO and Security Engineering Consultant, guiding startups and growth-stage companies through cloud security maturity, AppSec program development and compliance readiness. She\'s also a passionate advocate for equitable access to STEM education through her work with Calculated Genius and other nonprofit initiatives.',
];

export default function Biography() {
  return (
    <FadeInView>
      <div className="prose prose-charcoal max-w-none">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-charcoal/80 leading-relaxed text-base md:text-lg mb-6">
            {p}
          </p>
        ))}
      </div>
    </FadeInView>
  );
}
