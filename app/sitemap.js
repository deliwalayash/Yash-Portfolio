import { getPublishedBlogs } from "../src/lib/blog-data";
import { locationPages } from "../src/lib/location-pages";

export const dynamic = "force-dynamic";

export default async function sitemap() {
  const baseUrl = "https://yashdeliwala.com";
  const { data: blogs } = await getPublishedBlogs();

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
    ...locationPages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    })),
    ...blogs.map((blog) => ({
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
