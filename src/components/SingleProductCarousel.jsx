import { useCallback, useEffect, useRef, useState } from 'react';

const imgRectangle24 = new URL('../assets/imgRectangle24.png', import.meta.url).href;
const imgRectangle25 = new URL('../assets/imgRectangle25.png', import.meta.url).href;
const imgRectangle26 = new URL('../assets/imgRectangle26.png', import.meta.url).href;
const imgRectangle27 = new URL('../assets/imgRectangle27.png', import.meta.url).href;
const imgRectangle28 = new URL('../assets/imgRectangle28.png', import.meta.url).href;

const SLIDES = [
  { id: 'office-wear', image: imgRectangle24, label: 'Office Wear' },
  { id: 'daily-wear', image: imgRectangle25, label: 'Daily Wear' },
  { id: 'party-wear', image: imgRectangle26, label: 'Party Wear' },
  { id: 'wedding', image: imgRectangle27, label: 'Wedding' },
  { id: 'traditional', image: imgRectangle28, label: 'Traditional' },
];

const AUTO_PLAY_MS = 5000;
const DRAG_THRESHOLD = 48;

const CONTAINER_WIDTH = 1440;
const CARD_WIDTH = 348;
const OUTER_CARD_WIDTH = 340;
const CARD_HEIGHT = 532;
const CENTER_CARD_WIDTH = 400;
const CENTER_CARD_HEIGHT = 510;
const INNER_SCALE = 0.92;
const OUTER_SCALE = 0.82;

const EDGE_INSET = 0;

const OUTER_STEP =
  CONTAINER_WIDTH / 2 - EDGE_INSET - (OUTER_CARD_WIDTH * OUTER_SCALE) / 2;
const INNER_STEP =
  CENTER_CARD_WIDTH / 2 + (CARD_WIDTH * INNER_SCALE) / 2 - 10;

function getWrappedOffset(index, activeIndex, total) {
  let offset = index - activeIndex;

  if (offset > total / 2) {
    offset -= total;
  } else if (offset < -total / 2) {
    offset += total;
  }

  return offset;
}

function getTranslateX(offset) {
  if (offset === 0) return 0;

  const sign = Math.sign(offset);
  const absOffset = Math.abs(offset);

  if (absOffset === 1) return sign * INNER_STEP;
  return sign * OUTER_STEP;
}

function getCardSize(offset) {
  if (offset === 0) {
    return { width: CENTER_CARD_WIDTH, height: CENTER_CARD_HEIGHT };
  }

  if (Math.abs(offset) === 2) {
    return { width: OUTER_CARD_WIDTH, height: CARD_HEIGHT };
  }

  return { width: CARD_WIDTH, height: CARD_HEIGHT };
}

