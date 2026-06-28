import { notFound } from "next/navigation";
import {
  BlogContent,
  BlogVisual,
  ConfigNotice,
  SiteShell,
  formatDate,
} from "../../../src/components/GoogleAdsSite";
import { getPublishedBlogBySlug } from "../../../src/lib/blog-data";
import { isSupabaseConfigured } from "../../../src/lib/supabase";
import { SITE_URL } from "../../../src/lib/site-config";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { data: blog } = await getPublishedBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog not found",
    };
  }

  const title = blog.seo_title || blog.title;
  const description = blog.seo_description || blog.excerpt;
  const image = blog.image_url || "/yash-google-ads-photo.png";

  return {
    title,
    description,
    keywords: [
      "Google Ads",
      "Google Ads Expert",
      "PPC",
      "Lead Generation",
      "Surat",
      blog.title,
    ],
    alternates: {
      canonical: `/blog/${blog.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/blog/${blog.slug}`,
      type: "article",
      publishedTime: blog.created_at,
      modifiedTime: blog.updated_at,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export default async function BlogDetailPage({ params }) {
  if (!isSupabaseConfigured) return <ConfigNotice />;

  const { slug } = await params;
  const { data: blog } = await getPublishedBlogBySlug(slug);

  if (!blog) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.seo_description || blog.excerpt,
    image: blog.image_url || `${SITE_URL}/yash-google-ads-photo.png`,
    datePublished: blog.created_at,
    dateModified: blog.updated_at || blog.created_at,
    author: {
      "@type": "Person",
      name: "Yash Deliwala",
    },
    publisher: {
      "@type": "Organization",
      name: "Yash Google Ads Expert",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/clients/logo.png`,
      },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${blog.slug}`,
  };

  return (
    <SiteShell>
      <main className="blog-page">
        <article className="blog-detail">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />
          <a href="/blogs" className="blog-back">Back to blogs</a>
          <p className="ads-eyebrow">{formatDate(blog.created_at)}</p>
          <h1>{blog.title}</h1>
          <BlogVisual blog={blog} variant="detail" />
          <BlogContent content={blog.content} />
        </article>
      </main>
    </SiteShell>
  );
}
