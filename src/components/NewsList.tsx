import { News } from "@/lib/News";
import Image from "next/image";
import Link from "next/link";
export default function NewsList({
  news,
  singleColumn = false,
}: {
  news: News[];
  singleColumn?: boolean;
}) {
  if (!news || news.length === 0) {
    return (
      <div className="flex items-center justify-center p-4 min-h-[100px]bg-gray-100 rounded-md shadow max-w-7xl mx-auto">
        <p className="text-gray-500">Không có tin tức !</p>
      </div>
    );
  }
  return (
    <div
      className={`grid gap-4 ${
        singleColumn ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2 "
      }`}
    >
      {news.map((item) => (
        <div
          key={item.id}
          className="flex flex-col md:flex-row bg-white p-4 rounded-md shadow hover:shadow-lg transition-shadow w-full min-h-[250px]"
        >
          {/* Thumbnail */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <Image
              src={item.thumbnail.replace("[", "").replace("]", "")}
              alt={item.title}
              width={400}
              height={200}
              className="w-full h-full object-cover rounded-md shadow mb-2 md:mb-0 md:mr-4"
            />
          </div>

          {/* Content */}
          <div className="md:ml-4 flex flex-col justify-start w-full">
            <Link href={`/news/${item.slug}`}>
              <div className="flex items-center justify-between gap-2 mb-1">
                <h2 className="text-base md:text-lg font-semibold flex-1">
                  {item.title}
                </h2>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  {new Date(item.pubDate).toLocaleDateString("vi-VN")}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base line-clamp-2 mt-1">
                {item.description}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
