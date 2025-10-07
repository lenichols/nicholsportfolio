import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'La Shauna E. Nichols - Software Engineering Leadership (CTO)',
	description:
		'Welcome to my portfolio! I am a passionate frontend loving full-stack developer and engineering leader who bridges the gap between frontend and backend development. I speialize in creating complete web solutions, from beautiful user interfaces to robust server architectures.',
	keywords: [
		'Full-Stack Developer',
		'Software Engineer',
		'Frontend Development',
		'Backend Development',
		'React',
		'Next.js',
		'Node.js',
		'TypeScript',
		'Database Design',
		'API Development',
		'Cloud Solutions',
		'DevOps',
		'System Architecture',
		'Web Development',
		'La Shauna E. Nichols',
	],
	authors: [{ name: 'La Shauna E. Nichols' }],
	creator: 'La Shauna E. Nichols',
	openGraph: {
		title: 'La Shauna E. Nichols - Software Engineering Leadership (CTO)',
		description:
			'Application Security Engineer, Cloud Security Engineer, and Security Program Lead. Explore my projects and technical expertise across the entire development stack.',
		url: 'https://lenicholsdev.com',
		siteName: 'La Shauna E. Nichols - Portfolio',
		images: [
			{
				url: '/og_image.png',
				width: 1200,
				height: 630,
				alt: 'La Shauna E. Nichols - Software Engineering Leadership (CTO)',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'La Shauna E. Nichols - Software Engineering Leadership (CTO)',
		description:
			'Application Security Engineer, Cloud Security Engineer, and Security Program Lead. Explore my projects and technical expertise across the entire development stack.',
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
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
