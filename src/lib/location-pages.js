export const locationPages = [
  {
    city: "Surat",
    state: "Gujarat",
    slug: "google-ads-expert-surat",
    industries: ["clinics", "hospitals", "local services", "retail stores", "education businesses"],
    angle:
      "Surat businesses usually need campaigns that convert local searches into calls, WhatsApp enquiries, form leads, and store visits.",
  },
  {
    city: "Ahmedabad",
    state: "Gujarat",
    slug: "google-ads-expert-ahmedabad",
    industries: ["real estate", "healthcare", "education", "professional services", "local brands"],
    angle:
      "Ahmedabad campaigns need strong keyword intent, location targeting, and landing page clarity because competition is high in many service categories.",
  },
  {
    city: "Mumbai",
    state: "Maharashtra",
    slug: "google-ads-expert-mumbai",
    industries: ["clinics", "consultants", "real estate", "B2B services", "premium local businesses"],
    angle:
      "Mumbai Google Ads need tighter budget control, strong negative keywords, and conversion tracking because clicks can become expensive quickly.",
  },
  {
    city: "Delhi",
    state: "Delhi NCR",
    slug: "google-ads-expert-delhi",
    industries: ["lead generation businesses", "coaching institutes", "healthcare", "legal services", "home services"],
    angle:
      "Delhi NCR campaigns need clear service-area targeting, high-intent Search Ads, and weekly optimization to reduce wasted PPC spend.",
  },
];

export const getLocationPage = (slug) =>
  locationPages.find((page) => page.slug === slug);
