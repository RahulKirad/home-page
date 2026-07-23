import './home-page-mobile-blocks.css';

const imgRectangle272 = new URL('../assets/imgRectangle272.png', import.meta.url).href;
const videoGold9k = new URL('../assets/PixVerse_V6_Image_Text_540P_A_luxury_macro_pro (1).mp4', import.meta.url).href;
const videoGold18k = new URL('../assets/hailuo-2_3_A_luxury_macro_product_film_featuring_a_premium_gold_Earrings_piece_that_i_gave_-0.mp4', import.meta.url).href;
const videoGold20k = new URL('../assets/PixVerse_V6_Image_Text_540P_A_luxury_macro_pro (2) (1).mp4', import.meta.url).href;
const videoGoldStandard = new URL('../assets/PixVerse_V6_Image_Text_540P_A_luxury_macro_pro.mp4', import.meta.url).href;

const GOLD_CARDS = [
  { id: '9k', label: '9K Gold', video: videoGold9k },
  { id: '18k', label: '18K Gold', video: videoGold18k },
  { id: '20k', label: '20K Gold', video: videoGold20k },
  { id: '22k', label: '22K Gold', video: videoGoldStandard },
];

function GoldCardVideo({ src, label }) {
  return (
    <article className="mobile-gold-card">
      <div className="mobile-gold-card__media">
        <video autoPlay loop muted playsInline>
          <source src={src} type="video/mp4" />
        </video>
      </div>
      <p className="mobile-gold-card__label">{label}</p>
    </article>
  );
}

export default function HomePageMobileBlocks() {
  return (
    <div className="home-page-mobile-blocks">
      <section className="mobile-gold-section" aria-label="Gold purity collection">
        <h2 className="mobile-section-title">Shop Gold by Purity</h2>
        <div className="mobile-gold-grid">
          {GOLD_CARDS.map((card) => (
            <GoldCardVideo key={card.id} label={card.label} src={card.video} />
          ))}
        </div>
      </section>

      <section className="mobile-about-section" aria-label="About Kalkata Jewels">
        <div className="mobile-about-section__image">
          <img alt="Kalkata Jewels marketplace" src={imgRectangle272} />
        </div>
        <div className="mobile-about-section__content">
          <h2 className="mobile-about-section__title">
            Kalkata Jewels – India&apos;s leading gold jewellery B2B ecommerce Marketplace for
            Retailers
          </h2>
          <p className="mobile-about-section__text">
            Kalkata Jewels is India&apos;s leading B2B gold jewellery eCommerce Marketplace that
            connects manufacturers to retailers across India. With 250+ verified sellers, 100%
            certified designs, and the lowest wastage rates, retailers can source bangles, necklaces,
            mangalsutras, chains, and every category of gold jewellery with complete trust and
            transparency.
          </p>
        </div>
      </section>

      <footer className="mobile-footer">
        <p className="mobile-footer__brand">Kalkata Jewels</p>
        <p className="mobile-footer__copy">India&apos;s 1st B2B Gold Jewellery sourcing network</p>
      </footer>
    </div>
  );
}
