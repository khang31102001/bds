import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home', hasBorder: true },
    { href: '#about', label: 'About' },
    { href: '#discover', label: 'Discover' },
    { href: '#places', label: 'Places' }
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-colors duration-300 ${
      scrolled ? 'bg-white' : 'bg-transparent'
    }`}>
      <nav className={`flex justify-between items-center px-12 py-8 ${
        scrolled ? 'text-gray-800' : 'text-white'
      }`}>
        <div className="font-bold text-lg">Boyup Brook</div>
        <ul className="flex gap-10 font-medium">
          {navLinks.map(({ href, label, hasBorder }) => (
            <li key={href}>
              <a 
                href={href}
                className={`${hasBorder ? 'border-b-2' : 'hover:border-b-2'} pb-1 ${
                  scrolled ? (hasBorder ? 'border-gray-800' : 'hover:border-gray-800') 
                         : (hasBorder ? 'border-white' : 'hover:border-white')
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button aria-label="Toggle dark mode" className="ml-6">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
          </svg>
        </button>
      </nav>
    </header>
  );
};

export default Header;