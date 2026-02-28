import type { Metadata } from 'next';
import { Cormorant_Garamond, Outfit, JetBrains_Mono } from 'next/font/google';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './globals.css';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://lenicholsdev.com'),
  title: {
    default: 'La Shauna E. Nichols - CTO | Software & App Architect | Technical Instructor',
    template: '%s | La Shauna E. Nichols',
  },
  description:
    'Engineering leader with 15+ years of experience building secure, scalable web and mobile platforms. CTO, Software & App Architect and Technical Instructor.',
  keywords: [
    'CTO',
    'Software Architect',
    'Technical Instructor',
    'Cybersecurity',
    'Full-Stack Developer',
    'Mobile App Development',
    'Hybrid Apps',
    'React Native',
    'Cloud Security',
    'React',
    'Next.js',
    'AWS',
    'La Shauna E. Nichols',
  ],
  authors: [{ name: 'La Shauna E. Nichols' }],
  creator: 'La Shauna E. Nichols',
  openGraph: {
    title: 'La Shauna E. Nichols - CTO | Software & App Architect | Technical Instructor',
    description:
      'Engineering leader with 15+ years building secure, scalable SaaS platforms. Explore case studies and technical expertise.',
    url: 'https://lenicholsdev.com',
    siteName: 'La Shauna E. Nichols',
    images: [
      {
        url: '/og_image.png',
        width: 1200,
        height: 630,
        alt: 'La Shauna E. Nichols - CTO | Software Architect | Technical Instructor',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'La Shauna E. Nichols - CTO | Software & App Architect | Technical Instructor',
    description:
      'Engineering leader with 15+ years building secure, scalable SaaS platforms.',
    creator: '@lenicholsdev',
    images: ['/og_image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${outfit.variable} ${jetbrains.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
