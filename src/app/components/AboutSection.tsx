'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="font-audiowide text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">🧠 About JuniorHack 7.0</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#63f8fc] to-transparent rounded-full"></div>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-gray-400 font-inter"
          >
            Empowering the next generation of innovators
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 font-inter text-gray-300 leading-relaxed"
          >
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="relative pl-6 border-l-2 border-[#63f8fc]/30 hover:border-[#63f8fc] transition-colors duration-300"
            >
              <p className="text-lg">
                JuniorHack 7.0 is the seventh edition of the University of Kelaniya&apos;s signature hackathon, 
                organized by the <span className="text-[#63f8fc] font-semibold">Software Engineering Students&apos; Association (SESA)</span> in 
                collaboration with the IEEE Student Branch.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="relative pl-6 border-l-2 border-[#63f8fc]/30 hover:border-[#63f8fc] transition-colors duration-300"
            >
              <p>
                This year, the competition expands beyond Software Engineering students, inviting all 
                <span className="text-[#63f8fc] font-semibold"> 1st- and 2nd-year undergraduates</span> of the university to participate. 
                It aims to inspire young innovators to think creatively, build collaboratively, and solve 
                real-world challenges through technology.
              </p>
            </motion.div>
            
            <motion.div
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
              className="relative pl-6 border-l-2 border-[#63f8fc]/30 hover:border-[#63f8fc] transition-colors duration-300"
            >
              <p>
                With the theme <span className="gradient-text font-semibold">&quot;Empowering Innovation Through Code,&quot;</span> JuniorHack 7.0 
                continues its mission to strengthen collaboration among students, bridge academia and industry, 
                and nurture the next generation of Sri Lankan tech leaders.
              </p>
            </motion.div>
          </motion.div>

          {/* Right side - Cards */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-gradient-to-br from-black via-gray-900 to-black border border-[#63f8fc]/30 rounded-xl p-6 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#63f8fc]/20 transition-all duration-300"
            >
              {/* Glowing corner effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#63f8fc]/10 rounded-full blur-2xl group-hover:bg-[#63f8fc]/20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#63f8fc]/5 rounded-full blur-2xl group-hover:bg-[#63f8fc]/15 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="font-audiowide text-xl font-bold text-[#63f8fc] mb-4 group-hover:text-white transition-colors duration-300">🎯 The Challenge</h3>
                <div className="space-y-4 font-inter text-gray-300">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="w-2 h-2 bg-[#63f8fc] rounded-full mt-2 shadow-lg shadow-[#63f8fc]/50"
                    ></motion.div>
                    <div>
                      <p className="font-semibold text-white">Pre-Hack</p>
                      <p className="text-sm">A 3-hour online coding challenge on HackerRank, testing problem-solving and algorithmic skills.</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-start space-x-3"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="w-2 h-2 bg-[#63f8fc] rounded-full mt-2 shadow-lg shadow-[#63f8fc]/50"
                    ></motion.div>
                    <div>
                      <p className="font-semibold text-white">Final Hack</p>
                      <p className="text-sm">A 3-hour on-site competition where top 10 teams present and develop solutions before an expert panel.</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#63f8fc]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-gradient-to-br from-black via-gray-900 to-black border border-[#63f8fc]/30 rounded-xl p-6 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#63f8fc]/20 transition-all duration-300"
            >
              {/* Glowing corner effects */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#63f8fc]/10 rounded-full blur-2xl group-hover:bg-[#63f8fc]/20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#63f8fc]/5 rounded-full blur-2xl group-hover:bg-[#63f8fc]/15 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="font-audiowide text-xl font-bold text-[#63f8fc] mb-4 group-hover:text-white transition-colors duration-300">💡 Learning Sessions</h3>
                <p className="font-inter text-gray-300 text-sm">
                  Beyond competition, JuniorHack 7.0 offers learning sessions led by industry professionals 
                  on project architecture, AI-driven development, and deployment best practices.
                </p>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#63f8fc]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
