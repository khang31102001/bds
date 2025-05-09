import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      // Check which section is in view
      const sections = ['home', 'about', 'discover', 'places'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#discover', label: 'Discover' },
    { href: '#places', label: 'Places' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[20] transition-colors duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className={`flex justify-between items-center px-4 md:px-12 py-4 md:py-8 max-w-[2000px] mx-auto ${
        scrolled ? 'text-cyan-900 bg-white' : 'text-white bg-transparent'
      }`}>
        <a href="#home" className="font-bold text-h3">Boyup Brook</a>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop menu */}
        <ul className={`md:flex md:gap-10 font-medium text-normal ${
          isMenuOpen 
            ? `absolute top-full left-0 w-full ${ scrolled ? 'text-cyan-900 bg-white shadow-lg' : 'text-white bg-transparent'} py-4 flex flex-col items-end gap-4  px-4`
            : 'hidden'
        }`}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a 
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`${activeSection === href.substring(1) ? 'border-b-2' : 'hover:border-b-2'} pb-1 ${
                  (scrolled || isMenuOpen) 
                    ? (activeSection === href.substring(1) ? 'border-cyan-900' : 'hover:border-cyan-900') 
                    : (activeSection === href.substring(1) ? 'border-white' : 'hover:border-white')
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

       
      </nav>
    </header>
  );
};

export default Header;