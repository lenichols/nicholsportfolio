import { Metadata } from 'next';
import SectionHeading from '@/app/components/shared/SectionHeading';
import FadeInView from '@/app/components/shared/FadeInView';
import { teachingEntries } from '@/lib/data/teaching';

export const metadata: Metadata = {
  title: 'Teaching',
  description:
    'La Shauna E. Nichols as a technical instructor. Mentoring engineers, teaching coding fundamentals and advocating for STEM equity.',
};

export default function TeachingPage() {
  const roles = teachingEntries.filter((t) => t.type === 'role');
  const courses = teachingEntries.filter((t) => t.type === 'course');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20">
      {/* Hero */}
      <FadeInView>
        <div className="text-center mb-16">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal">
            Teaching & Mentorship
          </h1>
          <p className="mt-4 text-charcoal/60 text-lg max-w-2xl mx-auto">
            Passionate about sharing knowledge and building the next generation of engineers
            through hands-on instruction and mentorship.
          </p>
          <div className="mt-4 h-0.5 w-16 bg-dusty-rose mx-auto" />
        </div>
      </FadeInView>

      {/* Current roles */}
      <section className="mb-20">
        <FadeInView>
          <SectionHeading title="Current Roles" align="left" />
        </FadeInView>
        <div className="mt-10 space-y-6">
          {roles.map((role, i) => (
            <FadeInView key={role.title} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-border-warm bg-cream">
                <h3 className="font-display text-xl font-semibold text-charcoal">
                  {role.title}
                </h3>
                <p className="text-sm font-mono text-dusty-rose mt-1">{role.organization}</p>
                <p className="mt-3 text-charcoal/70 leading-relaxed">{role.description}</p>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>

      {/* Course topics */}
      <section>
        <FadeInView>
          <SectionHeading title="Course Topics" align="left" />
        </FadeInView>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, i) => (
            <FadeInView key={course.title} delay={i * 0.1}>
              <div className="p-6 rounded-xl border border-border-warm bg-cream hover:shadow-card-hover transition-shadow duration-200">
                <h3 className="font-display text-lg font-semibold text-charcoal">
                  {course.title}
                </h3>
                <p className="text-xs font-mono text-charcoal/40 mt-1">
                  {course.organization}
                </p>
                <p className="mt-3 text-sm text-charcoal/70 leading-relaxed">
                  {course.description}
                </p>
              </div>
            </FadeInView>
          ))}
        </div>
      </section>
    </div>
  );
}
