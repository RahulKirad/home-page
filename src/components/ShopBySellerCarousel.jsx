import { useCallback, useRef } from 'react';
import './shop-by-seller-carousel.css';

const imgSellerLogo = new URL('../assets/imgLogonew12.png', import.meta.url).href;
const imgProduct = new URL('../assets/imgRectangle365.png', import.meta.url).href;

const CARD_WIDTH = 248;
const CARD_GAP = 24;
const CARD_STEP = CARD_WIDTH + CARD_GAP;

const SELLERS = [
  {
    id: 'sl1493',
    code: 'SL1493',
    name: 'Kalkata Gold House',
    products: 128,
    rating: '4.9',
    location: 'Kolkata',
    tag: 'Top Seller',
  },
  {
    id: 'sl1842',
    code: 'SL1842',
    name: 'Heritage Jewellers',
    products: 96,
    rating: '4.8',
    location: 'Mumbai',
    tag: 'Premium',
  },
  {
    id: 'sl2107',
    code: 'SL2107',
    name: 'Royal Ornaments',
    products: 142,
    rating: '4.9',
    location: 'Delhi',
    tag: 'Trending',
  },
  {
    id: 'sl1655',
    code: 'SL1655',
    name: 'Shree Bullion Works',
    products: 87,
    rating: '4.7',
    location: 'Surat',
    tag: 'Verified',
  },
  {
    id: 'sl1931',
    code: 'SL1931',
    name: 'Classic Gold Studio',
    products: 115,
    rating: '4.8',
    location: 'Jaipur',
    tag: 'New',
  },
];

function SellerCard({ seller }) {
  return (
    <article className="seller-card">
      <div className="seller-card__visual">
        <img alt="" className="seller-card__hero" src={imgProduct} />
        <div className="seller-card__visual-overlay" aria-hidden="true" />
        <span className="seller-card__tag">{seller.tag}</span>

        <div className="seller-card__profile">
          <div className="seller-card__avatar-ring">
            <img alt="" className="seller-card__avatar" src={imgSellerLogo} />
          </div>
          <div className="seller-card__profile-text">
            <p className="seller-card__name">{seller.name}</p>
            <p className="seller-card__location">{seller.location}</p>
          </div>
        </div>
      </div>

      <div className="seller-card__panel">
        <div className="seller-card__panel-top">
          <p className="seller-card__code">{seller.code}</p>
          <div className="seller-card__rating" aria-label={`Rating ${seller.rating} out of 5`}>
            <span className="seller-card__rating-star">★</span>
            {seller.rating}
          </div>
        </div>

        <div className="seller-card__chips">
          <span className="seller-card__chip">{seller.products} designs</span>
          <span className="seller-card__chip seller-card__chip--gold">
            <span className="seller-card__verified-icon" aria-hidden="true">
              <svg viewBox="0 0 12 12" fill="none">
                <path
                  d="M2.5 6.2L5.1 8.8L9.5 3.8"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.6"
                />
              </svg>
            </span>
            Verified Seller
          </span>
        </div>

        <button type="button" className="seller-card__action">
          Explore catalogue
          <span aria-hidden="true" className="seller-card__action-arrow">→</span>
        </button>
      </div>
    </article>
  );
}

function NavButton({ direction, onClick }) {
  return (
    <button
      type="button"
      className={`shop-by-seller__nav shop-by-seller__nav--${direction}`}
      aria-label={direction === 'prev' ? 'Previous sellers' : 'Next sellers'}
      onClick={onClick}
    >
      <span aria-hidden="true">{direction === 'prev' ? '‹' : '›'}</span>
    </button>
  );
}

export default function ShopBySellerCarousel() {
  const viewportRef = useRef(null);

  const scrollByStep = useCallback((direction) => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    viewport.scrollBy({ left: direction * CARD_STEP, behavior: 'smooth' });
  }, []);

  return (
    <section className="shop-by-seller" aria-label="Shop By Seller">
      <h2 className="shop-by-seller__title">Shop By Seller</h2>

      <div className="shop-by-seller__frame">
        <NavButton direction="prev" onClick={() => scrollByStep(-1)} />
        <NavButton direction="next" onClick={() => scrollByStep(1)} />

        <div ref={viewportRef} className="shop-by-seller__grid">
          {SELLERS.map((seller) => (
            <SellerCard key={seller.id} seller={seller} />
          ))}
        </div>
      </div>
    </section>
  );
}
