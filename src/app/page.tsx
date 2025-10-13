import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quentin JOANON : Développeur Web JavaScript',
  description:
    'Bienvenue sur mon portfolio de développeur web JavaScript ! Découvrez une collection inspirante de projets interactifs et créatifs, démontrant des compétences approfondies en développement web. Explorez des applications réactives et des interfaces utilisateur intuitives, conçues avec les dernières technologies JavaScript, telles que React, Node.js, Next.js et Redux.',
  openGraph: {
    title: 'Quentin JOANON : Développeur Web JavaScript',
    description: 'Portfolio de développeur web JavaScript spécialisé en React, Next.js et Node.js. Découvrez mes projets et compétences.',
    url: 'https://quentinjoanon.vercel.app/',
    siteName: 'Portfolio Quentin Joanon',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://quentinjoanon.vercel.app/quentin_joanon.webp',
        width: 1200,
        height: 630,
        alt: 'Quentin Joanon - Développeur Web JavaScript'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quentin JOANON : Développeur Web JavaScript',
    description: 'Portfolio de développeur web JavaScript spécialisé en React, Next.js et Node.js.',
    images: ['https://quentinjoanon.vercel.app/quentin_joanon.webp']
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
      <ProjectsSection />
    </main>
  );
}
