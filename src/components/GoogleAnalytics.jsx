import Script from "next/script";

export default function GoogleAnalytics() {
  const googleAdsId = "AW-18373956835";
  const ga4Id = "G-5BGVZY89XT";
  const gaEnvId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <>
      {/* Google Tag (gtag.js) - Loaded ONCE for both Google Ads & GA4 */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`}
        strategy="afterInteractive"
      />
      <Script id="google-gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAdsId}');
          gtag('config', '${ga4Id}');
          ${gaEnvId && gaEnvId !== ga4Id ? `gtag('config', '${gaEnvId}');` : ""}
        `}
      </Script>
    </>
  );
}
