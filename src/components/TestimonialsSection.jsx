import './testimonials-section.css';

const imgTestimonialOne = new URL('../assets/imgRectangle293.png', import.meta.url).href;
const imgTestimonialTwo = new URL('../assets/imgRectangle295.png', import.meta.url).href;
const imgTestimonialThree = new URL('../assets/imgRectangle297.png', import.meta.url).href;

const TESTIMONIALS = [
  {
    id: 'testimonial-1',
    image: imgTestimonialOne,
    imageAlt: 'Ornate gold necklace and earrings collection',
    name: 'Vikas Raut',
    quote:
      'I placed a custom earring order with kalkata jewels, and it tred out absolutely beautiful.',
  },
  {
    id: 'testimonial-2',
    image: imgTestimonialTwo,
    imageAlt: 'Gold beaded necklace and matching earrings',
    name: 'Vikas Raut',
    quote:
      'I placed a custom earring order with kalkata jewels, and it tred out absolutely beautiful.',
  },
  {
    id: 'testimonial-3',
    image: imgTestimonialThree,
    imageAlt: 'Gold ring with diamond encrusted circular design',
    name: 'Vikas Raut',
    quote:
      'I placed a custom earring order with kalkata jewels, and it tred out absolutely beautiful.',
  },
];

function StarRating() {
  return (
    <div className="testimonial-card__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 12 12" fill="none" aria-hidden="true">
          <path
            d="M6 1.2l1.18 2.39 2.64.38-1.91 1.86.45 2.63L6 7.34 3.64 8.46l.45-2.63L2.18 3.97l2.64-.38L6 1.2z"
            fill="#e1b63b"
          />
        </svg>
      ))}
    </div>
  );
}

function VerifiedBadge() {
  return (
    <span className="testimonial-card__verified">
      <svg viewBox="0 0 12 12" fill="none" aria-hidden="true">
        <circle cx="6" cy="6" r="5.25" stroke="#9a9a9a" strokeWidth="1" />
        <path
          d="M4 6.1l1.2 1.2L8.2 4.3"
          stroke="#9a9a9a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1"
        />
      </svg>
      Verified Buyer
    </span>
  );
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <div className="testimonial-card__media">
        <img alt={testimonial.imageAlt} className="testimonial-card__image" src={testimonial.image} />
      </div>

      <div className="testimonial-card__content">
        <StarRating />

        <div className="testimonial-card__reviewer">
          <p className="testimonial-card__name">{testimonial.name}</p>
          <VerifiedBadge />
        </div>

        <p className="testimonial-card__quote">{testimonial.quote}</p>
      </div>
    </article>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section" aria-label="Testimonials">
      <div className="testimonials-section__header">
        <h2 className="testimonials-section__title">Testimonials</h2>
        <button type="button" className="testimonials-section__view-all">
          View All
        </button>
      </div>

      <div className="testimonials-section__grid">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
