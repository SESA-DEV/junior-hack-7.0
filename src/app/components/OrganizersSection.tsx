'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function OrganizersSection() {
  const organizers = [
    {
      name: "SESA",
      fullName: "Software Engineering Students' Association",
      description: "Leading the tech innovation at University of Kelaniya",
      logoPath: "/assets/images/softwareenginneringlogo2.png",
      socials: [
        { 
          name: "Facebook", 
          url: "https://facebook.com/sesa.kln",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          )
        },
        { 
          name: "Instagram", 
          url: "https://instagram.com/sesa.kln",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          )
        },
        { 
          name: "LinkedIn", 
          url: "https://linkedin.com/company/sesa-kln",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          )
        },
        { 
          name: "YouTube", 
          url: "https://youtube.com/@sesa-kln",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          )
        }
      ]
    },
    {
      name: "IEEE",
      fullName: "IEEE Student Branch - UoK",
      description: "Advancing technology for humanity",
      logoPath: "/assets/images/IEEE.png",
      socials: [
        { 
          name: "Facebook", 
          url: "https://facebook.com/ieee.uok",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          )
        },
        { 
          name: "Instagram", 
          url: "https://instagram.com/ieee.uok",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          )
        },
        { 
          name: "LinkedIn", 
          url: "https://linkedin.com/company/ieee-uok",
          icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-14 md:mb-16"
        >
          <div className="inline-block">
            <h2 className="font-audiowide text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">🤝 Organized By</span>
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
            In collaboration with leading student organizations
          </motion.p>
        </motion.div>

        {/* Organizers Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {organizers.map((org, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="group relative bg-gradient-to-br from-black via-gray-900 to-black border border-[#63f8fc]/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#63f8fc]/20 transition-all duration-300"
            >
              {/* Glowing corner effects */}
              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#63f8fc]/10 rounded-full blur-2xl group-hover:bg-[#63f8fc]/20 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-[#63f8fc]/5 rounded-full blur-2xl group-hover:bg-[#63f8fc]/15 transition-all duration-300"></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Logo */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className={index==0?"w-20 h-28 sm:w-24 sm:h-32 mx-auto mb-4 sm:mb-6 relative":"w-40 h-28 sm:w-50 sm:h-32 mx-auto mb-4 sm:mb-6 relative"}
                >
                  <Image
                    src={org.logoPath}
                    alt={`${org.name} Logo`}
                    fill
                    className="object-contain"
                    priority
                  />
                </motion.div>

                {/* Name */}
                <h3 className="font-audiowide text-2xl sm:text-3xl font-bold text-white text-center mb-2 group-hover:text-[#63f8fc] transition-colors duration-300">
                  {org.name}
                </h3>
                <p className="text-[#63f8fc] font-inter text-xs sm:text-sm text-center mb-2 sm:mb-3">
                  {org.fullName}
                </p>
                <p className="text-gray-400 font-inter text-xs sm:text-sm text-center mb-4 sm:mb-6">
                  {org.description}
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap">
                  {org.socials.map((social, idx) => (
                    <motion.a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="group/social relative"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center text-[#63f8fc] hover:text-white transition-all duration-300">
                        {social.icon}
                      </div>
                      {/* Tooltip */}
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#63f8fc] text-black px-3 py-1 rounded-lg text-xs font-inter font-semibold opacity-0 group-hover/social:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                        {social.name}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1 border-4 border-transparent border-t-[#63f8fc]"></div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Bottom decorative line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#63f8fc]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Partnership Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-10 md:mt-12 text-center px-4"
        >
          <div className="inline-block bg-gradient-to-r from-[#63f8fc]/10 via-[#63f8fc]/20 to-[#63f8fc]/10 border border-[#63f8fc]/30 rounded-xl sm:rounded-2xl px-4 sm:px-6 md:px-8 py-3 sm:py-4">
            <motion.p
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="font-audiowide text-[#63f8fc] text-xs sm:text-sm tracking-wider"
            >
              A Collaborative Initiative for Tech Innovation
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
