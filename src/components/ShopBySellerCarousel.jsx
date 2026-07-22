import './shop-by-seller-carousel.css';

const imgSellerLogo = new URL('../assets/imgLogonew12.png', import.meta.url).href;
const imgProduct = new URL('../assets/imgRectangle365.png', import.meta.url).href;

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
          <span className="seller-card__chip seller-card__chip--gold">B2B ready</span>
        </div>

        <button type="button" className="seller-card__action">
          Explore catalogue
          <span aria-hidden="true" className="seller-card__action-arrow">→</span>
        </button>
      </div>
    </article>
  );
}

export default function ShopBySellerCarousel() {
  return (
    <section className="shop-by-seller" aria-label="Shop By Seller">
      <h2 className="shop-by-seller__title">Shop By Seller</h2>

      <div className="shop-by-seller__grid">
        {SELLERS.map((seller) => (
          <SellerCard key={seller.id} seller={seller} />
        ))}
      </div>
    </section>
  );
}
