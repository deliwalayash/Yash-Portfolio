import { GoogleAdsLanding } from "../src/components/GoogleAdsSite";
import { getPublishedBlogs } from "../src/lib/blog-data";

export const dynamic = "force-dynamic";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Yash Deliwala - Google Ads Expert",
  image: "https://yashdeliwala.com/yash-google-ads-photo.png",
  logo: "https://yashdeliwala.com/clients/logo.png",
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
      "@type": "City",
      name: "Surat",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  serviceType: [
    "Google Ads Management",
    "Google Search Ads",
    "Performance Max Campaigns",
    "Local Lead Generation",
    "PPC Campaign Management",
  ],
};

export default async function HomePage() {
  const { data: blogs } = await getPublishedBlogs(3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <GoogleAdsLanding blogs={blogs} />
    </>
  );
}
