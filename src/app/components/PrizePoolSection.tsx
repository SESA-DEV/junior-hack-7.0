'use client';

import { motion } from "framer-motion";

export default function PrizePoolSection() {
  const prizes = [
    { 
      place: "1st Place",
      amount: "25,000",
      position: 1,
      icon: "🏆",
      color: "from-yellow-400 to-yellow-600",
      glow: "shadow-yellow-500/50"
    },
    { 
      place: "2nd Place",
      amount: "15,000",
      position: 2,
      icon: "🥈",
      color: "from-gray-300 to-gray-500",
      glow: "shadow-gray-400/50"
    },
    { 
      place: "3rd Place",
      amount: "10,000",
      position: 3,
      icon: "🥉",
      color: "from-orange-400 to-orange-600",
      glow: "shadow-orange-500/50"
    }
  ];

  return (
    <section id="prizes" className="py-20 px-6 bg-gradient-to-b from-black via-[#0a0a0a] to-black relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#63f8fc]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#63f8fc]/3 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <motion.h2 
              className="font-audiowide text-4xl md:text-5xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <span className="gradient-text">💰 Prize Pool</span>
            </motion.h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-[#63f8fc] to-transparent rounded-full"></div>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-gray-400 font-inter text-sm tracking-wider"
          >
            TOTAL WORTH
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-2"
          >
            <motion.span 
              className="font-audiowide text-5xl md:text-6xl font-bold text-[#63f8fc]"
              animate={{ 
                textShadow: [
                  "0 0 20px rgba(99, 248, 252, 0.3)",
                  "0 0 30px rgba(99, 248, 252, 0.5)",
                  "0 0 20px rgba(99, 248, 252, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Rs 50,000
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Prize Cards */}
        <div className="flex flex-wrap justify-center items-center gap-6 max-w-6xl mx-auto relative">
          {/* 2nd Place - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotate: -10 }}
            whileInView={{ opacity: 1, x: 0, rotate: -5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ 
              rotate: 0,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="group relative z-10"
          >
            {/* Voucher Card */}
            <div className={`relative bg-gradient-to-br ${prizes[1].color} p-[1px] rounded-2xl overflow-hidden shadow-2xl ${prizes[1].glow} group-hover:shadow-[0_0_40px_rgba(200,200,200,0.6)] transition-all duration-300`}>
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(200,200,200,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(200,200,200,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(200,200,200,0.3) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Perforated edge decoration */}
              <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-around items-center bg-black/20">
                {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-black/40"
                    whileHover={{ scale: 1.5, backgroundColor: 'rgba(200,200,200,0.6)' }}
                  ></motion.div>
                ))}
              </div>
              
              {/* Card Content */}
              <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-6 pl-10 relative overflow-hidden w-72 h-40">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                </div>
                
                {/* Position Badge */}
                <div className="absolute top-3 right-3">
                  <motion.div 
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${prizes[1].color} flex items-center justify-center text-xl shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {prizes[1].icon}
                  </motion.div>
                </div>
                
                {/* Prize Details */}
                <div className="relative space-y-2">
                  <div>
                    <p className="text-gray-400 font-inter text-xs uppercase tracking-wider">
                      Winner
                    </p>
                    <h3 className="font-audiowide text-lg font-bold text-white group-hover:text-gray-300 transition-colors duration-300">
                      {prizes[1].place}
                    </h3>
                  </div>
                  
                  <div className="border-t border-dashed border-gray-700 pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-400 text-sm font-bold">Rs</span>
                      <motion.span 
                        className={`font-audiowide text-3xl font-bold bg-gradient-to-r ${prizes[1].color} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {prizes[1].amount}
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Voucher code decoration */}
                  <div className="pt-2 border-t border-gray-800">
                    <p className="text-gray-600 font-mono text-xs group-hover:text-gray-500 transition-colors duration-300">
                      JH7.0-PRIZE-{prizes[1].position}
                    </p>
                  </div>
                </div>
                
                {/* Corner decoration */}
                <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${prizes[1].color} opacity-10 rounded-tl-full group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </div>
          </motion.div>

          {/* 1st Place - Center (Bigger) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ 
              scale: 1.08,
              y: -10,
              transition: { duration: 0.3 }
            }}
            className="group relative z-20"
          >
            {/* Champion glow ring */}
            <motion.div
              className="absolute inset-0 rounded-2xl"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(234, 179, 8, 0.3)',
                  '0 0 40px rgba(234, 179, 8, 0.6)',
                  '0 0 20px rgba(234, 179, 8, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Voucher Card */}
            <div className={`relative bg-gradient-to-br ${prizes[0].color} p-[1px] rounded-2xl overflow-hidden shadow-2xl ${prizes[0].glow} group-hover:shadow-[0_0_60px_rgba(234,179,8,0.8)] transition-all duration-300`}>
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(234,179,8,0.4) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(234,179,8,0.4) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(234,179,8,0.4) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Perforated edge decoration */}
              <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-around items-center bg-black/20">
                {[...Array(12)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-3 h-3 rounded-full bg-black/40"
                    animate={{
                      scale: [1, 1.3, 1],
                      backgroundColor: ['rgba(0,0,0,0.4)', 'rgba(234,179,8,0.3)', 'rgba(0,0,0,0.4)']
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                  ></motion.div>
                ))}
              </div>
              
              {/* Card Content */}
              <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-10 pl-14 relative overflow-hidden w-96 h-56">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                </div>

                
                {/* Position Badge */}
                <div className="absolute top-4 right-4">
                  <motion.div 
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${prizes[0].color} flex items-center justify-center text-3xl shadow-lg`}
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    whileHover={{ rotate: 360, scale: 1.3 }}
                  >
                    {prizes[0].icon}
                  </motion.div>
                </div>
                
                {/* Prize Details */}
                <div className="relative space-y-4">
                  <div>
                    <p className="text-gray-400 font-inter text-sm uppercase tracking-wider mb-1">
                      Champion
                    </p>
                    <h3 className="font-audiowide text-3xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                      {prizes[0].place}
                    </h3>
                  </div>
                  
                  <div className="border-t border-dashed border-gray-700 pt-4">
                    <p className="text-gray-400 font-inter text-sm uppercase tracking-wider mb-2">
                      Prize Amount
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-gray-400 text-xl font-bold">Rs</span>
                      <motion.span 
                        className={`font-audiowide text-5xl font-bold bg-gradient-to-r ${prizes[0].color} bg-clip-text text-transparent`}
                        animate={{
                          filter: [
                            'drop-shadow(0 0 5px rgba(234,179,8,0.5))',
                            'drop-shadow(0 0 15px rgba(234,179,8,0.8))',
                            'drop-shadow(0 0 5px rgba(234,179,8,0.5))',
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {prizes[0].amount}
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Voucher code decoration */}
                  <div className="pt-3 border-t border-gray-800">
                    <div className="flex items-center justify-between">
                      <p className="text-gray-600 font-mono text-xs group-hover:text-yellow-600/50 transition-colors duration-300">
                        JH7.0-CHAMPION-{prizes[0].position}
                      </p>
                      <motion.svg 
                        className="w-6 h-6 text-yellow-500" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </motion.svg>
                    </div>
                  </div>
                </div>
                
                {/* Corner decoration */}
                <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${prizes[0].color} opacity-10 rounded-tl-full group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
            </div>
          </motion.div>

          {/* 3rd Place - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotate: 10 }}
            whileInView={{ opacity: 1, x: 0, rotate: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 100 }}
            whileHover={{ 
              rotate: 0,
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="group relative z-10"
          >
            {/* Voucher Card */}
            <div className={`relative bg-gradient-to-br ${prizes[2].color} p-[1px] rounded-2xl overflow-hidden shadow-2xl ${prizes[2].glow} group-hover:shadow-[0_0_40px_rgba(251,146,60,0.6)] transition-all duration-300`}>
              {/* Animated glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  background: [
                    'radial-gradient(circle at 0% 0%, rgba(251,146,60,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 100% 100%, rgba(251,146,60,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 0% 0%, rgba(251,146,60,0.3) 0%, transparent 50%)',
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Perforated edge decoration */}
              <div className="absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-around items-center bg-black/20">
                {[...Array(8)].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-2 h-2 rounded-full bg-black/40"
                    whileHover={{ scale: 1.5, backgroundColor: 'rgba(251,146,60,0.6)' }}
                  ></motion.div>
                ))}
              </div>
              
              {/* Card Content */}
              <div className="bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl p-6 pl-10 relative overflow-hidden w-72 h-40">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
                </div>
                
                {/* Position Badge */}
                <div className="absolute top-3 right-3">
                  <motion.div 
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${prizes[2].color} flex items-center justify-center text-xl shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    {prizes[2].icon}
                  </motion.div>
                </div>
                
                {/* Prize Details */}
                <div className="relative space-y-2">
                  <div>
                    <p className="text-gray-400 font-inter text-xs uppercase tracking-wider">
                      Winner
                    </p>
                    <h3 className="font-audiowide text-lg font-bold text-white group-hover:text-orange-300 transition-colors duration-300">
                      {prizes[2].place}
                    </h3>
                  </div>
                  
                  <div className="border-t border-dashed border-gray-700 pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-gray-400 text-sm font-bold">Rs</span>
                      <motion.span 
                        className={`font-audiowide text-3xl font-bold bg-gradient-to-r ${prizes[2].color} bg-clip-text text-transparent`}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {prizes[2].amount}
                      </motion.span>
                    </div>
                  </div>
                  
                  {/* Voucher code decoration */}
                  <div className="pt-2 border-t border-gray-800">
                    <p className="text-gray-600 font-mono text-xs group-hover:text-orange-600/50 transition-colors duration-300">
                      JH7.0-PRIZE-{prizes[2].position}
                    </p>
                  </div>
                </div>
                
                {/* Corner decoration */}
                <div className={`absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl ${prizes[2].color} opacity-10 rounded-tl-full group-hover:opacity-20 transition-opacity duration-300`}></div>
              </div>
            </div>
          </motion.div>
        </div>

       
      </div>
    </section>
  );
}
