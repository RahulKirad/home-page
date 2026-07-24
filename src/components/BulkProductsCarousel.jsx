import { useCallback, useRef } from 'react';
import './bulk-products-carousel.css';

const imgProduct = new URL('../assets/imgRectangle365.png', import.meta.url).href;

const CARD_WIDTH = 320;
const CARD_GAP = 24;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

const PRODUCTS = [
  {
    id: 'bulk-1',
    name: 'Kalamani Padar Piece Ganthan',
    carat: '22',
    weight: '18.78 gm',
    wastageOld: '4.0',
    wastageNew: '3.0',
    minOrder: '10 pcs',
    image: imgProduct,
  },
  {
    id: 'bulk-2',
    name: 'Heritage Temple Necklace Set',
    carat: '22',
    weight: '24.12 gm',
    wastageOld: '4.5',
    wastageNew: '3.2',
    minOrder: '8 pcs',
    image: imgProduct,
  },
  {
    id: 'bulk-3',
    name: 'Royal Kundan Choker',
    carat: '22',
    weight: '16.45 gm',
    wastageOld: '3.8',
    wastageNew: '2.9',
    minOrder: '12 pcs',
    image: imgProduct,
  },
  {
    id: 'bulk-4',
    name: 'Classic Mangalsutra Chain',
    carat: '22',
    weight: '12.60 gm',
    wastageOld: '4.2',
    wastageNew: '3.1',
    minOrder: '15 pcs',
    image: imgProduct,
  },
  {
    id: 'bulk-5',
    name: 'Bridal Gold Bangle Pair',
    carat: '22',
    weight: '32.05 gm',
    wastageOld: '5.0',
    wastageNew: '3.6',
    minOrder: '6 pairs',
    image: imgProduct,
  },
  {
    id: 'bulk-6',
    name: 'Antique Polki Pendant',
    carat: '22',
    weight: '14.20 gm',
    wastageOld: '4.1',
    wastageNew: '3.0',
    minOrder: '10 pcs',
    image: imgProduct,
  },
  {
    id: 'bulk-7',
    name: 'Traditional Haar Set',
    carat: '22',
    weight: '28.90 gm',
    wastageOld: '4.8',
    wastageNew: '3.4',
    minOrder: '5 sets',
    image: imgProduct,
  },
  {
    id: 'bulk-8',
    name: 'Designer Gold Earrings',
    carat: '22',
    weight: '9.85 gm',
    wastageOld: '3.5',
    wastageNew: '2.7',
    minOrder: '20 pcs',
    image: imgProduct,
  },
];

function BookmarkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M7 4a2 2 0 0 0-2 2v14l7-4 7 4V6a2 2 0 0 0-2-2H7Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BulkCard({ product }) {
  return (
    <article className="bulk-card">
      <div className="bulk-card__hero">
        <img alt={product.name} src={product.image} />
        <button
          type="button"
          className="bulk-card__bookmark"
          aria-label={`Save ${product.name}`}
        >
          <BookmarkIcon />
        </button>
      </div>

      <div className="bulk-card__panel">
        <h3 className="bulk-card__name">{product.name}</h3>

        <div className="bulk-card__reveal">
          <p className="bulk-card__desc">
            {product.carat}K gold · Wastage {product.wastageOld} → {product.wastageNew} · Min. order {product.minOrder}
          </p>

          <div className="bulk-card__tags">
            <span className="bulk-card__tag">Bulk Deal</span>
            <span className="bulk-card__tag">Carat {product.carat}</span>
            <span className="bulk-card__tag">{product.weight}</span>
          </div>

          <button type="button" className="bulk-card__cta">
            Add to Bulk Order
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
      className={`bulk-carousel__nav bulk-carousel__nav--${direction}`}
      aria-label={direction === 'prev' ? 'Previous bulk products' : 'Next bulk products'}
      onClick={onClick}
    >
      <span aria-hidden="true">{direction === 'prev' ? '‹' : '›'}</span>
    </button>
  );
}

export default function BulkProductsCarousel() {
  const viewportRef = useRef(null);

  const scrollByStep = useCallback((direction) => {
    viewportRef.current?.scrollBy({ left: direction * CARD_STEP, behavior: 'smooth' });
  }, []);

  return (
    <section className="bulk-carousel" aria-label="Bulk Products">
      <div className="bulk-carousel__header">
        <h2 className="bulk-carousel__title">Bulk Products</h2>
        <button type="button" className="bulk-carousel__view-all">
          View All
        </button>
      </div>

      <div className="bulk-carousel__frame">
        <NavButton direction="prev" onClick={() => scrollByStep(-1)} />
        <NavButton direction="next" onClick={() => scrollByStep(1)} />

        <div ref={viewportRef} className="bulk-carousel__stage">
          {PRODUCTS.map((product) => (
            <BulkCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
