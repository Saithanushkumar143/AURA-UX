import React from 'react';
import ConstellationGrid from './ConstellationGrid';

export default function Hero({ onExplore }) {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 pt-24 bg-[#FBF9F4] text-[#1F1A15]">
      {/* Interactive Constellation Grid Canvas (Light Theme & Gold Accent) */}
      <ConstellationGrid />

      {/* Background Aura Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#AA7C11]/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#D8B467]/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Centered Luxury Logo Badge */}
        <div className="mb-8 relative h-28 w-28 md:h-36 md:w-36 rounded-full overflow-hidden border border-[#8C6239]/30 bg-white shadow-[0_0_20px_rgba(140,98,57,0.1)] p-1 animate-fadeIn">
          <img 
            src="/logo.jpg" 
            alt="AURA UX Brand Emblem" 
            className="h-full w-full object-cover rounded-full scale-105" 
          />
        </div>

        {/* Micro Tagline */}
        <div className="mb-6 inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#8C6239]/10 bg-[#8C6239]/5 text-[#8C6239] backdrop-blur-sm animate-fade-in-up">
          <span className="h-1.5 w-1.5 rounded-full bg-[#8C6239]"></span>
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] font-sans">
            Premium Digital Experiences
          </span>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wide font-serif mb-6 select-none animate-fadeIn leading-none">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#503E21] via-[#AA7C11] to-[#251A07]">
            AURA UX
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-xl font-sans font-light max-w-xl mb-12 tracking-wide leading-relaxed animate-fadeInUp text-[#504A43]">
          We turn ideas into{' '}
          <span className="font-semibold text-[#1F1A15]">
            Digital Experience
          </span>
          .
        </p>

        {/* Action Button */}
        <button
          onClick={onExplore}
          className="group relative px-8 py-4 rounded-full font-sans font-semibold text-xs md:text-sm tracking-[0.2em] uppercase overflow-hidden border border-[#8C6239]/20 bg-[#8C6239]/5 text-[#1F1A15] hover:border-[#8C6239]/50 hover:bg-[#8C6239]/10 shadow-[0_0_20px_rgba(140,98,57,0.05)] hover:shadow-[0_0_25px_rgba(140,98,57,0.15)] transition-all duration-300 active:scale-95"
        >
          {/* Glowing Aura inside button */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-750 bg-gradient-to-r from-[#D8B467]/10 via-[#A9843D]/20 to-[#D8B467]/10 pointer-events-none" />
          
          <span className="relative z-10 flex items-center space-x-2">
            <span>what we create</span>
            <svg
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
