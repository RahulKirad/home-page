import { useCallback, useEffect, useRef, useState } from 'react';
import HeroStatsBar from './HeroStatsBar';
import './banner-copy.css';

const videoRing = new URL('../assets/videoring.mp4', import.meta.url).href;
const videoCommercial = new URL(
  '../assets/Firefly Create a premium cinematic luxury jewellery commercial in 16-9 (3840×2160, 4K, 24fps) design.mp4',
  import.meta.url,
).href;

const BANNER_SLIDES = [
  {
    id: 'ring',
    src: videoRing,
    label: 'Gold ring showcase',
    copy: {
      lines: ['Transparent', 'Wastage'],
      badge: 'No Hidden Charges',
    },
  },
  {
    id: 'commercial',
    src: videoCommercial,
    label: 'Premium luxury jewellery commercial',
    copy: {
      lines: ["India's B2B", 'Sourcing Network'],
      badge: 'No Hidden Charges',
    },
  },
];

function BannerCopyOverlay({ activeIndex }) {
  const copy = BANNER_SLIDES[activeIndex].copy;

  return (
    <div className="banner-copy">
      <div className="banner-copy-inner">
        <h1 className="banner-copy-title" key={BANNER_SLIDES[activeIndex].id}>
          {copy.lines.map((line) => (
            <span key={line} className="banner-copy-line">
              {line}
            </span>
          ))}
        </h1>

        <div className="banner-copy-badge">
          <span className="banner-copy-badge__icon" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9 1.5L9.75 5.25L13.5 6L9.75 6.75L9 10.5L8.25 6.75L4.5 6L8.25 5.25L9 1.5Z"
                fill="currentColor"
              />
              <path
                d="M14.25 9.75L14.625 11.625L16.5 12L14.625 12.375L14.25 14.25L13.875 12.375L12 12L13.875 11.625L14.25 9.75Z"
                fill="currentColor"
              />
              <path
                d="M3.75 10.5L4.125 12.375L6 12.75L4.125 13.125L3.75 15L3.375 13.125L1.5 12.75L3.375 12.375L3.75 10.5Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="banner-copy-badge__text">{copy.badge}</span>
        </div>

        <div className="banner-copy-actions">
          <button type="button" className="banner-copy-cta banner-copy-cta--primary">
            Order Today
          </button>
          <button type="button" className="banner-copy-cta banner-copy-cta--secondary">
            View Products
          </button>
        </div>
      </div>
    </div>
  );
}

function BannerVideoSlides({ activeIndex, onGoTo, onGoNext }) {
  const videoRefs = useRef([]);
  const activeIndexRef = useRef(activeIndex);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
        return;
      }

      video.pause();
      video.currentTime = 0;
    });
  }, [activeIndex]);

  const handleVideoEnded = useCallback(
    (index) => {
      if (index !== activeIndexRef.current) return;
      onGoNext();
    },
    [onGoNext],
  );

  return (
    <div className="banner-video-slides">
      {BANNER_SLIDES.map((slide, index) => (
        <div
          key={slide.id}
          aria-hidden={index !== activeIndex}
          className={`banner-video-slide${index === activeIndex ? ' banner-video-slide--active' : ''}`}
        >
          <video
            ref={(element) => {
              videoRefs.current[index] = element;
            }}
            autoPlay={index === 0}
            muted
            playsInline
            preload="auto"
            className="banner-video"
            onEnded={() => handleVideoEnded(index)}
          >
            <source src={slide.src} type="video/mp4" />
          </video>
        </div>
      ))}

      <div className="banner-video-controls">
        <button
          type="button"
          className="banner-video-controls__arrow banner-video-controls__arrow--prev"
          aria-label="Previous banner video"
          onClick={() => onGoTo(activeIndex - 1)}
        >
          ‹
        </button>
        <button
          type="button"
          className="banner-video-controls__arrow banner-video-controls__arrow--next"
          aria-label="Next banner video"
          onClick={() => onGoTo(activeIndex + 1)}
        >
          ›
        </button>

        <div className="banner-video-controls__dots" role="tablist" aria-label="Banner videos">
          {BANNER_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-label={slide.label}
              className={`banner-video-controls__dot${
                index === activeIndex ? ' banner-video-controls__dot--active' : ''
              }`}
              onClick={() => onGoTo(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function BannerContent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index) => {
    setActiveIndex((index + BANNER_SLIDES.length) % BANNER_SLIDES.length);
  }, []);

  const goNext = useCallback(() => {
    setActiveIndex((index) => (index + 1) % BANNER_SLIDES.length);
  }, []);

  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <BannerVideoSlides activeIndex={activeIndex} onGoNext={goNext} onGoTo={goTo} />
      </div>

      <BannerCopyOverlay activeIndex={activeIndex} />
    </>
  );
}

export default function ScrollBanner({ className = '' }) {
  return (
    <div className="banner-hero-settled relative z-30 flex w-full justify-center">
      <div
        className={`relative w-full max-w-[1440px] overflow-hidden bg-[#201a14] ${className}`}
        data-name="Scroll Banner"
        style={{
          height: 'calc(var(--banner-visual-height, 580px) + var(--banner-stats-height, 47px))',
        }}
      >
        <div
          className="relative w-full overflow-hidden"
          style={{ height: 'var(--banner-visual-height, 580px)' }}
        >
          <BannerContent />
        </div>
        <HeroStatsBar />
      </div>
    </div>
  );
}
