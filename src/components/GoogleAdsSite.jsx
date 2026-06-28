import {
  FaChartLine,
  FaGoogle,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaSearchDollar,
  FaWhatsapp,
} from "react-icons/fa";
import AdsHeader from "./AdsHeader";
import FloatingContactButtons from "./FloatingContactButtons";
import { isSupabaseConfigured } from "../lib/supabase";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";

const services = [
  "Google Search Ads",
  "Performance Max",
  "Local Lead Campaigns",
  "Google Business Profile Growth",
  "Landing Page Suggestions",
  "Conversion Tracking",
];

const clients = [
  {
    name: "Dr. Aditya",
    image: "/clients/Dr.-Aditya-Logo-04-Red.png",
  },
  {
    name: "Tattvamassi, Surat",
    image: "/clients/images (1).jfif",
  },
  {
    name: "Marina Grand Hospital",
    image: "/clients/logo-marina-new518.webp",
  },
  {
    name: "Ved",
    image: "/clients/logo-ved.webp",
  },
];

const results = [
  { value: "Local", label: "campaigns for calls, leads, and store visits" },
  { value: "Clear", label: "setup, tracking, and reporting without confusion" },
  { value: "Focused", label: "ads built around your service and city" },
];

const steps = [
  "Audit your Google Ads account, website, and Google Business Profile.",
  "Build a simple campaign structure around high-intent searches.",
  "Track calls, form leads, WhatsApp clicks, and improve every week.",
];

