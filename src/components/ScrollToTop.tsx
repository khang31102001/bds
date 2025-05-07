import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from '@heroicons/react/24/outline';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed right-8 bottom-8 bg-primary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-primary-dark ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <ArrowUpIcon className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTop; 