import AboutSection from '@/components/AboutSection';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quentin JOANON : Développeur Web JavaScript',
  description:
    'Bienvenue sur mon portfolio de développeur web JavaScript ! Découvrez une collection inspirante de projets interactifs et créatifs, démontrant des compétences approfondies en développement web. Explorez des applications réactives et des interfaces utilisateur intuitives, conçues avec les dernières technologies JavaScript, telles que React, Node.js, Next.js et Redux.',
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
