'use client';

import Image from 'next/image';

interface NavigationProps {
  onRegisterClick: () => void;
}

export default function Navigation({ onRegisterClick }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20 border-b border-[#63f8fc]/20">
      <div className="w-full mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <Image 
              src="/assets/images/JH 2.png" 
              alt="JuniorHack 7.0" 
              width={96}
              height={36}
              className="h-9 w-auto object-contain"
              priority
            />
          </a>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-8 font-inter text-sm">
            <a 
              href="#about" 
              className="text-gray-300 hover:text-[#63f8fc] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              About JuniorHack
            </a>
            <a 
              href="#prizepool" 
              className="text-gray-300 hover:text-[#63f8fc] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('prizepool')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Prize Pool
            </a>
            <a 
              href="#timeline" 
              className="text-gray-300 hover:text-[#63f8fc] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Timeline
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-[#63f8fc] transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact us
            </a>
          </div>

          {/* CTA Button */}
          <button 
            onClick={onRegisterClick}
            className="cyberpunk-btn"
            data-text="REGISTER_NOW"
          >
            <span className="cyberpunk-btn-text">REGISTER_NOW</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
