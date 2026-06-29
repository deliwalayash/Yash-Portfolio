import "../src/index.css";
import "../src/App.css";
import GoogleAnalytics from "../src/components/GoogleAnalytics";

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
    icon: "/clients/logo.png",
    shortcut: "/clients/logo.png",
    apple: "/clients/logo.png",
  },
  openGraph: {
    title: "Google Ads Expert in India | Freelancer & PPC Consultant",
    description:
      "Google Ads management, Search Ads, PPC campaigns, and lead generation services for businesses across India.",
    url: "https://yashdeliwala.com",
    siteName: "Yash Google Ads Expert",
    images: ["/yash-google-ads-photo.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google Ads Expert in India | Freelancer & PPC Consultant",
    description:
      "Hire a Google Ads expert in India for Search Ads, PPC management, lead generation, and Performance Max campaigns.",
    images: ["/yash-google-ads-photo.png"],
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
