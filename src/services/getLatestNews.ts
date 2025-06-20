export async function getLatestNews() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/news/latest`,
      {
        cache: "no-store",
      }
    );
    const json = await res.json();
    return json.data; // ✅ Lấy ra mảng dữ liệu
  } catch (err) {
    console.error("❌ Error fetching latest news:", err);
    return []; // fallback để Hero không lỗi
  }
}
