'use client';

import { useState } from 'react';
import RegistrationModal from './components/RegistrationModal';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PrizePoolSection from './components/PrizePoolSection';
import TimelineSection from './components/TimelineSection';
import OrganizersSection from './components/OrganizersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-dots">
      <RegistrationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <Navigation onRegisterClick={() => setIsModalOpen(true)} />
      <HeroSection onRegisterClick={() => setIsModalOpen(true)} />
      <div id="about">
        <AboutSection />
      </div>
      <div id="prizepool">
        <PrizePoolSection />
      </div>
      <div id="timeline">
        <TimelineSection />
      </div>
      <OrganizersSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
