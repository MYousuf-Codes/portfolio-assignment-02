"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import '../styles/header.css'; // Import the custom CSS

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false); // Close menu on link click
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link href="/" className="logo">
          <span className="logo-text-white">&lt;M</span>
          <span className="logo-text-yellow"> Y</span>
          <span className="logo-text-white">/&gt;</span>
        </Link>

        {/* Hamburger Button for Mobile */}
        <div className="menu-toggle">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <XMarkIcon className="icon" /> : <Bars3Icon className="icon" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="menu-desktop">
          {['home', 'about', 'contact'].map((page: string) => (
            <Link
              key={page}
              href={`/${page}`}
              className="menu-link"
              onClick={handleLinkClick}
            >
              {page.charAt(0).toUpperCase() + page.slice(1)}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="menu-mobile">
          <div className="menu-mobile-items">
            {['home', 'about', 'contact'].map((page: string) => (
              <Link
                key={page}
                href={`/${page}`}
                className="menu-link"
                onClick={handleLinkClick}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
