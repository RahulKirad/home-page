import { useEffect, useRef, useState } from 'react';
import { BANNER_FRAME_COUNT } from '../assets/bannerFrames';
import { BANNER_HEIGHT, STATS_BAR_HEIGHT, getBannerScrollDistance } from '../constants/banner';

const SMOOTHING = 0.14;

export const HERO_SECTION_HEIGHT = BANNER_HEIGHT + STATS_BAR_HEIGHT;

function unlockPageScroll() {
  document.body.classList.remove('banner-scroll-locked');
  document.body.style.overflow = '';
}

function lockPageScroll() {
  document.body.classList.add('banner-scroll-locked');
  document.body.style.overflow = 'hidden';
}

export function useBannerScroll(scrollContainerRef) {
  const [frameIndex, setFrameIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const smoothProgressRef = useRef(0);
  const scrollTopRef = useRef(0);
  const completeRef = useRef(false);
  const restoreScrollOnMountRef = useRef(null);

  useEffect(() => {
    if (!isAnimationComplete) return undefined;
    unlockPageScroll();
    return undefined;
  }, [isAnimationComplete]);

  useEffect(() => {
    if (isAnimationComplete) return undefined;

    const container = scrollContainerRef.current;
    if (!container) return undefined;

    let frameId = 0;

    const getMaxScroll = () => Math.max(container.scrollHeight - container.clientHeight, 0);

    const progressFromScrollTop = (scrollTop) => {
      const scrollDistance = getBannerScrollDistance();
      if (scrollDistance <= 0) return 0;
      return Math.min(Math.max(scrollTop / scrollDistance, 0), 1);
    };

    const applyScrollState = (progress) => {
      const clampedProgress = Math.min(Math.max(progress, 0), 1);
      const nextFrame = Math.min(
        Math.floor(clampedProgress * (BANNER_FRAME_COUNT - 1)),
        BANNER_FRAME_COUNT - 1,
      );

      setFrameIndex(nextFrame);
      setScrollProgress(clampedProgress);
      smoothProgressRef.current = clampedProgress;
      document.documentElement.style.setProperty('--banner-scroll-progress', String(clampedProgress));
    };

    const tick = () => {
      const scrollTop = scrollTopRef.current;
      const targetProgress = progressFromScrollTop(scrollTop);

      smoothProgressRef.current += (targetProgress - smoothProgressRef.current) * SMOOTHING;

      let progress = smoothProgressRef.current;
      if (Math.abs(targetProgress - smoothProgressRef.current) < 0.001) {
        progress = targetProgress;
        smoothProgressRef.current = targetProgress;
      }

      applyScrollState(progress);

      const isSettled = Math.abs(targetProgress - smoothProgressRef.current) < 0.001;
      if (!isSettled) {
        frameId = requestAnimationFrame(tick);
      }
    };

    const scheduleTick = () => {
      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(tick);
    };

    const markComplete = () => {
      if (completeRef.current) return;
      completeRef.current = true;
      applyScrollState(1);
      setIsAnimationComplete(true);
      unlockPageScroll();
    };

    const onContainerScroll = () => {
      scrollTopRef.current = container.scrollTop;
      scheduleTick();
    };

    const scrollBannerBy = (delta) => {
      const maxScroll = getMaxScroll();
      const atMax = container.scrollTop >= maxScroll - 2;
      const atMin = container.scrollTop <= 2;

      if (atMax && delta > 0) {
        markComplete();
        return;
      }

      const nextScrollTop = Math.max(0, Math.min(container.scrollTop + delta, maxScroll));
      container.scrollTop = nextScrollTop;
      scrollTopRef.current = nextScrollTop;

      if (atMin && delta < 0) {
        applyScrollState(0);
        return;
      }

      scheduleTick();
    };

    const onWheel = (event) => {
      event.preventDefault();
      scrollBannerBy(event.deltaY);
    };

    const updateScrollDistance = () => {
      document.documentElement.style.setProperty(
        '--banner-scroll-distance',
        `${getBannerScrollDistance()}px`,
      );
    };

    updateScrollDistance();

    if (restoreScrollOnMountRef.current != null) {
      const restored = restoreScrollOnMountRef.current;
      restoreScrollOnMountRef.current = null;
      requestAnimationFrame(() => {
        const maxScroll = getMaxScroll();
        const restoredTop = Math.min(Math.max(restored, 0), maxScroll);
        container.scrollTop = restoredTop;
        scrollTopRef.current = restoredTop;
        scheduleTick();
      });
    } else {
      scrollTopRef.current = container.scrollTop;
      scheduleTick();
    }
    lockPageScroll();
    window.scrollTo(0, 0);

    container.addEventListener('scroll', onContainerScroll, { passive: true });
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', updateScrollDistance);

    return () => {
      cancelAnimationFrame(frameId);
      container.removeEventListener('scroll', onContainerScroll);
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', updateScrollDistance);
      unlockPageScroll();
      document.documentElement.style.removeProperty('--banner-scroll-distance');
    };
  }, [scrollContainerRef, isAnimationComplete]);

  useEffect(() => {
    if (!isAnimationComplete) return undefined;

    const onPageWheel = (event) => {
      if (window.scrollY > 10) return;

      if (event.deltaY < 0) {
        event.preventDefault();
        const scrollDistance = getBannerScrollDistance();
        restoreScrollOnMountRef.current = scrollDistance;
        completeRef.current = false;
        setIsAnimationComplete(false);
      }
    };

    window.addEventListener('wheel', onPageWheel, { passive: false });
    return () => window.removeEventListener('wheel', onPageWheel);
  }, [isAnimationComplete]);

  return { frameIndex, scrollProgress, isAnimationComplete };
}
