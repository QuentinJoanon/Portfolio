import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BsArrowLeft, BsArrowUpRightSquare } from 'react-icons/bs';

export const metadata: Metadata = {
  title: 'Alobees - Automatisation BTP | Quentin Joanon',
  description: 'Scripts d\'automatisation pour une solution de suivi de chantier. Google Apps Script, API REST.',
};

export default function AlobeesPage() {
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
            Alobees
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            Automatisation pour le BTP
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            Mission de 1 an et demi (2023-2025)
          </p>
          <div className="mt-6">
            <Link
              href="https://alobees.com/"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 dark:bg-white dark:text-neutral-900 px-6 py-3 font-semibold text-white transition-all hover:opacity-80"
            >
              Voir Alobees
              <BsArrowUpRightSquare size={18} />
            </Link>
          </div>
        </header>

        <div className="mb-12 overflow-hidden rounded-xl shadow-xl">
          <Image
            src="/alobees.webp"
            alt="Alobees"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        <section className="mb-12 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold">Le contexte</h2>

          <p>
            Alobees c'est une app de suivi de chantier. Ils avaient besoin de quelqu'un pour automatiser
            des trucs entre leur app et les outils qu'utilisent leurs clients (Google Sheets, etc.).
          </p>

          <p>
            Comme j'ai bossé 7 ans dans le BTP avant, je comprenais direct ce dont les gens sur le terrain
            avaient besoin. Pas besoin qu'on m'explique ce qu'est un conducteur de travaux ou un planning chantier.
          </p>
        </section>

        <section className="mb-12 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold">Ce que j'ai fait</h2>

          <p>
            Des scripts Google Apps Script pour automatiser le reporting. Synchronisation de données entre
            leur API REST et des Google Sheets. Des trucs qui évitent aux conducteurs de travaux de passer
            des heures à recopier des infos d'un outil à l'autre.
          </p>

          <p>
            Stack : Google Apps Script, API REST, JavaScript.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Pourquoi ça a bien marché</h2>
          <p className="text-lg">
            Je parle la même langue que les utilisateurs. Quand un conducteur de travaux dit "j'ai besoin
            de récupérer les heures par chantier pour la compta", je comprends exactement ce qu'il veut.
            Pas besoin de 3 réunions pour cadrer le besoin.
          </p>
        </section>

        <footer className="flex flex-col gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-700 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="https://alobees.com/"
            target="_blank"
            className="inline-flex items-center gap-2 font-semibold transition-colors hover:text-neutral-600 dark:hover:text-neutral-300"
          >
            Voir Alobees
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
