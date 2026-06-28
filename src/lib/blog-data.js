import { isSupabaseConfigured, supabase } from "./supabase";

const blogListColumns = "id,title,slug,excerpt,image_url,created_at";

export async function getPublishedBlogs(limit) {
  if (!isSupabaseConfigured) return { data: [], error: null };

  let query = supabase
    .from("blogs")
    .select(blogListColumns)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  return { data: data || [], error };
}

export async function getPublishedBlogBySlug(slug) {
  if (!isSupabaseConfigured) return { data: null, error: null };

  const { data, error } = await supabase
    .from("blogs")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  return { data, error };
}
