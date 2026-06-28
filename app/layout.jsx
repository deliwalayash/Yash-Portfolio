import "../src/index.css";
import "../src/App.css";
import GoogleAnalytics from "../src/components/GoogleAnalytics";

export const metadata = {
  metadataBase: new URL("https://yashdeliwala.com"),
  applicationName: "Yash Google Ads Expert",
  title: {
    default: "Yash Deliwala | Google Ads Expert in Surat",
    template: "%s | Yash Google Ads Expert",
  },
  description:
    "Google Ads expert in Surat helping businesses generate quality leads, calls, and local enquiries with focused Google Ads campaigns.",
  keywords: [
    "Google Ads Expert in Surat",
    "Google Ads Specialist Surat",
    "Google Ads Management",
    "PPC Expert Surat",
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
    title: "Yash Deliwala | Google Ads Expert in Surat",
    description:
      "Google Ads management for local lead generation, calls, and business growth in Surat.",
    url: "https://yashdeliwala.com",
    siteName: "Yash Google Ads Expert",
    images: ["/yash-google-ads-photo.png"],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Deliwala | Google Ads Expert in Surat",
    description:
      "Google Ads expert in Surat helping businesses generate quality leads, calls, and local enquiries.",
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
