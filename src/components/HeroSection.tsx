'use client';
import Image from 'next/image';
import React from 'react';
import profilPicture from '../public/quentin_joanon.webp';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="my-10 flex flex-col items-center justify-center py-16 text-center">
        <div>
          <Image src={profilPicture} alt="" width={300} height={300} />
        </div>
        <div>
          <h1 className="mt-6 text-4xl font-bold">
            Développeur Front-End React
          </h1>
          <p className="mb-6 mt-4 text-lg">
            Je suis{' '}
            <span className="font-semibold text-violet-600">
              Quentin Joanon
            </span>
            . Un Développeur Front-End passionné situé au dessus de Lyon en
            France.
          </p>
          <Link
            to="projects"
            className="rounded bg-violet-600 px-6 py-3 font-semibold text-neutral-100 shadow-lg hover:bg-violet-700"
            activeClass="true"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projets
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
