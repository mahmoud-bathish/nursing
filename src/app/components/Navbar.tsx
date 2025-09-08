'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const { t, dir } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 80; // Match the scroll-padding-top value

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    // Run once on mount to set initial active section
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t.nav.home, href: '#home' },
    { id: 'about', label: t.nav.about, href: '#about' },
    { id: 'services', label: t.nav.services, href: '#services' },
    { id: 'testimonials', label: t.nav.testimonials, href: '#testimonials' },
    { id: 'contact', label: t.nav.contact, href: '#contact' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-12 z-40" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center hover:opacity-80 transition duration-300">
                             <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-3 p-2 rtl:mr-0 rtl:ml-3">
                 <span className="text-white font-bold text-lg">NNC</span>
               </div>
              <span className="text-xl font-bold text-gray-900">NexusNurseCare</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <a
                key={item.id}
                href={item.href}
                className={`transition duration-300 font-medium ${
                  activeSection === item.id
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } ${index < navItems.length - 1 ? 'mr-8 rtl:mr-0 rtl:ml-8' : ''}`}
              >
                {item.label}
              </a>
            ))}
            <div className="ml-8 rtl:ml-0 rtl:mr-8">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-lg transition duration-300 font-medium ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600 rtl:border-l-0 rtl:border-r-4'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-center">
                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 