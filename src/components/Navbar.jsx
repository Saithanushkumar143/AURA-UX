import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Our Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-[#FBF9F4]/85 border-[#8C6239]/10 text-[#1F1A15] px-6 py-4 transition-colors duration-300">
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
            <span className="text-lg font-bold tracking-[0.2em] font-serif bg-gradient-to-r from-[#503E21] via-[#AA7C11] to-[#251A07] bg-clip-text text-transparent">
              AURA UX
            </span>
            <span className="text-[8px] tracking-[0.3em] uppercase text-gray-500">
              Digital Experience
            </span>
          </div>
        </div>

        {/* Right side: Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setIsOpen(false);
              }}
              className={`text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 relative py-1 ${
                currentPage === link.id
                  ? 'text-[#8C6239]'
                  : 'text-[#7A7065] hover:text-[#1F1A15]'
              }`}
            >
              {link.label}
              {currentPage === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[1.5px] rounded-full bg-[#8C6239]" />
              )}
            </button>
          ))}
        </div>

        {/* Mobile Hamburger Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-[#7A7065] hover:text-[#1F1A15]"
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
        <div className="md:hidden absolute top-full left-0 right-0 border-b py-4 px-6 flex flex-col space-y-4 animate-fadeIn bg-[#FBF9F4]/95 border-[#8C6239]/10">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                setCurrentPage(link.id);
                setIsOpen(false);
              }}
              className={`text-left text-xs font-semibold tracking-[0.2em] uppercase py-2 transition-colors ${
                currentPage === link.id
                  ? 'text-[#8C6239]'
                  : 'text-[#7A7065] hover:text-[#1F1A15]'
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
