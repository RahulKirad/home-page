import { bannerFrames } from '../assets/bannerFrames';
import HeroStatsBar from './HeroStatsBar';
import './banner-copy.css';

function BannerContent({ frameIndex, scrollProgress, isAnimationComplete }) {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt=""
          aria-hidden="true"
          className="absolute h-[116.29%] left-[-0.62%] max-w-none top-[-8.15%] w-[100.63%] object-cover pointer-events-none"
          src={bannerFrames[frameIndex]}
        />
      </div>

      <div className="banner-copy">
        <div className="banner-copy-inner">
          <h1 className="banner-copy-title">
            <span className="banner-copy-line">Transparent</span>
            <span className="banner-copy-line">Wastage</span>
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
            <span className="banner-copy-badge__text">No Hidden Charges</span>
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

      <div
        className="absolute inset-x-0 bottom-0 z-20"
        aria-hidden={isAnimationComplete}
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(scrollProgress * 100)}
        aria-label="Banner scroll progress"
      >
        <div className="h-[3px] w-full bg-white/20">
          <div
            className="banner-progress-fill h-full origin-left bg-[#c9a84c] shadow-[0_0_12px_rgba(201,168,76,0.55)]"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>
      </div>
    </>
  );
}

function BannerShell({ frameIndex, scrollProgress, isAnimationComplete, className = '' }) {
  return (
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
        <BannerContent
          frameIndex={frameIndex}
          isAnimationComplete={isAnimationComplete}
          scrollProgress={scrollProgress}
        />
      </div>
      <HeroStatsBar />
    </div>
  );
}

export default function ScrollBanner({
  frameIndex,
  scrollProgress,
  isAnimationComplete,
  className = '',
}) {
  if (!isAnimationComplete) {
    return (
      <div
        className="banner-hero-fixed fixed inset-x-0 z-30 flex justify-center"
        style={{ top: 'var(--site-header-height, 175px)' }}
      >
        <BannerShell
          className={className}
          frameIndex={frameIndex}
          isAnimationComplete={isAnimationComplete}
          scrollProgress={scrollProgress}
        />
      </div>
    );
  }

  return (
    <div className="banner-hero-settled relative z-30 flex w-full justify-center">
      <BannerShell
        className={className}
        frameIndex={frameIndex}
        isAnimationComplete={isAnimationComplete}
        scrollProgress={scrollProgress}
      />
    </div>
  );
}
