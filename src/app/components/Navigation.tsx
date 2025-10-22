'use client';

import Image from 'next/image';
import { useState } from 'react';

interface NavigationProps {
  onRegisterClick: () => void;
}

export default function Navigation({ onRegisterClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-[#63f8fc]/20">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 cursor-pointer z-50"
          >
            <Image 
              src="/assets/images/JH 2.png" 
              alt="JuniorHack 7.0" 
              width={96}
              height={36}
              className="h-7 sm:h-9 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 font-inter text-sm">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-[#63f8fc] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('about');
              }}
            >
              About JuniorHack
            </a>
            <a 
              href="#prizepool" 
              className="text-gray-300 hover:text-[#63f8fc] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('prizepool');
              }}
            >
              Prize Pool
            </a>
            <a 
              href="#timeline" 
              className="text-gray-300 hover:text-[#63f8fc] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('timeline');
              }}
            >
              Timeline
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-[#63f8fc] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Contact us
            </a>
          </div>

          {/* Desktop CTA Button */}
          <button 
            onClick={onRegisterClick}
            className="hidden sm:block cyberpunk-btn"
            data-text="REGISTER_NOW"
          >
            <span className="cyberpunk-btn-text">REGISTER_NOW</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden z-50 p-2 text-gray-300 hover:text-[#63f8fc] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-[#63f8fc]/20">
            <div className="flex flex-col space-y-4 px-4 py-6 font-inter">
              <a 
                href="#about" 
                className="text-gray-300 hover:text-[#63f8fc] transition-colors py-2 border-b border-gray-800"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
              >
                About JuniorHack
              </a>
              <a 
                href="#prizepool" 
                className="text-gray-300 hover:text-[#63f8fc] transition-colors py-2 border-b border-gray-800"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('prizepool');
                }}
              >
                Prize Pool
              </a>
              <a 
                href="#timeline" 
                className="text-gray-300 hover:text-[#63f8fc] transition-colors py-2 border-b border-gray-800"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('timeline');
                }}
              >
                Timeline
              </a>
              <a 
                href="#contact" 
                className="text-gray-300 hover:text-[#63f8fc] transition-colors py-2 border-b border-gray-800"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
              >
                Contact us
              </a>
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRegisterClick();
                }}
                className="cyberpunk-btn w-full mt-4"
                data-text="REGISTER_NOW"
              >
                <span className="cyberpunk-btn-text">REGISTER_NOW</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
