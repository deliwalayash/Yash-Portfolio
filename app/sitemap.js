import { getPublishedBlogs } from "../src/lib/blog-data";
import { locationPages } from "../src/lib/location-pages";
import { getPublishedSeoPages } from "../src/lib/seo-page-data";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = "https://yashdeliwala.com";
  const { data: blogs } = await getPublishedBlogs();
  const { data: seoPages } = await getPublishedSeoPages();

  const dynamicSeoSlugs = new Set((seoPages || []).map((p) => p.slug));

  // Static location pages that aren't already overridden in database
  const fallbackLocationEntries = locationPages
    .filter((page) => !dynamicSeoSlugs.has(page.slug))
    .map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    }));

  const dynamicSeoEntries = (seoPages || []).map((page) => ({
    url: `${baseUrl}/${page.slug}`,
    lastModified: page.updated_at
      ? new Date(page.updated_at)
      : page.created_at
        ? new Date(page.created_at)
        : new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/google-ads-agency-india`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...dynamicSeoEntries,
    ...fallbackLocationEntries,
    ...(blogs || []).map((blog) => ({
      url: `${baseUrl}/blog/${blog.slug}`,
      lastModified: blog.updated_at
        ? new Date(blog.updated_at)
        : blog.created_at
          ? new Date(blog.created_at)
          : new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    })),
  ];
}
