import React from 'react';

export default function Hero({ onExplore, isDarkMode }) {
  return (
    <div className={`relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 pt-24 transition-colors duration-500 ${
      isDarkMode ? 'bg-[#07060A]' : 'bg-[#FBF9F4]'
    }`}>
      {/* Background Aura Glows */}
      {isDarkMode ? (
        <>
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#A9843D]/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#D8B467]/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
        </>
      ) : (
        <>
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#AA7C11]/5 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-[#D8B467]/3 rounded-full blur-[80px] md:blur-[120px] animate-pulse pointer-events-none" style={{ animationDuration: '8s' }} />
        </>
      )}

      {/* Grid Pattern overlay */}
      <div className={`absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none ${
        isDarkMode ? 'opacity-100' : 'opacity-10'
      }`} />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        {/* Centered Luxury Logo Badge */}
        <div className={`mb-8 relative h-28 w-28 md:h-36 md:w-36 rounded-full overflow-hidden border p-1 transition-all duration-500 animate-fadeIn ${
          isDarkMode 
            ? 'border-[#D4AF37]/45 bg-[#0C0B10] shadow-[0_0_30px_rgba(212,175,55,0.15)]' 
            : 'border-[#8C6239]/30 bg-white shadow-[0_0_20px_rgba(140,98,57,0.1)]'
        }`}>
          <img 
            src="/logo.jpg" 
            alt="AURA UX Brand Emblem" 
            className="h-full w-full object-cover rounded-full scale-105" 
          />
        </div>

        {/* Micro Tagline */}
        <div className={`mb-6 inline-flex items-center space-x-2 px-3 py-1 rounded-full border backdrop-blur-sm animate-fade-in-up ${
          isDarkMode 
            ? 'bg-white/5 border-white/10 text-[#D8B467]' 
            : 'bg-[#8C6239]/5 border-[#8C6239]/10 text-[#8C6239]'
        }`}>
          <span className={`h-1.5 w-1.5 rounded-full ${isDarkMode ? 'bg-[#D4AF37]' : 'bg-[#8C6239]'}`}></span>
          <span className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.25em] font-sans">
            Premium Digital Experiences
          </span>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wide font-serif mb-6 select-none animate-fadeIn leading-none">
          <span className={isDarkMode 
            ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#F6E2B3] via-[#D8B467] to-[#A9843D]' 
            : 'bg-clip-text text-transparent bg-gradient-to-r from-[#503E21] via-[#AA7C11] to-[#251A07]'
          }>
            AURA UX
          </span>
        </h1>

        {/* Subtitle */}
        <p className={`text-base md:text-xl font-sans font-light max-w-xl mb-12 tracking-wide leading-relaxed animate-fadeInUp ${
          isDarkMode ? 'text-gray-400' : 'text-[#504A43]'
        }`}>
          We turn ideas into{' '}
          <span className={`font-semibold underline decoration-2 underline-offset-4 ${
            isDarkMode ? 'text-white decoration-[#D4AF37]/50' : 'text-[#1F1A15] decoration-[#8C6239]/50'
          }`}>
            digital experiences
          </span>
          .
        </p>

        {/* Action Button */}
        <button
          onClick={onExplore}
          className={`group relative px-8 py-4 rounded-full font-sans font-semibold text-xs md:text-sm tracking-[0.2em] uppercase overflow-hidden border transition-all duration-300 active:scale-95 ${
            isDarkMode 
              ? 'text-white border-white/20 bg-white/5 hover:border-[#D4AF37]/50 hover:bg-white/10 shadow-[0_0_30px_rgba(212,175,55,0.08)] hover:shadow-[0_0_30px_rgba(212,175,55,0.2)]' 
              : 'text-[#1F1A15] border-[#8C6239]/20 bg-[#8C6239]/5 hover:border-[#8C6239]/50 hover:bg-[#8C6239]/10 shadow-[0_0_20px_rgba(140,98,57,0.05)] hover:shadow-[0_0_25px_rgba(140,98,57,0.15)]'
          }`}
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

      {/* Elegant scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 opacity-40 hover:opacity-80 transition-opacity pointer-events-none">
        <span className={`text-[9px] uppercase tracking-[0.2em] font-sans ${isDarkMode ? 'text-gray-500' : 'text-[#7A7065]'}`}>Scroll</span>
        <div className={`w-[1px] h-8 bg-gradient-to-b to-transparent animate-bounce ${
          isDarkMode ? 'from-[#D4AF37]' : 'from-[#8C6239]'
        }`} />
      </div>
    </div>
  );
}
