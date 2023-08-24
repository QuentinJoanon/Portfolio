import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl">
      <hr className="mx-auto mt-8 h-0.5 w-full border-0 bg-neutral-200" />
      <div className="md: mx-auto flex flex-col justify-between p-4 text-center text-neutral-900 md:flex-row">
        <div className="text-neutral-500 dark:text-neutral-100">
          © 2023 Quentin Joanon
        </div>
        <div className="mb-1 flex flex-row items-center justify-center space-x-2">
          <a
            href="https://github.com/QuentinJoanon"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub
              size={30}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/quentin-joanon/"
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineLinkedin
              size={30}
              className="cursor-pointer transition-transform hover:-translate-y-1"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
