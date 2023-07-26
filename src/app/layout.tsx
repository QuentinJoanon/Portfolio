'use client';
import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';

/* export const metadata: Metadata = {
  title: 'Quentin JOANON : Développeur Web JavaScript',
  description:
    'Bienvenue sur mon portfolio de développeur web JavaScript ! Découvrez une collection inspirante de projets interactifs et créatifs, démontrant des compétences approfondies en développement web. Explorez des applications réactives et des interfaces utilisateur intuitives, conçues avec les dernières technologies JavaScript, telles que React, Node.js, Next.js et Redux. Plongez dans le monde captivant du développement web et laissez-vous impressionner par des réalisations innovantes.',
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
