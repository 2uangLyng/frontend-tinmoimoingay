export function getNewsBySlug(slug: string) {
  return fetch(`http://localhost:8000/news/${slug}`, {
    next: { revalidate: 60 },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Lấy tin tức thất bại");
      }
      return res.json();
    })
    .then((data) => data);
}
