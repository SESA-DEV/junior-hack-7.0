'use client';

import { motion } from "framer-motion";

export default function TimelineSection() {
  const timelineEvents = [
    {
      date: 'January 15, 2025',
      title: 'Registration Opens',
      description: 'Team registration begins. Form your teams of 3-4 members and sign up for the challenge.',
      icon: '📝',
    },
    {
      date: 'February 1, 2025',
      title: 'Pre-Hack Challenge',
      description: 'Online coding challenge on HackerRank. Test your algorithmic skills and problem-solving abilities.',
      icon: '💻',
    },
    {
      date: 'February 10, 2025',
      title: 'Top 10 Teams Announced',
      description: 'Shortlisted teams will be notified via email. Get ready for the final showdown!',
      icon: '🏆',
    },
    {
      date: 'February 15, 2025',
      title: 'Learning Sessions',
      description: 'Industry experts share insights on project architecture, AI development, and deployment strategies.',
      icon: '🎓',
    },
    {
      date: 'February 22, 2025',
      title: 'Final Hackathon',
      description: '3-hour on-site competition. Present your solutions, showcase your skills, and compete for prizes!',
      icon: '⚡',
    },
    {
      date: 'February 22, 2025',
      title: 'Award Ceremony',
      description: 'Winners announced! Celebrate innovation and connect with fellow developers and industry professionals.',
      icon: '🎉',
    },
  ];

  return (
    <section id="timeline" className="py-20 px-6 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block">
            <h2 className="font-audiowide text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">⏱️ Event Timeline</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#63f8fc] to-transparent rounded-full"></div>
          </div>
          <p className="text-gray-400 font-inter mt-4">Your journey to innovation starts here</p>
        </motion.div>

        <div className="relative">
          {/* Animated Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#63f8fc]/0 via-[#63f8fc]/30 to-[#63f8fc]/0 overflow-hidden">
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

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col gap-4`}
              >
                {/* Content */}
                <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div 
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative bg-gradient-to-br from-black via-gray-900 to-black border border-[#63f8fc]/30 rounded-2xl p-8 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#63f8fc]/20 transition-all duration-300"
                  >
                    {/* Glowing corner effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#63f8fc]/10 rounded-full blur-2xl group-hover:bg-[#63f8fc]/20 transition-all duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#63f8fc]/5 rounded-full blur-2xl group-hover:bg-[#63f8fc]/15 transition-all duration-300"></div>
                    
                    {/* Icon Badge */}
                    <div className="relative z-10 flex items-center justify-between mb-4">
                      <div className={`flex items-center gap-3 ${index % 2 === 0 ? 'flex-row-reverse md:flex-row' : 'flex-row'}`}>
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.2 }}
                          transition={{ duration: 0.5 }}
                          className="w-14 h-14 bg-gradient-to-br from-[#63f8fc]/20 to-[#63f8fc]/5 rounded-xl flex items-center justify-center text-3xl border border-[#63f8fc]/30 shadow-lg shadow-[#63f8fc]/10"
                        >
                          {event.icon}
                        </motion.div>
                        <div>
                          <p className="text-[#63f8fc] font-audiowide text-xs uppercase tracking-wider">Step {index + 1}</p>
                          <p className="text-gray-400 font-inter text-sm">{event.date}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative z-10">
                      <h3 className="font-audiowide text-2xl font-bold text-white mb-3 group-hover:text-[#63f8fc] transition-colors duration-300">
                        {event.title}
                      </h3>
                      <p className="font-inter text-gray-300 leading-relaxed">{event.description}</p>
                    </div>

                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#63f8fc]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </div>

                {/* Center animated dot - positioned absolutely on center line */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
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
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute inset-0 w-6 h-6 bg-[#63f8fc] rounded-full blur-md"
                    />
                    {/* Main dot */}
                    <div className="relative w-6 h-6 bg-[#63f8fc] rounded-full border-4 border-black shadow-lg shadow-[#63f8fc]/50">
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

                {/* Spacer */}
                <div className="hidden md:block w-[45%]"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-gradient-to-r from-[#63f8fc]/10 via-[#63f8fc]/20 to-[#63f8fc]/10 border border-[#63f8fc]/30 rounded-2xl px-8 py-4">
            <p className="text-gray-300 font-inter">
              <span className="text-[#63f8fc] font-bold">Mark your calendars!</span> Don&apos;t miss out on this incredible journey.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
