'use client';

import { motion, AnimatePresence } from 'framer-motion';

interface AlertDialogProps {
  isOpen: boolean;
  type: 'success' | 'error';
  title: string;
  message: string;
  onClose: () => void;
}

export default function AlertDialog({ isOpen, type, title, message, onClose }: AlertDialogProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative z-10 w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative bg-gradient-to-br ${
              type === 'success' 
                ? 'from-green-500/10 via-black to-black border-green-500/50' 
                : 'from-red-500/10 via-black to-black border-red-500/50'
            } border-2 rounded-2xl p-8 shadow-2xl overflow-hidden`}>
              
              {/* Animated background glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 ${
                type === 'success' ? 'bg-green-500/10' : 'bg-red-500/10'
              } rounded-full blur-3xl animate-pulse`}></div>
              <div className={`absolute bottom-0 left-0 w-64 h-64 ${
                type === 'success' ? 'bg-green-500/5' : 'bg-red-500/5'
              } rounded-full blur-3xl animate-pulse`} style={{ animationDelay: '0.5s' }}></div>

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                className="relative z-10 flex justify-center mb-6"
              >
                {type === 'success' ? (
                  <div className="w-20 h-20 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center">
                    <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
              </motion.div>

              {/* Content */}
              <div className="relative z-10 text-center">
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className={`font-audiowide text-2xl font-bold mb-3 ${
                    type === 'success' ? 'text-green-500' : 'text-red-500'
                  }`}
                >
                  {title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-300 font-inter text-sm leading-relaxed mb-6"
                >
                  {message}
                </motion.p>

                {/* Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  onClick={onClose}
                  className={`relative px-8 py-3 rounded-lg font-audiowide text-sm font-bold transition-all duration-300 ${
                    type === 'success'
                      ? 'bg-green-500/20 text-green-500 border-2 border-green-500 hover:bg-green-500 hover:text-black'
                      : 'bg-red-500/20 text-red-500 border-2 border-red-500 hover:bg-red-500 hover:text-black'
                  }`}
                >
                  OK
                </motion.button>
              </div>

              {/* Decorative lines */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 ${
                type === 'success' 
                  ? 'bg-gradient-to-r from-transparent via-green-500 to-transparent' 
                  : 'bg-gradient-to-r from-transparent via-red-500 to-transparent'
              }`}></div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
