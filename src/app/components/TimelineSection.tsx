'use client';

import { motion } from "framer-motion";

export default function TimelineSection() {
  const currentDate = new Date('2025-10-22'); // Today's date for determining current phase
  
  const timelineEvents = [
    {
      date: 'October 22, 2025',
      title: 'Registration Opens',
      description: 'Team registration begins. Form your teams of 3-4 members and sign up for the challenge.',
      icon: '📝',
      eventDate: new Date('2025-10-22'),
    },
    {
      date: 'October 27, 2025',
      title: 'Registration Closes',
      description: 'Last day to register your team. Make sure to complete your registration before the deadline!',
      icon: '⏰',
      eventDate: new Date('2025-10-27'),
    },
    {
      date: 'October 30, 2025',
      title: 'Pre-Hack Challenge',
      description: 'Online coding challenge on HackerRank. Test your algorithmic skills and problem-solving abilities.',
      icon: '💻',
      eventDate: new Date('2025-10-30'),
    },
    {
      date: 'October 31, 2025',
      title: 'Final Teams Announced',
      description: 'Shortlisted teams will be notified via email. Get ready for the final showdown!',
      icon: '🏆',
      eventDate: new Date('2025-10-31'),
    },
    {
      date: 'November 8, 2025',
      title: 'Final Hackathon & Award Ceremony',
      description: 'On-site competition day! Present your solutions, showcase your skills, compete for prizes, and celebrate with the award ceremony.',
      icon: '⚡',
      eventDate: new Date('2025-11-08'),
    },
  ];

  // Determine current phase
  const getCurrentPhaseIndex = () => {
    for (let i = timelineEvents.length - 1; i >= 0; i--) {
      if (currentDate >= timelineEvents[i].eventDate) {
        return i;
      }
    }
    return -1;
  };

  const currentPhaseIndex = getCurrentPhaseIndex();

  return (
    <section id="timeline" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <div className="inline-block px-4">
            <h2 className="font-audiowide text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">⏱️ Event Timeline</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#63f8fc] to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-400 font-inter mt-4 text-sm sm:text-base px-4">Your journey to innovation starts here</p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline line - Desktop only */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#63f8fc]/0 via-[#63f8fc]/30 to-[#63f8fc]/0 overflow-hidden">
            <motion.div
              className="w-full h-32 bg-gradient-to-b from-transparent via-[#63f8fc] to-transparent"
              animate={{
                y: ["-100%", "400%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          {/* Mobile Timeline line */}
          <div className="lg:hidden absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#63f8fc]/0 via-[#63f8fc]/30 to-[#63f8fc]/0"></div>

          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => {
              const isCurrentPhase = index === currentPhaseIndex;
              
              return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex-row gap-4`}
              >
                {/* Mobile timeline dot */}
                <div className="lg:hidden relative shrink-0 ml-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className={`w-5 h-5 rounded-full border-2 border-black shadow-lg ${
                      isCurrentPhase 
                        ? 'bg-gradient-to-br from-[#63f8fc] to-[#00d9d1] shadow-[#63f8fc]/70' 
                        : 'bg-[#63f8fc] shadow-[#63f8fc]/50'
                    }`}>
                      <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>
                    {isCurrentPhase && (
                      <motion.div
                        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 0, 0.8] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute inset-0 w-5 h-5 bg-[#63f8fc] rounded-full"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`w-full lg:w-[45%] ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -3 }}
                    transition={{ duration: 0.3 }}
                    className={`group relative bg-gradient-to-br from-black via-gray-900 to-black rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 ${
                      isCurrentPhase 
                        ? 'border-2 border-[#63f8fc] shadow-[#63f8fc]/30 hover:shadow-[#63f8fc]/40' 
                        : 'border border-[#63f8fc]/30 hover:shadow-[#63f8fc]/20'
                    }`}
                  >
 

                    {/* Glowing corner effect */}
                    <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl transition-all duration-300 ${
                      isCurrentPhase 
                        ? 'bg-[#63f8fc]/20 group-hover:bg-[#63f8fc]/30' 
                        : 'bg-[#63f8fc]/10 group-hover:bg-[#63f8fc]/20'
                    }`}>
                      
                    </div>
                    <div className={`absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 rounded-full blur-2xl transition-all duration-300 ${
                      isCurrentPhase 
                        ? 'bg-[#63f8fc]/15 group-hover:bg-[#63f8fc]/25' 
                        : 'bg-[#63f8fc]/5 group-hover:bg-[#63f8fc]/15'
                    }`}></div>
                    
                    {/* Icon Badge */}
                    <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 sm:mb-4 gap-3">
                      <div className={`flex items-center gap-2 sm:gap-3 ${index % 2 === 0 ? 'flex-row lg:flex-row-reverse' : 'flex-row'}`}>
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-gradient-to-br rounded-lg sm:rounded-xl flex items-center justify-center text-2xl sm:text-3xl border shadow-lg shrink-0 ${
                            isCurrentPhase
                              ? 'from-[#63f8fc]/30 to-[#63f8fc]/10 border-[#63f8fc] shadow-[#63f8fc]/30'
                              : 'from-[#63f8fc]/20 to-[#63f8fc]/5 border-[#63f8fc]/30 shadow-[#63f8fc]/10'
                          }`}
                        >
                          {event.icon}
                        </motion.div>
                        <div className="text-left">
                          <p className={`font-audiowide text-xs uppercase tracking-wider ${
                            isCurrentPhase ? 'text-[#63f8fc] font-bold' : 'text-[#63f8fc]'
                          }`}>
                            Step {index + 1}
                          </p>
                          <p className="text-gray-400 font-inter text-xs sm:text-sm">{event.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className={`font-audiowide text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 transition-colors duration-300 ${
                        isCurrentPhase 
                          ? 'text-[#63f8fc]' 
                          : 'text-white group-hover:text-[#63f8fc]'
                      }`}>
                        {event.title}
                      </h3>
                      <p className="font-inter text-sm sm:text-base text-gray-300 leading-relaxed">{event.description}</p>
                    </div>

                    {/* Decorative line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent to-transparent transition-opacity duration-300 ${
                      isCurrentPhase 
                        ? 'via-[#63f8fc] opacity-100' 
                        : 'via-[#63f8fc]/50 opacity-0 group-hover:opacity-100'
                    }`}></div>
                  </motion.div>
                </div>

                {/* Desktop Center animated dot - positioned absolutely on center line */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    {/* Pulsing glow */}
                    <motion.div
                      animate={{
                        scale: isCurrentPhase ? [1, 1.8, 1] : [1, 1.5, 1],
                        opacity: isCurrentPhase ? [0.7, 1, 0.7] : [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className={`absolute inset-0 w-6 h-6 rounded-full blur-md ${
                        isCurrentPhase ? 'bg-[#63f8fc]' : 'bg-[#63f8fc]'
                      }`}
                    />
                    {/* Main dot */}
                    <div className={`relative w-6 h-6 rounded-full border-4 border-black shadow-lg ${
                      isCurrentPhase 
                        ? 'bg-gradient-to-br from-[#63f8fc] to-[#00d9d1] shadow-[#63f8fc]/70' 
                        : 'bg-[#63f8fc] shadow-[#63f8fc]/50'
                    }`}>
                      <div className="absolute inset-1 bg-white rounded-full"></div>
                    </div>
                    {/* Connecting lines */}
                    {index < timelineEvents.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                        className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-gradient-to-b from-[#63f8fc] to-transparent origin-top"
                      />
                    )}
                  </motion.div>
                </div>

                {/* Spacer for desktop layout */}
                <div className="hidden lg:block w-[45%]"></div>
              </motion.div>
            );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-14 md:mt-16 px-4"
        >
          <div className="inline-block bg-gradient-to-r from-[#63f8fc]/10 via-[#63f8fc]/20 to-[#63f8fc]/10 border border-[#63f8fc]/30 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4">
            <p className="text-gray-300 font-inter text-sm sm:text-base">
              <span className="text-[#63f8fc] font-bold">Mark your calendars!</span> Don&apos;t miss out on this incredible journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
