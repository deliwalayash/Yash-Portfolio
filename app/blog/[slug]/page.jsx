import { notFound } from "next/navigation";
import {
  BlogAuthorBio,
  BlogContent,
  BlogSidebar,
  BlogVisual,
  ConfigNotice,
  SiteShell,
  calculateReadingTime,
  formatDate,
} from "../../../src/components/GoogleAdsSite";
import { getPublishedBlogBySlug, getPublishedBlogs } from "../../../src/lib/blog-data";
import { isSupabaseConfigured } from "../../../src/lib/supabase";
import { SITE_URL, WHATSAPP_LINK } from "../../../src/lib/site-config";
import { FaArrowLeft, FaCalendarAlt, FaClock, FaUserEdit, FaWhatsapp } from "react-icons/fa";

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
    title: `${title} | Yash Google Ads Expert`,
    description,
    keywords: [
      "Google Ads",
      "Google Ads Expert",
      "PPC",
      "Lead Generation",
      "India",
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

  const { data: allBlogs } = await getPublishedBlogs(6);
  const suggestedBlogs = (allBlogs || []).filter((b) => b.slug !== slug).slice(0, 4);
  const readingTime = calculateReadingTime(blog.content);

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
        <div className="blog-container">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
          />

          <nav className="blog-nav-header">
            <a href="/blogs" className="blog-back-btn">
              <FaArrowLeft /> Back to all blogs
            </a>
            <span className="blog-category-badge">Google Ads Insights</span>
          </nav>

          <header className="blog-header">
            <h1>{blog.title}</h1>
            <div className="blog-meta-row">
              <div className="blog-meta-item">
                <FaUserEdit />
                <span>Yash Deliwala</span>
              </div>
              <div className="blog-meta-item">
                <FaCalendarAlt />
                <span>{formatDate(blog.created_at)}</span>
              </div>
              <div className="blog-meta-item">
                <FaClock />
                <span>{readingTime}</span>
              </div>
            </div>
          </header>

          <div className="blog-layout">
            <article className="blog-main-content">
              <div className="blog-cover-wrapper">
                <BlogVisual blog={blog} variant="detail" />
              </div>

              <BlogContent content={blog.content} />

              <BlogAuthorBio />

              <div className="blog-bottom-cta">
                <h3>Want to Scale Your Business with Google Ads?</h3>
                <p>Get direct campaign planning, Search ad setup, and lead optimization with Yash Deliwala.</p>
                <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="ads-button ads-button--primary">
                  <FaWhatsapp /> Chat with Yash on WhatsApp
                </a>
              </div>
            </article>

            <BlogSidebar suggestedBlogs={suggestedBlogs} />
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
