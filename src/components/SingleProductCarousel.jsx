import { useState } from 'react';

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

const CONTAINER_WIDTH = 1440;
const CARD_WIDTH = 400;
const CARD_HEIGHT = 430;
const OUTER_SCALE = 0.76;
const INNER_SCALE = 0.9;
const EDGE_INSET = 8;

const OUTER_STEP =
  CONTAINER_WIDTH / 2 - EDGE_INSET - (CARD_WIDTH * OUTER_SCALE) / 2;
const INNER_STEP = OUTER_STEP * 0.54;

function getTranslateX(offset) {
  if (offset === 0) return 0;

  const sign = Math.sign(offset);
  const absOffset = Math.abs(offset);

  if (absOffset === 1) return sign * INNER_STEP;
  return sign * OUTER_STEP;
}

function getSlideStyle(offset) {
  const absOffset = Math.abs(offset);

  if (absOffset > 2) {
    return {
      opacity: 0,
      pointerEvents: 'none',
      transform:
        'translateX(-50%) translateY(0px) translateZ(-240px) rotateY(0deg) scale(0.68)',
      zIndex: 0,
    };
  }

  const sign = Math.sign(offset);
  const rotateY =
    absOffset === 1 ? sign * 30 : sign * 44;
  const scale = offset === 0 ? 1 : absOffset === 1 ? INNER_SCALE : OUTER_SCALE;
  const translateX = getTranslateX(offset);
  const translateZ = offset === 0 ? 65 : -absOffset * 58;
  const translateY = -absOffset * 8;

  return {
    opacity: absOffset === 2 ? 0.92 : 1,
    pointerEvents: 'auto',
    transform: `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
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

  const goPrev = () => {
    setActiveIndex((index) => (index - 1 + SLIDES.length) % SLIDES.length);
  };

  const goNext = () => {
    setActiveIndex((index) => (index + 1) % SLIDES.length);
  };

  return (
    <section
      className="absolute left-0 top-[3291px] w-[1440px]"
      data-name="Single Product Collection"
    >
      <h2 className="font-['Playfair_Display:Regular'] text-center text-[40px] text-[#201a14]">
        Single Product Collection
      </h2>

      <div
        className="relative mt-[85px] mx-auto flex h-[450px] w-[1440px] items-end justify-center overflow-visible"
        style={{ perspective: '3000px', perspectiveOrigin: '50% 80%' }}
      >
        <div
          className="relative h-full w-[1440px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {SLIDES.map((slide, index) => {
            const offset = index - activeIndex;
            const style = getSlideStyle(offset);
            const isActive = offset === 0;

            return (
              <article
                key={slide.id}
                className="absolute bottom-0 left-[720px] overflow-hidden bg-[#f3f3f3] transition-all duration-500 ease-out"
                style={{
                  ...style,
                  width: CARD_WIDTH,
                  height: CARD_HEIGHT,
                  transformOrigin: 'center bottom',
                }}
              >
                <img
                  alt={slide.label}
                  className="size-full object-cover"
                  src={slide.image}
                />

                <div className="absolute inset-x-0 bottom-0 px-4 pb-7 pt-24">
                  <div className="mx-auto mb-2.5 h-px w-[72px] bg-white" />
                  <p className="text-center font-['Kanit:Light'] text-[13px] uppercase tracking-[0.24em] text-white">
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
          className="absolute left-[16px] top-1/2 z-30 -translate-y-1/2"
          direction="prev"
          onClick={goPrev}
        />
        <NavButton
          className="absolute right-[16px] top-1/2 z-30 -translate-y-1/2"
          direction="next"
          onClick={goNext}
        />
      </div>

      <p className="mt-10 text-center font-['Kanit:Regular'] text-[13px] uppercase tracking-[0.14em] text-[#201a14]">
        22KT Fine Gold
      </p>
    </section>
  );
}
