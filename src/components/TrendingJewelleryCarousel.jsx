import { useCallback, useEffect, useRef, useState } from 'react';
import './trending-jewellery-carousel.css';

const imgProduct = new URL('../assets/imgRectangle365.png', import.meta.url).href;
const imgNecklace = new URL('../assets/imgRectangle24.png', import.meta.url).href;
const imgDaily = new URL('../assets/imgRectangle25.png', import.meta.url).href;
const imgParty = new URL('../assets/imgRectangle26.png', import.meta.url).href;
const imgWedding = new URL('../assets/imgRectangle27.png', import.meta.url).href;
const imgTraditional = new URL('../assets/imgRectangle28.png', import.meta.url).href;
const imgShowcase = new URL('../assets/imgRectangle272.png', import.meta.url).href;

const IMAGE_CYCLE_MS = 50000;

const CARD_WIDTH = 260;
const CARD_GAP = 24;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

const PRODUCTS = [
  {
    id: 'kalamani-1',
    name: 'Kalamani Padar Piece Ganthan',
    carat: '22',
    weight: '18.78 gm',
    wastageOld: '4.0',
    wastageNew: '3.0',
    images: [imgProduct, imgNecklace, imgShowcase],
  },
  {
    id: 'kalamani-2',
    name: 'Heritage Temple Necklace Set',
    carat: '22',
    weight: '24.12 gm',
    wastageOld: '4.5',
    wastageNew: '3.2',
    images: [imgNecklace, imgWedding, imgTraditional],
  },
  {
    id: 'kalamani-3',
    name: 'Royal Kundan Choker',
    carat: '22',
    weight: '16.45 gm',
    wastageOld: '3.8',
    wastageNew: '2.9',
    images: [imgParty, imgProduct, imgDaily],
  },
  {
    id: 'kalamani-4',
    name: 'Classic Mangalsutra Chain',
    carat: '22',
    weight: '12.60 gm',
    wastageOld: '4.2',
    wastageNew: '3.1',
    images: [imgDaily, imgShowcase, imgProduct],
  },
  {
    id: 'kalamani-5',
    name: 'Bridal Gold Bangle Pair',
    carat: '22',
    weight: '32.05 gm',
    wastageOld: '5.0',
    wastageNew: '3.6',
    images: [imgWedding, imgTraditional, imgNecklace],
  },
];

function TrendingCard({ product }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const images = product.images;

  useEffect(() => {
    if (images.length <= 1 || isHovered) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveImageIndex((index) => (index + 1) % images.length);
    }, IMAGE_CYCLE_MS);

    return () => window.clearInterval(timer);
  }, [images.length, isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (images.length > 1) {
      setActiveImageIndex((index) => (index + 1) % images.length);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setActiveImageIndex(0);
  };

  const handleAddToCart = (event) => {
    event.stopPropagation();
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      className="trending-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="trending-card__media">
        {images.map((image, index) => (
          <img
            key={`${product.id}-${image}-${index}`}
            alt={product.name}
            className={index === activeImageIndex ? 'is-active' : ''}
            src={image}
          />
        ))}

        <button type="button" className="trending-card__wishlist" aria-label={`Save ${product.name}`}>
          ♥
        </button>

        {images.length > 1 && (
          <div className="trending-card__dots" aria-hidden="true">
            {images.map((image, index) => (
              <span
                key={`${product.id}-dot-${image}-${index}`}
                className={`trending-card__dot${index === activeImageIndex ? ' is-active' : ''}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="trending-card__body">
        <h3 className="trending-card__name">{product.name}</h3>

        <div className="trending-card__meta">
          <span className="trending-card__badge">Carat {product.carat}</span>
          <span className="trending-card__badge trending-card__badge--muted">{product.weight}</span>
        </div>

        <div className="trending-card__footer">
          <p className="trending-card__wastage">
            Wastage{' '}
            <span className="trending-card__wastage-old">{product.wastageOld}</span>{' '}
            <span className="trending-card__wastage-new">{product.wastageNew}</span>
          </p>

          <button
            type="button"
            className={`trending-card__cart${added ? ' trending-card__cart--added' : ''}`}
            aria-live="polite"
            onClick={handleAddToCart}
          >
            {added ? (
              <>
                <svg className="trending-card__cart-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M5 10.5l3.5 3.5L15 7"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                  />
                </svg>
                Added
              </>
            ) : (
              <>
                <svg className="trending-card__cart-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M6 6h11l-1.2 7H7.2L6 6z"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 6V5a2 2 0 0 1 4 0v1"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

function NavButton({ direction, onClick }) {
  return (
    <button
      type="button"
      className={`trending-carousel__nav trending-carousel__nav--${direction}`}
      aria-label={direction === 'prev' ? 'Previous trending products' : 'Next trending products'}
      onClick={onClick}
    >
      <span aria-hidden="true">{direction === 'prev' ? '‹' : '›'}</span>
    </button>
  );
}

export default function TrendingJewelleryCarousel() {
  const viewportRef = useRef(null);
  const pauseUntilRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const marqueeItems = [...PRODUCTS, ...PRODUCTS];

  const pauseAutoScroll = useCallback((durationMs = 2800) => {
    pauseUntilRef.current = Date.now() + durationMs;
  }, []);

  const scrollByStep = useCallback(
    (direction) => {
      const viewport = viewportRef.current;
      if (!viewport) return;

      pauseAutoScroll();

      const loopWidth = viewport.scrollWidth / 2;
      if (direction < 0 && viewport.scrollLeft <= CARD_STEP && loopWidth > 0) {
        viewport.scrollLeft += loopWidth;
      }

      viewport.scrollBy({ left: direction * CARD_STEP, behavior: 'smooth' });
    },
    [pauseAutoScroll],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    const handleScroll = () => {
      const loopWidth = viewport.scrollWidth / 2;
      if (loopWidth <= 0) return;

      if (viewport.scrollLeft >= loopWidth) {
        viewport.scrollLeft -= loopWidth;
      }
    };

    viewport.addEventListener('scroll', handleScroll, { passive: true });
    return () => viewport.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return undefined;

    let frameId = 0;

    const tick = () => {
      const shouldPause = isHovered || Date.now() < pauseUntilRef.current;

      if (!shouldPause) {
        viewport.scrollLeft += 1.4;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isHovered]);

  return (
    <section className="trending-carousel" aria-label="Trending Jewellery Collection">
      <div className="trending-carousel__header">
        <h2 className="trending-carousel__title">Trending Jewellery Collection</h2>
        <button type="button" className="trending-carousel__view-all">
          View All
        </button>
      </div>

      <div
        className="trending-carousel__frame"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <NavButton direction="prev" onClick={() => scrollByStep(-1)} />
        <NavButton direction="next" onClick={() => scrollByStep(1)} />

        <div ref={viewportRef} className="trending-carousel__stage">
          {marqueeItems.map((product, index) => (
            <TrendingCard key={`${product.id}-${index}`} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
