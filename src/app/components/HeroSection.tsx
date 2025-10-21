'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onRegisterClick: () => void;
}

export default function HeroSection({ onRegisterClick }: HeroSectionProps) {
  const [typingComplete, setTypingComplete] = useState(false);

  useEffect(() => {
    // Remove cursor after typing animation completes (2.5s)
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative flex justify-between items-center h-screen px-6 overflow-hidden bg-gradient-to-b from-[#1B2735] to-[#090A0F]">
      {/* Animated Stars Background */}
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      
      <div className="max-w-5xl mx-auto text-center relative">
        <div className="space-y-6">
          {/* Main Title */}
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="font-audiowide mt-20 text-4xl md:text-5xl font-bold leading-tight"
            >
              <span className="block text-white glitch-title" data-text="WELCOME TO">WELCOME TO</span>
              <span className={`block gradient-text text-6xl md:text-7xl glitch-title typing-effect ${typingComplete ? 'typing-complete' : ''}`} data-text="JUNIORHACK 7.0">JUNIOR_HACK 7.0</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.8,
                duration: 0.8,
              }}
              className="text-gray-300 font-inter text-md md:text-md max-w-3xl mx-auto leading-relaxed"
            >
              University of Kelaniya&apos;s Premier Intra-University Hackathon
              <br />
              <span className="text-[#63f8fc] font-semibold">Empowering Junior Students to Innovate Through Code</span>
            </motion.p>
          </div>

          {/* Event Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.0,
              duration: 0.6,
            }}
            className="flex flex-wrap justify-center gap-8 py-6"
          >
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#63f8fc]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#63f8fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm font-inter">Target Participants</p>
                <p className="text-white font-bold font-inter">1st & 2nd Year Students</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#63f8fc]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#63f8fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm font-inter">University</p>
                <p className="text-white font-bold font-inter">University of Kelaniya</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-[#63f8fc]/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-[#63f8fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-sm font-inter">Teams</p>
                <p className="text-white font-bold font-inter">50+ Teams</p>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 1.2,
              duration: 0.6,
            }}
            className="mt-20 flex flex-wrap items-center justify-center gap-4"
          >
            <button 
              onClick={onRegisterClick}
              className="cyberpunk-btn-large"
              data-text="REGISTER_NOW"
            >
              <span className="cyberpunk-btn-text">REGISTER_NOW</span>
            </button>
            <button 
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="cyberpunk-btn-outline flex items-center space-x-2" 
              data-text="LEARN_MORE"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="cyberpunk-btn-text">LEARN_MORE</span>
            </button>
          </motion.div>

          {/* Organized By */}
          {/* <div className="pt-8">
            <p className="text-gray-400 text-sm font-inter mb-3">Organized by</p>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              <span className="text-[#63f8fc] font-audiowide text-lg">SESA</span>
              <span className="text-gray-500">|</span>
              <span className="text-[#63f8fc] font-audiowide text-lg">IEEE Student Branch</span>
            </div>
          </div> */}
        </div>
      </div>

    </main>
  );
}
