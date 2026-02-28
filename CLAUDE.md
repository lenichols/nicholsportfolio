# Portfolio Project — La Shauna E. Nichols (L.E.)

## Rules
- Never add Anthropic/Claude co-author messages to commits or code
- No Oxford commas (use "x, y and z" not "x, y, and z")
- No em dashes in copy

## Site Overview
- **Domain:** lenicholsdev.com
- **Stack:** Next.js 15.1.6, React 19, Tailwind 3.4, Framer Motion 12, TypeScript 5
- **Theme:** "Blush + Rose" — cream (#FBF8F4), dusty rose (#C4787A), charcoal (#2D2D2D), plum (#7B3F5E), gold (#C4A35A)
- **Fonts:** Cormorant Garamond (display), Outfit (body), JetBrains Mono (mono/tags)
- **Pillars:** CTO | Software & App Architect | Technical Instructor
- **Email:** snicholstech@gmail.com
- **Location:** Hayward, CA

## Project Structure
```
app/
  layout.tsx              # Root layout (fonts, Navbar, Footer)
  page.tsx                # Homepage (Hero, FeaturedCaseStudies, SkillsOverview)
  globals.css             # Light theme base styles
  sitemap.ts              # SEO sitemap
  robots.ts               # robots.txt
  case-studies/
    page.tsx              # Index with domain filtering (client component)
    [slug]/page.tsx       # Detail page (SSG with generateStaticParams)
  about/page.tsx          # Bio, career timeline, cyber experience, education
  teaching/page.tsx       # Instructor roles and course topics
  contact/page.tsx        # Social links, Upwork badge, resume download
  resume/page.tsx         # Full resume as styled page
  components/
    layout/Navbar.tsx     # Fixed top nav, mobile hamburger
    layout/Footer.tsx     # Social icons, copyright
    home/HeroSection.tsx
    home/FeaturedCaseStudies.tsx
    home/SkillsOverview.tsx
    case-studies/CaseStudyCard.tsx
    case-studies/CaseStudyDetail.tsx
    case-studies/CaseStudyFilters.tsx
    about/Biography.tsx
    about/Timeline.tsx
    about/CyberExperience.tsx
    shared/FadeInView.tsx       # Framer Motion scroll wrapper
    shared/SectionHeading.tsx   # Reusable serif heading
    shared/DomainTag.tsx        # Domain pill (monospace)
    shared/Button.tsx           # primary/outline/ghost variants
lib/
  types/index.ts          # All TypeScript interfaces
  utils/cn.ts             # clsx + tailwind-merge helper
  data/
    site.ts               # Name, URLs, social links, education
    case-studies.ts        # 3 case studies (FabricFeed, QuizQueue, CostOpt)
    projects.ts            # 5 app portfolio entries
    domains.ts             # 9 domain categories
    cybersecurity.ts       # 4 security experience entries
    career.ts              # Career timeline entries
    teaching.ts            # Teaching roles and courses
    resume.ts              # Full resume data
```

## Routes (15 pages)
- `/` — Homepage
- `/case-studies` — Index with domain filter pills
- `/case-studies/[slug]` — SSG detail (fabricfeed, quizqueue, cost-optimization)
- `/about` — Bio, timeline, cyber, education
- `/resume` — Full resume page (links to PDF download)
- `/teaching` — Instructor roles and courses
- `/contact` — Social links, Upwork, resume download
- `/sitemap.xml` and `/robots.txt` — Auto-generated

## Data Pattern
All content lives in `lib/data/*.ts` files. Components import from data files — no hardcoded content in components. To update content, edit the relevant data file.
