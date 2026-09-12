import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, ArrowRight } from 'lucide-react';
import FlatbedTruck from './Truck';
import Airplane from './Airplane';
import { OfferCard } from './OfferCarousel';

export default function Services({ setCurrentPage }) {
  const whatsappNumber = '919490056028';
  
  // Desktop animation state triggers
  const [card1Dropped, setCard1Dropped] = useState(false);
  const [card2Dropped, setCard2Dropped] = useState(false);
  const [truckDone, setTruckDone] = useState(false);
  const [isDriving, setIsDriving] = useState(true);

  // Mobile airplane animation state triggers
  const [mobileCard1Dropped, setMobileCard1Dropped] = useState(false);
  const [mobileCard2Dropped, setMobileCard2Dropped] = useState(false);

  const offers = [
    {
      id: 'service-brand',
      tag: 'Corporate UX & Web',
      title: 'Best for Brands',
      description: 'High-performance bespoke websites, SaaS interfaces, and user-centric wireframes tailored for corporate distinction.',
      imageSrc: '/service-brand-cover.png',
      imageAlt: 'Best for Brands - Corporate Web and UX',
      brandLogoSrc: '/logo.jpg',
      brandName: 'AURA Enterprise',
      promoCode: 'PREMIUM TIER',
      onClick: () => setCurrentPage('service-brand'),
    },
    {
      id: 'service-surprise',
      tag: 'Celebrations & Gifts',
      title: 'Digital Surprises',
      description: 'Personalized interactive wishboards, anniversary memory timelines, and emotional milestone celebrations.',
      imageSrc: '/service-surprise-cover.png',
      imageAlt: 'Digital Surprises - Milestone Websites',
      brandLogoSrc: '/logo.jpg',
      brandName: 'AURA Moments',
      promoCode: '3D INTERACTIVE',
      onClick: () => setCurrentPage('service-surprise'),
    },
  ];

  // Desktop Truck sequence
  useEffect(() => {
    setCard1Dropped(false);
    setCard2Dropped(false);
    setTruckDone(false);
    setIsDriving(true);

    const t_stop1 = setTimeout(() => setIsDriving(false), 2000);
    const t_drop1 = setTimeout(() => setCard1Dropped(true), 2200);
    const t_resume1 = setTimeout(() => setIsDriving(true), 3200);

    const t_stop2 = setTimeout(() => setIsDriving(false), 5000);
    const t_drop2 = setTimeout(() => setCard2Dropped(true), 5200);
    const t_resume2 = setTimeout(() => setIsDriving(true), 6200);

    const t_done = setTimeout(() => setTruckDone(true), 8200);

    return () => {
      clearTimeout(t_stop1);
      clearTimeout(t_drop1);
      clearTimeout(t_resume1);
      clearTimeout(t_stop2);
      clearTimeout(t_drop2);
      clearTimeout(t_resume2);
      clearTimeout(t_done);
    };
  }, []);

  // Mobile Airplane sequence
  useEffect(() => {
    setMobileCard1Dropped(false);
    setMobileCard2Dropped(false);

    const m_drop1 = setTimeout(() => setMobileCard1Dropped(true), 1100);
    const m_drop2 = setTimeout(() => setMobileCard2Dropped(true), 2400);

    return () => {
      clearTimeout(m_drop1);
      clearTimeout(m_drop2);
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between items-center px-4 md:px-8 pt-24 sm:pt-28 md:pt-24 pb-8 md:pb-12 bg-transparent text-[#1F1A15] overflow-x-clip">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-[#F5E6B3]/30 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center justify-between flex-1">
        
        {/* Header Section (With ample headroom below navbar) */}
        <div className="text-center max-w-3xl mb-3 md:mb-6 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-2 md:mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#503E21] via-[#AA7C11] to-[#251A07]">
              Our Services
            </span>
          </h2>
          <p className="text-xs sm:text-sm font-light tracking-wide text-[#504A43] max-w-lg mx-auto px-2">
            AURA UX crafts premium digital ecosystems, interactive platforms, and unforgettable experiences.
          </p>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW: LUXURY AIRPLANE AIR-DROP & MATRIX (1,1) & (2,2)   */}
        {/* ============================================================== */}
        <div className="w-full flex-col items-center justify-center flex md:hidden relative my-auto py-2">
          
          {/* Airplane Sky Flight Corridor */}
          <div className="relative w-full h-16 overflow-visible pointer-events-none mb-2">
            <motion.div
              initial={{ x: '-150px', y: 0 }}
              animate={{
                x: ['-150px', '18vw', '18vw', '68vw', '68vw', '120vw'],
                y: [0, -2, -2, 2, 2, -10],
              }}
              transition={{
                duration: 4.6,
                times: [0, 0.24, 0.38, 0.62, 0.76, 1],
                ease: 'easeInOut',
              }}
              className="absolute left-0 top-0 w-44 sm:w-52 select-none"
            >
              {/* Flight pitch attitude */}
              <motion.div
                animate={{ rotate: [-0.8, 1.2, -0.8] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
              >
                <Airplane />
              </motion.div>
            </motion.div>
          </div>

          {/* Staggered Matrix (1,1) & (2,2) Grid Container (Significantly Larger & Clearer) */}
          <div className="w-full max-w-[410px] sm:max-w-[450px] grid grid-cols-2 gap-3.5 sm:gap-4 relative z-10">
            
            {/* CELL (1,1) - CARD 1 (Top Left) */}
            <div className="relative h-[240px] sm:h-[265px] flex items-center justify-center">
              {mobileCard1Dropped && (
                <motion.div
                  initial={{ opacity: 0, y: -90, scale: 0.8, rotate: -6 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.65, type: 'spring', stiffness: 260, damping: 19 }}
                  onClick={offers[0].onClick}
                  className="w-full h-full rounded-2xl overflow-hidden bg-white border border-[#8C6239]/30 shadow-2xl flex flex-col justify-between cursor-pointer active:scale-95 transition-transform group"
                >
                  {/* Thumbnail Cover */}
                  <div className="relative w-full h-[56%] overflow-hidden bg-[#F3EFE6]">
                    <img src={offers[0].imageSrc} alt={offers[0].imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[9.5px] font-bold text-[#8C6239] uppercase tracking-wider border border-[#8C6239]/20 shadow-sm">
                      {offers[0].tag}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-serif font-bold text-[#1F1A15] leading-snug line-clamp-1 group-hover:text-[#8C6239] transition-colors">
                        {offers[0].title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#504A43] line-clamp-2 mt-0.5 leading-snug font-light">
                        {offers[0].description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-1.5 border-t border-[#8C6239]/10 mt-1">
                      <span className="text-[9.5px] font-mono font-bold text-[#8C6239] tracking-wider">
                        {offers[0].promoCode}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#8C6239]/10 flex items-center justify-center text-[#8C6239]">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* CELL (1,2) - EMPTY MATRIX SLOT */}
            <div className="relative h-[240px] sm:h-[265px] flex items-center justify-center pointer-events-none">
              <div className="w-full h-full rounded-2xl border border-dashed border-[#8C6239]/15 bg-[#8C6239]/[0.015] flex flex-col items-center justify-center opacity-40">
                <span className="text-[10px] font-mono text-[#8C6239]/50 tracking-widest uppercase font-bold">AURA UX</span>
                <span className="text-[8px] text-[#8C6239]/40 mt-1 tracking-wider uppercase">01 / ENTERPRISE</span>
              </div>
            </div>

            {/* CELL (2,1) - EMPTY MATRIX SLOT */}
            <div className="relative h-[240px] sm:h-[265px] flex items-center justify-center pointer-events-none">
              <div className="w-full h-full rounded-2xl border border-dashed border-[#8C6239]/15 bg-[#8C6239]/[0.015] flex flex-col items-center justify-center opacity-40">
                <span className="text-[10px] font-mono text-[#8C6239]/50 tracking-widest uppercase font-bold">AIR DROP</span>
                <span className="text-[8px] text-[#8C6239]/40 mt-1 tracking-wider uppercase">02 / MOMENTS</span>
              </div>
            </div>

            {/* CELL (2,2) - CARD 2 (Bottom Right) */}
            <div className="relative h-[240px] sm:h-[265px] flex items-center justify-center">
              {mobileCard2Dropped && (
                <motion.div
                  initial={{ opacity: 0, y: -90, scale: 0.8, rotate: 6 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                  transition={{ duration: 0.65, type: 'spring', stiffness: 260, damping: 19 }}
                  onClick={offers[1].onClick}
                  className="w-full h-full rounded-2xl overflow-hidden bg-white border border-[#8C6239]/30 shadow-2xl flex flex-col justify-between cursor-pointer active:scale-95 transition-transform group"
                >
                  {/* Thumbnail Cover */}
                  <div className="relative w-full h-[56%] overflow-hidden bg-[#F3EFE6]">
                    <img src={offers[1].imageSrc} alt={offers[1].imageAlt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur-md text-[9.5px] font-bold text-[#8C6239] uppercase tracking-wider border border-[#8C6239]/20 shadow-sm">
                      {offers[1].tag}
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-3 sm:p-3.5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm sm:text-base font-serif font-bold text-[#1F1A15] leading-snug line-clamp-1 group-hover:text-[#8C6239] transition-colors">
                        {offers[1].title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-[#504A43] line-clamp-2 mt-0.5 leading-snug font-light">
                        {offers[1].description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-1.5 border-t border-[#8C6239]/10 mt-1">
                      <span className="text-[9.5px] font-mono font-bold text-[#8C6239] tracking-wider">
                        {offers[1].promoCode}
                      </span>
                      <div className="w-6 h-6 rounded-full bg-[#8C6239]/10 flex items-center justify-center text-[#8C6239]">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP/TABLET VIEW: LUXURY FLATBED TRUCK DELIVERY             */}
        {/* ============================================================== */}
        <div className="relative w-full max-w-6xl hidden md:flex items-center justify-center min-h-[480px] pb-6 my-auto">
          
          {/* MOVING FLATBED TRUCK LAYER */}
          {!truckDone && (
            <div className="absolute inset-0 pointer-events-none z-30 flex items-end overflow-visible">
              <motion.div
                initial={{ x: '-130vw' }}
                animate={{
                  x: ['-130vw', '-8vw', '-8vw', '34vw', '34vw', '140vw'],
                }}
                transition={{
                  duration: 8.2,
                  times: [0, 0.244, 0.390, 0.610, 0.756, 1],
                  ease: 'easeInOut',
                }}
                className="relative w-[760px] lg:w-[960px] select-none flex-shrink-0 translate-y-[24%]"
              >
                {/* Truck Cargo Deck Layer */}
                <div className="absolute top-[8%] left-[6%] w-[58%] h-[50%] flex items-end justify-around pointer-events-none z-20">
                  
                  {/* Card 1 perched on flatbed deck */}
                  <AnimatePresence>
                    {!card1Dropped && (
                      <motion.div
                        exit={{
                          opacity: 0,
                          y: 35,
                          scale: 0.95,
                          transition: { duration: 0.3, ease: 'easeOut' },
                        }}
                        className="w-[175px] lg:w-[200px] h-[240px] lg:h-[280px] rounded-2xl overflow-hidden bg-white/95 border border-[#8C6239]/30 shadow-2xl p-2 flex flex-col justify-between transform -rotate-1 origin-bottom"
                      >
                        <div className="w-full h-[52%] rounded-xl overflow-hidden bg-stone-100">
                          <img src={offers[0].imageSrc} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="py-1">
                          <p className="text-[10px] uppercase font-bold text-[#AA7C11] tracking-wider truncate">
                            {offers[0].tag}
                          </p>
                          <h4 className="text-xs font-serif font-bold text-[#1F1A15] truncate">
                            {offers[0].title}
                          </h4>
                        </div>
                        <div className="text-[9px] bg-[#8C6239]/10 text-[#8C6239] rounded px-1.5 py-0.5 font-mono text-center font-bold">
                          CARGO LOAD 01
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Card 2 perched on flatbed deck */}
                  <AnimatePresence>
                    {!card2Dropped && (
                      <motion.div
                        exit={{
                          opacity: 0,
                          y: 35,
                          scale: 0.95,
                          transition: { duration: 0.3, ease: 'easeOut' },
                        }}
                        className="w-[175px] lg:w-[200px] h-[240px] lg:h-[280px] rounded-2xl overflow-hidden bg-white/95 border border-[#8C6239]/30 shadow-2xl p-2 flex flex-col justify-between transform rotate-1 origin-bottom"
                      >
                        <div className="w-full h-[52%] rounded-xl overflow-hidden bg-stone-100">
                          <img src={offers[1].imageSrc} alt="" className="w-full h-full object-cover" />
                        </div>
                        <div className="py-1">
                          <p className="text-[10px] uppercase font-bold text-[#AA7C11] tracking-wider truncate">
                            {offers[1].tag}
                          </p>
                          <h4 className="text-xs font-serif font-bold text-[#1F1A15] truncate">
                            {offers[1].title}
                          </h4>
                        </div>
                        <div className="text-[9px] bg-[#8C6239]/10 text-[#8C6239] rounded px-1.5 py-0.5 font-mono text-center font-bold">
                          CARGO LOAD 02
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Flatbed Truck Image with Rotating Wheels */}
                <FlatbedTruck isDriving={isDriving} />
              </motion.div>
            </div>
          )}

          {/* PERMANENT DESKTOP SERVICE CARDS */}
          <div 
            className="flex flex-row items-center justify-center gap-8 lg:gap-14 w-full px-6 relative z-10"
            style={{ perspective: '1200px' }}
          >
            {offers.map((offer, index) => {
              const isDropped = index === 0 ? card1Dropped : card2Dropped;

              return (
                <div key={offer.id} className="relative flex flex-col items-center">
                  <div className="relative w-[340px] lg:w-[380px] h-[440px]">
                    {isDropped && (
                      <motion.div
                        initial={{ opacity: 0, y: -60, scale: 0.9, rotate: index === 0 ? -4 : 4 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                        transition={{ duration: 0.65, type: 'spring', stiffness: 240, damping: 18, mass: 1 }}
                        className="relative z-10"
                      >
                        <OfferCard offer={offer} index={index} disableEntrance={true} />
                      </motion.div>
                    )}
                  </div>

                  {isDropped && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [0, 1.4, 1.8], opacity: [0, 0.65, 0] }}
                      transition={{ duration: 0.6, ease: 'easeOut' }}
                      className="absolute -bottom-3 w-4/5 h-6 rounded-full bg-gradient-to-r from-transparent via-[#AA7C11]/30 to-transparent blur-md pointer-events-none z-0"
                    />
                  )}
                </div>
              );
            })}
          </div>

        </div>

        {/* ============================================================== */}
        {/* BOTTOM HELPER & ACTION INFO                                    */}
        {/* ============================================================== */}
        <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl px-4 text-xs text-[#7A7065] gap-3">
          <p className="font-light text-[10px] sm:text-xs text-center sm:text-left hidden sm:block">
            💡 <span className="font-medium text-[#1F1A15]">Tip:</span> Click any card to explore the interactive showcase or discuss custom solutions.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi AURA UX! I'd like to consult on a custom project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full text-white font-semibold text-xs uppercase tracking-wider bg-emerald-600 border border-emerald-500 hover:bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all scale-100 hover:scale-102 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
