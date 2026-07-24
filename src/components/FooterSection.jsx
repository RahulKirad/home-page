import './footer-section.css';

const imgQrCode = new URL('../assets/imgQrCodeForMobileEnglishWikipedia11.png', import.meta.url).href;
const imgGooglePlay = new URL('../assets/google-play-badge.png', import.meta.url).href;
const imgAppStore = new URL('../assets/Screenshot 2026-07-25 at 12.08.44\u202fAM.png', import.meta.url).href;
const imgUpi = new URL('../assets/imgUnifiedPaymentInterfaceUpiLogoPngSeeklogo3330881.png', import.meta.url).href;
const imgBank = new URL('../assets/imgRtgsneft722X3681.png', import.meta.url).href;
const imgMail = new URL('../assets/imgEmailAndMailIconBlackFreePng1.png', import.meta.url).href;

const FOOTER_LINKS = {
  quickLinks: {
    title: 'Quick Links',
    items: ['Gallery', 'Products', 'Subscription', 'Reviews', 'Become a Buyer', 'Become a Seller'],
  },
  customerServices: {
    title: 'Customer Services',
    items: ['Return policy', 'Order status'],
  },
  policies: {
    title: 'Policies',
    items: ['Membership policy', 'Privacy policy', 'Cancellation policy', 'Frequently asked question'],
  },
  aboutUs: {
    title: 'About Us',
    items: ['Our story', 'Blog'],
  },
};

const SOCIAL_LINKS = [
  { id: 'instagram', label: 'Instagram' },
  { id: 'facebook', label: 'Facebook' },
  { id: 'linkedin', label: 'LinkedIn' },
  { id: 'pinterest', label: 'Pinterest' },
];

function SocialIcon({ id }) {
  switch (id) {
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
      );
    case 'facebook':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M14.5 8.5H16.5V5.5H14.5C12.57 5.5 11 7.07 11 9V10.5H9V13.5H11V20.5H14V13.5H16.2L16.5 10.5H14V9C14 8.72 14.22 8.5 14.5 8.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="9" width="3.5" height="11" fill="currentColor" />
          <circle cx="5.75" cy="5.75" r="2.1" fill="currentColor" />
          <path
            d="M10 9H13.2V10.7C13.7 9.7 14.8 9 16.3 9C19.2 9 20 10.8 20 13.6V20H16.5V14.2C16.5 12.8 16.5 11 14.8 11C13.1 11 13.2 12.7 13.2 14.1V20H10V9Z"
            fill="currentColor"
          />
        </svg>
      );
    case 'pinterest':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 4C8.13 4 5 7.02 5 10.85C5 13.72 6.58 16.12 8.95 17.15C8.85 16.45 8.78 15.35 8.98 14.58C9.15 13.95 10.05 10.35 10.05 10.35C10.05 10.35 9.78 9.85 9.78 9.15C9.78 8.05 10.45 7.2 11.28 7.2C11.98 7.2 12.32 7.75 12.32 8.4C12.32 9.12 11.88 10.25 11.65 11.25C11.45 12.12 12.08 12.82 12.92 12.82C14.42 12.82 15.55 11.15 15.55 8.95C15.55 7.05 14.18 5.65 12 5.65C9.58 5.65 8.15 7.35 8.15 9.15C8.15 9.95 8.48 10.82 8.92 11.32C8.98 11.4 8.98 11.48 8.95 11.58C8.88 11.85 8.72 12.55 8.68 12.72C8.62 12.95 8.48 13 8.25 12.9C7.05 12.35 6.35 10.65 6.35 9.08C6.35 6.35 8.45 4 12.05 4H12C15.35 4 17.65 6.25 17.65 8.92C17.65 12.25 15.55 14.85 12.55 14.85C11.45 14.85 10.42 14.28 10.05 13.55C10.05 13.55 9.55 15.45 9.45 15.85C9.25 16.65 8.75 17.65 8.42 18.25C9.22 18.58 10.08 18.75 11 18.75C14.87 18.75 18 15.73 18 11.9C18 8.07 14.87 4 12 4Z"
            fill="currentColor"
          />
        </svg>
      );
    default:
      return null;
  }
}