export const formatDate = (value) =>
  value
    ? new Intl.DateTimeFormat("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      }).format(new Date(value))
    : "";

export function BlogVisual({ blog, variant = "card" }) {
  if (blog.image_url) {
    return <img src={blog.image_url} alt="" />;
  }

  return (
    <div className={`blog-template blog-template--${variant}`}>
      <div className="blog-template__media">
        <img src="/yash-google-ads-photo.png" alt="" />
      </div>
      <div className="blog-template__overlay">
        <span>Google Ads</span>
        <strong>Yash Deliwala</strong>
      </div>
    </div>
  );
}

export function BlogContent({ content }) {
  const lines = content.split("\n").map((line) => line.trim()).filter(Boolean);

  return (
    <div className="blog-content">
      {lines.map((line, index) => {
        if (line.startsWith("\u2705") || line.startsWith("âœ…")) {
          return (
            <p className="blog-content__check" key={index}>
              {line.replace(/^(\u2705|âœ…)\s*/, "")}
            </p>
          );
        }

        if (index === 0) {
          return (
            <p className="blog-content__lead" key={index}>
              {line}
            </p>
          );
        }

        const isHeading =
          line.length < 90 &&
          !line.endsWith(".") &&
          !line.endsWith(",") &&
          !line.includes("?") &&
          index !== 0;

        if (isHeading) {
          return <h2 key={index}>{line}</h2>;
        }

        return <p key={index}>{line}</p>;
      })}
    </div>
  );
}

export function BlogCard({ blog }) {
  return (
    <a className="blog-card" href={`/blog/${blog.slug}`}>
      <BlogVisual blog={blog} />
      <div>
        <span>{formatDate(blog.created_at)}</span>
        <h2>{blog.title}</h2>
        <p>{blog.excerpt}</p>
        <strong>Read blog</strong>
      </div>
    </a>
  );
}

export function SiteShell({ children }) {
  return (
    <div className="ads-site">
      <AdsHeader variant="inner" />
      {children}
      <footer className="ads-footer">
        <span>Yash Deliwala - Google Ads Expert</span>
        <span>Surat, Gujarat</span>
      </footer>
    </div>
  );
}

export function ConfigNotice() {
  return (
    <SiteShell>
      <main className="blog-page">
        <section className="blog-hero">
          <p className="ads-eyebrow">Setup needed</p>
          <h1>Supabase keys are missing.</h1>
          <p>
            Add Supabase URL and anon key in `.env`. Next.js can read your
            current Vite names locally, and deployment can use
            `NEXT_PUBLIC_SUPABASE_URL` plus `NEXT_PUBLIC_SUPABASE_ANON_KEY`.
          </p>
        </section>
      </main>
    </SiteShell>
  );
}

export function GoogleAdsLanding({ blogs = [] }) {
  return (
    <div className="ads-site">
      <FloatingContactButtons />
      <AdsHeader />

      <main>
        <section id="home" className="ads-hero">
          <div className="ads-hero__content">
            <p className="ads-eyebrow">
              <FaGoogle />
              Google Ads Specialist in Surat
            </p>
            <h1>Get more calls and leads from Google Ads.</h1>
            <p className="ads-hero__text">
              I help service businesses run simple, clean, conversion-focused
              Google Ads campaigns with proper tracking, keyword intent, and
              weekly optimization.
            </p>

            <div className="ads-logo-panel">
              <img src="/clients/logo.png" alt="Yash Deliwala Google Ads Expert logo" />
              <div>
                <strong>Yash Deliwala</strong>
                <span>Google Ads Expert</span>
              </div>
            </div>

            <div className="ads-actions">
              <a className="ads-button ads-button--primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                WhatsApp Yash
              </a>
              <a className="ads-button ads-button--secondary" href="#contact">
                Book Rs. 1000 Consultation
              </a>
            </div>

            <div className="ads-hero__proof">
              {results.map((item) => (
                <div key={item.value}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="ads-hero__media" aria-label="Yash Deliwala Google Ads Expert">
            <img src="/yash-google-ads-photo.png" alt="Yash Deliwala, Google Ads expert" />
          </div>
        </section>

        <section id="services" className="ads-section">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaSearchDollar />
              Google Ads Services
            </p>
            <h2>Everything needed to turn searches into real enquiries.</h2>
          </div>

          <div className="ads-service-grid">
            {services.map((service) => (
              <div className="ads-card" key={service}>
                <FaChartLine />
                <h3>{service}</h3>
                <p>
                  Practical setup and optimization focused on useful traffic,
                  better leads, and less wasted spend.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="ads-section ads-pricing">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaSearchDollar />
              Pricing
            </p>
            <h2>Clear Google Ads pricing before we start.</h2>
          </div>

          <div className="ads-pricing-grid">
            <div className="ads-pricing-card">
              <span>Campaign management</span>
              <strong>Starting from Rs. 15,000/month</strong>
              <p>Monthly charge for planning, setup, optimization, tracking, and campaign reporting.</p>
            </div>
            <div className="ads-pricing-card">
              <span>Minimum ad spend</span>
              <strong>Rs. 15,000/month</strong>
              <p>Recommended minimum Google Ads budget paid directly for running campaigns.</p>
            </div>
            <div className="ads-pricing-card ads-pricing-card--highlight">
              <span>Consultation</span>
              <strong>Rs. 1000</strong>
              <p>One-time consultation to review your business, campaign goals, and next steps.</p>
            </div>
          </div>
        </section>

        <section id="video" className="ads-section ads-video-section">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              Google Ads Video
            </p>
            <h2>Watch how Google Ads can help generate better leads.</h2>
          </div>

          <div className="ads-video-frame">
            <iframe
              src="https://www.youtube.com/embed/KdnXToNgYKA"
              title="Google Ads video by Yash Deliwala"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </section>

        <section id="clients" className="ads-section ads-clients">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              Client Work
            </p>
            <h2>Trusted by businesses that want better local visibility.</h2>
          </div>

          <div className="ads-client-grid">
            {clients.map((client) => (
              <div className="ads-client-card" key={client.name} aria-label={client.name}>
                <div className="ads-client-card__logo">
                  <img src={client.image} alt="" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="process" className="ads-section ads-section--blue">
          <div className="ads-section__heading">
            <p className="ads-eyebrow ads-eyebrow--light">
              <FaMapMarkerAlt />
              Simple Working Process
            </p>
            <h2>Clear strategy first. Better campaign decisions after that.</h2>
          </div>

          <div className="ads-process">
            {steps.map((step, index) => (
              <div className="ads-process__item" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{step}</p>
              </div>
            ))}
          </div>
        </section>

        <HomeBlogsSection blogs={blogs} />

        <section id="contact" className="ads-contact">
          <div className="ads-contact__copy">
            <p className="ads-eyebrow">
              <FaPhoneAlt />
              Google Ads Consultation
            </p>
            <h2>Need better Google Ads results?</h2>
            <p>
              Share your business, location, and current ad goal. I will help
              you understand what to fix first and how to run your ads more
              cleanly.
            </p>
            <div className="ads-consultation-price">
              <span>Consultation charge</span>
              <strong>Rs. 1000</strong>
            </div>
            <div className="ads-contact__quick">
              <a href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
              <a href="mailto:yashdeliwala10@gmail.com">yashdeliwala10@gmail.com</a>
            </div>
          </div>

          <form className="ads-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="2c6efe99-dc5c-4acc-b523-656523121182" />
            <input type="text" name="name" required placeholder="Your name" />
            <input type="email" name="email" required placeholder="Email address" />
            <input type="tel" name="phone" placeholder="Phone or WhatsApp number" />
            <textarea name="message" required rows={5} placeholder="Tell me about your business and Google Ads goal" />
            <button type="submit">Send Enquiry</button>
          </form>
        </section>
      </main>

      <footer className="ads-footer">
        <span>Yash Deliwala - Google Ads Expert</span>
        <span>Surat, Gujarat</span>
      </footer>
    </div>
  );
}

function HomeBlogsSection({ blogs }) {
  if (!isSupabaseConfigured || blogs.length === 0) return null;

  return (
    <section id="blog" className="ads-section ads-home-blog">
      <div className="ads-section__heading">
        <p className="ads-eyebrow">
          <FaGoogle />
          Latest Blogs
        </p>
        <h2>Google Ads insights for business owners.</h2>
      </div>

      <div className="blog-grid blog-grid--home">
        {blogs.map((blog) => (
          <BlogCard blog={blog} key={blog.id} />
        ))}
      </div>

      <div className="ads-home-blog__action">
        <a className="ads-button ads-button--secondary" href="/blogs">View All Blogs</a>
      </div>
    </section>
  );
}
