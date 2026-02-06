import React from 'react';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pb-24 md:pt-16">
        <h1 className="text-center text-4xl font-bold">
          Qui suis-je ?
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-neutral-300 dark:bg-neutral-600" />
        </h1>

        <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed">
          <p>
            Avant de coder, j'ai passé 7 ans dans le BTP. Dessinateur, conducteur de travaux, chargé d'affaires.
            Des plans, des chantiers, des clients.
          </p>

          <p>
            Un jour j'ai décidé de faire ce qui me plaisait vraiment : construire des trucs sur le web.
          </p>

          <p>
            Aujourd'hui je suis freelance, basé en région chalonnaise. Je fais des SaaS, des dashboards, des sites.
            Des apps que des gens utilisent vraiment, pas des maquettes Figma qui prennent la poussière.
          </p>

          <p className="rounded-lg bg-neutral-100 p-6 dark:bg-neutral-800">
            7 ans sur le terrain, ça m'a appris un truc : un outil que personne n'arrive à utiliser,
            c'est un outil inutile. Je fais des apps simples qui font le job.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
