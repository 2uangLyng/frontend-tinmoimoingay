import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import { News } from "@/lib/News";

export default function Hero({ news }: { news: News[] }) {
  const featuredNews = news[0];
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
          <div className="space-y-6">
            <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {featuredNews?.category?.name}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {featuredNews?.title}
            </h1>
            <p className="text-lg text-gray-300 leading-relaxed"></p>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>
                  <span>
                    {new Date(featuredNews?.pubDate).toLocaleDateString(
                      "vi-VN"
                    )}
                  </span>
                </span>
              </div>
            </div>
            <Link
              href={`/news/${featuredNews?.slug}`}
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Đọc thêm
            </Link>
          </div>
          <div className="relative">
            <Image
              src={featuredNews.thumbnail.replace("[", "").replace("]", "")}
              alt={featuredNews.title}
              width={800}
              height={400}
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
