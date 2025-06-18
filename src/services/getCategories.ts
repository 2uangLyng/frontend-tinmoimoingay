import { Category } from "@/lib/Category";

export async function getAllCategories(): Promise<Category[]> {
  const res = await fetch("http://localhost:8000/categories", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Lấy categories thất bại");
  }

  const categories = await res.json();
  return categories;
}

export async function getCategoryBySlug(
  slug: string
): Promise<Category | null> {
  const categories = await getAllCategories();
  return categories.find((category) => category.slug === slug) || null;
}
