import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceBrand from './components/ServiceBrand';
import ServiceSurprise from './components/ServiceSurprise';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#1F1A15] font-sans antialiased selection:bg-[#D4AF37]/30">
      {/* Navigation Bar */}
      <Navbar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
      />

      {/* Main Content Area */}
      <main>
        {currentPage === 'home' && (
          <Hero 
            onExplore={() => setCurrentPage('services')} 
          />
        )}
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
          <div className="min-h-screen w-full flex flex-col items-center justify-center pt-24 px-6">
            <h2 className="text-4xl font-bold tracking-tight mb-4 font-serif text-[#1F1A15]">Contact Us</h2>
            <p className="text-center max-w-md text-[#7A7065]">
              Reach us directly on WhatsApp for premium website collaborations and brand projects.
            </p>
            <a
              href="https://wa.me/919490056028?text=Hi%20AURA%20UX!%20I%27m%20interested%20in%20building%20a%20premium%20website%20for%20my%20brand.%20Let%27s%20collaborate!"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center space-x-2.5 rounded-full px-8 py-3.5 text-xs uppercase tracking-widest font-semibold text-white bg-emerald-600 border border-emerald-500 hover:bg-emerald-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.35)] transition-all scale-100 hover:scale-102 active:scale-95"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.863-9.864.001-2.637-1.03-5.114-2.905-6.989-1.874-1.875-4.354-2.907-6.992-2.908-5.439 0-9.862 4.42-9.866 9.866-.001 1.761.472 3.479 1.374 5.023L1.934 20.89l5.166-1.356c.002-.001.002-.001.003-.001zm10.222-7.143c-.29-.145-1.72-.848-1.986-.944-.267-.097-.46-.145-.654.145-.193.291-.748.944-.917 1.138-.17.194-.339.218-.63.073-.29-.145-1.229-.453-2.34-1.445-.864-.77-1.447-1.721-1.616-2.012-.17-.29-.018-.447.127-.591.13-.13.29-.339.436-.509.145-.17.193-.291.29-.485.097-.194.049-.364-.025-.509-.073-.145-.654-1.577-.896-2.159-.236-.569-.475-.492-.654-.501-.169-.008-.363-.009-.557-.009-.194 0-.509.073-.775.364-.267.291-1.017.994-1.017 2.424s1.042 2.812 1.187 3.006c.145.194 2.051 3.131 4.969 4.387.694.299 1.237.478 1.659.612.698.222 1.332.19 1.833.115.559-.083 1.72-.703 1.962-1.382.242-.678.242-1.26.17-1.382-.073-.122-.267-.194-.557-.339z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <button 
              onClick={() => setCurrentPage('home')}
              className="mt-6 text-xs uppercase tracking-widest font-semibold transition-colors text-[#8C6239] hover:text-[#1F1A15]"
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
