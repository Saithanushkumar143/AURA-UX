import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceBrand from './components/ServiceBrand';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans antialiased selection:bg-[#D4AF37]/30 ${
      isDarkMode ? 'bg-[#07060A] text-white' : 'bg-[#FBF9F4] text-[#1F1A15]'
    }`}>
      {/* Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
      />

      {/* Main Content Area */}
      <main>
        {currentPage === 'home' && (
          <Hero 
            onExplore={() => setCurrentPage('services')} 
            isDarkMode={isDarkMode} 
          />
        )}
        {currentPage === 'services' && (
          <Services 
            setCurrentPage={setCurrentPage} 
            isDarkMode={isDarkMode} 
          />
        )}
        {currentPage === 'service-brand' && (
          <ServiceBrand 
            setCurrentPage={setCurrentPage} 
            isDarkMode={isDarkMode} 
          />
        )}
        {currentPage === 'service-surprise' && (
          <div className="min-h-screen w-full flex flex-col items-center justify-center pt-24 px-6">
            <h2 className="text-4xl font-bold tracking-tight mb-4 font-serif">Digital Surprises Detail</h2>
            <p className={`text-center max-w-md ${isDarkMode ? 'text-gray-400' : 'text-[#7A7065]'}`}>
              This will showcase personalized digital milestone scrapbooks, interactive invitation demos, and memory timelines.
            </p>
            <button 
              onClick={() => setCurrentPage('services')}
              className={`mt-6 text-xs uppercase tracking-widest font-semibold transition-colors ${
                isDarkMode ? 'text-[#D4AF37] hover:text-white' : 'text-[#8C6239] hover:text-[#1F1A15]'
              }`}
            >
              ← Back to Services
            </button>
          </div>
        )}
        {currentPage === 'contact' && (
          <div className="min-h-screen w-full flex flex-col items-center justify-center pt-24 px-6">
            <h2 className="text-4xl font-bold tracking-tight mb-4 font-serif">Contact Us</h2>
            <p className={`text-center max-w-md ${isDarkMode ? 'text-gray-400' : 'text-[#7A7065]'}`}>
              Phase 4 will implement the premium contact form and WhatsApp direct integration here.
            </p>
            <button 
              onClick={() => setCurrentPage('home')}
              className={`mt-6 text-xs uppercase tracking-widest font-semibold transition-colors ${
                isDarkMode ? 'text-[#D4AF37] hover:text-white' : 'text-[#8C6239] hover:text-[#1F1A15]'
              }`}
            >
              ← Back to Home
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
