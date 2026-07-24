import { useState } from 'react';
import './grow-your-business.css';

const PANELS = [
  {
    id: 'jewellers',
    eyebrow: 'For Retailers',
    title: 'Jewellers',
    ctaLabel: 'Become a Jeweller',
    paragraphs: [
      'Join Kalkata Jewels – India\'s B2B Gold Jewellery Sourcing Network and grow your retail business with ease.',
      'Get access to 250+ verified manufacturers, lowest wastage rates, and 100% certified gold jewellery designs.',
      'Explore, compare, and buy directly from trusted sellers with complete transparency and doorstep delivery.',
      'Save time, increase profits, and expand your inventory digitally with India\'s most trusted B2B jewellery platform.',
    ],
  },
  {
    id: 'manufacturer',
    eyebrow: 'For Manufacturers',
    title: 'Manufacturer',
    ctaLabel: 'Become a Manufacturer',
    paragraphs: [
      'Join Kalkata Jewels – India\'s B2B Gold Jewellery Marketplace and connect directly with retailers across the country.',
      'Upload your designs, manage inventory, and showcase bangles, necklaces, mangalsutras, chains, and complete jewellery collections.',
      'Benefit from transparent dealings, on-time payments, and a platform built for manufacturers ready to grow digitally.',
      'Expand your reach, increase order volume, and build long-term retailer partnerships on India\'s most trusted B2B gold jewellery network.',
    ],
  },
];

function ChevronIcon({ isOpen }) {
  return (
    <svg
      className={`grow-business-card__chevron-icon${isOpen ? ' grow-business-card__chevron-icon--open' : ''}`}
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 8l5 5 5-5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function GrowBusinessCard({ panel, isOpen, onToggle }) {
  const panelId = `grow-business-panel-${panel.id}`;
  const headerId = `grow-business-header-${panel.id}`;

  return (
    <article className={`grow-business-card${isOpen ? ' grow-business-card--open' : ''}`}>
      <button
        type="button"
        id={headerId}
        className="grow-business-card__header"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={onToggle}
      >
        <div className="grow-business-card__titles">
          <span className="grow-business-card__eyebrow">{panel.eyebrow}</span>
          <span className="grow-business-card__title">{panel.title}</span>
        </div>

        <span className="grow-business-card__chevron">
          <ChevronIcon isOpen={isOpen} />
        </span>
      </button>

      <div
        id={panelId}
        className="grow-business-card__body-wrap"
        role="region"
        aria-labelledby={headerId}
        aria-hidden={!isOpen}
      >
        <div className="grow-business-card__body">
          <div className="grow-business-card__divider" aria-hidden="true" />

          <div className="grow-business-card__copy">
            {panel.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <button type="button" className="grow-business-card__cta">
            {panel.ctaLabel}
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default function GrowYourBusinessSection() {
  const [openPanelId, setOpenPanelId] = useState(null);

  const handleToggle = (panelId) => {
    setOpenPanelId((current) => (current === panelId ? null : panelId));
  };

  return (
    <section className="grow-business" aria-label="Grow Your Business">
      <div className="grow-business__panel">
        <header className="grow-business__header">
          <h2 className="grow-business__title">Grow Your Business</h2>
          <p className="grow-business__subtitle">
            Grow your business with our premium gold products and exceptional customer service
          </p>
        </header>

        <div className="grow-business__cards">
          {PANELS.map((panel) => (
            <GrowBusinessCard
              key={panel.id}
              isOpen={openPanelId === panel.id}
              panel={panel}
              onToggle={() => handleToggle(panel.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
