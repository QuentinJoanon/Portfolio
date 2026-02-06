import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BsArrowLeft, BsArrowUpRightSquare } from 'react-icons/bs';

export const metadata: Metadata = {
  title: 'MecateamCluster - WordPress Headless | Quentin Joanon',
  description: 'Refonte du site d\'un réseau d\'entreprises ferroviaires. WordPress en back, Next.js en front.',
};

export default function MecateamClusterPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 md:max-w-4xl">
      <Link
        href="/#projects"
        className="mb-8 inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
      >
        <BsArrowLeft size={20} />
        Retour
      </Link>

      <article>
        <header className="mb-12">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            MecateamCluster
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Site WordPress Headless
          </p>
          <div className="mt-6">
            <Link
              href="https://www.mecateamcluster.org/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 dark:bg-white dark:text-neutral-900 px-6 py-3 font-semibold text-white transition-all hover:opacity-80"
            >
              Voir le site
              <BsArrowUpRightSquare size={18} />
            </Link>
          </div>
        </header>

        <div className="mb-12 overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/mecateamcluster.webp"
            alt="MecateamCluster"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        <section className="mb-12 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold">Le projet</h2>

          <p>
            MecateamCluster c'est un réseau d'entreprises dans le ferroviaire. Ils voulaient refaire
            leur site pour qu'il soit plus rapide, mais sans changer les habitudes de leurs équipes
            qui gèrent le contenu sur WordPress.
          </p>
        </section>

        <section className="mb-12 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold">La solution</h2>

          <p>
            Architecture "headless" : WordPress reste en back pour que les éditeurs gardent leur interface
            habituelle, et Next.js en front pour les perfs. Les deux communiquent via GraphQL.
          </p>

          <p>
            Le client voulait pouvoir modifier toute la page d'accueil sans toucher au code.
            J'ai mis en place des champs ACF (Advanced Custom Fields) côté WordPress, récupérés via GraphQL.
            Ils peuvent changer les textes, les images, l'ordre des sections — tout ça depuis leur back-office habituel.
          </p>

          <p>
            Résultat : un site rapide (bon score Core Web Vitals), bien référencé, et des éditeurs
            qui n'ont rien eu à réapprendre.
          </p>

          <p>
            Stack : Next.js, TypeScript, WordPress Headless, ACF, GraphQL, Sass.
          </p>
        </section>

        <footer className="flex flex-col gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-700 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="https://www.mecateamcluster.org/"
            target="_blank"
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            Voir le site
            <BsArrowUpRightSquare size={18} />
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            <BsArrowLeft size={18} />
            Retour aux projets
          </Link>
        </footer>
      </article>
    </main>
  );
}
