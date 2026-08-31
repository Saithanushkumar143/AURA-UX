import React from 'react';

export default function Services({ setCurrentPage, isDarkMode }) {
  const services = [
    {
      id: 'service-brand',
      title: 'Best for Your Brand',
      subtitle: 'Corporate Sites & UX/UI',
      description: 'High-performance websites and user-centric wireframes tailored for corporate distinction.',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
        </svg>
      )
    },
    {
      id: 'service-surprise',
      title: 'Digital Surprises',
      subtitle: 'Milestones & RSVP Sites',
      description: 'Personalized digital milestones, interactive birthday cards, and anniversary websites.',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
      icon: (
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625A2.625 2.625 0 1114.625 7.5H12m0-2.625V7.5m-9 3.75h18M12 7.5v13.5" />
        </svg>
      )
    }
  ];

  return (
    <div className={`relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-3 md:px-6 pt-20 pb-8 transition-colors duration-500 ${
      isDarkMode ? 'bg-[#07060A]' : 'bg-[#FBF9F4]'
    }`}>
      {/* Background Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full blur-[90px] pointer-events-none opacity-35 ${
        isDarkMode ? 'bg-[#D4AF37]/5' : 'bg-[#8C6239]/5'
      }`} />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="text-center max-w-xl mb-6 md:mb-8 animate-fadeIn">
          <h2 className="text-2xl md:text-5xl font-serif font-bold tracking-tight mb-2 leading-none">
            <span className={isDarkMode 
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-[#F6E2B3] via-[#D8B467] to-[#A9843D]' 
              : 'bg-clip-text text-transparent bg-gradient-to-r from-[#503E21] via-[#AA7C11] to-[#251A07]'
            }>
              Our Services
            </span>
          </h2>
          <p className={`text-[10px] md:text-sm font-light tracking-wide ${
            isDarkMode ? 'text-gray-400' : 'text-[#504A43]'
          }`}>
            AURA UX creates premium digital experiences for brands, people, and the moments they never want to forget.
          </p>
        </div>

        {/* Services Cards Grid - Side-by-side on all screens */}
        <div className="grid grid-cols-2 gap-3 md:gap-6 w-full max-w-3xl">
          {services.map((service, index) => (
            <div
              key={service.id}
              onClick={() => setCurrentPage(service.id)}
              style={{ animationDelay: `${index * 100}ms` }}
              className={`group cursor-pointer rounded-xl border p-3 md:p-4 flex flex-col justify-between transition-all duration-500 animate-fadeInUp hover:-translate-y-1 hover:shadow-[0_10px_20px_-5px_rgba(212,175,55,0.06)] ${
                isDarkMode 
                  ? 'border-white/5 bg-[#0C0B10] hover:border-[#D4AF37]/45' 
                  : 'border-[#8C6239]/10 bg-white hover:border-[#8C6239]/40'
              }`}
            >
              <div>
                {/* Header Card Row */}
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-1.5 md:p-2 rounded-md md:rounded-lg border ${
                    isDarkMode 
                      ? 'border-white/5 bg-white/5 text-[#D8B467]' 
                      : 'border-[#8C6239]/10 bg-[#8C6239]/5 text-[#8C6239]'
                  }`}>
                    {service.icon}
                  </div>
                </div>

                {/* Landscape Image Container */}
                <div className="mb-2 overflow-hidden rounded-lg aspect-video md:aspect-[16/10] border border-black/5 dark:border-white/5">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" 
                  />
                </div>

                {/* Card Title */}
                <h3 className="text-sm md:text-xl font-bold font-serif mb-0.5 transition-colors group-hover:text-[#D8B467] dark:group-hover:text-[#F6E2B3]">
                  {service.title}
                </h3>
                <h4 className={`text-[8px] md:text-[10px] uppercase tracking-widest font-semibold mb-1.5 ${
                  isDarkMode ? 'text-[#D8B467]/75' : 'text-[#8C6239]'
                }`}>
                  {service.subtitle}
                </h4>

                {/* Card Description */}
                <p className={`text-[10px] md:text-xs font-sans font-light leading-relaxed mb-3 ${
                  isDarkMode ? 'text-gray-400' : 'text-[#504A43]'
                }`}>
                  {service.description}
                </p>
              </div>

              {/* Action Trigger */}
              <div className="pt-2 border-t border-inherit flex items-center justify-between">
                <span className={`text-[9px] md:text-[10px] font-semibold uppercase tracking-wider ${
                  isDarkMode ? 'text-white' : 'text-[#1F1A15]'
                }`}>
                  Showcase
                </span>
                <div className={`h-5 w-5 md:h-6 md:w-6 rounded-full border flex items-center justify-center transition-all ${
                  isDarkMode 
                    ? 'border-white/10 bg-white/5 text-white group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] group-hover:text-black' 
                    : 'border-[#8C6239]/20 bg-[#8C6239]/5 text-[#1F1A15] group-hover:bg-[#8C6239] group-hover:border-[#8C6239] group-hover:text-white'
                }`}>
                  <svg className="w-2.5 h-2.5 md:w-3 md:h-3 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
