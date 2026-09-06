import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ArrowLeft, 
  Mail, 
  ExternalLink, 
  Copy, 
  Check, 
  Send
} from 'lucide-react';

function WhatsAppIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.989-1.874-1.875-4.354-2.907-6.992-2.908-5.439 0-9.862 4.42-9.866 9.866-.001 1.761.472 3.479 1.374 5.023L1.934 20.89l5.166-1.356c.002-.001.002-.001.003-.001zm10.222-7.143c-.29-.145-1.72-.848-1.986-.944-.267-.097-.46-.145-.654.145-.193.291-.748.944-.917 1.138-.17.194-.339.218-.63.073-.29-.145-1.229-.453-2.34-1.445-.864-.77-1.447-1.721-1.616-2.012-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.509.145-.17.193-.291.29-.485.097-.194.049-.364-.025-.509-.073-.145-.654-1.577-.896-2.159-.236-.569-.475-.492-.654-.501-.169-.008-.363-.009-.557-.009-.194 0-.509.073-.775.364-.267.291-1.017.994-1.017 2.424s1.042 2.812 1.187 3.006c.145.194 2.051 3.131 4.969 4.387.694.299 1.237.478 1.659.612.698.222 1.332.19 1.833.115.559-.083 1.72-.703 1.962-1.382.242-.678.242-1.26.17-1.382-.073-.122-.267-.194-.557-.339z"/>
    </svg>
  );
}

function InstagramIcon({ className = 'w-6 h-6' }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Crisp 3D Tilt Component (Zero Blur, Razor-Sharp Borders)
function ThreeDTilt({ children, className = '', maxTilt = 8 }) {
  const cardRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 320, damping: 24 });
  const mouseYSpring = useSpring(y, { stiffness: 320, damping: 24 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [maxTilt, -maxTilt]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-maxTilt, maxTilt]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={`relative will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default function Contact({ setCurrentPage }) {
  const whatsappNumber = '919490056028';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi AURA UX! I'd like to collaborate with you on a project.")}`;
  const instagramHandle = 'aura.ux_';
  const instagramLink = `https://instagram.com/${instagramHandle}`;
  const emailAddress = 'contact.auraux@gmail.com';
  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent("AURA UX Project Collaboration")}`;

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2400);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-between pt-24 pb-16 px-4 md:px-8 bg-[#FBF9F4] text-[#1F1A15] select-none">
      
      {/* Back Button */}
      <div className="max-w-4xl mx-auto w-full mb-4 z-10">
        <button
          onClick={() => setCurrentPage('home')}
          className="group inline-flex items-center space-x-2 text-xs uppercase tracking-widest font-semibold transition-colors text-[#7A7065] hover:text-[#8C6239] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Home</span>
        </button>
      </div>

      {/* Main 3D Perspective Stage */}
      <div className="max-w-2xl mx-auto w-full flex-1 flex flex-col items-center justify-center z-10 relative my-auto py-4" style={{ perspective: 1200 }}>
        
        {/* Title Matching "Our Services" Typography */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tight mb-2 md:mb-4 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#503E21] via-[#AA7C11] to-[#251A07]">
              Contact Us
            </span>
          </h2>
        </div>

        {/* 3D Action Buttons Stack */}
        <div className="w-full flex flex-col gap-4">
          
          {/* ========================================================= */}
          {/* 1. WHATSAPP BUTTON                                       */}
          {/* ========================================================= */}
          <ThreeDTilt maxTilt={7} className="group w-full">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full rounded-2xl p-5 sm:p-6 bg-white border-2 border-[#8C6239]/40 hover:border-[#8C6239] shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between cursor-pointer block"
            >
              {/* Left Content */}
              <div style={{ transform: 'translateZ(25px)' }} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#8C6239] text-white flex items-center justify-center shadow-md transform group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <WhatsAppIcon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1F1A15] leading-tight">
                    WhatsApp
                  </h3>
                  <span className="text-xs font-mono text-[#7A7065] tracking-wider">
                    +91 9490056028
                  </span>
                </div>
              </div>

              {/* Right Action */}
              <div style={{ transform: 'translateZ(30px)' }} className="flex items-center pl-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#8C6239]/10 text-[#8C6239] flex items-center justify-center border border-[#8C6239]/20 group-hover:bg-[#8C6239] group-hover:text-white transition-colors">
                  <Send className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          </ThreeDTilt>

          {/* ========================================================= */}
          {/* 2. INSTAGRAM BUTTON                                      */}
          {/* ========================================================= */}
          <ThreeDTilt maxTilt={7} className="group w-full">
            <a
              href={instagramLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full rounded-2xl p-5 sm:p-6 bg-white border border-[#8C6239]/20 hover:border-[#8C6239]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between cursor-pointer block"
            >
              {/* Left Content */}
              <div style={{ transform: 'translateZ(25px)' }} className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#F3EFE6] text-[#8C6239] border border-[#8C6239]/20 flex items-center justify-center shadow-sm transform group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <InstagramIcon className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1F1A15] leading-tight">
                    Instagram
                  </h3>
                  <span className="text-xs font-mono text-[#7A7065] tracking-wider">
                    @{instagramHandle}
                  </span>
                </div>
              </div>

              {/* Right Action */}
              <div style={{ transform: 'translateZ(30px)' }} className="flex items-center pl-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F3EFE6] text-[#8C6239] flex items-center justify-center border border-[#8C6239]/20 group-hover:bg-[#8C6239] group-hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4 transform group-hover:scale-110 transition-transform" />
                </div>
              </div>
            </a>
          </ThreeDTilt>

          {/* ========================================================= */}
          {/* 3. GMAIL / EMAIL BUTTON                                  */}
          {/* ========================================================= */}
          <ThreeDTilt maxTilt={7} className="group w-full">
            <div className="relative w-full rounded-2xl p-5 sm:p-6 bg-white border border-[#8C6239]/20 hover:border-[#8C6239]/70 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-between">
              {/* Left Content */}
              <a
                href={mailtoLink}
                className="flex items-center space-x-4 flex-1 cursor-pointer"
                style={{ transform: 'translateZ(25px)' }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#F3EFE6] text-[#8C6239] border border-[#8C6239]/20 flex items-center justify-center shadow-sm transform group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1F1A15] leading-tight">
                    Gmail
                  </h3>
                  <span className="text-xs font-mono text-[#7A7065] tracking-wider break-all sm:break-normal">
                    {emailAddress}
                  </span>
                </div>
              </a>

              {/* Right Action Buttons: Copy */}
              <div style={{ transform: 'translateZ(30px)' }} className="flex items-center space-x-2 pl-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  title="Copy email address"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F3EFE6] text-[#8C6239] flex items-center justify-center border border-[#8C6239]/20 hover:bg-[#8C6239] hover:text-white transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </ThreeDTilt>

        </div>

      </div>

      <div />
    </div>
  );
}
