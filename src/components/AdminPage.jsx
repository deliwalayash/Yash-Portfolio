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
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState(emptyBlogForm);
  const [editingId, setEditingId] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const sortedBlogs = useMemo(
    () => [...blogs].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)),
    [blogs]
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
    if (session) loadAdminBlogs();
  }, [session]);

  const loadAdminBlogs = async () => {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) setMessage(error.message);
    else setBlogs(data || []);
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
  };

  const updateForm = (field, value) => {
    setForm((current) => ({
      ...current,
      [field]: value,
      ...(field === "title" && !editingId ? { slug: makeSlug(value) } : {}),
    }));
  };

  const resetForm = () => {
    setForm(emptyBlogForm);
    setEditingId(null);
    setImageFile(null);
    setMessage("");
  };

  const editBlog = (blog) => {
    setEditingId(blog.id);
    setForm({
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

  const uploadImage = async () => {
    if (!imageFile) return form.image_url;

    const extension = imageFile.name.split(".").pop();
    const filename = `${Date.now()}-${makeSlug(imageFile.name.replace(/\.[^.]+$/, ""))}.${extension}`;
    const { error } = await supabase.storage.from("blog-images").upload(filename, imageFile);
    if (error) throw error;

    const { data } = supabase.storage.from("blog-images").getPublicUrl(filename);
    return data.publicUrl;
  };

  const saveBlog = async (event) => {
    event.preventDefault();
    setMessage("Saving blog...");

    try {
      const imageUrl = await uploadImage();
      const payload = {
        ...form,
        slug: makeSlug(form.slug || form.title),
        image_url: imageUrl,
        updated_at: new Date().toISOString(),
      };

      const request = editingId
        ? supabase.from("blogs").update(payload).eq("id", editingId)
        : supabase.from("blogs").insert(payload);

      const { error } = await request;
      if (error) throw error;

      const successMessage = editingId ? "Blog updated." : "Blog created.";
      resetForm();
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
            <h1>Manage Blogs</h1>
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
            <p className="ads-eyebrow">Admin Panel</p>
            <h1>Blog Dashboard</h1>
          </div>
          <button type="button" onClick={handleLogout}>Logout</button>
        </section>

        <section className="admin-layout">
          <form className="admin-form admin-editor" onSubmit={saveBlog}>
            <h2>{editingId ? "Edit Blog" : "New Blog"}</h2>
            <input required placeholder="Title" value={form.title} onChange={(event) => updateForm("title", event.target.value)} />
            <input required placeholder="Slug" value={form.slug} onChange={(event) => updateForm("slug", event.target.value)} />
            <textarea placeholder="Short description" rows={3} value={form.excerpt} onChange={(event) => updateForm("excerpt", event.target.value)} />
            <textarea required placeholder="Full blog content" rows={10} value={form.content} onChange={(event) => updateForm("content", event.target.value)} />
            <input placeholder="SEO title" value={form.seo_title} onChange={(event) => updateForm("seo_title", event.target.value)} />
            <textarea placeholder="SEO description" rows={3} value={form.seo_description} onChange={(event) => updateForm("seo_description", event.target.value)} />
            <input placeholder="Image URL" value={form.image_url} onChange={(event) => updateForm("image_url", event.target.value)} />
            <input type="file" accept="image/*" onChange={(event) => setImageFile(event.target.files?.[0] || null)} />
            <label className="admin-checkbox">
              <input type="checkbox" checked={form.is_published} onChange={(event) => updateForm("is_published", event.target.checked)} />
              Publish this blog
            </label>
            <div className="admin-actions">
              <button type="submit">{editingId ? "Update Blog" : "Create Blog"}</button>
              <button type="button" onClick={resetForm}>Clear</button>
            </div>
            {message && <p className="admin-message">{message}</p>}
          </form>

          <div className="admin-blog-list">
            <h2>All Blogs</h2>
            {sortedBlogs.length === 0 && <p className="blog-muted">No blogs yet.</p>}
            {sortedBlogs.map((blog) => (
              <article className="admin-blog-row" key={blog.id}>
                <div>
                  <span>{blog.is_published ? "Published" : "Draft"}</span>
                  <h3>{blog.title}</h3>
                  <p>/{blog.slug}</p>
                </div>
                <div>
                  <button type="button" onClick={() => editBlog(blog)}>Edit</button>
                  <button type="button" onClick={() => deleteBlog(blog.id)}>Delete</button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
