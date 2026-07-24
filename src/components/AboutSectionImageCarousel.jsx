import { useCallback, useEffect, useState } from 'react';
import './about-section-image-carousel.css';

const imgOffice = new URL('../assets/Kalkata Jewels Office.jpg', import.meta.url).href;
const imgBannerOne = new URL('../assets/Photos Banner (1).jpg', import.meta.url).href;
const imgBanner = new URL('../assets/Photos Banner.jpg', import.meta.url).href;
const imgPhotos = new URL('../assets/Photos.jpg', import.meta.url).href;

const AUTO_PLAY_MS = 3000;

const SLIDES = [
  {
    id: 'office',
    src: imgOffice,
    alt: 'Kalkata Jewels office reception with brand logo',
  },
  {
    id: 'showroom-chandelier',
    src: imgBannerOne,
    alt: 'Kalkata Gold showroom interior with chandelier',
  },
  {
    id: 'entrance-signage',
    src: imgBanner,
    alt: 'Kalkata Gold entrance with gold lettering',
  },
  {
    id: 'office-interior',
    src: imgPhotos,
    alt: 'Kalkata Jewels office waiting area and reception',
  },
];

export default function AboutSectionImageCarousel({ className = '' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback((index) => {
    setIsPaused(true);
    setActiveIndex((index + SLIDES.length) % SLIDES.length);
  }, []);

  const goPrev = useCallback(() => {
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (isHovered || isPaused) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % SLIDES.length);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [isHovered, isPaused]);

  useEffect(() => {
    if (!isPaused) {
      return undefined;
    }

    const timer = window.setTimeout(() => setIsPaused(false), AUTO_PLAY_MS);
    return () => window.clearTimeout(timer);
  }, [isPaused, activeIndex]);

  return (
    <div
      className={`about-image-carousel${className ? ` ${className}` : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="about-image-carousel__viewport">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index !== activeIndex}
            className={`about-image-carousel__slide${
              index === activeIndex ? ' about-image-carousel__slide--active' : ''
            }`}
          >
            <img alt={slide.alt} src={slide.src} />
          </div>
        ))}
      </div>

      <button
        type="button"
        className="about-image-carousel__arrow about-image-carousel__arrow--prev"
        aria-label="Previous photo"
        onClick={goPrev}
      >
        ‹
      </button>
      <button
        type="button"
        className="about-image-carousel__arrow about-image-carousel__arrow--next"
        aria-label="Next photo"
        onClick={goNext}
      >
        ›
      </button>

      <div className="about-image-carousel__dots" role="tablist" aria-label="Office photos">
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-label={`Show photo ${index + 1}`}
            className={`about-image-carousel__dot${
              index === activeIndex ? ' about-image-carousel__dot--active' : ''
            }`}
            onClick={() => goTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
