import { GoogleAdsLanding, faqItems } from "../src/components/GoogleAdsSite";
import { getPublishedBlogs } from "../src/lib/blog-data";

// ISR: Serve cached page from Vercel Edge CDN, revalidate blog posts every hour.
// This is critical for Google Ads Quality Score — cached pages load near-instantly.
export const revalidate = 3600;

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Yash Deliwala - Google Ads Expert in India",
  alternateName: [
    "Yash Google Ads Expert",
    "Google Ads Freelancer in India",
    "Google Ads Consultant in India",
  ],
  description:
    "Google Ads expert in India offering Search Ads, PPC campaign management, lead generation campaigns, Performance Max, conversion tracking, and Google Ads consultation.",
  image: "https://yashdeliwala.com/clients/yash-deliwala.jpeg",
  logo: "https://yashdeliwala.com/clients/logo (2).jpeg",
  url: "https://yashdeliwala.com",
  telephone: "+919712952456",
  email: "yashdeliwala10@gmail.com",
  priceRange: "Google Ads management from Rs. 15,000/month",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "AdministrativeArea",
      name: "Gujarat",
    },
  ],
  serviceType: [
    "Google Ads Management",
    "Google Search Ads",
    "Google Ads Freelancer Services",
    "Google Ads Agency Services",
    "Google Ads Consultation",
    "Performance Max Campaigns",
    "Local Lead Generation",
    "PPC Campaign Management",
    "Conversion Tracking Setup",
  ],
  knowsAbout: [
    "Google Ads",
    "Google Search Ads",
    "PPC advertising",
    "Performance Max campaigns",
    "Lead generation",
    "Conversion tracking",
    "Landing page optimization",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Google Ads Services in India",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Search Ads Management",
          description:
            "Keyword research, campaign setup, ad copy, search intent targeting, and weekly optimization for high-intent Google searches.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Ads Freelancer and PPC Consultant",
          description:
            "Hands-on Google Ads consultation and campaign management for Indian businesses that need direct expert support.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance Max Campaign Management",
          description:
            "Performance Max setup, audience signals, asset guidance, budget control, and conversion-focused optimization.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Conversion Tracking Setup",
          description:
            "Tracking for calls, forms, WhatsApp clicks, and lead actions so campaigns can be optimized with clean data.",
        },
      },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default async function HomePage() {
  const { data: blogs } = await getPublishedBlogs(3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GoogleAdsLanding blogs={blogs} />
    </>
  );
}
