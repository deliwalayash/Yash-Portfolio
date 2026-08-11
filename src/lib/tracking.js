// Centralized Tracking Helper for GA4, DataLayer, and Google Ads Conversions

export function trackConversionEvent(eventName, eventParams = {}) {
  if (typeof window !== "undefined") {
    if (typeof window.gtag === "function") {
      window.gtag("event", eventName, eventParams);
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        ...eventParams,
      });
    }
  }
}

export function trackGoogleAdsConversion(sendTo, value = 1.0, currency = "INR") {
  if (typeof window !== "undefined") {
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: sendTo,
        value: value,
        currency: currency,
      });
    }
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: "conversion",
        send_to: sendTo,
        value: value,
        currency: currency,
      });
    }
    console.log(`[Google Ads Conversion Fired]: send_to=${sendTo}`);
  }
}

export function handleWhatsAppClick(label = "WhatsApp Click") {
  trackConversionEvent("whatsapp_click", {
    event_category: "Lead Generation",
    event_label: label,
  });
  trackGoogleAdsConversion("AW-18373956835/YEJBCNek0t8cEOOpsblE", 1.0, "INR");
}

export function handleCallClick(label = "Call Button Click") {
  trackConversionEvent("call_click", {
    event_category: "Lead Generation",
    event_label: label,
  });
  trackGoogleAdsConversion("AW-18373956835/XFn1CIWs0t8cEOOpsblE", 1.0, "INR");
}
