import React from 'react';
import { OfferCarousel } from './OfferCarousel';
import { MessageSquare } from 'lucide-react';

export default function Services({ setCurrentPage }) {
  const whatsappNumber = '919490056028';

  const offers = [
    {
      id: 'service-brand',
      tag: 'Corporate UX & Web',
      title: 'Best for Your Brand',
      description: 'High-performance bespoke websites, SaaS interfaces, and user-centric wireframes tailored for corporate distinction.',
      imageSrc: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Best for Your Brand - Corporate Web and UX',
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
      imageSrc: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Digital Surprises - Milestone Websites',
      brandLogoSrc: '/logo.jpg',
      brandName: 'AURA Moments',
      promoCode: '3D INTERACTIVE',
      onClick: () => setCurrentPage('service-surprise'),
    },
    {
      id: 'service-ecommerce',
      tag: 'E-Commerce & Retail',
      title: 'Haute E-Commerce Studios',
      description: 'High-fashion digital storefronts, interactive 3D product stages, and friction-free luxury checkout architectures.',
      imageSrc: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Haute E-Commerce Studios',
      brandLogoSrc: '/logo.jpg',
      brandName: 'AURA Commerce',
      promoCode: 'CUSTOM BUILT',
      onClick: () => {
        const msg = encodeURIComponent("Hi AURA UX! I'm interested in building a high-end E-Commerce Store for my brand.");
        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
      },
    },
    {
      id: 'service-gala',
      tag: 'Exclusive Invitations',
      title: 'VIP Digital Galas & RSVPs',
      description: 'Handcrafted luxury digital invitations with real-time guest tracking, interactive seating plans, and cinematic agendas.',
      imageSrc: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'VIP Digital Galas and RSVPs',
      brandLogoSrc: '/logo.jpg',
      brandName: 'AURA Privé',
      promoCode: 'CONCIERGE RSVP',
      onClick: () => {
        const msg = encodeURIComponent("Hi AURA UX! I want to create a Luxury Digital Invitation & RSVP portal for our event.");
        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
      },
    },
    {
      id: 'service-3d',
      tag: 'Next-Gen Web',
      title: 'Spatial 3D & WebGL Experiences',
      description: 'Immersive 3D interactive web experiences, kinetic physics, and spatial digital storytelling for visionary brands.',
      imageSrc: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      imageAlt: 'Spatial 3D and WebGL Experiences',
      brandLogoSrc: '/logo.jpg',
      brandName: 'AURA Labs',
      promoCode: 'SPATIAL 3D',
      onClick: () => {
        const msg = encodeURIComponent("Hi AURA UX! I'd love to build an Immersive 3D / WebGL Experience for our web presence.");
        window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
      },
    },
  ];

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-4 md:px-8 pt-24 pb-12 bg-[#FBF9F4] text-[#1F1A15]">
      {/* Ambient Luxury Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] rounded-full blur-[110px] pointer-events-none opacity-30 bg-[#8C6239]/10" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none opacity-20 bg-[#AA7C11]/10" />

      {/* Main Container */}
      <div className="relative z-10 max-w-6xl w-full flex flex-col items-center justify-center">
        {/* Header Section */}
        <div className="text-center max-w-2xl mb-8 md:mb-10 animate-fadeIn">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight mb-3 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#503E21] via-[#AA7C11] to-[#251A07]">
              Our Services
            </span>
          </h2>
          <p className="text-xs md:text-sm font-light tracking-wide text-[#504A43] max-w-lg mx-auto">
            AURA UX crafts premium digital ecosystems, interactive 3D platforms, and unforgettable milestone experiences.
          </p>
        </div>

        {/* Carousel Showcase */}
        <div className="w-full max-w-6xl animate-fadeInUp">
          <OfferCarousel offers={offers} />
        </div>

        {/* Bottom Helper & Action Info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between w-full max-w-5xl px-4 text-xs text-[#7A7065] gap-4">
          <p className="font-light">
            💡 <span className="font-medium text-[#1F1A15]">Tip:</span> Click any card to explore the interactive showcase or discuss custom solutions.
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi AURA UX! I'd like to consult on a custom project.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full text-white font-semibold text-xs uppercase tracking-wider bg-emerald-600 border border-emerald-500 hover:bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.2)] transition-all scale-100 hover:scale-102 active:scale-95"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