function getSlideStyle(offset) {
  const absOffset = Math.abs(offset);

  if (absOffset > 2) {
    return {
      opacity: 0,
      pointerEvents: 'none',
      transform:
        'translateX(-50%) translateZ(-260px) rotateY(0deg) scale(0.68)',
      zIndex: 0,
    };
  }

  const sign = Math.sign(offset);
  const rotateY = absOffset === 1 ? sign * -38 : sign * -62;
  const scale = offset === 0 ? 1 : absOffset === 1 ? INNER_SCALE : OUTER_SCALE;
  const translateX = getTranslateX(offset);
  const translateZ = offset === 0 ? 160 : absOffset === 1 ? -72 : -148;

  return {
    opacity: absOffset === 2 ? 0.9 : 1,
    pointerEvents: 'auto',
    transform: `translateX(calc(-50% + ${translateX}px)) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
    zIndex: 10 - absOffset,
  };
}

function NavButton({ direction, onClick, className = '' }) {
  return (
    <button
      type="button"
      aria-label={direction === 'prev' ? 'Previous collection' : 'Next collection'}
      className={`flex size-[46px] cursor-pointer items-center justify-center rounded-full border border-[#e8e8e8] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-transform hover:scale-105 ${className}`}
      onClick={onClick}
    >
      <span className="text-[18px] leading-none text-[#201a14]">
        {direction === 'prev' ? '‹' : '›'}
      </span>
    </button>
  );
}

export default function SingleProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartXRef = useRef(null);
  const dragMovedRef = useRef(false);

  const pauseAutoPlay = useCallback(() => {
    setIsPaused(true);
  }, []);

  const goPrev = useCallback(() => {
    pauseAutoPlay();
    setActiveIndex((index) => (index - 1 + SLIDES.length) % SLIDES.length);
  }, [pauseAutoPlay]);

  const goNext = useCallback(() => {
    pauseAutoPlay();
    setActiveIndex((index) => (index + 1) % SLIDES.length);
  }, [pauseAutoPlay]);

  const finishDrag = useCallback(
    (clientX) => {
      if (dragStartXRef.current === null) {
        return;
      }

      const delta = clientX - dragStartXRef.current;

      if (dragMovedRef.current && Math.abs(delta) >= DRAG_THRESHOLD) {
        if (delta > 0) {
          goPrev();
        } else {
          goNext();
        }
      } else {
        pauseAutoPlay();
      }

      dragStartXRef.current = null;
      dragMovedRef.current = false;
      setIsDragging(false);
    },
    [goNext, goPrev, pauseAutoPlay],
  );

  const handlePointerDown = (event) => {
    if (event.button !== 0) {
      return;
    }

    dragStartXRef.current = event.clientX;
    dragMovedRef.current = false;
    setIsDragging(true);
    pauseAutoPlay();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (dragStartXRef.current === null) {
      return;
    }

    if (Math.abs(event.clientX - dragStartXRef.current) > 8) {
      dragMovedRef.current = true;
    }
  };

  const handlePointerUp = (event) => {
    finishDrag(event.clientX);

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  const handlePointerCancel = (event) => {
    finishDrag(event.clientX);
  };

  useEffect(() => {
    if (isHovered || isPaused || isDragging) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % SLIDES.length);
    }, AUTO_PLAY_MS);

    return () => window.clearInterval(timer);
  }, [isHovered, isPaused, isDragging]);

  useEffect(() => {
    if (!isPaused) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setIsPaused(false);
    }, AUTO_PLAY_MS);

    return () => window.clearTimeout(timer);
  }, [isPaused, activeIndex]);

  return (
    <section
      className="absolute left-0 top-[3291px] w-[1440px]"
      data-name="Video Collection"
    >
      <h2 className="font-['Playfair_Display:Regular'] text-center text-[40px] text-[#201a14]">
        Video Collection
      </h2>

      <div
        className={`relative mx-auto mt-[60px] flex h-[580px] w-full max-w-[1440px] items-end justify-center overflow-visible select-none touch-none ${
          isDragging ? 'cursor-grabbing' : 'cursor-grab'
        }`}
        style={{ perspective: '1700px', perspectiveOrigin: '50% 90%' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onPointerCancel={handlePointerCancel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {SLIDES.map((slide, index) => {
            const offset = getWrappedOffset(index, activeIndex, SLIDES.length);
            const style = getSlideStyle(offset);
            const { width, height } = getCardSize(offset);
            const isActive = offset === 0;

            return (
              <article
                key={slide.id}
                className="absolute bottom-0 left-1/2 overflow-hidden rounded-[20px] bg-[#f3f3f3] shadow-[0_20px_44px_rgba(32,26,20,0.2)] transition-all duration-500 ease-out"
                style={{
                  ...style,
                  width,
                  height,
                  transformOrigin: 'center bottom',
                  backfaceVisibility: 'hidden',
                }}
              >
                <img
                  alt={slide.label}
                  className="pointer-events-none size-full object-cover"
                  draggable={false}
                  src={slide.image}
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent px-4 pb-7 pt-24">
                  <div className="mx-auto mb-2 h-px w-[68px] bg-white/90" />
                  <p className="text-center font-['Kanit:Light'] text-[12px] uppercase tracking-[0.28em] text-white">
                    {slide.label}
                  </p>
                </div>

                {isActive && (
                  <button
                    type="button"
                    aria-label="View collection details"
                    className="absolute bottom-[-22px] left-1/2 z-20 flex size-[34px] -translate-x-1/2 cursor-pointer items-center justify-center rounded-full border border-[#ececec] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.08)]"
                  >
                    <span className="text-[13px] leading-none text-[#201a14]">⌃</span>
                  </button>
                )}
              </article>
            );
          })}
        </div>

        <NavButton
          className="absolute left-[12px] top-1/2 z-30 -translate-y-1/2"
          direction="prev"
          onClick={goPrev}
        />
        <NavButton
          className="absolute right-[12px] top-1/2 z-30 -translate-y-1/2"
          direction="next"
          onClick={goNext}
        />
      </div>
    </section>
  );
}
