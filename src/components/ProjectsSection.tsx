import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BsGithub, BsArrowUpRightSquare } from 'react-icons/bs';
import SlideUp from './SideUp';

const projects = [
  {
    name: 'VictoryZone',
    description:
      "VictoryZone est une plateforme de suivi d'équipe Esport issue de la reconversion professionnelle dans le domaine du numérique.",
    image: '/victoryzone.webp',
    github: 'https://github.com/QuentinJoanon/VictoryZone-Front',
    website: 'https://www.victoryzone.team/',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="text-center text-4xl font-bold">
        Mes projets
        <hr className="mx-auto my-4 h-1 w-6 rounded border-0 bg-violet-600" />
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="animation-delay-2 flex animate-slideUpCubicBezier flex-col md:flex-row md:space-x-12">
                  <div className="object-contain md:w-1/2">
                    <Link href={project.website} target="blank">
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={800}
                        className="rounded-xl shadow-xl transition-opacity hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <h1 className="mb-6 text-4xl font-bold">{project.name}</h1>
                    <p className="mb-4 text-xl leading-7 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row space-x-4 align-bottom">
                      <Link href={project.github} target="blank">
                        <BsGithub
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </Link>
                      <Link href={project.website} target="blank">
                        {' '}
                        <BsArrowUpRightSquare
                          size={30}
                          className="cursor-pointer transition-transform hover:-translate-y-1"
                        />
                      </Link>
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
