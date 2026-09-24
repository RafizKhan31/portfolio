import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export interface PhotoItem {
  src: string;
  alt?: string;
  caption?: string;
}

interface PhotoSliderProps {
  photos?: PhotoItem[];
  intervalMs?: number;
  className?: string;
  aspectRatio?: 'square' | 'portrait' | 'auto';
  showControls?: boolean;
}

const base = import.meta.env.BASE_URL || './';
const p = (path: string) => `${base.replace(/\/$/, '')}/${path.replace(/^\.?\//, '')}`;

const DEFAULT_PHOTOS: PhotoItem[] = [
  {
    src: p('photos/rafiz.jpg'),
    alt: 'Md. Rafej Khan sitting on steps with bamboo stick',
    caption: 'Md. Rafej Khan · Python Developer & AI Engineer'
  },
  {
    src: p('photos/rafiz2.jpg'),
    alt: 'Md. Rafej Khan with sunglasses in black t-shirt',
    caption: 'Md. Rafej Khan · Machine Learning & Deep Learning'
  },
  {
    src: p('photos/rafiz1.jpg'),
    alt: 'Md. Rafej Khan professional portrait in blue shirt',
    caption: 'Md. Rafej Khan · Deep Learning Researcher'
  },
  {
    src: p('photos/rafiz3.jpg'),
    alt: 'Md. Rafej Khan expedition portrait',
    caption: 'Md. Rafej Khan · AI Systems Architecture'
  }
];

export const PhotoSlider: React.FC<PhotoSliderProps> = ({
  photos = DEFAULT_PHOTOS,
  intervalMs = 3500,
  className = '',
  aspectRatio = 'portrait',
  showControls = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-slide effect
  useEffect(() => {
    if (isHovered || photos.length <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, intervalMs);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [photos.length, intervalMs, isHovered]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const aspectClasses = {
    square: 'aspect-square',
    portrait: 'aspect-[4/5] sm:aspect-[3/4]',
    auto: 'h-full min-h-[360px] max-h-[540px]'
  }[aspectRatio];

  return (
    <div
      className={`relative group overflow-hidden rounded-2xl sm:rounded-3xl border border-[var(--border)] bg-[var(--surface-secondary)] shadow-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="region"
      aria-label="Automatic photo slideshow"
    >
      {/* Slides Container */}
      <div className={`relative w-full ${aspectClasses} overflow-hidden bg-black/5 dark:bg-black/40`}>
        {photos.map((photo, index) => {
          const isActive = index === currentIndex;
          const isPrev = (index === (currentIndex - 1 + photos.length) % photos.length);
          
          return (
            <div
              key={photo.src + index}
              className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                isActive
                  ? 'opacity-100 scale-100 z-10'
                  : isPrev
                  ? 'opacity-0 scale-95 z-0'
                  : 'opacity-0 scale-105 z-0'
              }`}
            >
              <img
                src={photo.src}
                alt={photo.alt || `Photo ${index + 1} of Md. Rafej Khan`}
                className="w-full h-full object-cover object-center select-none"
                loading={index === 0 ? 'eager' : 'lazy'}
                onError={(e) => {
                  // Fallback to /images/ path if /photos/ fails
                  const target = e.currentTarget;
                  if (target.src.includes('/photos/')) {
                    target.src = target.src.replace('/photos/', '/images/');
                  }
                }}
              />

              {/* Subtle gradient vignette at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
            </div>
          );
        })}
      </div>

      {/* Slide Navigation Controls */}
      {showControls && photos.length > 1 && (
        <>
          <button
            type="button"
            onClick={goToPrev}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 hover:bg-black/70 text-white backdrop-blur-sm border border-white/20 transition-all opacity-0 group-hover:opacity-100 hover:scale-110 focus:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Bottom Indicator Dots */}
      {photos.length > 1 && (
        <div className="absolute bottom-3 inset-x-0 z-20 flex items-center justify-center gap-1.5 pointer-events-none">
          {photos.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(idx);
              }}
              aria-label={`Go to photo ${idx + 1}`}
              className={`pointer-events-auto transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-6 h-2 bg-red-600 dark:bg-red-500 shadow-md'
                  : 'w-2 h-2 bg-white/60 hover:bg-white/90'
              }`}
            />
          ))}
        </div>
      )}

      {/* Auto-sliding pulse badge */}
      <div className="absolute top-3 right-3 z-20 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[11px] text-white/90 flex items-center gap-1.5 font-medium select-none pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Auto-sliding</span>
      </div>
    </div>
  );
};
