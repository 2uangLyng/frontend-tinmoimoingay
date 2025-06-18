import { News } from "@/lib/News";
import Image from "next/image";
export default function NewsDetail({ news }: { news: News }) {
  return (
    <article className="prose lg:prose-xl mx-auto py-6 px-2 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
      <p className="text-gray-500 text-md mb-2">
        Ngày đăng bài: {new Date(news.pubDate).toLocaleDateString("vi-VN")}
      </p>

      {news.thumbnail && (
        <Image
          width={800}
          height={400}
          src={news.thumbnail.replace("[", "").replace("]", "")}
          alt={news.title}
          className="w-full rounded-md shadow mb-4"
        />
      )}

      <div
        className="text-base leading-relaxed"
        dangerouslySetInnerHTML={{ __html: news.content }}
      />
    </article>
  );
}
