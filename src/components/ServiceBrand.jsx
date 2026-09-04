import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, MoveUpRight, Building2, Laptop, ShoppingBag, Palette, Compass } from 'lucide-react';

export default function ServiceBrand({ setCurrentPage }) {
  const whatsappNumber = '919490056028';

  const categories = [
    {
      id: 'corporate-enterprise',
      label: 'Corporate & Enterprise',
      icon: Building2,
      title: 'Corporate & Enterprise Portals',
      description: 'High-performance bespoke corporate ecosystems, investor relation hubs, and dynamic governance platforms.',
      projects: [
        {
          id: 'c-01',
          img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
          title: 'Aura Enterprise Global Hub',
          des: 'High-impact corporate web ecosystem featuring multi-region architecture and executive governance suites.',
          demoUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'c-02',
          img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          title: 'Interactive Investor & CSR Center',
          des: 'Dynamic financial data storytelling, real-time ESG metrics, and interactive shareholder reporting dashboards.',
          demoUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'c-03',
          img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
          title: 'Executive Leadership Portal',
          des: 'Distinguished leadership profiles, media press rooms, and keynote broadcast archives tailored for global firms.',
          demoUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'c-04',
          img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
          title: 'Global Multi-Region Network',
          des: 'Sub-second edge CDN deployment with localized multilingual switching and enterprise compliance.',
          demoUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'saas-platforms',
      label: 'SaaS & Platforms',
      icon: Laptop,
      title: 'Next-Gen SaaS & Web Platforms',
      description: 'Ultra-modern SaaS interfaces, AI product showcases, interactive dashboards, and frictionless onboarding journeys.',
      projects: [
        {
          id: 's-01',
          img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
          title: 'Cloud Telemetry & Analytics Suite',
          des: 'Real-time telemetry dashboard with interactive data widgets, custom metrics, and refined dark/light modes.',
          demoUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 's-02',
          img: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=80',
          title: 'AI Product Playground & Hub',
          des: 'Interactive product walkthroughs, live code simulators, and instant playground demo environments.',
          demoUrl: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 's-03',
          img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
          title: 'High-Converting SaaS Funnel',
          des: 'Frictionless onboarding flows, interactive pricing calculators, and ROI estimation widgets.',
          demoUrl: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 's-04',
          img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
          title: 'Developer Sandbox & API Docs',
          des: 'Developer-first documentation hub with executable API sandboxes, SDK switchers, and real-time status checks.',
          demoUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'ecommerce-d2c',
      label: 'E-Commerce & D2C',
      icon: ShoppingBag,
      title: 'Haute E-Commerce & D2C Showcases',
      description: 'Luxury digital storefronts, interactive 3D product viewing stages, and friction-free checkout architectures.',
      projects: [
        {
          id: 'e-01',
          img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
          title: 'Luxury Fashion Digital Flagship',
          des: 'Cinematic video lookbooks, interactive product detail stages, and one-tap checkout architecture.',
          demoUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'e-02',
          img: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
          title: '3D Interactive Product Studio',
          des: 'Real-time 360-degree spatial product inspection with custom material textures and lighting controls.',
          demoUrl: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'e-03',
          img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
          title: 'Artisan D2C Lifestyle Store',
          des: 'Editorial product storytelling, custom gift bundle builders, and automated subscription loyalty portals.',
          demoUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'e-04',
          img: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
          title: 'High-Velocity Limited Drop Portal',
          des: 'Flash-sale architecture engineered for thousands of concurrent checkouts with live inventory queues.',
          demoUrl: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'creative-studios',
      label: 'Creative & Studios',
      icon: Palette,
      title: 'Creative Agency & Portfolio Hubs',
      description: 'Award-winning creative portfolios, kinetic storytelling, bespoke showreels, and immersive case study presentations.',
      projects: [
        {
          id: 'cr-01',
          img: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
          title: 'Design Architecture Studio',
          des: 'Kinetic typography, fluid WebGL transitions, and comprehensive case studies with before/after comparisons.',
          demoUrl: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'cr-02',
          img: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
          title: 'Spatial 3D Digital Showcase',
          des: 'Immersive WebGL particle interactions, spatial sound design, and experimental interactive storytelling.',
          demoUrl: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'cr-03',
          img: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
          title: 'Cinematic Media & Production Reel',
          des: 'Full-bleed high-bitrate video showcase with bespoke audio visualizers and client award galleries.',
          demoUrl: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'cr-04',
          img: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
          title: 'Venture Studio & Agency Collective',
          des: 'Vibrant venture portfolio showcase with dynamic pitch deck viewers, team spotlights, and client reviews.',
          demoUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
    {
      id: 'hospitality-living',
      label: 'Hospitality & Spaces',
      icon: Compass,
      title: 'Luxury Hospitality & Real Estate',
      description: 'Immersive virtual property tours, curated reservation systems, interactive floor plans, and destination showcases.',
      projects: [
        {
          id: 'h-01',
          img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
          title: 'Luxury Villa & Estates Portal',
          des: 'High-definition 3D virtual floor plans, interactive property maps, and seamless private tour bookings.',
          demoUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'h-02',
          img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
          title: 'Michelin Fine Dining Showcase',
          des: 'Interactive seasonal tasting menus, sommelier wine pairing guides, and VIP table reservation engines.',
          demoUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'h-03',
          img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
          title: 'Resort & Wellness Sanctuary',
          des: 'Immersive video escapism, holistic wellness treatment booking journeys, and suite selection experiences.',
          demoUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
        },
        {
          id: 'h-04',
          img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
          title: 'Private Members Club & Lounge',
          des: 'Gated member authentication, private event calendars, concierge reservations, and club archive.',
          demoUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
        },
      ],
    },
  ];

  const [activeCategoryId, setActiveCategoryId] = useState(categories[0].id);

  const activeCategory = categories.find((c) => c.id === activeCategoryId) || categories[0];

  const getWhatsAppUrl = (project) => {
    const text = `Hi AURA UX! I'm interested in building a custom "${project.title}" (${activeCategory.label}) website for my brand.\n\n` +
      `📌 Project Name: ${project.title}\n` +
      `🖼️ Thumbnail Preview: ${project.img}\n` +
      `🔗 Demo Link: ${project.demoUrl || project.img}\n\n` +
      `Let's discuss how we can build this for our brand!`;
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
              Best for Brands
            </span>
          </h2>
          <p className="text-xs md:text-sm text-[#7A7065] mt-2 max-w-2xl font-light">
            Select an industry below to explore premium bespoke architectures. Click the demo button to view the design, or tap the WhatsApp icon to commission your brand's digital flagship.
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
            Every brand experience is engineered to convert visual distinction into corporate growth. Tap any concept card above to start customizing your bespoke platform.
          </p>

          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              "Hi AURA UX! I'd like to collaborate on building a premium website for my brand."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-3.5 rounded-full text-white font-semibold text-xs md:text-sm tracking-wider uppercase border transition-all duration-300 scale-100 hover:scale-102 active:scale-95 bg-emerald-600 border-emerald-500 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)]"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.989-1.874-1.875-4.354-2.907-6.992-2.908-5.439 0-9.862 4.42-9.866 9.866-.001 1.761.472 3.479 1.374 5.023L1.934 20.89l5.166-1.356c.002-.001.002-.001.003-.001zm10.222-7.143c-.29-.145-1.72-.848-1.986-.944-.267-.097-.46-.145-.654.145-.193.291-.748.944-.917 1.138-.17.194-.339.218-.63.073-.29-.145-1.229-.453-2.34-1.445-.864-.77-1.447-1.721-1.616-2.012-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.509.145-.17.193-.291.29-.485.097-.194.049-.364-.025-.509-.073-.145-.654-1.577-.896-2.159-.236-.569-.475-.492-.654-.501-.169-.008-.363-.009-.557-.009-.194 0-.509.073-.775.364-.267.291-1.017.994-1.017 2.424s1.042 2.812 1.187 3.006c.145.194 2.051 3.131 4.969 4.387.694.299 1.237.478 1.659.612.698.222 1.332.19 1.833.115.559-.083 1.72-.703 1.962-1.382.242-.678.242-1.26.17-1.382-.073-.122-.267-.194-.557-.339z"/>
            </svg>
            <span>Let's Collaborate on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
