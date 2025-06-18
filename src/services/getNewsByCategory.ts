// services/getNewsByCategory.ts
export async function getNewByCategory(slug: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories/${slug}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      console.error("Fetch failed with status:", res.status);
      return [];
    }

    const result = await res.json();

    console.log("✔️ Fetched result for", slug, result);

    // Kiểm tra xem result có phải object và có result.news là mảng
    if (result && Array.isArray(result.news)) {
      return result.news;
    }

    return [];
  } catch (err) {
    console.error("❌ Error fetching category:", err);
    return [];
  }
}
  