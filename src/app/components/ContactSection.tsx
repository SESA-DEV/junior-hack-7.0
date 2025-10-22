'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactSection() {
  const teamMembers = [
    {
      name: "Imansha Dilshan",
      role: "President - Software Engineering Students' Association",
      phone: "+94 76 311 7229",
      email: "imansha.idr@gmail.com",
      linkedin: "https://www.linkedin.com/in/imansha-dilshan-6768662a0",
      linkedinImage: "https://media.licdn.com/dms/image/v2/D4D03AQGIChPh3cm5vw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731665279445?e=1762992000&v=beta&t=NrvuiPHoht1sFDL525QvVKoZDdGmkuZNMkOHmDUpkFQ"
    },
    {
      name: "Mihiran Weerasekara",
      role: "President - IEEE Student Branch University of Kelaniya",
      phone: "+94 77 724 5314",
      email: "sandaruwee01@gmail.com",
      linkedin: "https://www.linkedin.com/in/sandarumuok17/",
      linkedinImage: "https://media.licdn.com/dms/image/v2/D5603AQFNEJ_B6lhpxg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730617827627?e=1762387200&v=beta&t=1QB1GEbCVkJCJ3b-vtWpWDmqcvUSbf_SJr0qBOkZ25U"
    },
    {
      name: "Minindu Abeywardena",
      role: "Head of Strategic Planning - SESA",
      phone: "+94 71 588 1536",
      email: "mininduabeywardena@gmail.com",
      linkedin: "https://www.linkedin.com/in/minindu-abeywardena/",
      linkedinImage: "https://media.licdn.com/dms/image/v2/D5603AQGIn2IdJ_fzHQ/profile-displayphoto-shrink_200_200/B56ZbpuOHAHgAo-/0/1747677931512?e=1762387200&v=beta&t=b76TCVDh7C8DIgys2UEr5f9OP202hHhzAQQ49axZqkw"
    },
    {
      name: "Akila Abenayaka",
      role: "Coordinator - JuniorHack 7.0",
      phone: "+94 71 460 4907",
      email: "akilaabenayaka96@gmail.com",
      linkedin: "https://www.linkedin.com/in/akila-abenayaka-2a2451355/",
      linkedinImage: "https://media.licdn.com/dms/image/v2/D4E03AQE3EoDiCY82rw/profile-displayphoto-shrink_800_800/B4EZXTis02G0Ao-/0/1743010844601?e=1762387200&v=beta&t=UfC_MvzFe-7KX0XMcldVQiK4DSUP1ft6ouBTdfsdQaw"
    },
    {
      name: "Maleesha Rukshan",
      role: "Coordinator - JuniorHack 7.0",
      phone: "+94 77 887 0865",
      email: "maleesharukshan19@gmail.com",
      linkedin: "https://www.linkedin.com/in/maleesha-rukshan-0ba90535a/",
      linkedinImage: "https://media.licdn.com/dms/image/v2/D4D03AQHnL2N8B-SnlQ/profile-displayphoto-crop_800_800/B4DZjnc2XvGsAI-/0/1756229757061?e=1762387200&v=beta&t=nR7c0bLILusYHgDUMO9hfhVALAZ6qu-nB3kRQ8Ry13o"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <div className="inline-block">
            <h2 className="font-audiowide text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">📞 Get In Touch</span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#63f8fc] to-transparent rounded-full"></div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-gray-400 font-inter px-4"
          >
            Have questions? Our team is here to help!
          </motion.p>
        </motion.div>

        {/* Team Members */}
        <div className="mb-12 sm:mb-14 md:mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center font-audiowide text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8 sm:mb-10 md:mb-12 px-4"
          >
            Meet Our <span className="text-[#63f8fc]">Organizing Team</span>
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group relative bg-gradient-to-br from-black via-gray-900 to-black border border-[#63f8fc]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#63f8fc]/20 transition-all duration-300 w-full max-w-sm mx-auto"
              >
                {/* Glowing corner effects */}
                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#63f8fc]/10 rounded-full blur-2xl group-hover:bg-[#63f8fc]/20 transition-all duration-300"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#63f8fc]/5 rounded-full blur-2xl group-hover:bg-[#63f8fc]/15 transition-all duration-300"></div>
                
                {/* Avatar */}
                <div className="relative z-10 text-center mb-4 sm:mb-6">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full overflow-hidden border-2 border-[#63f8fc]/30 shadow-lg shadow-[#63f8fc]/20 mb-3 sm:mb-4 bg-gray-800"
                  >
                    <Image
                      src={member.linkedinImage}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </motion.div>
                  <h4 className="font-audiowide text-lg sm:text-xl font-bold text-white group-hover:text-[#63f8fc] transition-colors duration-300">
                    {member.name}
                  </h4>
                  <p className="text-[#63f8fc] font-inter text-xs sm:text-sm mt-1">{member.role}</p>
                </div>

                {/* Contact Info */}
                <div className="relative z-10 space-y-2 sm:space-y-3">
                  {/* Phone */}
                  <motion.a
                    href={`tel:${member.phone}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-[#63f8fc] transition-colors duration-300"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#63f8fc]/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#63f8fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-inter">{member.phone}</span>
                  </motion.a>

                  {/* Email */}
                  <motion.a
                    href={`mailto:${member.email}`}
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-[#63f8fc] transition-colors duration-300"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#63f8fc]/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#63f8fc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-inter break-all">{member.email}</span>
                  </motion.a>

                  {/* LinkedIn */}
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center space-x-2 sm:space-x-3 text-gray-300 hover:text-[#63f8fc] transition-colors duration-300"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[#63f8fc]/10 rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#63f8fc]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <span className="text-xs sm:text-sm font-inter">LinkedIn Profile</span>
                  </motion.a>
                </div>

                {/* Bottom decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#63f8fc]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>


      </div>
    </section>
  );
}
