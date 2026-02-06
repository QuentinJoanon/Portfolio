import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BsArrowLeft, BsArrowUpRightSquare } from 'react-icons/bs';

export const metadata: Metadata = {
  title: 'Objectively - SaaS d\'aide à la décision | Quentin Joanon',
  description: 'Plateforme pour prendre des décisions en équipe avec des grilles d\'évaluation pondérées. Utilisé par Le Cèdre.',
};

export default function ObjectivelyPage() {
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
            Objectively
          </h1>
          <p className="text-xl text-neutral-600 dark:text-neutral-400">
            SaaS pour décisions en équipe
          </p>
          <div className="mt-6">
            <Link
              href="https://objectively.fr/"
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
            src="/objectively.webp"
            alt="Objectively"
            width={1200}
            height={800}
            className="w-full"
          />
        </div>

        <section className="mb-12 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold">Le projet</h2>

          <p>
            Une plateforme pour créer des grilles d'évaluation et prendre des décisions à plusieurs.
            Tu définis des critères, tu les pondères, chaque membre de l'équipe note, et à la fin
            t'as un score objectif.
          </p>

          <p>
            Utilisé par Le Cèdre (un groupement de 12 000 structures) pour leurs achats et décisions stratégiques.
          </p>
        </section>

        <section className="mb-12 space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl font-bold">Ce que j'ai fait</h2>

          <p>
            SaaS complet de A à Z. Architecture multi-tenancy (chaque organisation a ses données isolées
            grâce au Row Level Security de Supabase).
          </p>

          <p>
            Intégration Stripe complète : abonnements, webhooks pour la synchro des statuts, gestion
            automatique des renouvellements.
          </p>

          <p>
            Système de permissions par rôles (admin, créateur de formulaires, simple évaluateur).
            Invitations par email.
          </p>

          <p>
            Stack : Next.js, TypeScript, Supabase, PostgreSQL, Stripe, TailwindCSS, Vercel.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Les trucs intéressants techniquement</h2>
          <ul className="space-y-3 text-lg">
            <li>• Multi-tenancy avec RLS (Row Level Security) — chaque client ne voit que ses données</li>
            <li>• Formulaires dynamiques avec calculs de scores pondérés</li>
            <li>• Webhooks Stripe pour garder les abonnements synchro</li>
          </ul>
        </section>

        <footer className="flex flex-col gap-4 border-t border-neutral-200 pt-8 dark:border-neutral-700 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="https://objectively.fr/"
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
