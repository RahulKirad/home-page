import { createPortal } from 'react-dom';
import './site-header.css';

const imgLogonew12 = new URL('../assets/imgLogonew12.png', import.meta.url).href;
const imgVector1 = new URL('../assets/imgVector1.png', import.meta.url).href;
const imgGoldenCrownForKingAndQueenAndSuccessOnTransparentBackgroundFreePng1 = new URL(
  '../assets/imgGoldenCrownForKingAndQueenAndSuccessOnTransparentBackgroundFreePng1.png',
  import.meta.url,
).href;

function NavActions() {
  const iconProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: 1.75,
  };

  return (
    <div className="site-header-utilities">
      <button type="button" aria-label="Cart" className="site-header-utility-btn">
        <svg className="size-[22px]" viewBox="0 0 24 24" {...iconProps}>
          <path d="M8 10h8l1.2 10H6.8L8 10z" />
          <path d="M10 10V8.5a2 2 0 0 1 4 0V10" />
        </svg>
      </button>

      <button type="button" aria-label="Wishlist" className="site-header-utility-btn">
        <svg className="size-[22px]" viewBox="0 0 24 24" {...iconProps}>
          <path d="M12 20s-6.5-4.5-6.5-9.2A3.8 3.8 0 0 1 12 7.3a3.8 3.8 0 0 1 6.5 3.5C18.5 15.5 12 20 12 20z" />
        </svg>
      </button>

      <button type="button" aria-label="Profile menu" className="site-header-utility-btn site-header-utility-btn--profile">
        <svg className="size-[24px]" viewBox="0 0 24 24" {...iconProps}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="10" r="2.5" />
          <path d="M7.5 16.5c1.2-2 6.3-2 9 0" />
        </svg>
        <svg className="size-[12px]" viewBox="0 0 12 12" {...iconProps}>
          <path d="M3 4.5 6 7.5 9 4.5" />
        </svg>
      </button>
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="site-header-shell">
      <div className="site-header-topbar">
        <p className="site-header-topbar-text">
          SUBSCRIPTION Plan is <strong>Active Now</strong>
        </p>
        <div className="site-header-lang">
          <span>English</span>
          <img alt="" className="site-header-lang-icon" src={imgVector1} />
        </div>
      </div>

      <div className="site-header-main">
        <a href="/" className="site-header-logo" aria-label="KGPL home">
          <img alt="KGPL" src={imgLogonew12} />
        </a>

        <div className="site-header-search">
          <div aria-hidden="true" className="site-header-search-cap">
            <span className="site-header-search-icon">
              <svg className="size-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20L16.65 16.65" />
              </svg>
            </span>
          </div>
          <label className="site-header-search-field">
            <input
              type="search"
              className="site-header-search-input"
              placeholder="Search by name or image"
              aria-label="Search by name or image"
            />
            <span aria-hidden="true" className="site-header-search-camera">
              <svg className="size-[18px]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.75" viewBox="0 0 24 24">
                <path d="M4 7h3l2-3h6l2 3h3a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z" />
                <circle cx="12" cy="13" r="3.5" />
              </svg>
            </span>
          </label>
        </div>

        <div className="site-header-cta-group">
          <button type="button" className="site-header-btn site-header-btn--outline">
            Custom Order
          </button>
          <a href="#" className="site-header-btn site-header-btn--subscription">
            <img
              alt=""
              aria-hidden="true"
              className="site-header-btn-crown"
              src={imgGoldenCrownForKingAndQueenAndSuccessOnTransparentBackgroundFreePng1}
            />
            Subscription
          </a>
        </div>

        <div aria-hidden="true" className="site-header-main-spacer" />

        <NavActions />
      </div>

      <nav className="site-header-nav-row" aria-label="Primary">
        <span className="site-header-nav-link site-header-nav-link--active">Home</span>
        <a href="#" className="site-header-nav-link">
          Products
        </a>
        <span className="site-header-nav-link">Gallery</span>
        <span className="site-header-nav-link">Blogs</span>
        <span className="site-header-nav-link">Bulk Product</span>
        <span className="site-header-nav-link">More</span>
      </nav>

      <div className="site-header-order-protection">Order protections</div>
    </div>
  );
}

export default function SiteHeader() {
  return createPortal(
    <header className="site-header fixed inset-x-0 top-0 z-50 flex justify-center bg-white">
      <HeaderContent />
    </header>,
    document.body,
  );
}
