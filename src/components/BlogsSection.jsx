import './blogs-section.css';

const imgBlogOne = new URL('../assets/imgRectangle24.png', import.meta.url).href;
const imgBlogTwo = new URL('../assets/imgRectangle27.png', import.meta.url).href;
const imgBlogThree = new URL('../assets/imgRectangle365.png', import.meta.url).href;

const BLOG_POSTS = [
  {
    id: 'navratri-jewellery',
    image: imgBlogOne,
    imageAlt: 'Classic gold necklace and pendant collection',
    category: 'Festivals',
    date: '30 Nov 2024',
    dateTime: '2024-11-30',
    title: 'The Charm of Navratri Jewellery: A KGPL Gold and Diamonds Presentation',
  },
  {
    id: 'wedding-season-gold',
    image: imgBlogTwo,
    imageAlt: 'Traditional gold bangles and bridal jewellery',
    category: 'Festivals',
    date: '18 Oct 2024',
    dateTime: '2024-10-18',
    title: 'Wedding Season Gold Trends: Curated Designs for Every Retail Jeweller',
  },
  {
    id: 'festive-b2b-sourcing',
    image: imgBlogThree,
    imageAlt: 'Designer gold jewellery product showcase',
    category: 'Festivals',
    date: '05 Sep 2024',
    dateTime: '2024-09-05',
    title: 'Festive Inventory Planning: How Retailers Source Certified Gold Jewellery',
  },
];

function BlogCard({ post }) {
  return (
    <article className="blog-card">
      <div className="blog-card__media">
        <img alt={post.imageAlt} className="blog-card__image" src={post.image} />
      </div>

      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span className="blog-card__tag">{post.category}</span>
          <time className="blog-card__date" dateTime={post.dateTime}>
            {post.date}
          </time>
        </div>

        <h3 className="blog-card__title">{post.title}</h3>

        <button type="button" className="blog-card__cta">
          Read More
          <span aria-hidden="true">&gt;</span>
        </button>
      </div>
    </article>
  );
}

export default function BlogsSection() {
  return (
    <section className="blogs-section" aria-label="Blogs">
      <div className="blogs-section__header">
        <h2 className="blogs-section__title">Blogs</h2>
        <button type="button" className="blogs-section__view-all">
          View All
        </button>
      </div>

      <div className="blogs-section__grid">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
