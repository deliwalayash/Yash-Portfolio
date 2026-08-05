import GoogleAdsAgencyIndia from "../../src/components/GoogleAdsAgencyIndia";
import { getPublishedBlogs } from "../../src/lib/blog-data";
import { SITE_URL } from "../../src/lib/site-config";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Google Ads Agency in India | Yash Deliwala — PPC Expert Surat",
  description:
    "Hire Yash Deliwala, top Google Ads agency in India & PPC expert in Surat. Get high ROI Search & Performance Max campaigns for local Indian businesses.",
  keywords: [
    "Google Ads Agency in India",
    "Google Ads Agency in Surat",
    "Google Ads Expert in Surat",
    "PPC Management Services India",
    "Why Choose a Google Ads Agency in India",
    "Google Search Ads Agency",
    "Performance Max Campaign Expert",
    "PPC Freelancer Surat",
    "Yash Deliwala",
  ],
  alternates: {
    canonical: "/google-ads-agency-india",
  },
  openGraph: {
    title: "Google Ads Agency in India | Yash Deliwala — PPC Expert Surat",
    description:
      "Hire Yash Deliwala, top Google Ads agency in India & PPC expert in Surat. Get high ROI Search & Performance Max campaigns for local Indian businesses.",
    url: `${SITE_URL}/google-ads-agency-india`,
    siteName: "Yash Google Ads Expert",
    images: ["/yash-google-ads-photo.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Agency in India | Yash Deliwala — PPC Expert Surat",
    description:
      "Hire Yash Deliwala, top Google Ads agency in India & PPC expert in Surat. Get high ROI Search & Performance Max campaigns for local Indian businesses.",
    images: ["/yash-google-ads-photo.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: "Yash Deliwala - Google Ads Agency in India",
  alternateName: [
    "Google Ads Agency in India",
    "Google Ads Agency in Surat",
    "Google Ads Expert in Surat",
    "Yash Google Ads Agency",
  ],
  description:
    "Google Ads agency in India providing high-intent Search Ads, Performance Max, local lead generation, conversion tracking, and PPC management for Indian SMBs.",
  image: `${SITE_URL}/yash-google-ads-photo.png`,
  logo: `${SITE_URL}/clients/logo.png`,
  url: `${SITE_URL}/google-ads-agency-india`,
  telephone: "+919712952456",
  email: "yashdeliwala10@gmail.com",
  priceRange: "Starting from Rs. 15,000/month",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Surat",
    addressLocality: "Surat",
    addressRegion: "Gujarat",
    postalCode: "395007",
    addressCountry: "IN",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "India",
    },
    {
      "@type": "City",
      name: "Surat",
    },
    {
      "@type": "AdministrativeArea",
      name: "Gujarat",
    },
  ],
  serviceType: [
    "Google Ads Management",
    "PPC Management Services India",
    "Google Search Ads",
    "Performance Max Campaigns",
    "Shopping Ads Management",
    "Local Service Ads",
    "Conversion Tracking Setup",
  ],
  knowsAbout: [
    "Google Ads",
    "PPC Advertising",
    "Search Ads",
    "Performance Max",
    "Lead Generation",
    "Conversion Tracking",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads Agency in India",
  serviceType: "Google Ads Management",
  provider: {
    "@type": "ProfessionalService",
    name: "Yash Deliwala - Google Ads Expert in Surat",
    url: SITE_URL,
    telephone: "+919712952456",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Comprehensive Google Ads management services in India including Search campaigns, Performance Max, Shopping Ads, Local Service Ads, and conversion tracking setup.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a Google Ads agency charge in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In India, Google Ads agency management fees typically range from Rs. 15,000 to Rs. 50,000+ per month depending on ad spend, campaign complexity, and channel strategy. Direct freelancer/consultant models start at Rs. 15,000/month.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to see results from Google Ads?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search Ads can generate leads, calls, and sales within the first 24 to 72 hours of launching. However, campaign optimization, conversion tracking calibration, and cost-per-lead reduction peak over 30 to 60 days.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a big budget to start Google Ads in India?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You can start with a modest ad budget of Rs. 15,000 to Rs. 30,000 per month (paid directly to Google). By focusing tightly on high-intent keywords and negative keyword lists, small budgets can yield excellent qualified leads.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between Search and Performance Max campaigns?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Google Search Ads display text ads to users actively searching for specific keywords on Google. Performance Max (PMax) uses Google's AI to run across Search, Youtube, Display, Gmail, Maps, and Discover automatically based on audience signals and assets.",
      },
    },
  ],
};

export default async function GoogleAdsAgencyIndiaPage() {
  const { data: blogs } = await getPublishedBlogs(3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GoogleAdsAgencyIndia blogs={blogs} />
    </>
  );
}
