"use client";

import { News } from "@/lib/News";
import Image from "next/image";
import Link from "next/link";

type NewsResponse = {
  data: News[];
  total: number;
};
export default function NewsListByCategory({ news }: { news: NewsResponse }) {
  const items = news.data ?? [];

  if (!Array.isArray(items) || items.length === 0) {
    return <p className="text-gray-500">Không có tin tức.</p>;
  }

  const grouped = items.reduce<Record<string, News[]>>((acc, item) => {
    const categoryName = item.category?.name || "Khác";
    if (!acc[categoryName]) acc[categoryName] = [];
    acc[categoryName].push(item);
    return acc;
  }, {});

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {Object.entries(grouped).map(([categoryName, items]) => (
        <section key={categoryName} className="mb-10">
          <h2 className="relative text-2xl font-bold mb-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-6 before:bg-red-500 before:rounded-sm pl-4">
            {categoryName}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-32 relative mb-2">
                  <Image
                    src={item.thumbnail.replace("[", "").replace("]", "")}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="rounded-md object-cover"
                  />
                </div>
                <Link href={`/news/${item.slug}`}>
                  <h3 className="text-sm font-semibold line-clamp-2">
                    {item.title}
                  </h3>
                </Link>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
