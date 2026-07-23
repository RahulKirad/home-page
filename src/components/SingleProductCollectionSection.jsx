import { useState } from 'react';
import './single-product-collection.css';

const imgOffice = new URL('../assets/imgRectangle24.png', import.meta.url).href;
const imgDaily = new URL('../assets/imgRectangle25.png', import.meta.url).href;
const imgParty = new URL('../assets/imgRectangle26.png', import.meta.url).href;
const imgProduct = new URL('../assets/imgRectangle365.png', import.meta.url).href;
const imgWedding = new URL('../assets/imgRectangle27.png', import.meta.url).href;
const imgTraditional = new URL('../assets/imgRectangle28.png', import.meta.url).href;

const SMALL_CARDS = [
  {
    id: 'office',
    image: imgOffice,
    title: 'Classic Mangalsutra Chain',
    titleStyle: 'bold',
  },
  {
    id: 'festive',
    image: imgDaily,
    title: 'Heritage Temple Necklace Set',
    titleStyle: 'script',
  },
  {
    id: 'party',
    image: imgParty,
    title: 'Royal Kundan Choker',
    titleStyle: 'bold',
  },
  {
    id: 'daily',
    image: imgProduct,
    title: 'Designer Gold Earrings',
    titleStyle: 'serif',
  },
];

const TALL_CARDS = [
  {
    id: 'wedding',
    image: imgWedding,
    title: 'Bridal Gold Bangle Pair',
    titleStyle: 'script-dark',
  },
  {
    id: 'corporate',
    image: imgTraditional,
    title: 'Traditional Haar Set',
    titleStyle: 'script-light',
  },
];

function GridCard({ card, size }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  const isDarkText = card.titleStyle === 'script-dark';

  return (
    <article className={`spc-grid-card spc-grid-card--${size}`}>
      <img alt={card.title} className="spc-grid-card__image" src={card.image} />
      <div className="spc-grid-card__overlay" aria-hidden="true" />

      <div className={`spc-grid-card__content spc-grid-card__content--${card.titleStyle}`}>
        <p className="spc-grid-card__title">{card.title}</p>

        <div className="spc-grid-card__actions">
          <button
            type="button"
            className={`spc-grid-card__btn spc-grid-card__btn--cart${isDarkText ? ' spc-grid-card__btn--cart-dark' : ''}${size === 'tall' ? ' spc-grid-card__btn--cart-wide' : ''}${added ? ' spc-grid-card__btn--added' : ''}`}
            aria-live="polite"
            onClick={handleAddToCart}
          >
            {added ? 'Added!' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default function SingleProductCollectionSection() {
  return (
    <section className="spc-section" aria-label="Single Product Collection">
      <h2 className="spc-section__title">Single Product Collection</h2>
      <p className="spc-section__subtitle">
        Find the perfect piece. Explore our single product collections!
      </p>

      <div className="spc-grid">
        <div className="spc-grid__col spc-grid__col--stack">
          {SMALL_CARDS.slice(0, 2).map((card) => (
            <GridCard key={card.id} card={card} size="small" />
          ))}
        </div>

        <div className="spc-grid__col spc-grid__col--stack">
          {SMALL_CARDS.slice(2, 4).map((card) => (
            <GridCard key={card.id} card={card} size="small" />
          ))}
        </div>

        {TALL_CARDS.map((card) => (
          <GridCard key={card.id} card={card} size="tall" />
        ))}
      </div>
    </section>
  );
}
