'use client';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="my-10 flex flex-col items-center justify-center py-16 text-center sm:py-32 md:flex-row md:space-x-4 md:py-52 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image src="/quentin_joanon.webp" alt="" width={300} height={300} />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="mt-6 text-4xl font-bold md:mt-0 md:text-6xl">
            Développeur Front-End React
          </h1>
          <p className=" mb-6 mt-4 text-lg md:text-2xl">
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
      <div className="flex flex-row justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
