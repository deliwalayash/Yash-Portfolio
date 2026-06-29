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
import { locationPages } from "../lib/location-pages";
import { isSupabaseConfigured } from "../lib/supabase";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";

const services = [
  {
    title: "Google Search Ads",
    description:
      "Search campaign setup for high-intent keywords, clean ad groups, focused ad copy, and enquiries from people actively searching for your service.",
  },
  {
    title: "Google Ads Freelancer",
    description:
      "Direct campaign management from a Google Ads freelancer in India, with practical strategy, budget control, tracking, and weekly optimization.",
  },
  {
    title: "Google Ads Agency Support",
    description:
      "Agency-style Google Ads management for Indian businesses that need planning, setup, reporting, landing page suggestions, and ongoing PPC growth.",
  },
  {
    title: "Performance Max Campaigns",
    description:
      "Performance Max setup and optimization with audience signals, creative guidance, conversion goals, and budget decisions based on lead quality.",
  },
  {
    title: "Lead Generation Campaigns",
    description:
      "Google Ads campaigns built to generate calls, forms, WhatsApp enquiries, and qualified leads for service businesses across India.",
  },
  {
    title: "Conversion Tracking",
    description:
      "Setup for call tracking, form submissions, WhatsApp clicks, and important website actions so every campaign can be improved with real data.",
  },
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
  { value: "India", label: "Google Ads management for businesses across India" },
  { value: "Search", label: "campaigns built around high-intent keywords" },
  { value: "Tracked", label: "calls, forms, WhatsApp clicks, and lead actions" },
];

const steps = [
  "Audit your Google Ads account, website, keywords, landing page, and conversion tracking.",
  "Build a focused PPC structure around Search Ads, Performance Max, location targeting, and lead quality.",
  "Track calls, forms, WhatsApp clicks, and optimize campaigns every week using real conversion data.",
];

export const faqItems = [
  {
    question: "Who is a good Google Ads expert in India for lead generation?",
    answer:
      "Yash Deliwala helps Indian businesses run Google Ads campaigns for calls, forms, WhatsApp enquiries, and qualified leads with clear tracking and weekly optimization.",
  },
  {
    question: "Do you work as a Google Ads freelancer or agency?",
    answer:
      "I work as a Google Ads freelancer with an agency-style process, including campaign planning, setup, conversion tracking, optimization, and reporting.",
  },
  {
    question: "Which Google Ads services do you provide?",
    answer:
      "Services include Google Search Ads, PPC campaign management, Performance Max campaigns, lead generation campaigns, landing page suggestions, and conversion tracking setup.",
  },
  {
    question: "How much does Google Ads management cost in India?",
    answer:
      "Google Ads management starts from Rs. 15,000 per month, with a recommended minimum ad spend of Rs. 15,000 per month paid directly to Google.",
  },
  {
    question: "Can Google Search Ads work for local and India-wide businesses?",
    answer:
      "Yes. Google Search Ads can target a single city, selected locations, or India-wide searches depending on your service area, budget, and lead quality goals.",
  },
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
      <AdsFooter />
    </div>
  );
}

