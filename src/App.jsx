import React, { useState } from 'react';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceBrand from './components/ServiceBrand';
import ServiceSurprise from './components/ServiceSurprise';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1F1A15] font-sans antialiased selection:bg-[#D4AF37]/30">
      {/* Dynamic SEO Meta Updater */}
      <SEO currentPage={currentPage} />

      {/* Initial Cinematic Preloader Screen */}
      <Preloader />

      {/* Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />

      {/* Main Content Area */}
      <main>
        {currentPage === 'home' ? (
          <Hero 
            onExplore={() => setCurrentPage('services')} 
          />
        ) : (
          <div className="min-h-screen w-full relative bg-white flex flex-col justify-between">
            {/* Soft Yellow Glow */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{
                backgroundImage: `
                  radial-gradient(circle at center, #FFF991 0%, transparent 70%)
                `,
                opacity: 0.6,
                mixBlendMode: "multiply",
              }}
            />

            {/* Page Content */}
            <div className="relative z-10 flex-1">
              {currentPage === 'services' && (
                <Services 
                  setCurrentPage={setCurrentPage} 
                />
              )}
              {currentPage === 'service-brand' && (
                <ServiceBrand 
                  setCurrentPage={setCurrentPage} 
                />
              )}
              {currentPage === 'service-surprise' && (
                <ServiceSurprise 
                  setCurrentPage={setCurrentPage} 
                />
              )}
              {currentPage === 'contact' && (
                <Contact setCurrentPage={setCurrentPage} />
              )}
            </div>

            {/* Light Theme Footer (integrated on all pages except home) */}
            <Footer setCurrentPage={setCurrentPage} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
