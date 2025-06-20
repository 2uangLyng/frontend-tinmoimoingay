"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePagination } from "@/hooks/usePagination";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { News } from "@/lib/News";

export default function LatestNews({ news }: { news: News[] }) {
  const isMobile = useIsMobile();
  const itemsPerPage = isMobile ? 2 : 5;

  const {
    currentData: currentNews,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
  } = usePagination(news, itemsPerPage);

  return (
    <section className="bg-gray-100 py-10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <h2 className="relative text-2xl font-bold mb-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-6 before:bg-red-500 before:rounded-sm pl-4">
          Tin tức mới nhất
        </h2>
        <p className="text-gray-600 mb-4">
          Cập nhật những tin tức mới nhất từ cộng đồng và các sự kiện quan
          trọng.
        </p>

        <button
          onClick={goToPrevPage}
          disabled={currentPage === 0}
          className={`absolute left-0 top-4/7 -translate-y-1/2 z-10 bg-white border shadow p-2 rounded-full hover:bg-gray-200 ${
            currentPage === 0 ? "opacity-70" : ""
          }`}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        <button
          onClick={goToNextPage}
          disabled={currentPage >= totalPages - 1}
          className={`absolute right-0 top-4/7 -translate-y-1/2 z-10 bg-white border shadow p-2 rounded-full hover:bg-gray-200 ${
            currentPage >= totalPages - 1 ? "opacity-50" : ""
          }`}
        >
          <ArrowRight className="h-5 w-5" />
        </button>

        <div className="overflow-hidden">
          <motion.div
            key={currentPage}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {currentNews.map((item) => (
              <div
                key={item.id}
                className="flex flex-col bg-white p-4 rounded-md shadow hover:shadow-lg transition-shadow"
              >
                <div className="w-full h-32 relative mb-2">
                  <Image
                    src={item.thumbnail.replace("[", "").replace("]", "")}
                    alt={item.title}
                    width={300}
                    height={200}
                    className="rounded-md object-cover"
                  />
                </div>
                <Link href={`/news/${item.slug}`}>
                  <h2 className="text-sm font-semibold line-clamp-3">
                    {item.title}
                  </h2>
                </Link>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
