import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

interface Logo {
  name: string;
  src: string;
}

interface LogoCarouselProps {
  logos: Logo[];
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background transition-colors duration-300 p-2 rounded-full border border-border"
        aria-label="Scroll left"
      >
        <ChevronLeft className="w-6 h-6 text-foreground" />
      </button>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        className="flex gap-8 md:gap-12 overflow-x-auto scroll-smooth px-16 py-8 scroll-smooth scrollbar-hide"
        style={{
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex-shrink-0 h-24 md:h-28 flex items-center justify-center"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-full w-auto object-contain max-w-xs filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      {/* Hide scrollbar with CSS */}
      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background transition-colors duration-300 p-2 rounded-full border border-border"
        aria-label="Scroll right"
      >
        <ChevronRight className="w-6 h-6 text-foreground" />
      </button>
    </div>
  );
}
