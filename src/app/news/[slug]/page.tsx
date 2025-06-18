import NewsDetail from "@/components/NewsDetail";
import { getNewsBySlug } from "@/services/getNewsBySlug";
import { s } from "framer-motion/client";

export default async function NewsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const news = await getNewsBySlug(slug);
  if (!news || news.length === 0) {
    return <div>Không tìm thấy tin tức</div>;
  }

  return (
    <div className="min-h-screen max-w-3xl mx-auto bg-white">
      <NewsDetail news={news} />
    </div>
  );
}
