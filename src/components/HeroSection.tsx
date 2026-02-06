'use client';
import React from 'react';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { HiArrowDown } from 'react-icons/hi';

const HeroSection = () => {
  return (
    <section id="home">
      <div className="my-10 flex flex-col items-center justify-center py-16 text-center sm:py-24 md:py-32">
        <Image
          src="/quentin_joanon.webp"
          alt="Quentin Joanon"
          width={150}
          height={150}
          className="mb-8 rounded-full shadow-lg"
          priority
        />

        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Développeur Web Fullstack
        </h1>
        <h2 className="mt-6 text-xl font-medium text-neutral-600 dark:text-neutral-400 md:mt-8 md:text-2xl">
          React, Next.js, TypeScript, Supabase
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl">
          Je conçois et développe des{' '}
          <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text font-semibold text-transparent">
            applications web modernes
          </span>{' '}
          — SaaS, dashboards, sites performants.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent md:text-4xl">
              3 ans
            </span>
            <span className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              d'expérience dev
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent md:text-4xl">
              SaaS
            </span>
            <span className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              en production
            </span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent md:text-4xl">
              Freelance
            </span>
            <span className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              disponible
            </span>
          </div>
        </div>

        <Link
          to="contact"
          className="mt-10 cursor-pointer rounded-lg bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform hover:scale-105"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          Discuter de votre projet
        </Link>
      </div>

      <div className="flex flex-row justify-center pb-8">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="cursor-pointer"
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
