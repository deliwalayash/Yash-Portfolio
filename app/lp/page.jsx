import GoogleAdsLp from "../../src/components/GoogleAdsLp";
import { SITE_URL } from "../../src/lib/site-config";

export const metadata = {
  title: "Google Ads Agency in India | Get More Leads & Sales",
  description:
    "Hire Yash Deliwala - Google Ads Agency in India. Get high ROI Search & Performance Max campaigns with direct expert support & transparent reporting.",
  keywords: [
    "Google Ads Agency in India",
    "Google Ads Agency in Surat",
    "Google Search Ads Expert",
    "PPC Agency India",
    "Google Ads Freelancer India",
  ],
  alternates: {
    canonical: "/lp",
  },
  openGraph: {
    title: "Google Ads Agency in India | Get More Leads & Sales",
    description:
      "Hire Yash Deliwala - Google Ads Agency in India. Get high ROI Search & Performance Max campaigns with direct expert support & transparent reporting.",
    url: `${SITE_URL}/lp`,
    siteName: "Yash Google Ads Expert",
    images: ["/clients/yash-deliwala.jpeg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Agency in India | Get More Leads & Sales",
    description:
      "Hire Yash Deliwala - Google Ads Agency in India. Get high ROI Search & Performance Max campaigns with direct expert support & transparent reporting.",
    images: ["/clients/yash-deliwala.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google Ads Agency Services in India",
  serviceType: "Google Ads Management",
  provider: {
    "@type": "ProfessionalService",
    name: "Yash Deliwala - Google Ads Agency Expert",
    url: SITE_URL,
    telephone: "+919712952456",
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  description:
    "Conversion-focused Google Ads agency services in India including Search campaigns, Performance Max, lead generation, and conversion tracking setup.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does Google Ads management cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Management starts from Rs. 15,000 per month with zero hidden agency fees. Your ad spend is paid directly to Google.",
      },
    },
    {
      "@type": "Question",
      name: "How fast can I see leads and results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Search Ads start generating phone calls, form enquiries, and WhatsApp leads within 24 to 72 hours of launching.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a large budget to start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. You can start with a modest budget of Rs. 15,000 - Rs. 30,000/month (paid to Google) and scale as your leads grow.",
      },
    },
  ],
};

export default function LpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <GoogleAdsLp />
    </>
  );
}
