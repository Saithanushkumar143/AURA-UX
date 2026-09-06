import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

const OfferCard = React.forwardRef(({ offer, index = 0, disableEntrance = false }, ref) => {
  const CardWrapper = motion.div;

  // Staggered 3D entrance parameters
  const isFirst = index % 2 === 0;
  const initialRotateY = isFirst ? -12 : 12;

  const motionProps = disableEntrance
    ? {}
    : {
        initial: {
          opacity: 0,
          y: 60,
          scale: 0.94,
          rotateY: initialRotateY,
        },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          rotateY: 0,
        },
        transition: {
          duration: 0.75,
          delay: 0.1 + index * 0.16,
          ease: [0.22, 1, 0.36, 1],
        },
      };

  return (
    <CardWrapper
      ref={ref}
      onClick={offer.onClick}
      {...motionProps}
      whileHover={{
        y: -10,
        transition: { type: "spring", stiffness: 400, damping: 25 },
      }}
      whileTap={{ scale: 0.98, y: -2 }}
      className={cn(
        "relative flex-shrink-0 w-[300px] sm:w-[340px] md:w-[370px] lg:w-[390px] h-[435px] rounded-2xl overflow-hidden group/card snap-start cursor-pointer border border-[#8C6239]/25 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_24px_50px_-8px_rgba(140,98,57,0.25)] hover:border-[#8C6239]/60 transition-all duration-300 flex flex-col select-none"
      )}
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: "translateZ(0)",
      }}
    >
      {/* 3D Specular Light Sweep upon Entrance */}
      <motion.div
        initial={{ x: "-180%", opacity: 0 }}
        animate={{ x: "220%", opacity: [0, 0.6, 0] }}
        transition={{
          duration: 1.1,
          delay: 0.6 + index * 0.2,
          ease: "easeInOut",
        }}
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent skew-x-[-25deg] pointer-events-none z-30"
      />

      {/* Background / Header Image */}
      <div className="relative w-full h-[48%] overflow-hidden bg-[#F3EFE6]">
        <img
          src={offer.imageSrc}
          alt={offer.imageAlt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
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
      <div className="flex-1 bg-white p-4 sm:p-5 flex flex-col justify-between border-t border-[#8C6239]/10 relative z-20">
        <div className="space-y-1.5">
          <h3 className="text-base sm:text-lg md:text-xl font-bold font-serif text-[#1F1A15] leading-snug group-hover/card:text-[#8C6239] transition-colors">
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
          
          <div className="w-8 h-8 rounded-full bg-[#8C6239]/10 flex items-center justify-center text-[#8C6239] transform transition-all duration-300 group-hover/card:rotate-[-45deg] group-hover/card:bg-[#8C6239] group-hover/card:text-white shadow-sm">
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
    <div
      ref={ref}
      className={cn("relative w-full group/carousel py-2", className)}
      style={{ perspective: "1200px" }}
      {...props}
    >
      {/* Left Scroll Button */}
      {offers.length > 2 && (
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 -left-2 sm:-left-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#8C6239]/20 flex items-center justify-center text-[#1F1A15] shadow-md opacity-80 md:opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-[#8C6239] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
      )}

      {/* Scrollable Carousel Track with ample headroom for vertical lift */}
      <div
        ref={scrollContainerRef}
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
        className={cn(
          "flex space-x-4 sm:space-x-6 md:space-x-8 overflow-x-auto pt-6 sm:pt-8 pb-8 sm:pb-10 px-3 sm:px-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden scroll-smooth",
          offers.length <= 2 && "justify-start md:justify-center"
        )}
      >
        {offers.map((offer, index) => (
          <OfferCard key={offer.id} offer={offer} index={index} />
        ))}
      </div>

      {/* Right Scroll Button */}
      {offers.length > 2 && (
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 -right-2 sm:-right-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#8C6239]/20 flex items-center justify-center text-[#1F1A15] shadow-md opacity-80 md:opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:bg-[#8C6239] hover:text-white hover:scale-105 active:scale-95 cursor-pointer"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      )}
    </div>
  );
});
OfferCarousel.displayName = "OfferCarousel";

export { OfferCarousel, OfferCard };
