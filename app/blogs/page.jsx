import { BlogCard, ConfigNotice, SiteShell } from "../../src/components/GoogleAdsSite";
import { getPublishedBlogs } from "../../src/lib/blog-data";
import { isSupabaseConfigured } from "../../src/lib/supabase";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Google Ads Blog",
  description:
    "Read Google Ads tips, strategy, and local lead generation ideas from Yash Deliwala.",
  keywords: [
    "Google Ads Blog",
    "Google Ads Tips",
    "PPC Strategy",
    "Lead Generation",
    "Google Ads Surat",
  ],
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Google Ads Blog | Yash Google Ads Expert",
    description:
      "Read practical Google Ads tips and local lead generation ideas from Yash Deliwala.",
    url: "https://yashdeliwala.com/blogs",
    type: "website",
    images: ["/yash-google-ads-photo.png"],
  },
};

export default async function BlogsPage() {
  if (!isSupabaseConfigured) return <ConfigNotice />;

  const { data: blogs, error } = await getPublishedBlogs();

  return (
    <SiteShell>
      <main className="blog-page">
        <section className="blog-hero">
          <p className="ads-eyebrow">Google Ads Blog</p>
          <h1>Google Ads tips, strategy, and local lead generation ideas.</h1>
          <p>Read practical posts from Yash Deliwala on running better Google Ads campaigns.</p>
        </section>

        <section className="blog-list-section">
          {error && <p className="blog-error">{error.message}</p>}
          {!error && blogs.length === 0 && (
            <p className="blog-muted">No published blogs yet.</p>
          )}

          <div className="blog-grid">
            {blogs.map((blog) => (
              <BlogCard blog={blog} key={blog.id} />
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
