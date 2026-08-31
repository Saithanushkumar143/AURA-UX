import React, { useState, useEffect } from 'react';

export default function ServiceBrand({ setCurrentPage, isDarkMode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation slightly after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const screenshots = [
    {
      id: 1,
      title: 'Aura Analytics Dashboard',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 2,
      title: 'Minimal SaaS Interface',
      image: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 3,
      title: 'Creative Agency Portal',
      image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 4,
      title: 'Sleek E-Commerce Studio',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&q=80',
    },
    {
      id: 5,
      title: 'Modern Mobile Web Platform',
      image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80',
    }
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedScreenshots = [...screenshots, ...screenshots];

  const whatsappMessage = encodeURIComponent("Hi AURA UX! I'm interested in building a premium website for my brand. Let's collaborate!");

  return (
    <div className={`relative min-h-screen w-full flex flex-col pt-24 pb-12 overflow-hidden px-4 md:px-6 transition-colors duration-500 ${
      isDarkMode ? 'bg-[#07060A]' : 'bg-[#FBF9F4]'
    }`}>
      {/* Background Glow */}
      <div className={`absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none opacity-20 ${
        isDarkMode ? 'bg-[#D4AF37]/5' : 'bg-[#8C6239]/5'
      }`} />

      {/* Back Button */}
      <div className="max-w-6xl mx-auto w-full mb-6 z-10">
        <button 
          onClick={() => setCurrentPage('services')}
          className={`flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold transition-colors ${
            isDarkMode ? 'text-gray-400 hover:text-[#D4AF37]' : 'text-[#7A7065] hover:text-[#8C6239]'
          }`}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to Services</span>
        </button>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between z-10 relative">
        {/* Animated Title Container */}
        <div className="relative h-16 md:h-20 w-full mb-8 flex items-start justify-start">
          <h2 className="font-serif font-bold tracking-tight leading-none text-3xl md:text-5xl text-left animate-title-transition">
            <span className={isDarkMode 
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#F6E2B3] via-[#D8B467] to-[#A9843D]' 
              : 'bg-clip-text text-transparent bg-gradient-to-r from-[#503E21] via-[#AA7C11] to-[#251A07]'
            }>
              Best for Your Brand
            </span>
          </h2>
        </div>

        {/* Horizontal Infinite Marquee Carousel */}
        <div className="w-full overflow-hidden py-4 my-auto relative">
          {/* Subtle gradient overlays on sides to fade images in/out */}
          <div className={`absolute top-0 bottom-0 left-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-r ${
            isDarkMode ? 'from-[#07060A] to-transparent' : 'from-[#FBF9F4] to-transparent'
          }`} />
          <div className={`absolute top-0 bottom-0 right-0 w-16 md:w-32 z-10 pointer-events-none bg-gradient-to-l ${
            isDarkMode ? 'from-[#07060A] to-transparent' : 'from-[#FBF9F4] to-transparent'
          }`} />

          {/* Marquee Track */}
          <div className="animate-marquee">
            {duplicatedScreenshots.map((shot, idx) => (
              <div 
                key={`${shot.id}-${idx}`}
                className="w-[260px] md:w-[380px] mx-2 md:mx-4 flex-shrink-0 group"
              >
                <div className={`relative aspect-video rounded-xl overflow-hidden border transition-all duration-500 shadow-md ${
                  isDarkMode 
                    ? 'border-white/5 bg-[#0C0B10] group-hover:border-[#D4AF37]/50 shadow-[0_0_20px_rgba(0,0,0,0.3)]' 
                    : 'border-[#8C6239]/10 bg-white group-hover:border-[#8C6239]/40 shadow-[0_5px_15px_-5px_rgba(140,98,57,0.08)]'
                }`}>
                  <img 
                    src={shot.image} 
                    alt={shot.title} 
                    className="w-full h-full object-cover transition-transform duration-[800ms] group-hover:scale-105" 
                  />
                  {/* Title overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                    <p className="text-white text-xs md:text-sm font-semibold tracking-wider text-center uppercase font-sans">
                      {shot.title}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small Description & WhatsApp Call to Action */}
        <div className="max-w-2xl mx-auto text-center mt-10 mb-6 animate-fadeIn">
          {/* Brief Description */}
          <p className={`text-xs md:text-sm leading-relaxed mb-8 font-light ${
            isDarkMode ? 'text-gray-400' : 'text-[#504A43]'
          }`}>
            We create pixel-perfect digital ecosystems that load in milliseconds and deliver premium user experiences. 
            From highly interactive administrative panels and SaaS interfaces to client-facing portals, 
            our websites are tailored to convert visual aesthetics into corporate success.
          </p>

          {/* Interactive sentence */}
          <h3 className={`text-sm md:text-base font-medium tracking-wide mb-6 ${
            isDarkMode ? 'text-white' : 'text-[#1F1A15]'
          }`}>
            Have a project in mind? Let's turn your vision into a digital masterpiece.
          </h3>

          {/* WhatsApp Interactive CTA */}
          <a
            href={`https://wa.me/919999999999?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full text-white font-semibold text-xs md:text-sm tracking-wider uppercase border transition-all duration-300 scale-100 hover:scale-102 active:scale-95 bg-emerald-600 border-emerald-500 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
          >
            {/* WhatsApp Logo */}
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.989-1.874-1.875-4.354-2.907-6.992-2.908-5.439 0-9.862 4.42-9.866 9.866-.001 1.761.472 3.479 1.374 5.023L1.934 20.89l5.166-1.356c.002-.001.002-.001.003-.001zm10.222-7.143c-.29-.145-1.72-.848-1.986-.944-.267-.097-.46-.145-.654.145-.193.291-.748.944-.917 1.138-.17.194-.339.218-.63.073-.29-.145-1.229-.453-2.34-1.445-.864-.77-1.447-1.721-1.616-2.012-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.509.145-.17.193-.291.29-.485.097-.194.049-.364-.025-.509-.073-.145-.654-1.577-.896-2.159-.236-.569-.475-.492-.654-.501-.169-.008-.363-.009-.557-.009-.194 0-.509.073-.775.364-.267.291-1.017.994-1.017 2.424s1.042 2.812 1.187 3.006c.145.194 2.051 3.131 4.969 4.387.694.299 1.237.478 1.659.612.698.222 1.332.19 1.833.115.559-.083 1.72-.703 1.962-1.382.242-.678.242-1.26.17-1.382-.073-.122-.267-.194-.557-.339z"/>
            </svg>
            <span>Let's Discuss on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