export function AdsFooter({ locationLabel = "Surat, Gujarat" }) {
  return (
    <footer className="ads-footer">
      <div className="ads-footer__brand">
        <strong>Yash Deliwala - Google Ads Expert</strong>
        <span>{locationLabel}</span>
      </div>

      <nav className="ads-footer__links" aria-label="Footer SEO links">
        <a href="/">Google Ads Expert in India</a>
        <a href="/blogs">Google Ads Blog</a>
        {locationPages.map((page) => (
          <a href={`/${page.slug}`} key={page.slug}>
            Google Ads Expert in {page.city}
          </a>
        ))}
      </nav>
    </footer>
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
              Google Ads Expert in India
            </p>
            <h1>Google Ads Expert in India for Search Ads, Leads and Sales.</h1>
            <p className="ads-hero__text">
              Hire Yash Deliwala for Google Ads management, PPC campaigns,
              Search Ads, Performance Max, lead generation, and conversion
              tracking for businesses across India.
            </p>

            <div className="ads-logo-panel">
              <img src="/clients/logo.png" alt="Yash Deliwala Google Ads Expert logo" />
              <div>
                <strong>Yash Deliwala</strong>
                <span>Google Ads Freelancer & PPC Consultant</span>
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
            <img src="/yash-google-ads-photo.png" alt="Yash Deliwala, Google Ads expert in India" />
          </div>
        </section>

        <section className="ads-section ads-seo-copy">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              Google Ads Freelancer & Agency Services
            </p>
            <h2>India-focused Google Ads management for businesses that need real enquiries.</h2>
          </div>

          <div className="ads-seo-copy__grid">
            <div>
              <h3>Google Ads Freelancer in India</h3>
              <p>
                Work directly with a Google Ads freelancer who manages keyword
                research, campaign setup, ad copy, budget control, and ongoing
                optimization without confusing layers.
              </p>
            </div>
            <div>
              <h3>Google Ads Agency Style Process</h3>
              <p>
                Get a structured agency-style workflow with account audit,
                conversion tracking, search campaign planning, Performance Max
                management, and clear reporting.
              </p>
            </div>
            <div>
              <h3>Google Search Ads for Leads</h3>
              <p>
                Target people searching for your service on Google and convert
                that traffic into calls, forms, WhatsApp enquiries, and sales
                conversations.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="ads-section">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaSearchDollar />
              Google Ads Management Services
            </p>
            <h2>Search Ads, PPC management, tracking, and lead generation in one place.</h2>
          </div>

          <div className="ads-service-grid">
            {services.map((service) => (
              <div className="ads-card" key={service.title}>
                <FaChartLine />
                <h3>{service.title}</h3>
                <p>{service.description}</p>
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
            <h2>Clear Google Ads management pricing before we start.</h2>
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
            <h2>Watch how Google Search Ads can help generate better leads.</h2>
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
            <h2>Trusted by businesses that want better visibility, leads, and PPC results.</h2>
          </div>

          <div className="ads-client-grid">
            {clients.map((client) => (
              <div className="ads-client-card" key={client.name} aria-label={client.name}>
                <div className="ads-client-card__logo">
                  <img src={client.image} alt={`${client.name} client logo`} />
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
            <h2>A practical PPC process for Search Ads, tracking, and weekly optimization.</h2>
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

        <section id="faq" className="ads-section ads-faq">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              Google Ads FAQ
            </p>
            <h2>Questions businesses ask before hiring a Google Ads expert in India.</h2>
          </div>

          <div className="ads-faq__list">
            {faqItems.map((item) => (
              <details className="ads-faq__item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
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
            <h2>Need better Google Ads results in India?</h2>
            <p>
              Share your business, target location, monthly budget, and current
              ad goal. I will help you understand what to fix first and how to
              run your Google Ads more cleanly.
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

      <AdsFooter />
    </div>
  );
}

export function LocationSeoPage({ page }) {
  const industryText = page.industries.join(", ");

  return (
    <div className="ads-site">
      <FloatingContactButtons />
      <AdsHeader variant="inner" />

      <main className="location-page">
        <section className="location-hero">
          <div>
            <p className="ads-eyebrow">
              <FaMapMarkerAlt />
              Google Ads Expert in {page.city}
            </p>
            <h1>Google Ads Expert in {page.city} for Search Ads, Leads and Calls.</h1>
            <p>
              Hire Yash Deliwala for Google Ads management in {page.city},
              including Search Ads, PPC campaign setup, Performance Max,
              conversion tracking, and weekly optimization for better enquiries.
            </p>
            <div className="ads-actions">
              <a className="ads-button ads-button--primary" href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
                <FaWhatsapp />
                WhatsApp Yash
              </a>
              <a className="ads-button ads-button--secondary" href="#contact">
                Book Rs. 1000 Consultation
              </a>
            </div>
          </div>

          <div className="location-hero__card">
            <img src="/clients/logo.png" alt={`Yash Deliwala Google Ads expert in ${page.city}`} />
            <strong>Yash Deliwala</strong>
            <span>Google Ads Freelancer & PPC Consultant</span>
          </div>
        </section>

        <section className="ads-section location-section">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              PPC Services in {page.city}
            </p>
            <h2>Google Ads management for {page.city} businesses that need measurable leads.</h2>
          </div>

          <div className="ads-seo-copy__grid">
            <div>
              <h3>Google Search Ads in {page.city}</h3>
              <p>
                Build campaigns around high-intent keywords, service searches,
                location terms, and conversion-focused ad copy for people
                searching in and around {page.city}.
              </p>
            </div>
            <div>
              <h3>Google Ads Freelancer in {page.city}</h3>
              <p>
                Work directly with a Google Ads freelancer for campaign setup,
                budget planning, tracking, negative keywords, and ongoing PPC
                improvement.
              </p>
            </div>
            <div>
              <h3>Lead Generation Campaigns</h3>
              <p>
                Generate calls, WhatsApp enquiries, form leads, and sales
                conversations for {industryText} in {page.city}.
              </p>
            </div>
          </div>
        </section>

        <section className="ads-section location-section location-section--soft">
          <div className="location-content">
            <p className="ads-eyebrow">
              <FaSearchDollar />
              Local Campaign Strategy
            </p>
            <h2>Why {page.city} campaigns need proper PPC structure.</h2>
            <p>{page.angle}</p>
            <p>
              The goal is not just more clicks. The goal is to match search
              intent with the right landing page, track every important action,
              and improve the campaigns based on actual lead quality.
            </p>
          </div>
        </section>

        <section className="ads-section ads-faq">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              {page.city} Google Ads FAQ
            </p>
            <h2>Questions before hiring a Google Ads expert in {page.city}.</h2>
          </div>

          <div className="ads-faq__list">
            <details className="ads-faq__item">
              <summary>Do you provide Google Ads management in {page.city}?</summary>
              <p>
                Yes. I provide Google Ads management for businesses in {page.city},
                including campaign setup, Search Ads, Performance Max, conversion
                tracking, and weekly optimization.
              </p>
            </details>
            <details className="ads-faq__item">
              <summary>Can you work as a Google Ads freelancer for {page.city} businesses?</summary>
              <p>
                Yes. I work as a Google Ads freelancer and PPC consultant for
                businesses that want direct support without a large agency process.
              </p>
            </details>
            <details className="ads-faq__item">
              <summary>What is the starting price for Google Ads management?</summary>
              <p>
                Google Ads management starts from Rs. 15,000 per month. The
                recommended minimum ad spend is Rs. 15,000 per month, paid
                directly to Google.
              </p>
            </details>
          </div>
        </section>

        <section id="contact" className="ads-contact">
          <div className="ads-contact__copy">
            <p className="ads-eyebrow">
              <FaPhoneAlt />
              Google Ads Consultation in {page.city}
            </p>
            <h2>Want better Google Ads leads in {page.city}?</h2>
            <p>
              Share your business, service area, budget, and current campaign
              goal. I will help you understand what needs to be fixed first.
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
            <textarea name="message" required rows={5} placeholder={`Tell me about your ${page.city} Google Ads goal`} />
            <button type="submit">Send Enquiry</button>
          </form>
        </section>
      </main>

      <AdsFooter locationLabel={`${page.city}, ${page.state}`} />
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
