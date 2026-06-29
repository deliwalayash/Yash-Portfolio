import { notFound } from "next/navigation";
import { LocationSeoPage } from "../../src/components/GoogleAdsSite";
import { getLocationPage, locationPages } from "../../src/lib/location-pages";
import { SITE_URL } from "../../src/lib/site-config";

export const dynamicParams = false;

export function generateStaticParams() {
  return locationPages.map((page) => ({
    locationSlug: page.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { locationSlug } = await params;
  const page = getLocationPage(locationSlug);

  if (!page) {
    return {
      title: "Page not found",
    };
  }

  const title = `Google Ads Expert in ${page.city} | PPC Freelancer & Consultant`;
  const description = `Hire Yash Deliwala, a Google Ads expert in ${page.city} for Search Ads, PPC management, lead generation, Performance Max, and conversion tracking.`;

  return {
    title,
    description,
    keywords: [
      `Google Ads Expert in ${page.city}`,
      `Google Ads Freelancer in ${page.city}`,
      `Google Ads Agency in ${page.city}`,
      `Google Ads Consultant in ${page.city}`,
      `PPC Expert in ${page.city}`,
      `Google Search Ads in ${page.city}`,
      "Google Ads Management Services",
      "Lead Generation Google Ads",
    ],
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${page.slug}`,
      type: "website",
      images: ["/yash-google-ads-photo.png"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/yash-google-ads-photo.png"],
    },
  };
}

export default async function LocationPage({ params }) {
  const { locationSlug } = await params;
  const page = getLocationPage(locationSlug);

  if (!page) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Google Ads Expert in ${page.city}`,
    description: `Google Ads management, Search Ads, PPC campaign setup, lead generation, Performance Max, and conversion tracking for businesses in ${page.city}.`,
    provider: {
      "@type": "ProfessionalService",
      name: "Yash Deliwala - Google Ads Expert in India",
      url: SITE_URL,
      telephone: "+919712952456",
    },
    areaServed: {
      "@type": "City",
      name: page.city,
      addressRegion: page.state,
      addressCountry: "IN",
    },
    serviceType: [
      "Google Ads Management",
      "Google Search Ads",
      "PPC Campaign Management",
      "Lead Generation Campaigns",
      "Performance Max Campaigns",
      "Conversion Tracking Setup",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: `Do you provide Google Ads management in ${page.city}?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. Yash Deliwala provides Google Ads management for businesses in ${page.city}, including campaign setup, Search Ads, Performance Max, conversion tracking, and weekly optimization.`,
        },
      },
      {
        "@type": "Question",
        name: `Can you work as a Google Ads freelancer for ${page.city} businesses?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Yash works as a Google Ads freelancer and PPC consultant for businesses that want direct support without a large agency process.",
        },
      },
      {
        "@type": "Question",
        name: "What is the starting price for Google Ads management?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Google Ads management starts from Rs. 15,000 per month. The recommended minimum ad spend is Rs. 15,000 per month, paid directly to Google.",
        },
      },
    ],
  };

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
      <LocationSeoPage page={page} />
    </>
  );
}
