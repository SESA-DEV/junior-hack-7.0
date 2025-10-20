'use client';

import { useState } from 'react';
import RegistrationModal from './components/RegistrationModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dots">
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-900/50 border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 border-2 border-purple-500 rounded-lg flex items-center justify-center">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-purple-500 rounded-sm"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-sm"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-sm"></div>
                </div>
              </div>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8 font-[family-name:var(--font-inter)] text-sm">
              <a href="#about" className="text-gray-300 hover:text-purple-400 transition-colors">
                About JuniorHack
              </a>
              <a href="#timeline" className="text-gray-300 hover:text-purple-400 transition-colors">
                Timeline
              </a>
              <a href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                Contact us
              </a>
            </div>

            {/* CTA Button */}
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-6 py-2 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all font-[family-name:var(--font-inter)] text-sm"
            >
              Register Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="font-[family-name:var(--font-orbitron)] text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block text-white">LET ME SHOW</span>
                  <span className="block gradient-text">YOU MAGIC</span>
                  <span className="block text-purple-400">TRICK</span>
                </h1>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 font-[family-name:var(--font-inter)]">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Teams Competing</p>
                  <p className="text-2xl font-bold text-white">50+</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Innovation Areas</p>
                  <p className="text-2xl font-bold text-white">All of them</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Failures Expected</p>
                  <p className="text-2xl font-bold text-white">None</p>
                </div>
              </div>

              {/* Warning */}
              <div className="flex items-center space-x-2 text-yellow-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <p className="text-sm font-[family-name:var(--font-inter)]">Warning! Don&apos;t stare at our innovation too much, it&apos;s addictive.</p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-[family-name:var(--font-inter)] font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                >
                  Let me see
                </button>
                <button className="px-8 py-3 border border-purple-500 text-purple-400 rounded-lg font-[family-name:var(--font-inter)] font-medium hover:bg-purple-500/10 transition-all flex items-center space-x-2">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Watch intro</span>
                </button>
              </div>
            </div>

            {/* Right Content - Feature Card */}
            <div className="relative">
              <div className="card-hover bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-purple-500/30 rounded-2xl overflow-hidden">
                <div className="relative aspect-square bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                  
                  {/* Icon/Image placeholder */}
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-32 h-32 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                        <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="font-[family-name:var(--font-orbitron)] text-2xl font-bold text-white">JuniorHack 7.0</div>
                      <div className="text-gray-400 font-[family-name:var(--font-inter)]">#2025</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-slate-900/80 border-t border-purple-500/20">
                  <div className="flex items-center justify-between">
                    <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-white">Innovation Awaits</h3>
                    <div className="text-right">
                      <p className="text-3xl font-bold text-purple-400">7.0</p>
                      <p className="text-xs text-gray-400 font-[family-name:var(--font-inter)]">Edition</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Scroll indicator */}
              <div className="absolute -bottom-16 right-8 flex flex-col items-center space-y-2">
                <div className="flex items-center space-x-2 transform rotate-90 origin-center">
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5m0 0l-7 7m7-7l7 7" />
                  </svg>
                  <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-2 animate-bounce">
          <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <p className="text-sm text-gray-400 font-[family-name:var(--font-inter)]">Scroll down</p>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-slate-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="font-[family-name:var(--font-orbitron)] text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">🧠 About JuniorHack 7.0</span>
              </h2>
              <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 font-[family-name:var(--font-inter)] text-gray-300 leading-relaxed">
              <p className="text-lg">
                JuniorHack 7.0 is the seventh edition of the University of Kelaniya&apos;s signature hackathon, 
                organized by the <span className="text-purple-400 font-semibold">Software Engineering Students&apos; Association (SESA)</span> in 
                collaboration with the IEEE Student Branch.
              </p>
              <p>
                This year, the competition expands beyond Software Engineering students, inviting all 
                <span className="text-blue-400 font-semibold"> 1st- and 2nd-year undergraduates</span> of the university to participate. 
                It aims to inspire young innovators to think creatively, build collaboratively, and solve 
                real-world challenges through technology.
              </p>
              <p>
                With the theme <span className="gradient-text font-semibold">&quot;Empowering Innovation Through Code,&quot;</span> JuniorHack 7.0 
                continues its mission to strengthen collaboration among students, bridge academia and industry, 
                and nurture the next generation of Sri Lankan tech leaders.
              </p>
            </div>

            <div className="space-y-6">
              <div className="card-hover bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-purple-500/30 rounded-xl p-6">
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-purple-400 mb-4">🎯 The Challenge</h3>
                <div className="space-y-4 font-[family-name:var(--font-inter)] text-gray-300">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-white">Pre-Hack</p>
                      <p className="text-sm">A 3-hour online coding challenge on HackerRank, testing problem-solving and algorithmic skills.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div>
                      <p className="font-semibold text-white">Final Hack</p>
                      <p className="text-sm">A 3-hour on-site competition where top 10 teams present and develop solutions before an expert panel.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-hover bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-blue-500/30 rounded-xl p-6">
                <h3 className="font-[family-name:var(--font-orbitron)] text-xl font-bold text-blue-400 mb-4">💡 Learning Sessions</h3>
                <p className="font-[family-name:var(--font-inter)] text-gray-300 text-sm">
                  Beyond competition, JuniorHack 7.0 offers learning sessions led by industry professionals 
                  on project architecture, AI-driven development, and deployment best practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-purple-500/20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 font-[family-name:var(--font-inter)] text-sm">
            © 2025 JuniorHack 7.0 - Organized by SESA & IEEE Student Branch, University of Kelaniya
          </p>
          <p className="text-gray-500 font-[family-name:var(--font-inter)] text-xs mt-2">
            Empowering Innovation Through Code
          </p>
        </div>
      </footer>
    </div>
  );
}
