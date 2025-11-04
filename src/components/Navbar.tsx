'use client';
import React from 'react';
import { Link } from 'react-scroll/modules';
import { useTheme } from 'next-themes';
import { RiSunLine, RiMoonLine } from 'react-icons/ri';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import Image from 'next/image';

interface NavItem {
  label: string;
  page: string;
}

const NAV_ITEMS: Array<NavItem> = [
  { label: 'Accueil', page: 'home' },
  { label: 'À propos', page: 'about' },
  { label: 'Projets', page: 'projects' },
  // { label: 'Contact', page: 'https://www.linkedin.com/in/quentin-joanon/' },
];

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [navbar, setNavbar] = React.useState(false);
  return (
    <header className="fixed top-0 z-50 mx-auto w-full bg-white px-8 shadow dark:border-b dark:border-stone-600 dark:bg-stone-900 sm:px-20">
      <div className="justify-between md:flex md:items-center">
        <div>
          <div className="flex items-center justify-between py-3">
            <Link to="home">
              <div className="md: md: flex items-center gap-3 py-5">
                <Image
                  src="/logo_portfolio_fond_transparent.png"
                  alt="Logo Quentin Joanon"
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  priority
                  unoptimized
                />
                <h2 className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent">
                  Quentin Joanon
                </h2>
              </div>
            </Link>
            <div className="md:hidden">
              <button onClick={() => setNavbar(!navbar)}>
                {navbar ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 ">
              {NAV_ITEMS.map((item, idx) => {
                return (
                  <Link
                    key={idx}
                    to={item.page}
                    className={
                      'block cursor-pointer text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 lg:inline-block'
                    }
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    onClick={() => setNavbar(!navbar)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="https://www.linkedin.com/in/quentin-joanon/"
                target="_blank"
                rel="noreferrer"
                className="block text-neutral-900  hover:text-neutral-500 dark:text-neutral-100 lg:inline-block"
              >
                Contact
              </a>

              {currentTheme === 'dark' ? (
                <button
                  onClick={() => setTheme('light')}
                  className="rounded-xl bg-slate-100 p-2"
                >
                  <RiSunLine size={25} color="black" />
                </button>
              ) : (
                <button
                  onClick={() => setTheme('dark')}
                  className="rounded-xl bg-slate-100 p-2"
                >
                  <RiMoonLine size={25} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
