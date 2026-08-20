import { Sora } from "next/font/google";
import Script from "next/script";
import "../src/index.css";
import "../src/App.css";
import GoogleAnalytics from "../src/components/GoogleAnalytics";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  metadataBase: new URL("https://yashdeliwala.com"),
  applicationName: "Yash Google Ads Expert",
  title: {
    default: "Google Ads Expert in India | Freelancer & PPC Consultant",
    template: "%s | Yash Google Ads Expert",
  },
  description:
    "Hire Yash Deliwala, a Google Ads expert in India for Search Ads, PPC management, lead generation, conversion tracking, and Performance Max campaigns.",
  keywords: [
    "Google Ads Expert in India",
    "Google Ads Freelancer in India",
    "Google Ads Agency in India",
    "Google Ads Consultant in India",
    "Google Ads Management Services",
    "Google Search Ads Expert",
    "PPC Expert in India",
    "Performance Max Campaign Expert",
    "Lead Generation Google Ads",
    "Yash Deliwala",
  ],
  authors: [{ name: "Yash Deliwala" }],
  creator: "Yash Deliwala",
  publisher: "Yash Google Ads Expert",
  icons: {
    icon: "/clients/logo (2).jpeg",
    shortcut: "/clients/logo (2).jpeg",
    apple: "/clients/logo (2).jpeg",
  },
  openGraph: {
    title: "Google Ads Expert in India | Freelancer & PPC Consultant",
    description:
      "Google Ads management, Search Ads, PPC campaigns, and lead generation services for businesses across India.",
    url: "https://yashdeliwala.com",
    siteName: "Yash Google Ads Expert",
    images: ["/clients/yash-deliwala.jpeg"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Expert in India | Freelancer & PPC Consultant",
    description:
      "Hire a Google Ads expert in India for Search Ads, PPC management, lead generation, and Performance Max campaigns.",
    images: ["/clients/yash-deliwala.jpeg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "VKplgRuYlgALf6aemKFKmmM6bR0c5Eh86VhYix2600E",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Yash Deliwala - Google Ads Expert",
  alternateName: ["Yash Deliwala", "Yash Google Ads Expert", "Google Ads Freelancer in India"],
  url: "https://yashdeliwala.com",
  author: {
    "@type": "Person",
    name: "Yash Deliwala",
    jobTitle: "Google Ads Expert & PPC Consultant",
    url: "https://yashdeliwala.com",
    sameAs: [
      "https://www.linkedin.com/in/yash-deliwala",
      "https://x.com/YDeliwala94759",
      "https://github.com/deliwalayash",
    ],
  },
};

const siteNavigationSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    {
      "@type": "SiteNavigationElement",
      position: 1,
      name: "Google Ads Agency India",
      description: "Full-service Google Ads campaign management and agency services in India.",
      url: "https://yashdeliwala.com/google-ads-agency-india",
    },
    {
      "@type": "SiteNavigationElement",
      position: 2,
      name: "Google Ads Blog",
      description: "Google Ads tips, PPC strategies, and lead generation guides.",
      url: "https://yashdeliwala.com/blogs",
    },
    {
      "@type": "SiteNavigationElement",
      position: 3,
      name: "Contact Yash Deliwala",
      description: "Book a consultation or reach out to Yash Deliwala.",
      url: "https://yashdeliwala.com/contact",
    },
    {
      "@type": "SiteNavigationElement",
      position: 4,
      name: "Google Ads Expert Surat",
      description: "PPC campaign management and Search Ads support in Surat.",
      url: "https://yashdeliwala.com/google-ads-expert-surat",
    },
    {
      "@type": "SiteNavigationElement",
      position: 5,
      name: "Google Ads Expert Ahmedabad",
      description: "Google Ads management and PPC consultation in Ahmedabad.",
      url: "https://yashdeliwala.com/google-ads-expert-ahmedabad",
    },
    {
      "@type": "SiteNavigationElement",
      position: 6,
      name: "Google Ads Expert Mumbai",
      description: "Google Search Ads and lead generation campaigns in Mumbai.",
      url: "https://yashdeliwala.com/google-ads-expert-mumbai",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PMD4SPD5');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className={sora.className}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PMD4SPD5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
