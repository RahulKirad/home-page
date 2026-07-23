import './founder-banner.css';

const imgFoundersBanner = new URL('../assets/Founders banner (1).jpg', import.meta.url).href;

export default function FounderBannerSection() {
  return (
    <section className="founder-banner" aria-label="About the Founder" data-node-id="32:147">
      <img
        alt="Dilip Samanta, Founder and Managing Director of Kalkata Jewels"
        className="founder-banner__image"
        src={imgFoundersBanner}
      />

      <div className="founder-banner__content">
        <p className="founder-banner__eyebrow">About the Founder</p>
        <h2 className="founder-banner__name">Dilip Samanta</h2>
        <p className="founder-banner__role">
          Founder &amp; Managing Director, Kalkata Gold Pvt Ltd | Kalkata Jewels
        </p>
        <p className="founder-banner__bio">
          Dilip Samanta is the visionary Founder and Managing Director of Kalkata Jewels, a
          pioneering name in India&apos;s Leading Jewellery manufacturer. With over 25 years of
          experience in business, he brings deep insight, strong leadership, and a practical
          understanding of the jewellery trade. His journey is defined by innovation, hard work,
          and an unwavering commitment to modernizing how gold jewellery is bought and sold across
          India.
        </p>
      </div>
    </section>
  );
}
