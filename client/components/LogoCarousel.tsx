import { useRef, useEffect, useState } from "react";

interface Logo {
  name: string;
  src: string;
}

interface LogoCarouselProps {
  logos: Logo[];
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollRef = useRef(0);
  const isHoveringRef = useRef(false);
  const animationFrameRef = useRef<number>();

  // Create duplicated logos for infinite scroll effect
  const duplicatedLogos = [...logos, ...logos, ...logos];

  // Auto-scroll functionality
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 0.8; // pixels per frame
    let isInitialized = false;

    const autoScroll = () => {
      if (!isInitialized) {
        // Set initial scroll position to middle set for seamless looping
        container.scrollLeft = container.scrollWidth / 3;
        isInitialized = true;
      }

      // Only scroll if not dragging and not hovering
      if (!isDraggingRef.current && !isHoveringRef.current) {
        container.scrollLeft += scrollSpeed;

        // Calculate the scroll width for one set of logos
        const singleSetWidth = container.scrollWidth / 3;

        // Reset to beginning when reaching the middle set
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft = singleSetWidth;
        }
      }

      animationFrameRef.current = requestAnimationFrame(autoScroll);
    };

    animationFrameRef.current = requestAnimationFrame(autoScroll);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollRef.current = scrollContainerRef.current?.scrollLeft || 0;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;

    const dragDistance = e.clientX - dragStartXRef.current;
    scrollContainerRef.current.scrollLeft =
      dragStartScrollRef.current - dragDistance;
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveringRef.current = false;
  };

  return (
    <div className="relative w-full">
      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="flex gap-8 md:gap-12 overflow-x-auto px-4 sm:px-6 py-8 scrollbar-hide cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitUserSelect: "none",
          userSelect: "none",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.name}-${index}`}
            className="flex-shrink-0 h-24 md:h-28 flex items-center justify-center pointer-events-none"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="h-full w-auto object-contain max-w-xs filter grayscale hover:grayscale-0 transition-all duration-300"
              draggable="false"
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
    </div>
  );
}
