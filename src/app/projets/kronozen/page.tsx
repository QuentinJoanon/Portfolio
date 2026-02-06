import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BsArrowLeft, BsArrowUpRightSquare } from 'react-icons/bs';

export const metadata: Metadata = {
  title: 'Kronozen - App de pointage pour artisans | Quentin Joanon',
  description: 'Application de suivi du temps pour artisans BTP. Simple, rapide, fait pour le terrain.',
};

export default function KronozenPage() {
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
          <span className="mb-4 inline-block rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-sm">
            Projet perso
          </span>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Kronozen
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            App de pointage pour artisans
          </p>
          <div className="mt-6">
            <Link
              href="https://kronozen.fr"
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
            src="/kronozen.webp"
            alt="Kronozen"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        <section className="mb-12 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold">Pourquoi ce projet</h2>

          <p>
            Mon père est menuisier. Chaque semaine il passait des heures sur Excel et des bouts de papier
            pour noter ses heures. Combien sur tel chantier ? Quel jour ? Combien facturer ce mois-ci ?
          </p>

          <p>
            Les outils qui existaient étaient soit trop compliqués (faits pour des grosses boîtes),
            soit inutilisables sur le terrain, soit trop chers.
          </p>

          <p>
            J'ai fait un truc simple : tu ouvres l'app, tu choisis le chantier, tu mets tes heures.
            En fin de mois, la personne qui s'occupe de ça peux exporter toutes les données pour le comptable en un clic.
          </p>
        </section>

        <section className="mb-12 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold">Comment c'est fait</h2>

          <p>
            C'est une PWA (Progressive Web App) — tu peux l'installer sur ton téléphone comme une vraie app.
            Next.js, TypeScript, Supabase (PostgreSQL + Auth), TailwindCSS, Lemon Squeezy pour les paiements.
          </p>

          <p>
            L'idée c'était de faire un truc qui va droit au but. Pas de fonctionnalités inutiles,
            pas de menus dans tous les sens. Un artisan qui rentre du chantier veut juste noter ses heures
            en 30 secondes, pas configurer 15 paramètres.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Ce que ça m'a appris</h2>
          <ul className="space-y-3 text-lg">
            <li>• Construire un SaaS complet de A à Z (auth, paiements, dashboard admin)</li>
            <li>• Faire une interface ultra simple pour des gens qui veulent pas passer 10 min à comprendre</li>
            <li>• Écouter les retours utilisateurs et itérer</li>
          </ul>
        </section>

        <footer className="flex flex-col gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-700 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="https://kronozen.fr"
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
