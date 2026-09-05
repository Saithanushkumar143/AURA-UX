import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Gift, Heart, Calendar, Sparkles, ExternalLink } from 'lucide-react';

export default function ServiceSurprise({ setCurrentPage }) {
  const whatsappNumber = '919490056028';

  const categories = [
    {
      id: 'birthday-surprises',
      label: 'Birthday Surprises',
      icon: Gift,
      title: 'Interactive Birthday Surprises',
      description: 'Personalized birthday storytelling films, interactive candle blowout portals, scrapbook memories, and digital gift unboxing experiences.',
      projects: [
        {
          id: 'bday-cinematic',
          img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
          title: 'Cinematic Birthday Film & Letter',
          des: 'Four-act cinematic birthday film with interactive Cupid bow & arrow, rose burst, blossoming heart canvas tree, polaroid gallery, and wax-sealed love letter.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/cinematic-birthday',
        },
        {
          id: 'bday-luxe',
          img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
          title: 'Aura Luxe Birthday Gala',
          des: 'Ultra-luxurious birthday greeting portal with interactive candle blowout, typed message with voice note player, polaroid gallery with lightbox, and surprise reveal.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/birthday-lux-celebration',
        },
        {
          id: 'bday-scrapbook',
          img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1200&q=80',
          title: 'Bestie Scrapbook Birthday',
          des: 'Cute notebook & scrapbook-style birthday bash site with scotch-taped sticky notes, polaroid memory wall, inside-jokes chat stream, and Bestie Certificate.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/birthday-bestie-scrapbook',
        },
        {
          id: 'bday-surprise-box',
          img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
          title: 'Unwrapping Gift Surprise',
          des: 'Interactive multi-scene gift unboxing experience featuring a 3D animated gift box that shakes and explodes with confetti, love coupons notepad, and wish card.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/birthday-surprise-box',
        },
      ],
    },
    {
      id: 'anniversary-surprise',
      label: 'Anniversary Surprise',
      icon: Heart,
      title: 'Emotional Anniversary Surprises',
      description: 'Romantic anniversary memory timelines, marriage proposal stories, 3D flippable reasons why I love you, and couple storybooks.',
      projects: [
        {
          id: 'anniv-forever-vows',
          img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
          title: 'Forever & Always Anniversary',
          des: 'Romantic marriage & anniversary proposal story featuring postal love letter hero, Save-the-Date card, interactive 3D Velvet Ring Box that opens on click, and drafted vows notebook.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/anniversary-forever-vows',
        },
        {
          id: 'anniv-reasons-jar',
          img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80',
          title: 'Reasons Why I Love You',
          des: 'Doodly love letter with a sticky Heart-Jar progress counter, 9 flippable 3D cards revealing cute GIFs & heartfelt reasons, taped polaroid wall, and heart-tap finale.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/reasons-love-jar',
        },
        {
          id: 'anniv-love-wifey',
          img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80',
          title: 'Hi Wifey & Love Note',
          des: 'Playful 7-scene love note story featuring doodle backdrop, shimmer typography, interactive "Are You Mine?" decision cards, kiss sticker animation, and couple polaroid frame.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/love-note-wifey',
        },
      ],
    },
    {
      id: 'wedding-invitations',
      label: 'Wedding Invitations',
      icon: Calendar,
      title: 'Luxury Digital Wedding Invitations',
      description: 'Couture digital wedding invitations, animated RSVP portals, couple love journeys, event schedules, and destination guide books.',
      projects: [
        {
          id: 'wed-eternal-union',
          img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
          title: 'Eternal Union Luxury Wedding Portal',
          des: 'Opulent gold-foiled digital wedding invitation with animated calligraphy, ceremony itinerary timeline, interactive RSVP manager, and accommodation guide.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/wedding-elegance',
        },
        {
          id: 'wed-royal-destination',
          img: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
          title: 'Royal Destination Wedding Showcase',
          des: 'Cinematic destination wedding hub featuring palace backdrop video, multi-day sangeet/reception schedules, flight & stay concierge, and gift registry.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/wedding-elegance',
        },
      ],
    },
    {
      id: 'other',
      label: 'Other',
      icon: Sparkles,
      title: 'Milestone Celebrations & Bespoke Moments',
      description: 'Tailored digital surprises for graduations, baby showers, farewells, festivals, and custom memory keepsakes.',
      projects: [
        {
          id: 'oth-golden-gala',
          img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
          title: 'Golden Jubilee & Milestone Gala',
          des: 'Distinguished milestone celebration portal with interactive audio guestbook, archival photo restoration sliders, and congratulations board.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/anniversary-gala',
        },
        {
          id: 'oth-custom-keepsake',
          img: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=80',
          title: 'Bespoke Milestone Memory Keepsake',
          des: 'Custom-tailored interactive memory book with voice messages, personalized quiz challenges, timeline chapters, and celebration soundscapes.',
          templateUrl: 'https://aurauxtemplates.vercel.app/templates/celebrations/birthday-surprise-box',
        },
      ],
    },
  ];

  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);

  const activeCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];

  const getWhatsAppUrl = (project) => {
    const text = `Hi AURA UX! I'm interested in the "${project.title}" template (${activeCategory.label}) for my celebration.\n\n` +
      `*Template:* ${project.title}\n` +
      `*Overview:* ${project.des}\n` +
      `*Template Link:*\n${project.templateUrl}\n\n` +
      `Let's discuss customizing and creating this surprise!`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleCardClick = (project) => {
    window.open(project.templateUrl, '_blank');
  };

  const handleWhatsAppClick = (e, project) => {
    e.stopPropagation();
    window.open(getWhatsAppUrl(project), '_blank');
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col pt-24 pb-16 overflow-hidden px-4 md:px-8 bg-[#FBF9F4] text-[#1F1A15]">
      {/* Background Luxury Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[350px] rounded-full blur-[110px] pointer-events-none opacity-25 bg-gradient-to-tr from-[#8C6239]/15 via-[#AA7C11]/10 to-transparent" />
      <div className="absolute bottom-1/4 right-10 w-[300px] h-[300px] rounded-full blur-[90px] pointer-events-none opacity-20 bg-[#8C6239]/10" />

      {/* Back Button */}
      <div className="max-w-6xl mx-auto w-full mb-6 z-10">
        <button
          onClick={() => setCurrentPage('services')}
          className="group inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold transition-all text-[#7A7065] hover:text-[#8C6239] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Services</span>
        </button>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-between z-10 relative">
        {/* Header section */}
        <div className="text-center md:text-left mb-6">
          <h2 className="font-serif font-bold tracking-tight leading-none text-3xl md:text-5xl text-left animate-title-transition">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#503E21] via-[#AA7C11] to-[#251A07]">
              Digital Surprises
            </span>
          </h2>
          <p className="text-xs md:text-sm text-[#7A7065] mt-2 max-w-2xl font-light">
            {activeCategory.description} Tap any card to open the template, or tap the WhatsApp button to discuss a custom celebration surprise.
          </p>
        </div>

        {/* Interactive Category Buttons */}
        <div className="flex items-center gap-2 md:gap-3 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategoryId(cat.id)}
                className={`group inline-flex items-center space-x-2 px-3.5 md:px-5 py-2 md:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-[#8C6239] text-white shadow-md scale-102 border border-[#8C6239]'
                    : 'bg-white/90 text-[#504A43] border border-[#8C6239]/20 hover:border-[#8C6239]/60 hover:text-[#1F1A15] hover:bg-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#FBF9F4]' : 'text-[#8C6239]'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Template Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full mb-8"
          >
            <div className="grid grid-cols-12 gap-5 md:gap-6 overflow-hidden">
              {activeCategory.projects.map((project, index) => {
                let colSpanClass = 'col-span-12 md:col-span-6 lg:col-span-4';
                if (activeCategory.projects.length === 1) {
                  colSpanClass = 'col-span-12 md:col-span-10 md:col-start-2 lg:col-span-8 lg:col-start-3';
                } else if (activeCategory.projects.length === 2) {
                  colSpanClass = 'col-span-12 md:col-span-6';
                } else if (activeCategory.projects.length === 4) {
                  colSpanClass = 'col-span-12 sm:col-span-6';
                }

                return (
                  <motion.article
                    key={project.id}
                    onClick={() => handleCardClick(project)}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={`relative ${colSpanClass} group overflow-hidden rounded-2xl border border-[#8C6239]/20 bg-white shadow-sm hover:shadow-2xl hover:border-[#8C6239]/60 transition-all duration-500 flex flex-col justify-between cursor-pointer`}
                  >
                    <div className="relative w-full h-[250px] sm:h-[280px] md:h-[310px] overflow-hidden bg-[#F3EFE6]">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                      />
                      {/* Gradient Overlay for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      {/* Top Badges */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-amber-300 border border-amber-400/30">
                          Template
                        </span>
                        <span className="inline-flex items-center gap-1 text-[10px] font-medium text-white/90 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20 group-hover:bg-[#8C6239] group-hover:border-[#8C6239] transition-colors">
                          <span>Open Template</span>
                          <ExternalLink className="w-3 h-3 text-amber-300 group-hover:text-white" />
                        </span>
                      </div>
                    </div>

                    {/* Bottom Floating Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex justify-between items-end gap-3 z-10">
                      <div className="space-y-1.5 max-w-[70%] sm:max-w-[75%]">
                        <h3 className="inline-block text-xs sm:text-sm md:text-base font-serif font-bold text-white bg-black/60 backdrop-blur-md rounded-xl py-1.5 px-3 border border-white/15 group-hover:border-[#8C6239]/60 transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#FBF9F4]/85 font-light line-clamp-2 drop-shadow-sm leading-relaxed">
                          {project.des}
                        </p>
                      </div>

                      {/* WhatsApp Direct Inquiry Button */}
                      <div className="flex items-center flex-shrink-0">
                        <button
                          type="button"
                          onClick={(e) => handleWhatsAppClick(e, project)}
                          title="Send Inquiry on WhatsApp"
                          className="w-10 h-10 sm:w-11 sm:h-11 text-white grid place-content-center rounded-full bg-emerald-600 border border-emerald-500 hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.4)] cursor-pointer"
                        >
                          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.989-1.874-1.875-4.354-2.907-6.992-2.908-5.439 0-9.862 4.42-9.866 9.866-.001 1.761.472 3.479 1.374 5.023L1.934 20.89l5.166-1.356c.002-.001.002-.001.003-.001zm10.222-7.143c-.29-.145-1.72-.848-1.986-.944-.267-.097-.46-.145-.654.145-.193.291-.748.944-.917 1.138-.17.194-.339.218-.63.073-.29-.145-1.229-.453-2.34-1.445-.864-.77-1.447-1.721-1.616-2.012-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.509.145-.17.193-.291.29-.485.097-.194.049-.364-.025-.509-.073-.145-.654-1.577-.896-2.159-.236-.569-.475-.492-.654-.501-.169-.008-.363-.009-.557-.009-.194 0-.509.073-.775.364-.267.291-1.017.994-1.017 2.424s1.042 2.812 1.187 3.006c.145.194 2.051 3.131 4.969 4.387.694.299 1.237.478 1.659.612.698.222 1.332.19 1.833.115.559-.083 1.72-.703 1.962-1.382.242-.678.242-1.26.17-1.382-.073-.122-.267-.194-.557-.339z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Small Description & WhatsApp Call to Action */}
        <div className="max-w-2xl mx-auto text-center mt-4 mb-4 animate-fadeIn">
          <p className="text-xs md:text-sm leading-relaxed mb-6 font-light text-[#504A43]">
            Every surprise experience is handcrafted to evoke genuine emotion. Tap any concept card above to open the template, or plan a custom surprise on WhatsApp.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hi AURA UX! I'd like to plan a custom Digital Surprise website."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full text-white font-semibold text-xs md:text-sm tracking-wider uppercase border transition-all duration-300 scale-100 hover:scale-102 active:scale-95 bg-emerald-600 border-emerald-500 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.989-1.874-1.875-4.354-2.907-6.992-2.908-5.439 0-9.862 4.42-9.866 9.866-.001 1.761.472 3.479 1.374 5.023L1.934 20.89l5.166-1.356c.002-.001.002-.001.003-.001zm10.222-7.143c-.29-.145-1.72-.848-1.986-.944-.267-.097-.46-.145-.654.145-.193.291-.748.944-.917 1.138-.17.194-.339.218-.63.073-.29-.145-1.229-.453-2.34-1.445-.864-.77-1.447-1.721-1.616-2.012-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.509.145-.17.193-.291.29-.485.097-.194.049-.364-.025-.509-.073-.145-.654-1.577-.896-2.159-.236-.569-.475-.492-.654-.501-.169-.008-.363-.009-.557-.009-.194 0-.509.073-.775.364-.267.291-1.017.994-1.017 2.424s1.042 2.812 1.187 3.006c.145.194 2.051 3.131 4.969 4.387.694.299 1.237.478 1.659.612.698.222 1.332.19 1.833.115.559-.083 1.72-.703 1.962-1.382.242-.678.242-1.26.17-1.382-.073-.122-.267-.194-.557-.339z"/>
            </svg>
            <span>Let's Plan on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
