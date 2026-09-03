import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MoveUpRight, Gift, Heart, Calendar, Trophy, Sparkles } from 'lucide-react';

export default function ServiceSurprise({ setCurrentPage }) {
  const whatsappNumber = '919490056028';

  const categories = [
    {
      id: 'birthday-portal',
      label: 'Birthday Portal',
      icon: Gift,
      title: 'Interactive Birthday Portals',
      description: 'Personalized interactive wishboards, music playlists, countdown timers & celebratory 3D animations.',
      projects: [
        {
          id: 'b-01',
          img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
          title: 'Golden Jubilee Wishboard',
          des: 'Interactive audio & text wish walls with live guest messages and celebratory confetti animations.',
          demoUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'b-02',
          img: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
          title: 'Midnight Countdown Vault',
          des: 'Cinematic animated countdown that unlocks personal video tributes right when the clock strikes 12.',
          demoUrl: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'b-03',
          img: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
          title: 'Soundtrack Visualizer',
          des: 'Synchronized bespoke birthday soundtrack with interactive audio-reactive particle visualizer.',
          demoUrl: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'b-04',
          img: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1200&q=80',
          title: '3D Candle Blow Experience',
          des: 'Interactive mic & gesture-enabled digital cake candle blowing experience with secret wishing notes.',
          demoUrl: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'memory-timeline',
      label: 'Memory Timeline',
      icon: Heart,
      title: 'Anniversary Memory Timelines',
      description: 'An emotional cinematic storytelling journey retracing each beautiful milestone and chapter of your relationship.',
      projects: [
        {
          id: 'm-01',
          img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
          title: 'Our Decade in Chapters',
          des: 'Smooth vertical parallax journey retracing first dates, unforgettable vacations, and wedding vows.',
          demoUrl: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'm-02',
          img: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
          title: 'Interactive Travel & Love Map',
          des: 'Custom illustrated interactive map pinpointing every meaningful coordinate across the globe.',
          demoUrl: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'm-03',
          img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80',
          title: 'Private Letters Vault',
          des: 'Password-protected encrypted vault storing cherished handwritten love letters and private memories.',
          demoUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'm-04',
          img: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
          title: 'Cinematic Montage Reel',
          des: 'Ultra-high-definition audio-visual montage of heartfelt relationship moments with custom narration.',
          demoUrl: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'luxury-invitation',
      label: 'Luxury RSVP',
      icon: Calendar,
      title: 'Luxury Digital Invitations & RSVPs',
      description: 'Handcrafted digital wedding & gala invitations featuring real-time RSVP management, schedules, and venue navigation.',
      projects: [
        {
          id: 'i-01',
          img: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
          title: 'The Royal Gala RSVP',
          des: 'Wax seal opening animation with real-time guest attendance confirmation and meal preferences.',
          demoUrl: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'i-02',
          img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
          title: 'Interactive Venue Navigation',
          des: '3D interactive floor plans, parking directions, and Google Maps turn-by-turn navigation.',
          demoUrl: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'i-03',
          img: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
          title: 'Multi-Day Itinerary Guide',
          des: 'Elegantly synchronized event schedules, live weather forecasts, and dress code lookbooks.',
          demoUrl: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'i-04',
          img: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
          title: 'VIP QR Check-In Pass',
          des: 'Instant Apple/Google Wallet pass generation for seamless guest check-in at the venue entrance.',
          demoUrl: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'milestone-board',
      label: 'Milestone Board',
      icon: Trophy,
      title: 'Milestone Celebration Boards',
      description: 'Honor career promotions, graduations, and life triumphs with custom tribute messages and celebratory animations.',
      projects: [
        {
          id: 'mb-01',
          img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
          title: 'Executive Hall of Fame',
          des: 'Dynamic wall of peer endorsements, career milestones, and client appreciations for leaders.',
          demoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'mb-02',
          img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
          title: 'Graduation Capstone Portal',
          des: 'Interactive graduate tribute board featuring thesis showcases, teacher wishes, and photo memories.',
          demoUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'mb-03',
          img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
          title: 'Retirement Legacy Archive',
          des: 'Decade-long career legacy archive with recorded colleague messages, achievements, and toast notes.',
          demoUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'mb-04',
          img: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
          title: 'Championship Trophy Room',
          des: 'Virtual 3D trophy case celebrating athletic triumphs, team records, and season highlight videos.',
          demoUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'virtual-gift-box',
      label: 'Virtual Gift Box',
      icon: Sparkles,
      title: 'Personalized Virtual Gift Boxes',
      description: 'A 3D interactive unboxing journey filled with personalized letters, hidden easter eggs, and digital gift vouchers.',
      projects: [
        {
          id: 'g-01',
          img: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
          title: '3D Ribbon Untie & Unbox',
          des: 'Physics-enabled 3D parcel unwrapping with golden confetti bursts and personalized unboxing notes.',
          demoUrl: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'g-02',
          img: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1200&q=80',
          title: 'Scratch-to-Reveal Voucher',
          des: 'Interactive digital coin scratch card revealing vacation tickets, spa retreats, and custom gifts.',
          demoUrl: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'g-03',
          img: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80',
          title: 'Audio Greeting Capsule',
          des: 'Spinning digital vinyl record player loaded with custom voice notes and acoustic dedications.',
          demoUrl: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'g-04',
          img: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
          title: 'Treasure Hunt Clue Trail',
          des: 'Step-by-step interactive riddle maze leading the recipient directly to their real-world surprise.',
          demoUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
  ];

  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);

  const activeCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];

  const getWhatsAppUrl = (project) => {
    const text = `Hi AURA UX! I'm interested in creating a custom "${project.title}" (${activeCategory.label}) experience.\n\n` +
      `📌 Project Name: ${project.title}\n` +
      `🖼️ Thumbnail Preview: ${project.img}\n` +
      `🔗 Demo Link: ${project.demoUrl || project.img}\n\n` +
      `Let's discuss how we can build this for my special occasion!`;
    return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppClick = (e, project) => {
    e.stopPropagation();
    window.open(getWhatsAppUrl(project), '_blank');
  };

  const handleDemoLinkClick = (e, project) => {
    e.stopPropagation();
    window.open(project.demoUrl || project.img, '_blank');
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
            Select a category below to explore bespoke interactive formats. Click the demo button to view the live site, or tap the WhatsApp icon to commission a custom build.
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

        {/* Dynamic Condition Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategoryId}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="w-full mb-8"
          >
            <div className="grid grid-cols-12 gap-4 md:gap-6 overflow-hidden">
              {activeCategory.projects.map((project, index) => {
                let colSpanClass = 'sm:col-span-6 col-span-12';
                if (index === 0) {
                  colSpanClass = 'sm:col-span-5 col-span-12';
                } else if (index === 1) {
                  colSpanClass = 'sm:col-span-7 col-span-12';
                } else if (index === activeCategory.projects.length - 2) {
                  colSpanClass = 'sm:col-span-7 col-span-12';
                } else if (index === activeCategory.projects.length - 1) {
                  colSpanClass = 'sm:col-span-5 col-span-12';
                }

                return (
                  <motion.article
                    key={project.id}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ ease: 'easeOut', duration: 0.4, delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className={`relative ${colSpanClass} group overflow-hidden rounded-2xl border border-[#8C6239]/20 bg-white shadow-sm hover:shadow-xl hover:border-[#8C6239]/50 transition-all duration-500`}
                  >
                    <div className="relative w-full h-[250px] sm:h-[290px] md:h-[330px] overflow-hidden bg-[#F3EFE6]">
                      <img
                        src={project.img}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-106"
                      />
                      {/* Gradient Overlay for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                    </div>

                    {/* Bottom Floating Bar */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 flex justify-between items-end gap-3 z-10">
                      <div className="space-y-1 max-w-[68%] sm:max-w-[72%]">
                        <h3 className="inline-block text-xs sm:text-sm md:text-base font-serif font-bold text-white bg-black/60 backdrop-blur-md rounded-xl py-1.5 px-3 border border-white/15 group-hover:border-[#8C6239]/60 transition-colors leading-snug">
                          {project.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-[#FBF9F4]/85 font-light line-clamp-2 drop-shadow-sm leading-relaxed">
                          {project.des}
                        </p>
                      </div>

                      {/* Action Buttons: Live Demo Link & WhatsApp Direct Inquiry */}
                      <div className="flex items-center space-x-2 flex-shrink-0">
                        {/* Live Demo Link Button */}
                        <button
                          type="button"
                          onClick={(e) => handleDemoLinkClick(e, project)}
                          title="Open Live Demo Link"
                          className="w-9 h-9 sm:w-10 sm:h-10 text-white grid place-content-center rounded-full bg-[#1F1A15]/90 border border-white/20 hover:bg-[#8C6239] hover:border-[#8C6239] hover:rotate-45 transition-all duration-300 shadow-md cursor-pointer group/btn"
                        >
                          <MoveUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                        </button>

                        {/* WhatsApp Direct Inquiry Button */}
                        <button
                          type="button"
                          onClick={(e) => handleWhatsAppClick(e, project)}
                          title="Inquire with Name & Thumbnail Link on WhatsApp"
                          className="w-9 h-9 sm:w-10 sm:h-10 text-white grid place-content-center rounded-full bg-emerald-600 border border-emerald-500 hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_12px_rgba(16,185,129,0.35)] cursor-pointer"
                        >
                          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current" viewBox="0 0 24 24">
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
            Every surprise is handcrafted to evoke genuine emotion. Tap any project card above to immediately begin customizing that concept for your special occasion.
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
