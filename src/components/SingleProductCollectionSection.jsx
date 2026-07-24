import { useCallback, useEffect, useMemo, useState } from 'react';
import './single-product-collection.css';

const imgOffice = new URL('../assets/imgRectangle24.png', import.meta.url).href;
const imgDaily = new URL('../assets/imgRectangle25.png', import.meta.url).href;
const imgParty = new URL('../assets/imgRectangle26.png', import.meta.url).href;
const imgProduct = new URL('../assets/imgRectangle365.png', import.meta.url).href;
const imgWedding = new URL('../assets/imgRectangle27.png', import.meta.url).href;
const imgTraditional = new URL('../assets/imgRectangle28.png', import.meta.url).href;
const imgShowcase = new URL('../assets/imgRectangle272.png', import.meta.url).href;

const SLIDE_INTERVAL_MS = 4200;

const SMALL_CARDS = [
  {
    id: 'office',
    images: [imgOffice, imgProduct, imgParty],
    title: 'Classic Mangalsutra Chain',
    titleStyle: 'bold',
  },
  {
    id: 'festive',
    images: [imgDaily, imgWedding, imgShowcase],
    title: 'Heritage Temple Necklace Set',
    titleStyle: 'script',
  },
  {
    id: 'party',
    images: [imgParty, imgShowcase, imgTraditional],
    title: 'Royal Kundan Choker',
    titleStyle: 'bold',
  },
  {
    id: 'daily',
    images: [imgProduct, imgDaily, imgOffice],
    title: 'Designer Gold Earrings',
    titleStyle: 'serif',
  },
];

const TALL_CARDS = [
  {
    id: 'wedding',
    images: [imgWedding, imgTraditional, imgParty],
    title: 'Bridal Gold Bangle Pair',
    titleStyle: 'script-dark',
  },
  {
    id: 'corporate',
    images: [imgTraditional, imgWedding, imgShowcase],
    title: 'Traditional Haar Set',
    titleStyle: 'script-light',
  },
];

const ALL_CARDS = [...SMALL_CARDS, ...TALL_CARDS];

function pickRandomId(cards) {
  return cards[Math.floor(Math.random() * cards.length)].id;
}

function createInitialIndices() {
  return ALL_CARDS.reduce((accumulator, card) => {
    accumulator[card.id] = 0;
    return accumulator;
  }, {});
}

function GridCard({ card, size, slideIndex, isAutoActive, onHoverSlide }) {
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article
      className={`spc-grid-card spc-grid-card--${size}${isAutoActive ? ' spc-grid-card--auto-active' : ''}`}
      onMouseEnter={() => onHoverSlide(card.id)}
    >
      <div className="spc-grid-card__media">
        <div
          className="spc-grid-card__track"
          style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        >
          {card.images.map((image, index) => (
            <img
              key={`${card.id}-${index}`}
              alt={`${card.title} view ${index + 1}`}
              className="spc-grid-card__image"
              src={image}
            />
          ))}
        </div>
      </div>

      <div className="spc-grid-card__overlay" aria-hidden="true" />

      <div className={`spc-grid-card__content spc-grid-card__content--${card.titleStyle}`}>
        <p className="spc-grid-card__title">{card.title}</p>

        <div className="spc-grid-card__actions">
          <button
            type="button"
            className={`spc-grid-card__cart${added ? ' spc-grid-card__cart--added' : ''}`}
            aria-live="polite"
            onClick={handleAddToCart}
          >
            {added ? (
              <>
                <svg className="spc-grid-card__cart-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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
                <svg className="spc-grid-card__cart-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
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

export default function SingleProductCollectionSection() {
  const cardMap = useMemo(
    () =>
      ALL_CARDS.reduce((accumulator, card) => {
        accumulator[card.id] = card;
        return accumulator;
      }, {}),
    [],
  );

  const [slideIndices, setSlideIndices] = useState(createInitialIndices);
  const [autoActiveIds, setAutoActiveIds] = useState(() => ({
    smallId: pickRandomId(SMALL_CARDS),
    tallId: pickRandomId(TALL_CARDS),
  }));

  const advanceCard = useCallback((cardId) => {
    const card = cardMap[cardId];
    if (!card) return;

    setSlideIndices((previous) => ({
      ...previous,
      [cardId]: (previous[cardId] + 1) % card.images.length,
    }));
  }, [cardMap]);

  const handleHoverSlide = useCallback(
    (cardId) => {
      advanceCard(cardId);
    },
    [advanceCard],
  );

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      const smallId = pickRandomId(SMALL_CARDS);
      const tallId = pickRandomId(TALL_CARDS);

      setAutoActiveIds({ smallId, tallId });
      setSlideIndices((previous) => ({
        ...previous,
        [smallId]: (previous[smallId] + 1) % cardMap[smallId].images.length,
        [tallId]: (previous[tallId] + 1) % cardMap[tallId].images.length,
      }));
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(intervalId);
  }, [cardMap]);

  const isAutoActive = (cardId) =>
    cardId === autoActiveIds.smallId || cardId === autoActiveIds.tallId;

  return (
    <section className="spc-section" aria-label="Single Product Collection">
      <div className="spc-section__header">
        <h2 className="spc-section__title">Single Product Collection</h2>
        <button type="button" className="spc-section__view-all">
          View All
        </button>
      </div>
      <p className="spc-section__subtitle">
        Find the perfect piece. Explore our single product collections!
      </p>

      <div className="spc-grid">
        <div className="spc-grid__col spc-grid__col--stack">
          {SMALL_CARDS.slice(0, 2).map((card) => (
            <GridCard
              key={card.id}
              card={card}
              isAutoActive={isAutoActive(card.id)}
              onHoverSlide={handleHoverSlide}
              size="small"
              slideIndex={slideIndices[card.id]}
            />
          ))}
        </div>

        <div className="spc-grid__col spc-grid__col--stack">
          {SMALL_CARDS.slice(2, 4).map((card) => (
            <GridCard
              key={card.id}
              card={card}
              isAutoActive={isAutoActive(card.id)}
              onHoverSlide={handleHoverSlide}
              size="small"
              slideIndex={slideIndices[card.id]}
            />
          ))}
        </div>

        {TALL_CARDS.map((card) => (
          <GridCard
            key={card.id}
            card={card}
            isAutoActive={isAutoActive(card.id)}
            onHoverSlide={handleHoverSlide}
            size="tall"
            slideIndex={slideIndices[card.id]}
          />
        ))}
      </div>
    </section>
  );
}
