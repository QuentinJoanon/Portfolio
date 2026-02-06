import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SideUp';

type Project = {
  name: string;
  description: string;
  image: string;
  slug: string;
  website: string;
  technos: string[];
  highlight?: string;
};


const technoLinks: { [key: string]: string } = {
  'Next.js': 'https://nextjs.org/',
  'TypeScript': 'https://www.typescriptlang.org/',
  'WordPress Headless': 'https://wordpress.org/',
  'Sass': 'https://sass-lang.com/',
  'React': 'https://react.dev/',
  'TailwindCSS': 'https://tailwindcss.com/',
  'GraphQL': 'https://graphql.org/',
  'Supabase': 'https://supabase.com/',
  'Stripe': 'https://stripe.com/',
  'PWA': 'https://web.dev/progressive-web-apps/',
  'IndexedDB': 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
  'Service Workers': 'https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API',
};

const projects: Project[] = [
  {
    name: 'Kronozen',
    description:
      'Une app de pointage pour artisans. Mon père est menuisier, je l\'ai faite à partir de ses besoins.',
    image: '/kronozen.webp',
    slug: 'kronozen',
    website: 'https://kronozen.fr',
    technos: ['Next.js', 'TypeScript', 'Supabase', 'PWA', 'TailwindCSS'],
    highlight: 'Mon projet perso',
  },
  {
    name: 'Objectively',
    description:
      'Un SaaS pour prendre des décisions en équipe avec des grilles d\'évaluation. Utilisé par Le Cèdre (groupement d\'achat). Stripe intégré, multi-tenancy.',
    image: '/objectively.webp',
    slug: 'objectively',
    website: 'https://objectively.fr/',
    technos: ['Next.js', 'TypeScript', 'Supabase', 'Stripe', 'TailwindCSS'],
  },
  {
    name: 'Alobees',
    description:
      'Automatisation pour une app de suivi de chantier. Des scripts pour faire communiquer le terrain et le bureau.',
    image: '/alobees.webp',
    slug: 'alobees',
    website: 'https://alobees.com/',
    technos: ['Google Apps Script', 'API REST', 'JavaScript'],
  },
  {
    name: 'MecateamCluster',
    description:
      'Refonte du site d\'un réseau d\'entreprises ferroviaires. WordPress en back, Next.js en front.',
    image: '/mecateamcluster.webp',
    slug: 'mecateamcluster',
    website: 'https://www.mecateamcluster.org/',
    technos: ['Next.js', 'TypeScript', 'WordPress Headless', 'Sass', 'GraphQL'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center text-4xl font-bold">
        Projets
        <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-neutral-300 dark:bg-neutral-600" />
      </h1>

      <p className="mx-auto mb-12 max-w-2xl text-center text-lg text-neutral-600 dark:text-neutral-400">
        Les projets que j'ai construits et qui tournent.
      </p>

      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="animation-delay-2 flex animate-slideUpCubicBezier flex-col md:flex-row md:space-x-12">
                  <div className="object-contain md:w-1/2">
                    <Link href={`/projets/${project.slug}`}>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={1000}
                        height={800}
                        className="rounded-xl shadow-xl transition-opacity hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-6 md:mt-0 md:w-1/2">
                    {project.highlight && (
                      <span className="mb-2 inline-block rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-sm">
                        {project.highlight}
                      </span>
                    )}
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">{project.name}</h2>
                    <p className="mb-4 text-lg leading-7 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="mb-4 flex flex-row items-center space-x-4">
                      <Link
                        href={`/projets/${project.slug}`}
                        className="font-semibold text-purple-500 transition-colors hover:text-purple-600"
                      >
                        Voir le détail →
                      </Link>
                      <Link href={project.website} target="_blank">
                        <BsArrowUpRightSquare
                          size={24}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                    <div>
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-neutral-500">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap">
                        {project.technos.map((techno, idx) => {
                          const technoLink = technoLinks[techno];
                          return technoLink ? (
                            <Link
                              key={idx}
                              href={technoLink}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="mb-2 mr-2 inline-block cursor-pointer rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-sm transition-colors hover:bg-neutral-300 dark:hover:bg-neutral-600">
                                {techno}
                              </span>
                            </Link>
                          ) : (
                            <span
                              className="mb-2 mr-2 inline-block rounded-full bg-neutral-200 dark:bg-neutral-700 px-3 py-1 text-sm"
                              key={idx}
                            >
                              {techno}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
