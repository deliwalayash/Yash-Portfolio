// Unified Google Ads & GA4 Conversion Tracker Utility

export const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || "AW-8458131593";
export const AW_WHATSAPP_LABEL = process.env.NEXT_PUBLIC_AW_WHATSAPP_LABEL || "YEJBCNek0t8cEOOpsblE";
export const AW_CALL_LABEL = process.env.NEXT_PUBLIC_AW_CALL_LABEL || "XFn1CIWs0t8cEOOpsblE";
export const AW_FORM_LABEL = process.env.NEXT_PUBLIC_AW_FORM_LABEL || "QPGyCNzVwd8cEOOpsblE";

/**
 * Tracks conversion events for Google Ads (AW-*) and GA4
 * @param {'whatsapp' | 'call' | 'lead_form'} conversionType 
 * @param {string} [redirectUrl] Optional URL for callback redirection
 */
export function trackConversion(conversionType, redirectUrl) {
  if (typeof window === "undefined") return;

  const labels = {
    whatsapp: AW_WHATSAPP_LABEL,
    call: AW_CALL_LABEL,
    lead_form: AW_FORM_LABEL,
  };

  const ga4Events = {
    whatsapp: "lp_whatsapp_click",
    call: "lp_call_click",
    lead_form: "lp_form_submit",
  };

  const conversionLabel = labels[conversionType];
  const ga4EventName = ga4Events[conversionType] || "conversion";

  let redirected = false;
  const handleCallback = () => {
    if (redirectUrl && !redirected) {
      redirected = true;
      window.location.href = redirectUrl;
    }
  };

  // 1. Google Ads Conversion Event
  if (typeof window.gtag === "function") {
    if (conversionLabel) {
      const sendTo = `${GOOGLE_ADS_ID}/${conversionLabel}`;
      console.log(`[Google Ads Conversion Tracked]: ${sendTo}`);
      window.gtag("event", "conversion", {
        send_to: sendTo,
        event_callback: redirectUrl ? handleCallback : undefined,
      });
    }

    // 2. GA4 Custom Event
    window.gtag("event", ga4EventName, {
      event_category: "Lead Generation",
      event_label: conversionType,
    });
  }

  // 3. Fallback dataLayer push for GTM
  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push({
      event: ga4EventName,
      conversion_type: conversionType,
      google_ads_label: conversionLabel,
    });
  }

  // Fallback timeout redirect if callback doesn't execute in 500ms
  if (redirectUrl) {
    setTimeout(handleCallback, 500);
  }
}
