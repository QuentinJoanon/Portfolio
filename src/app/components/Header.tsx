import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <div className="header">
      <div className="header__title">
        <h1>Quentin JOANON</h1>
        <nav className="header__nav">
          <ul>
            <li>
              <Link href="#about">A propos</Link>
            </li>
            <li>
              <Link href="#skills">Compétences</Link>
            </li>
            <li>
              <Link href="#projects">Projets</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      ;
    </div>
  );
}
