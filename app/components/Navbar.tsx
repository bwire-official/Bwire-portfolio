'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun, FaUser, FaCode, FaEnvelope, FaDownload } from 'react-icons/fa';
import Image from 'next/image';
import { useTheme } from 'next-themes';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About', icon: <FaUser className="w-5 h-5" /> },
    { href: '#projects', label: 'Projects', icon: <FaCode className="w-5 h-5" /> },
    { href: '#contact', label: 'Contact', icon: <FaEnvelope className="w-5 h-5" /> }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Profile and Name */}
          <div className="flex items-center space-x-4">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-blue-500">
              <Image
                src="/pfp white.jpg"
                alt="Bwire"
                fill
                className="object-cover"
                priority
              />
            </div>
            <span className="text-lg font-semibold text-gray-900 dark:text-white">Bwire</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center space-x-2 group"
              >
                {link.icon}
                <span className="relative">
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                </span>
              </a>
            ))}
          </div>

          {/* Theme Toggle and CV Download ...*/}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
            </button>
           <a
  href="#"
  aria-disabled="true"
  tabIndex={-1}
  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg opacity-50 pointer-events-none rounded-lg"
>
  <FaDownload className="w-4 h-4" />
  <span className="hidden sm:inline">Download CV</span>
</a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 
