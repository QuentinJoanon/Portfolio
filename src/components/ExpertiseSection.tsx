import React from 'react';

const ExpertiseSection = () => {
  return (
    <section id="expertise">
      <div className="my-12 pb-12 md:pb-24">
        <h1 className="text-center text-4xl font-bold">
          Ce que je sais faire
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-neutral-300 dark:bg-neutral-600" />
        </h1>

        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-relaxed">
          <p>
            <strong>Côté front :</strong> React, Next.js, TypeScript, TailwindCSS.
            Je fais des interfaces rapides et qui fonctionne sur mobile.
          </p>

          <p>
            <strong>Côté back :</strong> Supabase (PostgreSQL, auth, storage), API REST.
            J'ai intégré Stripe et Lemonsqueezy sur plusieurs projets (abonnements, paiements).
          </p>

          <p>
            <strong>Le reste :</strong> PWA, WordPress Headless, déploiement Vercel.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {['React', 'Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'TailwindCSS', 'Stripe', 'PWA', 'Vercel'].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
