import { useCallback, useEffect, useState } from 'react';
import './promo-banner-carousel.css';

const bannerKalkata = new URL(
  '../assets/ChatGPT Image Jul 20, 2026, 11_12_22 AM.png',
  import.meta.url,
).href;
const bannerSellGold = new URL(
  '../assets/ChatGPT Image Jul 20, 2026, 11_18_55 AM 2.png',
  import.meta.url,
).href;

const imgProduct1 = new URL('../assets/imgRectangle220.png', import.meta.url).href;
const imgProduct2 = new URL('../assets/imgRectangle224.png', import.meta.url).href;
const imgProduct3 = new URL('../assets/imgRectangle225.png', import.meta.url).href;
const imgProduct4 = new URL('../assets/imgRectangle226.png', import.meta.url).href;
const imgProduct5 = new URL('../assets/imgRectangle365.png', import.meta.url).href;
const imgProduct6 = new URL('../assets/imgRectangle27.png', import.meta.url).href;
const imgProduct7 = new URL('../assets/imgRectangle28.png', import.meta.url).href;
const imgProduct8 = new URL('../assets/imgRectangle26.png', import.meta.url).href;

const AUTO_PLAY_MS = 5000;

const SLIDES = [
  {
    id: 'kalkata-sourcing',
    banner: bannerKalkata,
    bannerAlt: 'Kalkata Jewels B2B Gold Jewellery Sourcing Network',
    products: [
      {
        id: 'ks-1',
        name: 'Temple Necklace Set',
        image: imgProduct1,
        wastageOld: '4.5%',
        wastageNew: '3.5%',
      },
      {
        id: 'ks-2',
        name: 'Heritage Earrings',
        image: imgProduct2,
        wastageOld: '4.2%',
        wastageNew: '3.2%',
      },
      {
        id: 'ks-3',
        name: 'Bridal Haar Set',
        image: imgProduct3,
        wastageOld: '4.8%',
        wastageNew: '3.6%',
      },
      {
        id: 'ks-4',
        name: 'Gold Jhumka Pair',
        image: imgProduct4,
        wastageOld: '4.0%',
        wastageNew: '3.0%',
      },
    ],
  },
  {
    id: 'sell-gold',
    banner: bannerSellGold,
    bannerAlt: 'Sell Your Gold Jewellery with Kalkata Jewels',
    products: [
      {
        id: 'sg-1',
        name: 'Diamond Ring',
        image: imgProduct5,
        wastageOld: '4.5%',
        wastageNew: '3.5%',
      },
      {
        id: 'sg-2',
        name: 'Gold Bangle Pair',
        image: imgProduct6,
        wastageOld: '4.3%',
        wastageNew: '3.3%',
      },
      {
        id: 'sg-3',
        name: 'Mangalsutra Chain',
        image: imgProduct7,
        wastageOld: '4.1%',
        wastageNew: '3.1%',
      },
      {
        id: 'sg-4',
        name: 'Kundan Pendant',
        image: imgProduct8,
        wastageOld: '4.6%',
        wastageNew: '3.4%',
      },
    ],
  },
];

function PromoProductCard({ product }) {
  return (
    <article className="promo-banner__product">
      <div className="promo-banner__product-image">
        <img alt={product.name} src={product.image} />
      </div>
      <h3 className="promo-banner__product-name">{product.name}</h3>
      <p className="promo-banner__product-wastage">
        <span className="promo-banner__product-wastage-label">Wastage:</span>{' '}
        <span className="promo-banner__product-wastage-old">{product.wastageOld}</span>{' '}
        <span className="promo-banner__product-wastage-new">{product.wastageNew}</span>
      </p>
    </article>
  );
}

export default function PromoBannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goPrev = useCallback(() => {
    setIsPaused(true);
    setActiveIndex((index) => (index - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goNext = useCallback(() => {
    setIsPaused(true);
    setActiveIndex((index) => (index + 1) % SLIDES.length);
  }, []);

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

    const timer = window.setTimeout(() => {
      setIsPaused(false);
    }, AUTO_PLAY_MS);

    return () => window.clearTimeout(timer);
  }, [isPaused, activeIndex]);

  return (
    <section
      className="promo-banner"
      aria-label="Promotional banner and featured products"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="promo-banner__left">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index !== activeIndex}
            className={`promo-banner__banner-slide ${
              index === activeIndex ? 'promo-banner__banner-slide--active' : ''
            }`}
          >
            <img alt={slide.bannerAlt} src={slide.banner} />
          </div>
        ))}
      </div>

      <div className="promo-banner__right">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            aria-hidden={index !== activeIndex}
            className={`promo-banner__products-slide ${
              index === activeIndex ? 'promo-banner__products-slide--active' : ''
            }`}
          >
            <div className="promo-banner__products-grid">
              {slide.products.map((product) => (
                <PromoProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}

        <div className="promo-banner__controls">
          <button
            type="button"
            className="promo-banner__arrow promo-banner__arrow--prev"
            aria-label="Previous banner"
            onClick={goPrev}
          >
            ‹
          </button>
          <button
            type="button"
            className="promo-banner__arrow promo-banner__arrow--next"
            aria-label="Next banner"
            onClick={goNext}
          >
            ›
          </button>

          <button type="button" className="promo-banner__shop-now">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
