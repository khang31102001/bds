import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0 );

      // Check which section is in view
      const sections = ['home', 'description', 'gallery','contact','summary'];
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
    { name: 'Home', href: '/', isHash: false, id: 'home' },
    { name: 'Description', href: '#description', isHash: true, id: 'description' },
    { name: 'Gallery & Video', href: '#gallery', isHash: true, id: 'gallery' },
    { name: 'Contact', href: '#contact', isHash: true, id: 'contact' },
    { name: 'Summary', href: '#summary', isHash: true, id: 'summary' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash: boolean, id: string) => {
    e.preventDefault();
    
    if (isHash) {
      // Handle hash links (scroll to section)
      const targetElement = document.getElementById(id);
      if (targetElement) {
        const headerOffset = 80; // Adjust this value based on your header height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        // Check if device is mobile
        const isMobile = window.innerWidth < 768;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
          // Add custom duration for mobile
          ...(isMobile && { duration: 1000 }) // Slower scroll on mobile
        });
      }
    } else {
      // Handle route links (navigate to page)
      if (href === '/') {
        const isMobile = window.innerWidth < 768;
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth',
          ...(isMobile && { duration: 1000 })
        });
      } else if (href === '/gallery') {
        const isMobile = window.innerWidth < 768;
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth',
          ...(isMobile && { duration: 1000 })
        });
        setTimeout(() => {
          navigate(href);
        }, isMobile ? 1000 : 500); // Longer delay for mobile
      } else {
        navigate(href);
      }
    }
    
    setIsMenuOpen(false);
  };

  const isActive = (id: string) => {
    // if (location.pathname === '/gallery') return id === 'gallery';
    return activeSection === id;
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-[20] transition-colors duration-300 ${
      scrolled ? 'bg-white' : 'bg-transparent'
    }`}>
      <nav className={`flex justify-between items-center px-4 md:px-12 py-4 md:py-6 max-w-[2050px] mx-auto ${
        scrolled ? 'text-emerald-900 bg-white' : 'text-white bg-transparent'
      }`}>
        <Link 
          to="/"
          className="font-bold text-h3 cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            const section = document.getElementById("gallery");
            if (section) {
              const yOffset = -100; 
              const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
            setIsMenuOpen(false);
          }}
        >
          
          <h1 className="text-white text-2xl  lg:text-3xl xl:text-4xl font-extrabold leading-tight text-left mx-2">
                <span className={`${scrolled ? "text-emerald-900" : "text-white"}`}>For Private Sale</span><br />
                <span className="relative inline-block">
                  <span className="text-emerald-200">Boyup Brook Acreage</span>
                  
                  <span className ={`absolute -bottom-1 left-0 ${scrolled ? "bg-emerald-900" : " bg-white"} rounded-full w-[80%] h-1`}></span>
                </span>
                
                <p className={`${scrolled ? "text-yellow-500" : "text-yellow-200"} mt-4`}>$780,000 - $900,000 </p>
          </h1>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop menu */}
        <ul className={`md:flex md:gap-10 font-medium text-normal transform transition-all duration-300 ${
          isMenuOpen 
            ? `md:brightness-100 brightness-125 absolute top-full left-0 w-full ${ scrolled ? 'text-emerald-900 bg-white shadow-lg' : 'text-white bg-transparent'} py-4 flex flex-col items-end gap-4 px-4 opacity-100`
            : 'hidden md:flex opacity-0 md:opacity-100'
        }`}>
          {navLinks.map(({ href, name, isHash, id }) => (
            <li key={href}>
              <a 
                href={href}
                onClick={(e) => handleNavClick(e, href, isHash, id)}
                className={`text-sm sm:text-base md:text-lg ${isActive(id) ? 'border-b-2' : 'hover:border-b-2'} pb-1 ${
                  (scrolled || isMenuOpen) 
                    ? (isActive(id) ? 'border-emerald-900' : 'hover:border-emerald-900') 
                    : (isActive(id) ? 'border-white' : 'hover:border-white')
                }`}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;