function FooterLinkColumn({ title, items }) {
  return (
    <div className="site-footer__column">
      <h3 className="site-footer__column-title">{title}</h3>
      <ul className="site-footer__link-list">
        {items.map((item) => (
          <li key={item}>
            <a href="#!" className="site-footer__link">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <svg className="site-footer__seller-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4 7h12v9H4V7zM7 7V5.5A1.5 1.5 0 0 1 8.5 4h3A1.5 1.5 0 0 1 13 5.5V7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path d="M4 10h12" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

function ContactActionIcon({ id }) {
  switch (id) {
    case 'call':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.908.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );
    case 'chat':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      );
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
        </svg>
      );
    default:
      return null;
  }
}

export default function FooterSection() {
  return (
    <footer className="site-footer" aria-label="Site footer">
      <div className="site-footer__main">
        <div className="site-footer__top">
          <div className="site-footer__nav-grid">
            <FooterLinkColumn items={FOOTER_LINKS.quickLinks.items} title={FOOTER_LINKS.quickLinks.title} />
            <FooterLinkColumn items={FOOTER_LINKS.customerServices.items} title={FOOTER_LINKS.customerServices.title} />
            <FooterLinkColumn items={FOOTER_LINKS.policies.items} title={FOOTER_LINKS.policies.title} />
            <FooterLinkColumn items={FOOTER_LINKS.aboutUs.items} title={FOOTER_LINKS.aboutUs.title} />
          </div>

          <div className="site-footer__contact">
            <h3 className="site-footer__column-title">Contact Us</h3>
            <p className="site-footer__brand">Kalkata Jewels</p>
            <p className="site-footer__address">
              Flat No.7B, 3rd Floor, Wardhaman Gold, 487 &amp; 489 Raviwar Peth, Pune 411002, Maharashtra
            </p>

            <div className="site-footer__contact-lines">
              <p>
                <span>CIN:</span> U36910PN2021PTC204074
              </p>
              <p>
                <span>EMAIL:</span>{' '}
                <a href="mailto:business@kalkatajewels.com">business@kalkatajewels.com</a>
              </p>
              <p>
                <span>PHONE:</span> <a href="tel:+918459115517">+91 8459115517</a>
              </p>
            </div>

            <div className="site-footer__contact-actions">
              <div className="site-footer__quick-actions">
                <div className="site-footer__action-item">
                  <button type="button" className="site-footer__action-btn" aria-label="Call us">
                    <ContactActionIcon id="call" />
                  </button>
                  <span>Call</span>
                </div>
                <div className="site-footer__action-item">
                  <button type="button" className="site-footer__action-btn" aria-label="Chat with us">
                    <ContactActionIcon id="chat" />
                  </button>
                  <span>Chat</span>
                </div>
                <div className="site-footer__action-item">
                  <button type="button" className="site-footer__action-btn" aria-label="WhatsApp us">
                    <ContactActionIcon id="whatsapp" />
                  </button>
                  <span>WhatsApp</span>
                </div>
              </div>

              <button type="button" className="site-footer__seller-btn">
                <BriefcaseIcon />
                Find a Seller
              </button>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__app-card">
            <div className="site-footer__app-copy">
              <p className="site-footer__app-title">Download the Kalkata Jewels App</p>
              <p className="site-footer__app-subtitle">Shop &amp; save more on app</p>
            </div>
            <div className="site-footer__store-badges">
              <a href="#!" className="site-footer__store-badge site-footer__store-badge--google" aria-label="Get it on Google Play">
                <img alt="" src={imgGooglePlay} />
              </a>
              <a href="#!" className="site-footer__store-badge site-footer__store-badge--apple" aria-label="Download on the App Store">
                <img alt="" src={imgAppStore} />
              </a>
            </div>
          </div>

          <div className="site-footer__qr-block">
            <img alt="QR code to download the Kalkata Jewels app" className="site-footer__qr" src={imgQrCode} />
            <p className="site-footer__qr-label">Scan to download</p>
          </div>

          <div className="site-footer__extras">
            <div className="site-footer__social-row">
              <span className="site-footer__social-label">Find Us On</span>
              <div className="site-footer__social-list">
                {SOCIAL_LINKS.map((social) => (
                  <a key={social.id} href="#!" className="site-footer__social-link" aria-label={social.label}>
                    <SocialIcon id={social.id} />
                  </a>
                ))}
              </div>
            </div>

            <div className="site-footer__payments">
              <p className="site-footer__payments-title">We accept:</p>
              <div className="site-footer__payment-logos">
                <div className="site-footer__payment-logo site-footer__payment-logo--upi">
                  <img alt="UPI" src={imgUpi} />
                </div>
                <div className="site-footer__payment-logo site-footer__payment-logo--bank">
                  <img alt="Bank NEFT" src={imgBank} />
                </div>
                <div className="site-footer__payment-logo site-footer__payment-logo--mail">
                  <img alt="Email payment" src={imgMail} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer__copyright">
        <p>Copyright © 2024 Kalkata Gold Private Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
