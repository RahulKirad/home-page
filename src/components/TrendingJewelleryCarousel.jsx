import { useCallback, useEffect, useRef, useState } from 'react';
import './trending-jewellery-carousel.css';

const imgProduct = new URL('../assets/imgRectangle365.png', import.meta.url).href;

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
    image: imgProduct,
  },
  {
    id: 'kalamani-2',
    name: 'Heritage Temple Necklace Set',
    carat: '22',
    weight: '24.12 gm',
    wastageOld: '4.5',
    wastageNew: '3.2',
    image: imgProduct,
  },
  {
    id: 'kalamani-3',
    name: 'Royal Kundan Choker',
    carat: '22',
    weight: '16.45 gm',
    wastageOld: '3.8',
    wastageNew: '2.9',
    image: imgProduct,
  },
  {
    id: 'kalamani-4',
    name: 'Classic Mangalsutra Chain',
    carat: '22',
    weight: '12.60 gm',
    wastageOld: '4.2',
    wastageNew: '3.1',
    image: imgProduct,
  },
  {
    id: 'kalamani-5',
    name: 'Bridal Gold Bangle Pair',
    carat: '22',
    weight: '32.05 gm',
    wastageOld: '5.0',
    wastageNew: '3.6',
    image: imgProduct,
  },
];

function TrendingCard({ product }) {
  return (
    <article className="trending-card">
      <div className="trending-card__media">
        <img alt={product.name} src={product.image} />
        <div className="trending-card__overlay">
          <span className="trending-card__cta">Quick View</span>
        </div>
        <button type="button" className="trending-card__wishlist" aria-label={`Save ${product.name}`}>
          ♥
        </button>
      </div>

      <div className="trending-card__body">
        <h3 className="trending-card__name">{product.name}</h3>

        <div className="trending-card__meta">
          <span className="trending-card__badge">Carat {product.carat}</span>
          <span className="trending-card__badge trending-card__badge--muted">{product.weight}</span>
        </div>

        <p className="trending-card__wastage">
          Wastage{' '}
          <span className="trending-card__wastage-old">{product.wastageOld}</span>{' '}
          <span className="trending-card__wastage-new">{product.wastageNew}</span>
        </p>
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
        viewport.scrollLeft += 0.6;
      }

      frameId = window.requestAnimationFrame(tick);
    };

    frameId = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameId);
  }, [isHovered]);

  return (
    <section className="trending-carousel" aria-label="Trending Jewellery Collection">
      <h2 className="trending-carousel__title">Trending Jewellery Collection</h2>

      <div className="trending-carousel__stage">
        <NavButton direction="prev" onClick={() => scrollByStep(-1)} />
        <NavButton direction="next" onClick={() => scrollByStep(1)} />

        <div
          ref={viewportRef}
          className="trending-carousel__viewport"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="trending-carousel__track">
            {marqueeItems.map((product, index) => (
              <TrendingCard key={`${product.id}-${index}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
