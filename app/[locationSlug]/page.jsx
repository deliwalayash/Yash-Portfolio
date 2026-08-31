import { notFound } from "next/navigation";
import { LocationSeoPage } from "../../src/components/GoogleAdsSite";
import { getLocationPage, locationPages } from "../../src/lib/location-pages";
import {
  getPublishedSeoPageBySlug,
  getPublishedSeoPages,
} from "../../src/lib/seo-page-data";
import { SITE_URL } from "../../src/lib/site-config";

export const dynamic = "force-dynamic";

async function resolvePage(slug) {
  // 1. Try fetching from Supabase seo_pages table first
  const { data: dbPage } = await getPublishedSeoPageBySlug(slug);
  if (dbPage) return dbPage;

  // 2. Fallback to hardcoded locationPages if exists
  const staticPage = getLocationPage(slug);
  if (staticPage) return staticPage;

  return null;
}

export async function generateMetadata({ params }) {
  const { locationSlug } = await params;
  const page = await resolvePage(locationSlug);

  if (!page) {
    return {
      title: "Page Not Found",
    };
  }

  const serviceName = page.service || "Google Ads";
  const cityName = page.city || "India";
  const title =
    page.meta_title ||
    `${serviceName} Expert in ${cityName} | Freelancer & Consultant`;
  const description =
    page.meta_description ||
    `Hire Yash Deliwala, a verified ${serviceName} expert in ${cityName} for Search Ads, PPC management, lead generation, Performance Max, and conversion tracking.`;
  const canonicalUrl = page.canonical_url || `/${page.slug}`;
  const image = page.image_url || "/clients/yash-deliwala.jpeg";

  return {
    title,
    description,
    keywords: [
      `${serviceName} Expert in ${cityName}`,
      `${serviceName} Freelancer in ${cityName}`,
      `${serviceName} Agency in ${cityName}`,
      `${serviceName} Consultant in ${cityName}`,
      `PPC Expert in ${cityName}`,
      `Google Search Ads in ${cityName}`,
      `${serviceName} Management Services`,
      "Lead Generation Google Ads",
      "Yash Deliwala",
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${page.slug}`,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function LocationPage({ params }) {
  const { locationSlug } = await params;
  const page = await resolvePage(locationSlug);

  if (!page) notFound();

  const { data: dynamicPages } = await getPublishedSeoPages(20);

  const serviceName = page.service || "Google Ads";
  const cityName = page.city || "India";
  const stateName = page.state || "Gujarat";

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1 || `${serviceName} Expert in ${cityName}`,
    description:
      page.meta_description ||
      `${serviceName} management, Search Ads, PPC campaign setup, lead generation, Performance Max, and conversion tracking for businesses in ${cityName}.`,
    provider: {
      "@type": "ProfessionalService",
      name: "Yash Deliwala - Google Ads Expert in India",
      url: SITE_URL,
      telephone: "+919712952456",
    },
    areaServed: {
      "@type": "City",
      name: cityName,
      addressRegion: stateName,
      addressCountry: "IN",
    },
    serviceType: [
      `${serviceName} Management`,
      "Google Search Ads",
      "PPC Campaign Management",
      "Lead Generation Campaigns",
      "Performance Max Campaigns",
      "Conversion Tracking Setup",
    ],
  };

  const defaultFaqs = [
    {
      question: `Do you provide ${serviceName} management in ${cityName}?`,
      answer: `Yes. Yash Deliwala provides ${serviceName} management for businesses in ${cityName}, including campaign setup, Search Ads, Performance Max, conversion tracking, and weekly optimization.`,
    },
    {
      question: `Can you work as a ${serviceName} freelancer for ${cityName} businesses?`,
      answer: `Yes. Yash works as a ${serviceName} freelancer and PPC consultant for businesses that want direct support without a large agency process.`,
    },
    {
      question: `What is the starting price for ${serviceName} management?`,
      answer: `${serviceName} management starts from Rs. 15,000 per month. The recommended minimum ad spend is Rs. 15,000 per month, paid directly to Google.`,
    },
  ];

  const faqItems =
    Array.isArray(page.faq) && page.faq.length > 0
      ? page.faq.filter((f) => f.question && f.answer)
      : defaultFaqs;

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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Google Ads Expert in India",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.page_name || `${serviceName} Expert in ${cityName}`,
        item: `${SITE_URL}/${page.slug}`,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <LocationSeoPage page={page} dynamicPages={dynamicPages || []} />
    </>
  );
}
