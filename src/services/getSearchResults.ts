export async function getSearchResults(query: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/search/${query}`
  );
  if (!res.ok) {
    throw new Error("Lấy kết quả tìm kiếm thất bại");
  }

  const results = await res.json();
  return results;
}
