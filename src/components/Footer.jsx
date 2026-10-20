import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { TextHoverEffect, FooterBackgroundGradient } from './ui/text-hover-effect';

export default function Footer({ setCurrentPage }) {
  const whatsappNumber = '919490056028';
  const instagramHandle = 'aura.ux_';
  const instagramUrl = 'https://instagram.com/aura.ux_';

  return (
    <footer className="relative w-full overflow-hidden bg-[#FBF9F4] border-t border-[#8C6239]/15 text-[#1F1A15] transition-colors">
      {/* Background radial glow */}
      <FooterBackgroundGradient />

      <motion.div 
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-4"
      >
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">
          
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-2xl font-bold font-serif tracking-tight text-[#1F1A15]">
              AURA UX
            </h3>
            <p className="text-sm text-[#7A7065] leading-relaxed max-w-sm font-light">
              AURA UX crafts bespoke high-performance websites, immersive 3D web experiences, and emotional digital milestones tailored for luxury distinction.
            </p>
          </div>

          {/* Column 2: Helpful Links */}
          <div className="lg:col-span-3 lg:col-start-7 space-y-4">
            <h4 className="text-sm font-semibold text-[#1F1A15] tracking-wide">
              Helpful Links
            </h4>
            <ul className="space-y-2.5 text-sm text-[#7A7065]">
              <li>
                <a 
                  href="#faqs" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setCurrentPage?.('services'); 
                    window.location.hash = 'faqs';
                    setTimeout(() => {
                      const el = document.getElementById('faqs');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="hover:text-[#1F1A15] transition-colors inline-block"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setCurrentPage?.('contact'); 
                  }}
                  className="hover:text-[#1F1A15] transition-colors inline-block"
                >
                  Support &amp; Contact
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <a 
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1F1A15] transition-colors inline-block"
                >
                  Live Chat
                </a>
                <span className="h-1.5 w-1.5 rounded-full bg-[#AA7C11] animate-pulse" />
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-[#1F1A15] tracking-wide">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-[#7A7065]">
              <li className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-[#AA7C11] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="mailto:contact.auraux@gmail.com" 
                  className="hover:text-[#1F1A15] transition-colors"
                >
                  contact.auraux@gmail.com
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-[#AA7C11] flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a 
                  href="tel:+919490056028" 
                  className="hover:text-[#1F1A15] transition-colors font-medium"
                >
                  +91 9490056028
                </a>
              </li>
              <li className="flex items-center space-x-3 group">
                <svg className="w-4 h-4 flex-shrink-0 text-[#AA7C11] fill-none stroke-current stroke-2 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                <a 
                  href={instagramUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-[#1F1A15] transition-colors font-medium"
                >
                  {instagramHandle}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-[#8C6239]/15 w-full pt-6 pb-2">
          {/* Social Icons & Copyright Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A7065]">
            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              {/* Facebook */}
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Facebook"
                className="hover:text-[#1F1A15] hover:scale-110 transition-all text-[#7A7065]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a 
                href={instagramUrl} 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Instagram: aura.ux_"
                className="hover:text-[#1F1A15] hover:scale-110 transition-all text-[#7A7065]"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              {/* Twitter / X */}
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Twitter"
                className="hover:text-[#1F1A15] hover:scale-110 transition-all text-[#7A7065]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Globe / Website */}
              <a 
                href="https://auraux.vercel.app" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Website"
                className="hover:text-[#1F1A15] hover:scale-110 transition-all text-[#7A7065]"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <line x1="2" y1="12" x2="22" y2="12"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </a>
              {/* Dribbble / Design Portfolio icon */}
              <a 
                href="https://dribbble.com" 
                target="_blank" 
                rel="noreferrer" 
                aria-label="Dribbble"
                className="hover:text-[#1F1A15] hover:scale-110 transition-all text-[#7A7065]"
              >
                <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"/>
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"/>
                  <path d="M8.53 2.66c3.84 5.3 5.76 11.23 5.8 18.68"/>
                </svg>
              </a>
            </div>

            {/* Copyright */}
            <div className="font-light tracking-wide">
              © 2026 AURA UX. All rights reserved.
            </div>
          </div>
        </div>

        {/* Large TextHoverEffect across bottom */}
        <div className="w-full flex items-center justify-center -mt-2 sm:-mt-4 md:-mt-6 select-none pointer-events-auto">
          <div className="w-full max-w-5xl h-32 sm:h-44 md:h-56 lg:h-64 flex items-center justify-center">
            <TextHoverEffect text="AURA UX" className="w-full h-full" />
          </div>
        </div>

      </motion.div>
    </footer>
  );
}
