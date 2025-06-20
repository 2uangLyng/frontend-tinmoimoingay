import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import NewsListByCategory from "@/components/NewsListByCategory";
import { getAllNews } from "@/services/getAllNews";
import { getFeaturedNews } from "@/services/getFeaturedNews";
import { getLatestNews } from "@/services/getLatestNews";

export const dynamic = "force-dynamic";

export default async function Home() {
  const featuredNews = await getFeaturedNews();
  const latestNews = await getLatestNews();
  const news = await getAllNews();
  return (
    <div className="min-h-screen bg-white">
      <Hero news={featuredNews} />
      <LatestNews news={latestNews} />
      <NewsListByCategory news={news} />
    </div>
  );
}
