"use client";

import {
  FaArrowRight,
  FaBookOpen,
  FaBullhorn,
  FaChartLine,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaGoogle,
  FaHandshake,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaPercent,
  FaPhoneAlt,
  FaQuestionCircle,
  FaQuoteLeft,
  FaRocket,
  FaSearchDollar,
  FaShieldAlt,
  FaStar,
  FaStore,
  FaTools,
  FaUserCheck,
  FaWhatsapp,
} from "react-icons/fa";
import AdsHeader from "./AdsHeader";
import { AdsFooter, BlogCard, clients } from "./GoogleAdsSite";
import FloatingContactButtons from "./FloatingContactButtons";
import GoogleAdsDashboards from "./GoogleAdsDashboards";
import { PHONE_NUMBER, WHATSAPP_LINK } from "../lib/site-config";
import { isSupabaseConfigured } from "../lib/supabase";

export default function GoogleAdsAgencyIndia({ blogs = [] }) {
  const painPoints = [
    {
      title: "Wasted Budget on Broad Keywords",
      description:
        "Paying for clicks from casual browsers searching for free info instead of high-intent buyers ready to purchase your service.",
      icon: <FaExclamationTriangle className="text-amber-500" />,
    },
    {
      title: "Zero Qualified Leads & Low ROI",
      description:
        "Receiving phone calls for services you don't offer or fake form leads because conversion tracking and negative keywords are missing.",
      icon: <FaPercent className="text-red-500" />,
    },
    {
      title: "No Transparency from Agencies",
      description:
        "Getting passed around junior account managers, receiving confusing PDFs, and having zero ownership of your own Google Ads account.",
      icon: <FaShieldAlt className="text-blue-500" />,
    },
  ];

  const services = [
    {
      title: "Google Search Campaigns",
      description:
        "High-intent keyword targeting that connects your business with buyers searching for your exact service on Google in Surat & across India.",
      badge: "High Intent",
    },
    {
      title: "Performance Max (PMax)",
      description:
        "Leverage Google's AI across Search, YouTube, Display, Gmail, Maps, and Discover with high-converting creative assets and signal controls.",
      badge: "AI Powered",
    },
    {
      title: "Google Shopping Ads",
      description:
        "High-converting product catalog ads for Indian E-commerce stores, complete with Merchant Center setup, feed optimization & bid tuning.",
      badge: "E-Commerce",
    },
    {
      title: "Local Service Ads & Maps",
      description:
        "Dominating local search results in Surat and target cities across India to drive phone calls, map directions, and direct walk-ins.",
      badge: "Local Business",
    },
    {
      title: "Landing Page & Conversion Tracking",
      description:
        "Custom high-converting landing page structure with GTM, GA4, call tracking, and WhatsApp click tracking so every ad rupee is accounted for.",
      badge: "Full Setup",
    },
  ];

  const whyWorkWithMe = [
    {
      title: "Direct Communication (No Account Managers)",
      description:
        "Speak directly with the expert managing your ads. Enjoy fast execution, 1-on-1 strategy updates, and zero agency bureaucratic delays.",
    },
    {
      title: "Hinglish & Regional Friendly",
      description:
        "Seamless communication in Gujarati, Hindi, or English. Built specifically for local business owners in Surat, Gujarat, and across India.",
    },
    {
      title: "Transparent Reporting & Account Ownership",
      description:
        "You retain 100% ownership of your Google Ads account, data, and live reporting dashboards. Complete visibility into where every rupee goes.",
    },
    {
      title: "Budget-Conscious for SMBs",
      description:
        "Practical PPC strategies tailored for Indian small and medium businesses. No bloated retainer fees or hidden extra management charges.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Audit & Opportunity Analysis",
      description:
        "In-depth review of your business goals, existing Google Ads account, competitor keywords, landing pages, and conversion tracking.",
      icon: <FaSearchDollar />,
    },
    {
      step: "02",
      title: "Strategy & Campaign Build",
      description:
        "Crafting high-intent Search & PMax campaign structures, negative keyword vaults, compelling ad copy variations, and GTM call/WhatsApp tracking.",
      icon: <FaTools />,
    },
    {
      step: "03",
      title: "Launch & Targeted Bidding",
      description:
        "Deploying your campaign with exact geo-targeting (Surat or pan-India), smart budget allocation, and click fraud protection.",
      icon: <FaRocket />,
    },
    {
      step: "04",
      title: "Optimize & Weekly Reporting",
      description:
        "Continuous bid management, search term pruning, ad copy split-testing, and transparent weekly updates to lower your Cost Per Lead (CPL).",
      icon: <FaChartLine />,
    },
  ];

  const caseStudies = [
    {
      industry: "Healthcare & Dental Clinic",
      location: "Surat, Gujarat",
      spend: "₹45,000 / mo",
      results: "120+ Qualified Patient Calls",
      cpcImprovement: "42% Reduction in CPL",
      description:
        "Restructured search campaigns around high-intent dental implant and cosmetic dentistry keywords in Surat, driving direct appointment calls.",
    },
    {
      industry: "B2B Industrial Machinery",
      location: "India-Wide (Gujarat Hub)",
      spend: "₹80,000 / mo",
      results: "85+ High-Intent RFQ Enquiries",
      cpcImprovement: "3.8x ROI / ROAS",
      description:
        "Targeted nationwide buyers searching for industrial manufacturing equipment with tight negative keyword lists to filter out retail browsers.",
    },
    {
      industry: "Real Estate & Architecture Firm",
      location: "Surat & Ahmedabad",
      spend: "₹60,000 / mo",
      results: "65+ Site Visit Bookings",
      cpcImprovement: "35% Lower Acquisition Cost",
      description:
        "Combined local Search Ads with location extensions and WhatsApp click tracking to capture premium commercial & residential project leads.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Yash turned around our Google Ads performance within 3 weeks. Direct communication, clean conversion tracking, and genuine patient enquiries instead of random calls. Highly recommended for local healthcare in Surat!",
      name: "Dr. Aditya",
      role: "Clinic Director",
      city: "Surat, Gujarat",
    },
    {
      quote:
        "Unlike big digital marketing agencies where you get passed around junior account managers, Yash handles everything personally with total transparency and sharp keyword focus. Our B2B inquiries have doubled.",
      name: "Rajesh Patel",
      role: "B2B Manufacturing Director",
      city: "Gujarat, India",
    },
    {
      quote:
        "Our lead quality improved dramatically while reducing our cost per lead by 35%. His Hinglish reporting and direct WhatsApp updates keep us in the loop without complex jargon.",
      name: "Sneha Shah",
      role: "Founder & Interior Consultant",
      city: "India",
    },
  ];

  const pricingTiers = [
    {
      name: "Starter Plan",
      subtitle: "For Local SMBs & Surat Businesses",
      price: "₹15,000",
      period: "per month",
      budget: "Recommended Ad Spend: ₹15,000 - ₹35,000/mo",
      highlight: false,
      features: [
        "1 Google Search Campaign",
        "Keyword Research & Competitor Analysis",
        "Negative Keyword List Setup",
        "Basic Call & Form Conversion Tracking",
        "Bi-weekly Campaign Optimization",
        "Monthly PDF Performance Report",
      ],
      ctaText: "Get Started",
      ctaLink: "#contact",
    },
    {
      name: "Growth Plan",
      subtitle: "For Expanding Businesses in India",
      price: "₹25,000",
      period: "per month",
      budget: "Recommended Ad Spend: ₹35,000 - ₹1.5L/mo",
      highlight: true,
      features: [
        "Search + Performance Max Campaigns",
        "Advanced GTM & WhatsApp Click Tracking",
        "Landing Page Conversion UX Audit",
        "Negative Keyword Pruning & Ad Testing",
        "Weekly Optimization & Strategy Tweaks",
        "Live Dashboard Access & WhatsApp Support",
      ],
      ctaText: "Choose Growth Plan",
      ctaLink: "#contact",
    },
    {
      name: "Scale Plan",
      subtitle: "For Multi-City & E-Commerce Brands",
      price: "Custom",
      period: "quote",
      budget: "Recommended Ad Spend: ₹1.5L+/mo",
      highlight: false,
      features: [
        "Search, PMax, Shopping & Local Ads",
        "Competitor Conquesting & Remarketing",
        "Dedicated High-Converting Landing Page",
        "Omnichannel Conversion Analytics",
        "Priority 1-on-1 Weekly Strategy Calls",
        "100% Dedicated PPC Support",
      ],
      ctaText: "Request Custom Quote",
      ctaLink: "#contact",
    },
  ];

  return (
    <div className="ads-site">
      <FloatingContactButtons />
      <AdsHeader variant="inner" />

      <main>
        {/* Section 1: Hero */}
        <section id="home" className="ads-hero">
          <div className="ads-hero__content">
            <p className="ads-eyebrow">
              <FaGoogle />
              Google Ads Agency in India
            </p>

            {/* CRITICAL SEO: Single H1 on the entire page */}
            <h1>Google Ads Agency in India</h1>

            <p className="ads-hero__text">
              Turn your advertising budget into qualified leads, phone calls, and revenue.
              Hire <strong>Yash Deliwala</strong> — a top Google Ads agency expert in India & Surat
              specializing in high-ROI Search Ads, Performance Max, and conversion tracking for local SMBs.
            </p>

            <div className="ads-trust-badge-line">
              <FaCheckCircle className="text-emerald-500" />
              <span>Managing ₹50L+ ad spend for Indian businesses with 100% transparent reporting</span>
            </div>

            <div className="ads-logo-panel">
              <img
                src="/clients/logo.png"
                alt="Yash Deliwala - Google Ads Agency in India and PPC Expert in Surat"
              />
              <div>
                <strong>Yash Deliwala</strong>
                <span>Google Ads Agency Expert & PPC Specialist</span>
              </div>
            </div>

            <div className="ads-actions">
              <a className="ads-button ads-button--primary" href="#contact">
                <FaCheckCircle />
                Get a Free Google Ads Audit
              </a>
              <a
                className="ads-button ads-button--secondary"
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-emerald-600" />
                Book a Call / WhatsApp
              </a>
            </div>

            <div className="ads-hero__proof">
              <div>
                <strong>₹50L+</strong>
                <span>Ad Spend Managed Across India</span>
              </div>
              <div>
                <strong>3.8x</strong>
                <span>Average Client ROI & ROAS</span>
              </div>
              <div>
                <strong>Surat & India</strong>
                <span>Local & Pan-India Campaign Reach</span>
              </div>
            </div>
          </div>

          <div className="ads-hero__media" aria-label="Yash Deliwala - Google Ads Agency Expert in Surat, India">
            <img
              src="/yash-google-ads-photo.png"
              alt="Yash Deliwala, Google Ads Agency Expert in India and PPC Consultant in Surat"
              loading="eager"
            />
          </div>
        </section>

        {/* Section 2: Problem / Pain Points */}
        <section className="ads-section ads-agency-pain">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaExclamationTriangle />
              Common Campaign Pitfalls
            </p>

            {/* CRITICAL SEO: H2 containing variation */}
            <h2>Why Most Businesses Waste Money on Google Ads in India</h2>
            <p className="ads-section-subhead">
              Running Google Ads without a focused local strategy often leads to high bills and zero leads.
              Here are the common challenges Indian business owners face before working with an expert:
            </p>
          </div>

          <div className="ads-pain-grid">
            {painPoints.map((item, idx) => (
              <article key={idx} className="ads-pain-card">
                <div className="ads-pain-card__icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 3: Services Offered */}
        <section id="services" className="ads-section ads-agency-services">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaTools />
              Our Core PPC Offerings
            </p>

            {/* CRITICAL SEO: H2 containing variation "PPC Management Services India" */}
            <h2>PPC Management Services India</h2>
            <p className="ads-section-subhead">
              Comprehensive Google Ads solutions tailored to generate phone calls, form enquiries,
              and e-commerce sales for businesses in Surat, Gujarat, and nationwide.
            </p>
          </div>

          <div className="ads-service-grid">
            {services.map((service) => (
              <article className="ads-card ads-card--service" key={service.title}>
                <div className="ads-card__header">
                  <span className="ads-card-badge">{service.badge}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Dashboards Showcase */}
        <GoogleAdsDashboards />

        {/* Section 4: Why Work With Me */}
        <section className="ads-section ads-agency-why">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaUserCheck />
              The Freelance Agency Advantage
            </p>

            {/* CRITICAL SEO: H2 containing variation "Why Choose a Google Ads Agency in India" */}
            <h2>Why Choose a Google Ads Agency in India</h2>
            <p className="ads-section-subhead">
              Skip traditional agency bureaucracy. Get senior-level campaign strategy, 100% transparent access,
              and direct communication that drives real business growth.
            </p>
          </div>

          <div className="ads-why-grid">
            {whyWorkWithMe.map((point) => (
              <article className="ads-why-card" key={point.title}>
                <div className="ads-why-card__check">✓</div>
                <div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 5: Process */}
        <section id="process" className="ads-section ads-process-section">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaRocket className="text-blue-500" />
              Simple 4-Step Workflow
            </p>
            <h2>How We Audit, Launch & Scale Your Google Ads</h2>
            <p className="ads-section-subhead">
              A transparent, battle-tested PPC methodology designed to maximize lead quality and campaign ROI.
            </p>
          </div>

          <div className="ads-process-grid">
            {processSteps.map((step) => (
              <article className="ads-process-card" key={step.step}>
                <div className="ads-process-card__top">
                  <span className="ads-process-step-badge">Step {step.step}</span>
                  <div className="ads-process-icon-box">{step.icon}</div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Section 6: Case Study / Results Section */}
        <section id="results" className="ads-section ads-agency-cases">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaSearchDollar />
              Proven Campaign Results
            </p>

            {/* CRITICAL SEO: H2 containing variation "Google Ads Expert in Surat" */}
            <h2>Google Ads Expert in Surat & Pan-India Results</h2>
            <p className="ads-section-subhead">
              Explore how targeted Google Ads campaigns helped local businesses in Surat and across India achieve higher lead volume and lower acquisition costs.
            </p>
          </div>

          <div className="ads-case-grid">
            {caseStudies.map((caseItem, index) => (
              <article key={index} className="ads-case-card">
                <div className="ads-case-card__top">
                  <span className="ads-case-industry">{caseItem.industry}</span>
                  <span className="ads-case-location">
                    <FaMapMarkerAlt /> {caseItem.location}
                  </span>
                </div>
                <h3>{caseItem.results}</h3>
                <div className="ads-case-metrics">
                  <div>
                    <span>Ad Spend</span>
                    <strong>{caseItem.spend}</strong>
                  </div>
                  <div>
                    <span>Performance</span>
                    <strong className="text-emerald-600">{caseItem.cpcImprovement}</strong>
                  </div>
                </div>
                <p>{caseItem.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Client Logos Section */}
        <section id="clients" className="ads-section ads-clients">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaGoogle />
              Client Work
            </p>
            <h2>Trusted by Businesses That Want Better Visibility, Leads, and PPC Results</h2>
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

        {/* Section 7: Testimonials Section */}
        <section id="testimonials" className="ads-section ads-agency-testimonials">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaQuoteLeft />
              Client Reviews
            </p>
            <h2>What Indian Business Owners Say About Working With Yash</h2>
          </div>

          <div className="ads-testimonial-grid">
            {testimonials.map((item, idx) => (
              <article key={idx} className="ads-testimonial-card">
                <div className="ads-testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-amber-400" />
                  ))}
                </div>
                <p>"{item.quote}"</p>
                <div className="ads-testimonial-author">
                  <strong>{item.name}</strong>
                  <span>
                    {item.role} • {item.city}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 8: Pricing/Packages Teaser */}
        <section id="pricing" className="ads-section ads-pricing">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaSearchDollar />
              Transparent Pricing
            </p>
            <h2>Google Ads Agency Packages & Plans</h2>
            <p className="ads-section-subhead">
              Simple, transparent monthly retainers with no hidden fees or long-term lock-in contracts.
            </p>
          </div>

          <div className="ads-pricing-grid">
            {pricingTiers.map((tier, idx) => (
              <article
                key={idx}
                className={`ads-pricing-card ${tier.highlight ? "ads-pricing-card--highlight" : ""}`}
              >
                {tier.highlight && <span className="ads-pricing-badge">Most Popular</span>}
                <span className="ads-pricing-tier-name">{tier.name}</span>
                <p className="ads-pricing-sub">{tier.subtitle}</p>
                <div className="ads-pricing-amount">
                  <strong>{tier.price}</strong>
                  <span>/{tier.period}</span>
                </div>
                <p className="ads-pricing-budget">{tier.budget}</p>
                <ul className="ads-pricing-features">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <FaCheckCircle className="text-blue-500" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={tier.ctaLink}
                  className={`ads-button ${
                    tier.highlight ? "ads-button--primary" : "ads-button--secondary"
                  } w-full mt-6`}
                >
                  {tier.ctaText}
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Section 9: FAQ Section */}
        <section id="faq" className="ads-section ads-faq">
          <div className="ads-section__heading">
            <p className="ads-eyebrow">
              <FaQuestionCircle />
              Frequently Asked Questions
            </p>
            <h2>Google Ads Agency FAQ for Indian Businesses</h2>
            <p className="ads-section-subhead">
              Common questions answered to help you choose the right Google Ads agency in India.
            </p>
          </div>

          <div className="ads-faq__list">
            <details className="ads-faq__item" open>
              <summary>How much does a Google Ads agency charge in India?</summary>
              <p>
                In India, Google Ads agency management fees typically range from ₹15,000 to ₹50,000+
                per month depending on ad spend, campaign complexity, and channel strategy. Direct
                freelancer/consultant models start at ₹15,000/month with zero hidden overheads.
              </p>
            </details>
            <details className="ads-faq__item">
              <summary>How long does it take to see results from Google Ads?</summary>
              <p>
                Search Ads can generate leads, phone calls, and WhatsApp enquiries within the first 24
                to 72 hours of launching. However, campaign optimization, conversion tracking calibration,
                and cost-per-lead reduction peak over 30 to 60 days of continuous data refining.
              </p>
            </details>
            <details className="ads-faq__item">
              <summary>Do I need a big budget to start Google Ads in India?</summary>
              <p>
                No. You can start with a modest ad budget of ₹15,000 to ₹30,000 per month (paid directly
                to Google). By focusing tightly on high-intent search keywords and negative keyword lists,
                small budgets can yield excellent qualified leads in Surat and across India.
              </p>
            </details>
            <details className="ads-faq__item">
              <summary>What's the difference between Search and Performance Max campaigns?</summary>
              <p>
                Google Search Ads display text ads to users actively searching for specific keywords on Google.
                Performance Max (PMax) uses Google's AI to run across Search, Youtube, Display, Gmail, Maps,
                and Discover automatically based on audience signals and asset groups.
              </p>
            </details>
          </div>
        </section>

        {/* Section 10: Internal Links to Blog Posts */}
        {blogs && blogs.length > 0 && (
          <section id="blogs" className="ads-section ads-agency-blogs">
            <div className="ads-section__heading">
              <p className="ads-eyebrow">
                <FaBookOpen />
                Google Ads Insights & Guides
              </p>
              <h2>Learn How to Optimize Your Google Ads ROI</h2>
              <p className="ads-section-subhead">
                Read actionable PPC tips, local lead generation guides, and Google Ads strategies from Yash Deliwala.
              </p>
            </div>

            <div className="blog-grid blog-grid--home">
              {blogs.slice(0, 3).map((blog) => (
                <BlogCard blog={blog} key={blog.id} />
              ))}
            </div>

            <div className="text-center mt-8">
              <a href="/blogs" className="ads-button ads-button--secondary inline-flex items-center gap-2">
                Explore All Google Ads Articles <FaArrowRight />
              </a>
            </div>
          </section>
        )}

        {/* Section 11: Final CTA Section with Contact Form */}
        <section id="contact" className="ads-contact">
          <div className="ads-contact__copy">
            <p className="ads-eyebrow">
              <FaPhoneAlt />
              Free Google Ads Audit & Call
            </p>
            <h2>Ready to Scale Your Business with a Top Google Ads Agency in India?</h2>
            <p>
              Share your business website, target location, monthly budget, and primary goal.
              I will analyze your current campaign structure and outline a step-by-step PPC strategy.
            </p>

            <div className="ads-consultation-price">
              <span>Audit & Consultation</span>
              <strong>FREE / Rs. 1000 Consultation</strong>
            </div>

            <div className="ads-contact__quick">
              <a href={`tel:${PHONE_NUMBER}`}>
                <FaPhoneAlt className="inline mr-2" /> {PHONE_NUMBER}
              </a>
              <a href="mailto:yashdeliwala10@gmail.com">yashdeliwala10@gmail.com</a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="text-emerald-600 font-bold flex items-center gap-2 mt-2"
              >
                <FaWhatsapp className="text-xl" /> Chat on WhatsApp Directly
              </a>
            </div>
          </div>

          <form className="ads-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="2c6efe99-dc5c-4acc-b523-656523121182" />
            <input type="text" name="name" required placeholder="Your Full Name" />
            <input type="email" name="email" required placeholder="Email Address" />
            <input type="tel" name="phone" placeholder="Phone / WhatsApp Number" />
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Tell me about your business, target locations (Surat or India-wide), and Google Ads goal"
            />
            <button type="submit" className="ads-button ads-button--primary w-full">
              Get a Free Google Ads Audit
            </button>
          </form>
        </section>
      </main>

      <AdsFooter locationLabel="Surat, Gujarat & Pan-India" />
    </div>
  );
}
