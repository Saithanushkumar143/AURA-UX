import { useEffect } from 'react';

const pageMeta = {
  home: {
    title: 'AURA UX | Bespoke UI/UX Design, 3D Web Experiences & Digital Celebrations',
    description: 'AURA UX crafts bespoke high-performance websites, luxury SaaS interfaces, 3D interactive web experiences, and emotional digital milestones tailored for distinction.',
    keywords: 'AURA UX, UI UX Design, Web Design, Web Development, 3D Web Experiences, Bespoke Websites, Corporate UX, Digital Surprises, Luxury Web Design, Frontend Development, React Developer, SaaS Design, Interactive Websites',
    canonical: 'https://auraux.vercel.app/',
  },
  services: {
    title: 'Our Services | Bespoke Web Design & Interactive Experiences — AURA UX',
    description: 'Explore AURA UX design & engineering services: Corporate UX & bespoke web applications for brands, alongside personalized 3D Digital Surprises & Milestone Celebrations.',
    keywords: 'AURA UX Services, Corporate Web Design, Brand UI UX, Digital Surprises, Interactive 3D Web, Luxury Web Agency',
    canonical: 'https://auraux.vercel.app/#services',
  },
  'service-brand': {
    title: 'Best for Brands | Luxury Web Design, E-Commerce & SaaS Interfaces — AURA UX',
    description: 'High-performance bespoke websites and e-commerce templates including AURA NextStore, AURA Editorial boutique, AURA Heritage fine dining, and AURA Luxe Beauty atelier.',
    keywords: 'Corporate Web Design, E-Commerce Templates, NextStore, Boutique Website, Restaurant Web Design, Luxury Beauty Website, Bespoke SaaS UI',
    canonical: 'https://auraux.vercel.app/#service-brand',
  },
  'service-surprise': {
    title: 'Digital Surprises & Milestone Celebrations | 3D Interactive Web Portals — AURA UX',
    description: 'Interactive birthday storytelling films, candle blowout portals, scrapbook memories, 3D ring box proposals, and romantic anniversary timelines by AURA UX.',
    keywords: 'Digital Surprises, Birthday Website, Interactive Wishboard, Anniversary Timeline, 3D Ring Box, Love Note, Proposal Website, Celebration Web Portals',
    canonical: 'https://auraux.vercel.app/#service-surprise',
  },
  contact: {
    title: 'Contact AURA UX | Start Your Bespoke Web & 3D Experience Project',
    description: 'Connect with AURA UX for custom website development, SaaS UI/UX design, or interactive milestone celebration experiences. Get in touch via WhatsApp or Email.',
    keywords: 'Contact AURA UX, Hire UI UX Designer, Web Design Consultation, WhatsApp AURA UX, Bespoke Web Development Inquiry',
    canonical: 'https://auraux.vercel.app/#contact',
  },
};

export default function SEO({ currentPage = 'home' }) {
  useEffect(() => {
    const meta = pageMeta[currentPage] || pageMeta.home;

    // 1. Update Document Title
    document.title = meta.title;

    // 2. Helper to set or update meta tag by name or property
    const setMetaTag = (attribute, name, content) => {
      let tag = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attribute, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // 3. Update Standard Meta Tags
    setMetaTag('name', 'description', meta.description);
    setMetaTag('name', 'keywords', meta.keywords);
    setMetaTag('name', 'title', meta.title);

    // 4. Update Open Graph Meta Tags
    setMetaTag('property', 'og:title', meta.title);
    setMetaTag('property', 'og:description', meta.description);
    setMetaTag('property', 'og:url', meta.canonical);

    // 5. Update Twitter Meta Tags
    setMetaTag('name', 'twitter:title', meta.title);
    setMetaTag('name', 'twitter:description', meta.description);
    setMetaTag('name', 'twitter:url', meta.canonical);

    // 6. Update Canonical Link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (canonicalTag) {
      canonicalTag.setAttribute('href', meta.canonical);
    }
  }, [currentPage]);

  return null;
}
