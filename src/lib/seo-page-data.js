import { isSupabaseConfigured, supabase } from "./supabase";

const seoPageListColumns =
  "id,page_name,slug,service,city,state,h1,meta_title,meta_description,is_published,created_at,updated_at";

export async function getPublishedSeoPages(limit) {
  if (!isSupabaseConfigured) return { data: [], error: null };

  let query = supabase
    .from("seo_pages")
    .select(seoPageListColumns)
    .eq("is_published", true)
    .order("created_at", { ascending: false });

  if (limit) query = query.limit(limit);

  const { data, error } = await query;
  return { data: data || [], error };
}

export async function getPublishedSeoPageBySlug(slug) {
  if (!isSupabaseConfigured) return { data: null, error: null };

  const { data, error } = await supabase
    .from("seo_pages")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single();

  return { data, error };
}

export async function getAllSeoPages() {
  if (!isSupabaseConfigured) return { data: [], error: null };

  const { data, error } = await supabase
    .from("seo_pages")
    .select("*")
    .order("created_at", { ascending: false });

  return { data: data || [], error };
}
