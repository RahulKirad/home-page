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

const CARD_WIDTH = 520;
const CARD_HEIGHT = 610;
const CARD_STEP = CARD_WIDTH * 0.59;

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

  const rotateY = offset * -48;
  const scale = offset === 0 ? 1 : absOffset === 1 ? 0.87 : 0.74;
  const translateX = offset * CARD_STEP;
  const translateZ = offset === 0 ? 160 : -absOffset * 110;
  const translateY = -absOffset * 20;

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
        className="relative mt-[85px] flex h-[630px] w-full items-end justify-center overflow-visible"
        style={{ perspective: '2200px' }}
      >
        <div
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {SLIDES.map((slide, index) => {
            const offset = index - activeIndex;
            const style = getSlideStyle(offset);
            const isActive = offset === 0;

            return (
              <article
                key={slide.id}
                className="absolute bottom-0 left-1/2 overflow-hidden bg-[#f3f3f3] transition-all duration-500 ease-out"
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
