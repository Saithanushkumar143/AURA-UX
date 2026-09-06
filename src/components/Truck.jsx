import React from 'react';
import { motion } from 'framer-motion';

export default function FlatbedTruck({ isDriving = true, className = '' }) {
  // Exact percentage positions for the 5 wheels on the 1024x409 truck image
  const wheels = [
    { id: 'w1', left: '10.84%', top: '67.48%', size: '6.25%' },
    { id: 'w2', left: '16.99%', top: '67.48%', size: '6.25%' },
    { id: 'w3', left: '23.54%', top: '67.48%', size: '6.25%' },
    { id: 'w4', left: '71.09%', top: '67.48%', size: '6.64%' },
    { id: 'w5', left: '87.30%', top: '67.48%', size: '6.64%' },
  ];

  return (
    <div className={`relative inline-block w-full ${className} select-none pointer-events-none`}>
      {/* Base Truck Body Image */}
      <img
        src="/truck-flatbed.png"
        alt="AURA UX Flatbed Truck"
        className="w-full h-auto object-contain block drop-shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
        style={{
          mixBlendMode: 'multiply',
        }}
      />

      {/* 5 Perfectly Symmetrical Rotating Wheels */}
      {wheels.map((w) => (
        <div
          key={w.id}
          style={{
            position: 'absolute',
            left: w.left,
            top: w.top,
            width: w.size,
            aspectRatio: '1 / 1',
            transform: 'translate(-50%, -50%)',
            transformOrigin: 'center center',
          }}
          className="pointer-events-none"
        >
          <motion.img
            src="/truck-tire-clean.png"
            alt="Rotating Wheel"
            className="w-full h-full object-contain block"
            style={{
              transformOrigin: '50% 50%',
              willChange: 'transform',
            }}
            animate={isDriving ? { rotate: 360 } : { rotate: 0 }}
            transition={{
              repeat: Infinity,
              duration: 0.65,
              ease: 'linear',
            }}
          />
        </div>
      ))}
    </div>
  );
}
