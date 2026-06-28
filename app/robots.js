export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/admin",
    },
    sitemap: "https://yashdeliwala.com/sitemap.xml",
  };
}
