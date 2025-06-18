export async function getSearchResults(query: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/search/${query}`
  );
  console.log("Fetching search results for query:", query);
  console.log(
    "API URL:",
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/search/${query}`
  );
  console.log("Response status:", res.status);
  if (!res.ok) {
    throw new Error("Lấy kết quả tìm kiếm thất bại");
  }

  const results = await res.json();
  return results;
}
