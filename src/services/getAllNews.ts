export async function getAllNews() {
  const res = await fetch("http://localhost:8000/news", {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error("Lấy tin tức thất bại");
  }

  const news = await res.json();
  return news;
}
