import { useEffect, useState } from 'react';
import {
  bannerFrames,
  BANNER_FRAME_COUNT,
} from '../assets/bannerFrames';
import {
  BANNER_HEIGHT,
  BANNER_TOP,
  getBannerScrollDistance,
} from '../constants/banner';

export default function ScrollBanner({ className = '' }) {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    bannerFrames.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useEffect(() => {
    let frameId = 0;

    const update = () => {
      const scrollDistance = getBannerScrollDistance();
      const scrollY = window.scrollY;
      const offset = Math.min(scrollY, scrollDistance);
      const progress = scrollDistance > 0 ? offset / scrollDistance : 0;
      const nextFrame = Math.min(
        Math.floor(progress * (BANNER_FRAME_COUNT - 1)),
        BANNER_FRAME_COUNT - 1,
      );

      setFrameIndex(nextFrame);
      document.documentElement.style.setProperty(
        '--banner-scroll-offset',
        `${offset}px`,
      );
      document.documentElement.style.setProperty(
        '--banner-height',
        `${BANNER_HEIGHT}px`,
      );
    };

    const onScroll = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      document.documentElement.style.removeProperty('--banner-scroll-offset');
      document.documentElement.style.removeProperty('--banner-height');
    };
  }, []);

  return (
    <div
      className={`absolute left-0 z-30 w-[1440px] overflow-hidden ${className}`}
      data-name="Scroll Banner"
      style={{
        top: BANNER_TOP,
        height: BANNER_HEIGHT,
      }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          alt=""
          aria-hidden="true"
          className="absolute h-[116.29%] left-[-0.62%] max-w-none top-[-8.15%] w-[100.63%] object-cover pointer-events-none"
          src={bannerFrames[frameIndex]}
        />
      </div>

      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center pl-[106px] text-left pointer-events-none">
        <h1 className="font-['Playfair_Display:Regular'] text-[56px] font-normal leading-[1.05] text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.35)]">
          Transparent
          <br />
          Wastage
        </h1>
        <p className="mt-4 font-['Kanit:Light'] text-[18px] leading-normal text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.3)]">
          No Hidden Charges
        </p>
        <button
          type="button"
          className="pointer-events-auto mt-8 cursor-pointer rounded-[8px] bg-[rgba(255,250,237,0.92)] px-9 py-3 font-['Kanit:Medium'] text-[14px] tracking-[0.08em] text-[#8a6d4c] uppercase transition-opacity hover:opacity-90"
        >
          Order Today
        </button>
      </div>
    </div>
  );
}
