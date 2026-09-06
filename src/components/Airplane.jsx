import React from 'react';
import { motion } from 'framer-motion';

export default function Airplane({ className = '' }) {
  return (
    <div className={`relative inline-block w-full ${className} select-none pointer-events-none`}>
      {/* Jet Engine Contrail / Vapor Stream */}
      <motion.div
        animate={{
          opacity: [0.2, 0.6, 0.2],
          scaleY: [0.8, 1.2, 0.8],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
          ease: 'easeInOut',
        }}
        className="absolute left-[38%] top-[68%] w-32 h-2.5 -translate-x-full bg-gradient-to-l from-white/80 via-[#D4AF37]/30 to-transparent blur-[2px] rounded-full pointer-events-none"
      />

      {/* Airplane Body Image */}
      <img
        src="/aura-airplane-clean.png"
        alt="AURA UX Luxury Airplane"
        className="w-full h-auto object-contain block drop-shadow-[0_12px_20px_rgba(0,0,0,0.14)]"
      />
    </div>
  );
}
