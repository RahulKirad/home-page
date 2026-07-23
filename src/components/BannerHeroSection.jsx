import { useEffect, useRef } from 'react';
import { bannerFrames } from '../assets/bannerFrames';
import { useBannerScroll } from '../hooks/useBannerScroll';
import ScrollBanner from './ScrollBanner';

export default function BannerHeroSection() {
  const scrollTrackRef = useRef(null);
  const { frameIndex, scrollProgress, isAnimationComplete } = useBannerScroll(scrollTrackRef);

  useEffect(() => {
    bannerFrames.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  return (
    <section className="banner-hero-section" aria-label="Hero banner">
      {!isAnimationComplete && <div className="banner-hero-spacer" aria-hidden="true" />}
      <ScrollBanner
        frameIndex={frameIndex}
        isAnimationComplete={isAnimationComplete}
        scrollProgress={scrollProgress}
      />

      {!isAnimationComplete && (
        <>
          <div
            ref={scrollTrackRef}
            className="banner-scroll-track"
            aria-label="Banner animation scroll — use this or your mouse wheel"
          >
            <div className="banner-scroll-track-spacer" aria-hidden="true" />
          </div>

          <div className="banner-scroll-hint" aria-hidden="true">
            <span>Scroll banner</span>
          </div>
        </>
      )}
    </section>
  );
}
