"use client";

import { useEffect, useMemo, useState } from "react";
import { ConfigNotice, SiteShell } from "./GoogleAdsSite";
import { isSupabaseConfigured, supabase } from "../lib/supabase";

const emptyBlogForm = {
  title: "",
  slug: "",
  excerpt: "",
  content: "",
  image_url: "",
  seo_title: "",
  seo_description: "",
  is_published: true,
};

const emptySeoForm = {
  page_name: "",
  slug: "",
  service: "Google Ads",
  city: "",
  state: "Gujarat",
  h1: "",
  hero_subtitle: "",
  meta_title: "",
  meta_description: "",
  canonical_url: "",
  content: "",
  faq: [
    {
      question: "Do you provide Google Ads management in this city?",
      answer: "Yes. I provide full Google Ads setup, Search Ads, Performance Max, conversion tracking, and ongoing optimization.",
    },
    {
      question: "Can I hire you as a Google Ads freelancer?",
      answer: "Yes, I work directly with business owners and marketing teams as a dedicated Google Ads freelancer and PPC consultant.",
    },
    {
      question: "What is the monthly management fee?",
      answer: "Google Ads management starts from Rs. 15,000/month, with direct WhatsApp communication and transparent reporting.",
    },
  ],
  image_url: "",
  is_published: true,
};

const makeSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function AdminPage() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeTab, setActiveTab] = useState("blogs"); // 'blogs' | 'seo'

  // Blog State
  const [blogs, setBlogs] = useState([]);
  const [blogForm, setBlogForm] = useState(emptyBlogForm);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [blogImageFile, setBlogImageFile] = useState(null);

  // SEO Pages State
  const [seoPages, setSeoPages] = useState([]);
  const [seoForm, setSeoForm] = useState(emptySeoForm);
  const [editingSeoId, setEditingSeoId] = useState(null);
  const [seoImageFile, setSeoImageFile] = useState(null);

  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const sortedBlogs = useMemo(
    () => [...blogs].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    [blogs]
  );

  const sortedSeoPages = useMemo(
    () => [...seoPages].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    [seoPages]
  );

  useEffect(() => {
    if (!isSupabaseConfigured) return;

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (session) {
      loadAdminBlogs();
      loadAdminSeoPages();
    }
  }, [session]);

  const loadAdminBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) setMessage(error.message);
    else setBlogs(data || []);
  };

  const loadAdminSeoPages = async () => {
    const { data, error } = await supabase
      .from("seo_pages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) setMessage(error.message);
    else setSeoPages(data || []);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setMessage("Signing in...");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setMessage(error ? error.message : "");
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setBlogs([]);
    setSeoPages([]);
  };

  // ---------------- Blog Form Handlers ----------------
  const updateBlogForm = (field, value) => {
    setBlogForm((current) => ({
      ...current,
      [field]: value,
      ...(field === "title" && !editingBlogId ? { slug: makeSlug(value) } : {}),
    }));
  };

  const resetBlogForm = () => {
    setBlogForm(emptyBlogForm);
    setEditingBlogId(null);
    setBlogImageFile(null);
    setMessage("");
  };

  const editBlog = (blog) => {
    setEditingBlogId(blog.id);
    setBlogForm({
      title: blog.title || "",
      slug: blog.slug || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      image_url: blog.image_url || "",
      seo_title: blog.seo_title || "",
      seo_description: blog.seo_description || "",
      is_published: Boolean(blog.is_published),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const uploadImage = async (file, currentUrl) => {
    if (!file) return currentUrl;

    const extension = file.name.split(".").pop();
    const filename = `${Date.now()}-${makeSlug(file.name.replace(/\.[^.]+$/, ""))}.${extension}`;
    const { error } = await supabase.storage.from("blog-images").upload(filename, file);
    if (error) throw error;

    const { data } = supabase.storage.from("blog-images").getPublicUrl(filename);
    return data.publicUrl;
  };

  const saveBlog = async (event) => {
    event.preventDefault();
    setMessage("Saving blog...");

    try {
      const imageUrl = await uploadImage(blogImageFile, blogForm.image_url);
      const payload = {
        ...blogForm,
        slug: makeSlug(blogForm.slug || blogForm.title),
        image_url: imageUrl,
        updated_at: new Date().toISOString(),
      };

      const request = editingBlogId
        ? supabase.from("blogs").update(payload).eq("id", editingBlogId)
        : supabase.from("blogs").insert(payload);

      const { error } = await request;
      if (error) throw error;

      const successMessage = editingBlogId ? "Blog updated." : "Blog created.";
      resetBlogForm();
      setMessage(successMessage);
      loadAdminBlogs();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const deleteBlog = async (id) => {
    if (!window.confirm("Delete this blog?")) return;

    const { error } = await supabase.from("blogs").delete().eq("id", id);
    setMessage(error ? error.message : "Blog deleted.");
    if (!error) loadAdminBlogs();
  };

  // ---------------- SEO Page Form Handlers ----------------
  const updateSeoForm = (field, value) => {
    setSeoForm((current) => {
      const updated = { ...current, [field]: value };

      // Helper defaults for new pages
      if (!editingSeoId) {
        if (field === "city" || field === "service") {
          const service = field === "service" ? value : current.service || "Google Ads";
          const city = field === "city" ? value : current.city;
          if (city) {
            if (!current.slug || current.slug === makeSlug(`${current.service || "google-ads"}-expert-${current.city}`)) {
              updated.slug = makeSlug(`${service}-expert-${city}`);
            }
            if (!current.page_name || current.page_name.includes("Expert")) {
              updated.page_name = `${service} Expert in ${city}`;
            }
            if (!current.h1) {
              updated.h1 = `${service} Expert in ${city} for Search Ads, Leads and Calls`;
            }
            if (!current.meta_title) {
              updated.meta_title = `${service} Expert in ${city} | Yash Deliwala`;
            }
            if (!current.meta_description) {
              updated.meta_description = `Hire Yash Deliwala, a verified ${service} expert in ${city} for Search Ads, PPC management, lead generation, and Performance Max.`;
            }
          }
        } else if (field === "page_name" && !current.slug) {
          updated.slug = makeSlug(value);
        }
      }

      return updated;
    });
  };

  const handleFaqChange = (index, subField, val) => {
    setSeoForm((current) => {
      const updatedFaq = [...(current.faq || [])];
      updatedFaq[index] = { ...updatedFaq[index], [subField]: val };
      return { ...current, faq: updatedFaq };
    });
  };

  const addFaqItem = () => {
    setSeoForm((current) => ({
      ...current,
      faq: [...(current.faq || []), { question: "", answer: "" }],
    }));
  };

  const removeFaqItem = (index) => {
    setSeoForm((current) => ({
      ...current,
      faq: (current.faq || []).filter((_, i) => i !== index),
    }));
  };

  const resetSeoForm = () => {
    setSeoForm(emptySeoForm);
    setEditingSeoId(null);
    setSeoImageFile(null);
    setMessage("");
  };

  const editSeoPage = (page) => {
    setEditingSeoId(page.id);
    setSeoForm({
      page_name: page.page_name || "",
      slug: page.slug || "",
      service: page.service || "Google Ads",
      city: page.city || "",
      state: page.state || "Gujarat",
      h1: page.h1 || "",
      hero_subtitle: page.hero_subtitle || "",
      meta_title: page.meta_title || "",
      meta_description: page.meta_description || "",
      canonical_url: page.canonical_url || "",
      content: page.content || "",
      faq: Array.isArray(page.faq) && page.faq.length > 0 ? page.faq : emptySeoForm.faq,
      image_url: page.image_url || "",
      is_published: Boolean(page.is_published),
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const saveSeoPage = async (event) => {
    event.preventDefault();
    setMessage("Saving SEO page...");

    try {
      const imageUrl = await uploadImage(seoImageFile, seoForm.image_url);
      const cleanFaq = (seoForm.faq || []).filter(
        (item) => item.question && item.question.trim() && item.answer && item.answer.trim()
      );

      const payload = {
        ...seoForm,
        slug: makeSlug(seoForm.slug || `${seoForm.service}-expert-${seoForm.city}`),
        faq: cleanFaq,
        image_url: imageUrl,
        updated_at: new Date().toISOString(),
      };

      const request = editingSeoId
        ? supabase.from("seo_pages").update(payload).eq("id", editingSeoId)
        : supabase.from("seo_pages").insert(payload);

      const { error } = await request;
      if (error) throw error;

      const successMessage = editingSeoId ? "SEO Page updated." : "SEO Page created.";
      resetSeoForm();
      setMessage(successMessage);
      loadAdminSeoPages();
    } catch (error) {
      setMessage(error.message);
    }
  };

  const deleteSeoPage = async (id) => {
    if (!window.confirm("Delete this SEO page?")) return;

    const { error } = await supabase.from("seo_pages").delete().eq("id", id);
    setMessage(error ? error.message : "SEO Page deleted.");
    if (!error) loadAdminSeoPages();
  };

  if (!isSupabaseConfigured) return <ConfigNotice />;

  if (loading) {
    return (
      <SiteShell>
        <main className="admin-page">
          <p>Loading admin...</p>
        </main>
      </SiteShell>
    );
  }

  if (!session) {
    return (
      <SiteShell>
        <main className="admin-page">
          <section className="admin-login">
            <p className="ads-eyebrow">Admin Login</p>
            <h1>Manage Website</h1>
            <form onSubmit={handleLogin} className="admin-form">
              <input type="email" required placeholder="Admin email" value={email} onChange={(event) => setEmail(event.target.value)} />
              <input type="password" required placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)} />
              <button type="submit">Login</button>
            </form>
            {message && <p className="admin-message">{message}</p>}
          </section>
        </main>
      </SiteShell>
    );
  }

  return (
    <SiteShell>
      <main className="admin-page">
        <section className="admin-toolbar">
          <div>
            <p className="ads-eyebrow">Admin Dashboard</p>
            <h1>Content Manager</h1>
          </div>
          <button type="button" onClick={handleLogout}>Logout</button>
        </section>

        {/* Tab Navigation */}
        <div className="admin-tabs">
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === "blogs" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("blogs");
              setMessage("");
            }}
          >
            📝 Blogs ({blogs.length})
          </button>
          <button
            type="button"
            className={`admin-tab-btn ${activeTab === "seo" ? "active" : ""}`}
            onClick={() => {
              setActiveTab("seo");
              setMessage("");
            }}
          >
            🚀 SEO Landing Pages ({seoPages.length})
          </button>
        </div>

        {/* ---------------- BLOGS TAB ---------------- */}
        {activeTab === "blogs" && (
          <section className="admin-layout">
            <form className="admin-form admin-editor" onSubmit={saveBlog}>
              <h2>{editingBlogId ? "Edit Blog" : "New Blog"}</h2>
              <div className="admin-form-group">
                <label>Blog Title</label>
                <input required placeholder="Enter blog title" value={blogForm.title} onChange={(event) => updateBlogForm("title", event.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Slug (URL: /blog/your-slug)</label>
                <input required placeholder="e.g. google-ads-management-guide" value={blogForm.slug} onChange={(event) => updateBlogForm("slug", event.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Short Excerpt / Summary</label>
                <textarea placeholder="Brief summary of this blog" rows={3} value={blogForm.excerpt} onChange={(event) => updateBlogForm("excerpt", event.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Full Blog Content (Supports Markdown headers, lists, links)</label>
                <textarea required placeholder="Write your full article here..." rows={10} value={blogForm.content} onChange={(event) => updateBlogForm("content", event.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>SEO Meta Title</label>
                <input placeholder="SEO title (appears in Google search results)" value={blogForm.seo_title} onChange={(event) => updateBlogForm("seo_title", event.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>SEO Meta Description</label>
                <textarea placeholder="SEO meta description snippet" rows={3} value={blogForm.seo_description} onChange={(event) => updateBlogForm("seo_description", event.target.value)} />
              </div>
              <div className="admin-form-group">
                <label>Featured Image</label>
                <input placeholder="Image URL (e.g. /clients/blog-cover.jpg)" value={blogForm.image_url} onChange={(event) => updateBlogForm("image_url", event.target.value)} />
                <input type="file" accept="image/*" onChange={(event) => setBlogImageFile(event.target.files?.[0] || null)} />
              </div>
              <label className="admin-checkbox">
                <input type="checkbox" checked={blogForm.is_published} onChange={(event) => updateBlogForm("is_published", event.target.checked)} />
                Publish this blog (Live on website)
              </label>
              <div className="admin-actions">
                <button type="submit">{editingBlogId ? "Update Blog" : "Create Blog"}</button>
                <button type="button" onClick={resetBlogForm}>Clear</button>
              </div>
              {message && <p className="admin-message">{message}</p>}
            </form>

            <div className="admin-blog-list">
              <h2>All Blogs</h2>
              {sortedBlogs.length === 0 && <p className="blog-muted">No blogs yet.</p>}
              {sortedBlogs.map((blog) => (
                <article className="admin-blog-row" key={blog.id}>
                  <div>
                    <span className={blog.is_published ? "badge-published" : "badge-draft"}>
                      {blog.is_published ? "● Published" : "○ Draft"}
                    </span>
                    <h3>{blog.title}</h3>
                    <p>
                      <a href={`/blog/${blog.slug}`} target="_blank" rel="noreferrer" className="admin-view-link">
                        /blog/{blog.slug} ↗
                      </a>
                    </p>
                  </div>
                  <div>
                    <button type="button" onClick={() => editBlog(blog)}>Edit</button>
                    <button type="button" onClick={() => deleteBlog(blog.id)}>Delete</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* ---------------- SEO LANDING PAGES TAB ---------------- */}
        {activeTab === "seo" && (
          <section className="admin-layout">
            <form className="admin-form admin-editor" onSubmit={saveSeoPage}>
              <h2>{editingSeoId ? "Edit SEO Page" : "New SEO Landing Page"}</h2>
              
              <div className="admin-form-group">
                <label>Target Service & City</label>
                <div className="admin-form-row">
                  <input
                    required
                    placeholder="Service (e.g. Google Ads, PPC, SEO)"
                    value={seoForm.service}
                    onChange={(event) => updateSeoForm("service", event.target.value)}
                  />
                  <input
                    required
                    placeholder="City (e.g. Surat, Ahmedabad, Mumbai)"
                    value={seoForm.city}
                    onChange={(event) => updateSeoForm("city", event.target.value)}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>State & Internal Page Name</label>
                <div className="admin-form-row">
                  <input
                    placeholder="State (default: Gujarat)"
                    value={seoForm.state}
                    onChange={(event) => updateSeoForm("state", event.target.value)}
                  />
                  <input
                    required
                    placeholder="Internal Name (e.g. Google Ads Expert in Surat)"
                    value={seoForm.page_name}
                    onChange={(event) => updateSeoForm("page_name", event.target.value)}
                  />
                </div>
              </div>

              <div className="admin-form-group">
                <label>URL Slug (Target URL e.g. /google-ads-expert-surat)</label>
                <input
                  required
                  placeholder="Slug (e.g. google-ads-expert-surat)"
                  value={seoForm.slug}
                  onChange={(event) => updateSeoForm("slug", event.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label>Main Headline (H1 Hero Title)</label>
                <input
                  required
                  placeholder="H1 Hero Title (e.g. Google Ads Expert in Surat for High-ROI Leads)"
                  value={seoForm.h1}
                  onChange={(event) => updateSeoForm("h1", event.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label>Hero Subtitle / Overview</label>
                <textarea
                  placeholder="Hero Subtitle / Description"
                  rows={2}
                  value={seoForm.hero_subtitle}
                  onChange={(event) => updateSeoForm("hero_subtitle", event.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label>Meta Title (for Google & Social Media)</label>
                <input
                  required
                  placeholder="Meta Title (e.g. Google Ads Expert in Surat | Yash Deliwala PPC Freelancer)"
                  value={seoForm.meta_title}
                  onChange={(event) => updateSeoForm("meta_title", event.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label>Meta Description (Google Snippet)</label>
                <textarea
                  required
                  placeholder="Meta Description (e.g. Hire Yash Deliwala, verified Google Ads expert in Surat...)"
                  rows={3}
                  value={seoForm.meta_description}
                  onChange={(event) => updateSeoForm("meta_description", event.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label>Canonical URL (Optional override e.g. https://yashdeliwala.com/custom-slug)</label>
                <input
                  placeholder="Canonical URL (Optional override)"
                  value={seoForm.canonical_url}
                  onChange={(event) => updateSeoForm("canonical_url", event.target.value)}
                />
              </div>

              <div className="admin-form-group">
                <label>Custom Strategy & Content (Supports Markdown headers ###, bullets -, checkmarks ✅)</label>
                <textarea
                  placeholder="Custom In-depth Page Strategy Content (Optional detailed strategy for this location)"
                  rows={6}
                  value={seoForm.content}
                  onChange={(event) => updateSeoForm("content", event.target.value)}
                />
              </div>

              {/* Dynamic FAQ Builder */}
              <div className="admin-faq-section">
                <div className="admin-faq-header">
                  <div>
                    <h3>Interactive FAQs & Schema</h3>
                    <p className="admin-hint-text">Automatically creates Google FAQ Rich Snippet schema for top rankings.</p>
                  </div>
                  <button type="button" className="btn-add-faq" onClick={addFaqItem}>
                    + Add FAQ
                  </button>
                </div>
                {(seoForm.faq || []).map((faqItem, idx) => (
                  <div key={idx} className="admin-faq-item">
                    <div className="admin-faq-item-header">
                      <span>FAQ #{idx + 1}</span>
                      <button type="button" className="btn-remove-faq" onClick={() => removeFaqItem(idx)}>
                        ✕ Remove
                      </button>
                    </div>
                    <input
                      placeholder="Question (e.g. Do you manage Google Ads for Surat businesses?)"
                      value={faqItem.question}
                      onChange={(e) => handleFaqChange(idx, "question", e.target.value)}
                    />
                    <textarea
                      placeholder="Answer"
                      rows={2}
                      value={faqItem.answer}
                      onChange={(e) => handleFaqChange(idx, "answer", e.target.value)}
                    />
                  </div>
                ))}
              </div>

              <div className="admin-form-group">
                <label>Featured Image / OG Social Image</label>
                <input
                  placeholder="Featured / OG Image URL"
                  value={seoForm.image_url}
                  onChange={(event) => updateSeoForm("image_url", event.target.value)}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => setSeoImageFile(event.target.files?.[0] || null)}
                />
              </div>

              <label className="admin-checkbox">
                <input
                  type="checkbox"
                  checked={seoForm.is_published}
                  onChange={(event) => updateSeoForm("is_published", event.target.checked)}
                />
                Publish this SEO landing page (Live & Indexable)
              </label>

              <div className="admin-actions">
                <button type="submit">{editingSeoId ? "Update SEO Page" : "Create SEO Page"}</button>
                <button type="button" onClick={resetSeoForm}>Clear</button>
              </div>
              {message && <p className="admin-message">{message}</p>}
            </form>

            <div className="admin-blog-list">
              <h2>All SEO Pages</h2>
              {sortedSeoPages.length === 0 && (
                <p className="blog-muted">No dynamic SEO landing pages yet. Create your first one!</p>
              )}
              {sortedSeoPages.map((page) => (
                <article className="admin-blog-row" key={page.id}>
                  <div>
                    <span className={page.is_published ? "badge-published" : "badge-draft"}>
                      {page.is_published ? "● Published" : "○ Draft"}
                    </span>
                    <h3>{page.page_name || page.h1}</h3>
                    <p>
                      <strong>{page.service}</strong> in <strong>{page.city}</strong>
                    </p>
                    <p>
                      <a href={`/${page.slug}`} target="_blank" rel="noreferrer" className="admin-view-link">
                        /{page.slug} ↗
                      </a>
                    </p>
                  </div>
                  <div>
                    <button type="button" onClick={() => editSeoPage(page)}>Edit</button>
                    <button type="button" onClick={() => deleteSeoPage(page.id)}>Delete</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </main>
    </SiteShell>
  );
}
