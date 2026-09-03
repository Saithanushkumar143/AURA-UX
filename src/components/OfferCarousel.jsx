import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

const OfferCard = React.forwardRef(({ offer }, ref) => {
  const CardWrapper = motion.div;

  return (
    <CardWrapper
      ref={ref}
      onClick={offer.onClick}
      className={cn(
        "relative flex-shrink-0 w-[280px] sm:w-[320px] md:w-[340px] h-[400px] rounded-2xl overflow-hidden group snap-start cursor-pointer border border-[#8C6239]/15 bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(140,98,57,0.14)] hover:border-[#8C6239]/45 transition-all duration-300 flex flex-col select-none"
      )}
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: "1000px" }}
    >
      {/* Background / Header Image */}
      <div className="relative w-full h-[48%] overflow-hidden bg-[#F3EFE6]">
        <img
          src={offer.imageSrc}
          alt={offer.imageAlt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent pointer-events-none" />
        
        {/* Floating Tag Badge */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <div className="inline-flex items-center text-[10px] md:text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#8C6239] border border-[#8C6239]/20 shadow-sm">
            <Tag className="w-3 h-3 mr-1.5 text-[#AA7C11]" />
            <span>{offer.tag}</span>
          </div>
        </div>
      </div>

      {/* Card Body Content */}
      <div className="flex-1 bg-white p-4 sm:p-5 flex flex-col justify-between border-t border-[#8C6239]/10">
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg md:text-xl font-bold font-serif text-[#1F1A15] leading-snug group-hover:text-[#8C6239] transition-colors">
            {offer.title}
          </h3>
          <p className="text-[11px] sm:text-xs text-[#504A43] font-light line-clamp-2 leading-relaxed">
            {offer.description}
          </p>
        </div>

        {/* Card Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-[#8C6239]/10 mt-2">
          <div className="flex items-center gap-2.5">
            <img
              src={offer.brandLogoSrc}
              alt={`${offer.brandName} logo`}
              className="w-7 h-7 rounded-full object-cover border border-[#8C6239]/20 p-0.5 bg-[#FBF9F4]"
            />
            <div>
              <p className="text-[11px] sm:text-xs font-semibold text-[#1F1A15] leading-tight">
                {offer.brandName}
              </p>
              {offer.promoCode && (
                <p className="text-[9px] sm:text-[10px] uppercase font-mono tracking-wider text-[#8C6239]">
                  {offer.promoCode}
                </p>
              )}
            </div>
          </div>
          
          <div className="w-8 h-8 rounded-full bg-[#8C6239]/10 flex items-center justify-center text-[#8C6239] transform transition-all duration-300 group-hover:rotate-[-45deg] group-hover:bg-[#8C6239] group-hover:text-white shadow-sm">
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
});
OfferCard.displayName = "OfferCard";

const OfferCarousel = React.forwardRef(({ offers, className, ...props }, ref) => {
  const scrollContainerRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.clientWidth * 0.75;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={ref} className={cn("relative w-full group py-2", className)} {...props}>
      {/* Left Scroll Button */}
      <button
        type="button"
        onClick={() => scroll("left")}
        className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#8C6239]/20 flex items-center justify-center text-[#1F1A15] shadow-md opacity-80 md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#8C6239] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Scroll Left"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Scrollable Carousel Track */}
      <div
        ref={scrollContainerRef}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className="flex space-x-4 sm:space-x-6 overflow-x-auto pb-6 pt-2 px-2 sm:px-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth"
      >
        {offers.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        type="button"
        onClick={() => scroll("right")}
        className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#8C6239]/20 flex items-center justify-center text-[#1F1A15] shadow-md opacity-80 md:opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#8C6239] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Scroll Right"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
});
OfferCarousel.displayName = "OfferCarousel";

export { OfferCarousel, OfferCard };
