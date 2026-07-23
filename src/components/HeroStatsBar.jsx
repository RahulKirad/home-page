import './hero-stats-bar.css';

const STATS_ITEMS = [
  { id: 'tagline', text: "India's 1st B2B Gold Jewellery sourcing network" },
  { id: 'categories', highlight: '50K+', label: 'CATEGORIES' },
  { id: 'manufacturer', highlight: '250+', label: 'MANUFACTURER' },
  { id: 'retailers', highlight: '7K+', label: 'RETAILERS' },
  { id: 'designs', highlight: '30K+', label: 'DESIGNS' },
];

function StatItem({ item }) {
  if (item.text) {
    return <span className="hero-stats-bar__item hero-stats-bar__item--tagline">{item.text}</span>;
  }

  return (
    <span className="hero-stats-bar__item">
      <span className="hero-stats-bar__highlight">{item.highlight}</span>
      <span>{` ${item.label}`}</span>
    </span>
  );
}

function StatGroup() {
  return (
    <div className="hero-stats-bar__group">
      {STATS_ITEMS.map((item) => (
        <StatItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default function HeroStatsBar({ className = '' }) {
  return (
    <div className={`hero-stats-bar ${className}`.trim()} data-node-id="38:99">
      <div className="hero-stats-bar__track" aria-hidden="true">
        <StatGroup />
        <StatGroup />
      </div>

      <p className="hero-stats-bar__sr-only">
        India&apos;s 1st B2B Gold Jewellery sourcing network. 50K+ categories. 250+ manufacturers.
        7K+ retailers. 30K+ designs.
      </p>
    </div>
  );
}
