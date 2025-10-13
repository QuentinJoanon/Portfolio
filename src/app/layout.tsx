'use client';
import Navbar from '@/components/Navbar';
import '../styles/globals.css';
import { ThemeProvider } from 'next-themes';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WD9P6KZV');`
        }} />
        {/* End Google Tag Manager */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="google-site-verification" content="LlSauuJ7yTB1YQ0IcznVnNVey6wFMMgz1eGTSxEa1W8" />
        <meta name="author" content="Quentin Joanon" />
        <meta name="keywords" content="développeur web, JavaScript, React, Next.js, Node.js, Redux, TypeScript, portfolio, développeur frontend, développeur fullstack" />
        <link rel="canonical" href="https://quentinjoanon.vercel.app/" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Quentin Joanon',
              url: 'https://quentinjoanon.vercel.app/',
              jobTitle: 'Développeur Web JavaScript',
              description: 'Développeur web spécialisé en JavaScript, React, Next.js et Node.js',
              sameAs: [
                'https://github.com/quentinjoanon',
                'https://www.linkedin.com/in/quentin-joanon',
                'https://www.malt.fr/profile/quentinjoanon'
              ],
              knowsAbout: ['JavaScript', 'React', 'Next.js', 'Node.js', 'TypeScript', 'Redux']
            })
          }}
        />
      </head>
      <body className="dark:bg-stone-900">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WD9P6KZV"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
