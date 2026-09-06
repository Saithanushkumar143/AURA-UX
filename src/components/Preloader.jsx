import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress counter from 0 to 100 over ~1.3s
    const startTime = Date.now();
    const duration = 1350;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progressRatio = Math.min(elapsed / duration, 1);
      
      // Luxury ease-out curve for natural loading feel
      const easedProgress = Math.round((1 - Math.pow(1 - progressRatio, 3)) * 100);
      setProgress(easedProgress);

      if (progressRatio >= 1) {
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
        }, 150);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          key="aura-luxury-preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            opacity: 1,
            transition: { 
              duration: 0.9, 
              ease: [0.76, 0, 0.24, 1] 
            } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#FBF9F4] text-[#1F1A15] select-none pointer-events-auto overflow-hidden px-8 py-10 md:px-16 md:py-12"
        >
          {/* Subtle Ambient Background Lighting */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] md:w-[750px] md:h-[750px] rounded-full bg-gradient-to-tr from-[#D4AF37]/12 via-[#FFF3B0]/20 to-transparent blur-[110px] pointer-events-none"
            aria-hidden="true"
          />
          <div 
            className="absolute top-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[#8C6239]/6 blur-[90px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Top Bar: Editorial Corner Details */}
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-10 flex items-center justify-between w-full text-[10px] md:text-xs tracking-[0.28em] uppercase text-[#7A7065] font-mono border-b border-[#8C6239]/10 pb-4"
          >
            <div className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
              <span>AURA UX ARCHIVE</span>
            </div>
            <div className="hidden sm:block text-[#8C6239]/70">
              COLLECTION 2026 • DIGITAL ATELIER
            </div>
            <div>
              EDITION 01
            </div>
          </motion.div>

          {/* Center Stage: Bespoke Insignia & Brand Typography Reveal */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto">
            
            {/* Multi-layered Bespoke Brand Emblem */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
              }}
              className="relative mb-8 flex items-center justify-center"
            >
              {/* Outer Slow Rotating Orbital Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 md:-inset-5 rounded-full border border-dashed border-[#D4AF37]/35 pointer-events-none"
              />

              {/* Glowing Pulse Halo */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-[#D4AF37]/20 via-[#FFEAA7]/35 to-[#AA7C11]/20 blur-lg animate-pulse pointer-events-none" />

              {/* Luxury Circular Medallion */}
              <div className="relative h-24 w-24 md:h-28 md:w-28 rounded-full p-[2px] bg-gradient-to-tr from-[#D4AF37] via-[#FFF8DC] to-[#8C6239] shadow-[0_12px_35px_rgba(212,175,55,0.22)]">
                <div className="h-full w-full rounded-full overflow-hidden bg-white p-1 relative flex items-center justify-center border border-[#D4AF37]/30">
                  
                  {/* Brand Authentic Logo Emblem */}
                  <img 
                    src="/logo.jpg" 
                    alt="AURA UX Brand Emblem" 
                    className="h-full w-full object-cover rounded-full scale-105"
                  />

                  {/* Glass Light Reflection Sweep */}
                  <motion.div
                    initial={{ x: "-120%" }}
                    animate={{ x: "120%" }}
                    transition={{
                      repeat: Infinity,
                      repeatDelay: 1.2,
                      duration: 1.4,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-12 pointer-events-none"
                  />
                </div>
              </div>
            </motion.div>

            {/* Typography Reveal */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                y: 0,
                transition: { duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] } 
              }}
              className="text-center flex flex-col items-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif font-black tracking-[0.32em] uppercase select-none leading-none mb-3">
                <span className="bg-gradient-to-r from-[#4A3718] via-[#AA7C11] to-[#251A07] bg-clip-text text-transparent drop-shadow-sm">
                  AURA UX
                </span>
              </h1>

              <div className="flex items-center space-x-3 text-[10px] md:text-xs uppercase tracking-[0.38em] text-[#7A7065] font-sans">
                <span>HAUTE DIGITAL EXPERIENCES</span>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar: Shimmer Progress Track & Live Counter */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative z-10 w-full max-w-xl mx-auto flex flex-col items-center"
          >
            {/* Status & Counter */}
            <div className="w-full flex items-center justify-between text-[11px] font-mono tracking-[0.2em] text-[#8C6239] mb-2.5">
              <span className="uppercase text-[#7A7065]">INITIALIZING EXPERIENCE</span>
              <span className="font-semibold text-[#1F1A15]">{progress.toString().padStart(2, '0')}%</span>
            </div>

            {/* Dynamic Gold Shimmer Track */}
            <div className="w-full h-[2px] bg-[#8C6239]/15 rounded-full overflow-hidden relative">
              {/* Progress Fill */}
              <motion.div 
                className="h-full bg-gradient-to-r from-[#AA7C11] via-[#D4AF37] to-[#8C6239] relative shadow-[0_0_10px_#D4AF37]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              >
                {/* Continuous Shimmer Streak */}
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.0,
                    ease: "linear",
                  }}
                  className="absolute inset-0 w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent pointer-events-none"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
