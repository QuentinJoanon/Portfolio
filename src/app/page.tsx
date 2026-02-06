import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quentin JOANON : Développeur Web Fullstack',
  description:
    'Développeur web fullstack freelance spécialisé React, Next.js, TypeScript, Supabase. Je conçois des applications web modernes : SaaS, dashboards, sites performants.',
  openGraph: {
    title: 'Quentin JOANON : Développeur Web Fullstack',
    description: 'Développeur web fullstack freelance. React, Next.js, TypeScript, Supabase. Applications web modernes, SaaS, sites performants.',
    url: 'https://quentinjoanon.dev/',
    siteName: 'Portfolio Quentin Joanon',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://quentinjoanon.dev/quentin_joanon.webp',
        width: 1200,
        height: 630,
        alt: 'Quentin Joanon - Développeur Web Fullstack'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quentin JOANON : Développeur Web Fullstack',
    description: 'Développeur web fullstack freelance. React, Next.js, TypeScript, Supabase.',
    images: ['https://quentinjoanon.dev/quentin_joanon.webp']
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
    }
  }
};

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
