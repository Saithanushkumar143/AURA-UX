import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage, isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b transition-colors duration-500 ${
      isDarkMode 
        ? 'bg-[#07060A]/85 border-white/5 text-white' 
        : 'bg-[#FBF9F4]/85 border-[#8C6239]/10 text-[#1F1A15]'
    } px-6 py-4`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo & Brand Name */}
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => setCurrentPage('home')}
        >
          <div className="relative h-10 w-10 rounded-full overflow-hidden border border-[#D4AF37]/50 shadow-[0_0_10px_rgba(212,175,55,0.2)] group-hover:border-[#D4AF37] transition-all">
            <img 
              src="/logo.jpg" 
              alt="AURA UX Logo" 
              className="h-full w-full object-cover scale-110" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-[0.2em] font-serif bg-gradient-to-r from-[#F6E2B3] via-[#D8B467] to-[#A9843D] bg-clip-text text-transparent">
              AURA UX
            </span>
            <span className="text-[8px] tracking-[0.3em] uppercase text-gray-500">
              Digital Experience
            </span>
          </div>
        </div>

        {/* Right side: Links + Theme Toggle */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentPage(link.id);
                  setIsOpen(false);
                }}
                className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                  currentPage === link.id
                    ? isDarkMode ? 'text-white' : 'text-[#8C6239]'
                    : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#7A7065] hover:text-[#1F1A15]'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className={`absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full ${
                    isDarkMode ? 'bg-[#D4AF37]' : 'bg-[#8C6239]'
                  }`} />
                )}
              </button>
            ))}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2.5 rounded-full border transition-all duration-300 ${
              isDarkMode 
                ? 'border-white/10 bg-white/5 text-yellow-400 hover:bg-white/10 hover:border-white/20' 
                : 'border-[#8C6239]/10 bg-[#8C6239]/5 text-[#8C6239] hover:bg-[#8C6239]/10 hover:border-[#8C6239]/20'
            }`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              // Sun Icon
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              // Moon Icon
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu & Toggle Row */}
        <div className="flex items-center space-x-3 md:hidden">
          {/* Mobile Theme Toggle */}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`p-2 rounded-full border transition-colors ${
              isDarkMode 
                ? 'border-white/10 bg-white/5 text-yellow-400' 
                : 'border-[#8C6239]/10 bg-[#8C6239]/5 text-[#8C6239]'
            }`}
            aria-label="Toggle Theme"
          >
            {isDarkMode ? (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            ) : (
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* Hamburger Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#7A7065] hover:text-[#1F1A15]'}`}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Links Overlay */}
      {isOpen && (
        <div className={`md:hidden absolute top-full left-0 right-0 border-b py-4 px-6 flex flex-col space-y-4 animate-fadeIn ${
          isDarkMode ? 'bg-[#07060A]/95 border-white/5' : 'bg-[#FBF9F4]/95 border-[#8C6239]/10'
        }`}>
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setIsOpen(false);
              }}
              className={`text-left text-xs font-semibold tracking-[0.2em] uppercase py-2 transition-colors ${
                currentPage === link.id
                  ? isDarkMode ? 'text-[#D4AF37]' : 'text-[#8C6239]'
                  : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-[#7A7065] hover:text-[#1F1A15]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
