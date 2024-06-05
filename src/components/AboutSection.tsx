import React from 'react';

const skills = [
  { skill: 'HTML5' },
  { skill: 'CSS3' },
  { skill: 'Javascript' },
  { skill: 'Typescript' },
  { skill: 'React' },
  { skill: 'Next.js' },
  { skill: 'Wordpress Headless' },
  { skill: 'TailwindCSS' },
  { skill: 'Sass' },
  { skill: 'Node.js' },
  { skill: 'Express.js' },
  { skill: 'Git' },
  { skill: 'GitHub' },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pb-48 md:pt-16">
        <h1 className="text-center text-4xl font-bold">
          A propos de moi
          <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-violet-600" />
        </h1>
        <div className="justify-cente flex flex-col items-stretch space-y-10 align-top md:flex-row md:space-x-10  md:space-y-0 md:p-4 md:text-left">
          <div className="md:w-1/2">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              Qui suis-je ?
            </h1>
            <p>
              Salut ! Je suis Quentin, un{' '}
              <span className="font-semibold text-violet-600">
                Développeur Front-End
              </span>{' '}
              freelance basé dans la région Chalonnaise, juste au-dessus de
              Lyon. Passionné par le monde du web, je trouve mon épanouissement
              dans les créations visuelles et interactives qui captivent les
              utilisateurs.
            </p>
            <br />
            <p>
              J'adore façonner des expériences web engageantes et repousser les
              limites de l'
              <span className="font-semibold text-violet-600">innovation</span>.
              Chaque projet que j'entreprends devient une opportunité
              d'apprendre et de grandir. Si vous partagez cette passion ou si
              vous avez une vision à concrétiser, n'hésitez pas à me{' '}
              <span className="font-semibold text-violet-600">contacter</span>.
              Ensemble, créons quelque chose d'extraordinaire !
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="mb-6 text-center text-2xl font-bold md:text-left">
              Mes Skills
            </h1>
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((skill, index) => {
                return (
                  <p
                    className="mb-2 mr-2 inline-block rounded-full bg-violet-600 px-3 py-1 text-sm font-semibold text-white"
                    key={index}
                  >
                    {skill.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
