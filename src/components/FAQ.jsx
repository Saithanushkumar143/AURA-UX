import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';

const faqData = [
  {
    question: "What services does AURA UX provide?",
    answer: "AURA UX specializes in two core domains: 1) Best for Brands (Corporate UX, bespoke websites, full-featured e-commerce stores, SaaS UI design, and 3D WebGL experiences) and 2) Digital Surprises (custom interactive birthday websites, candle blowout greeting portals, 3D anniversary proposals, memory scrapbook portals, and luxury digital invitations)."
  },
  {
    question: "How do AURA UX Digital Surprises work?",
    answer: "Digital Surprises are bespoke, private interactive web experiences built for birthdays, anniversaries, and milestone celebrations. They include interactive features like 3D gift unboxings, candle blowout microphone triggers, personalized photo memory walls, love note storybooks, and audio voice note messages that can be easily shared with loved ones via a unique link."
  },
  {
    question: "Can AURA UX develop custom e-commerce and brand web platforms?",
    answer: "Yes. AURA UX builds high-performance e-commerce platforms and brand portals tailored to your exact aesthetic and transactional requirements, complete with responsive cart workflows, checkout engines, booking reservation systems, and fast performance."
  },
  {
    question: "How can I book a project or get a quote from AURA UX?",
    answer: "You can easily contact AURA UX directly via WhatsApp at +91 9490056028 or email at contact.auraux@gmail.com to discuss project scopes, timelines, custom designs, and pricing."
  },
  {
    question: "What technologies does AURA UX use for 3D interactive web experiences?",
    answer: "We build cutting-edge web applications using React, Three.js, WebGL, Tailwind CSS, and Framer Motion, delivering ultra-fluid 60fps animations, interactive 3D models, and mobile-optimized responsiveness."
  },
  {
    question: "How long does it take to deliver a custom website or digital surprise?",
    answer: "Digital surprise websites are typically delivered within 24 to 72 hours for milestones and birthdays. Bespoke brand websites, custom e-commerce stores, and complex 3D web applications are delivered within 1 to 3 weeks depending on feature requirements."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" aria-labelledby="faq-heading" className="w-full max-w-4xl mx-auto mt-16 px-4 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-[#8C6239]/15 bg-[#8C6239]/5 text-[#8C6239] text-xs uppercase tracking-widest font-semibold mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Knowledge &amp; Support</span>
        </div>
        <h3 id="faq-heading" className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold tracking-tight text-[#1F1A15]">
          Frequently Asked Questions
        </h3>
        <p className="text-xs sm:text-sm text-[#7A7065] mt-2 max-w-lg mx-auto font-light">
          Everything you need to know about AURA UX custom web design, 3D experiences, and digital milestone surprises.
        </p>
      </div>

      <div className="space-y-3.5">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen 
                  ? 'border-[#AA7C11]/40 bg-white/95 shadow-[0_8px_30px_rgba(170,124,17,0.06)]' 
                  : 'border-[#8C6239]/15 bg-white/60 hover:bg-white/80 hover:border-[#8C6239]/30'
              }`}
            >
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
                className="w-full flex items-center justify-between text-left px-5 sm:px-6 py-4.5 cursor-pointer gap-4"
              >
                <span className={`text-sm sm:text-base font-serif font-semibold tracking-wide transition-colors ${
                  isOpen ? 'text-[#8C6239]' : 'text-[#1F1A15]'
                }`}>
                  {faq.question}
                </span>
                <span className={`p-1.5 rounded-full border transition-transform duration-300 flex-shrink-0 ${
                  isOpen 
                    ? 'rotate-180 bg-[#AA7C11]/10 border-[#AA7C11]/30 text-[#AA7C11]' 
                    : 'bg-[#FBF9F4] border-[#8C6239]/15 text-[#7A7065]'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#504A43] leading-relaxed border-t border-[#8C6239]/10 font-light">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      <div className="mt-8 text-center">
        <p className="text-xs text-[#7A7065]">
          Have a unique question or ready to begin?{' '}
          <a
            href="https://wa.me/919490056028?text=Hi%20AURA%20UX!%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-[#8C6239] font-medium hover:underline ml-1"
          >
            <span>Ask us on WhatsApp</span>
            <MessageSquare className="w-3 h-3 ml-0.5" />
          </a>
        </p>
      </div>
    </section>
  );
}
