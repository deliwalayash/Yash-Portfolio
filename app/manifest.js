export default function manifest() {
  return {
    name: "Leads CRM - Yash Deliwala",
    short_name: "Leads CRM",
    description: "Lead Capture and CRM Management for Yash Deliwala",
    start_url: "/leads",
    display: "standalone",
    background_color: "#f7fbff",
    theme_color: "#0f172a",
    orientation: "portrait",
    icons: [
      {
        src: "/clients/logo (2).jpeg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "maskable",
      },
      {
        src: "/clients/logo (2).jpeg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
