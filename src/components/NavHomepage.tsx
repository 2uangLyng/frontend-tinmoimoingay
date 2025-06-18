"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import SearchHomepage from "./SearchHomepage";
import { Category } from "@/lib/Category";
import Dropdown from "./Dropdown";

const NavHomepage = ({ categories }: { categories: Category[] }) => {
  const pathname = usePathname();
  const isSearchPage = pathname.startsWith("/search");

  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile layout */}
          <div className="flex flex-1 items-center justify-between md:hidden w-full">
            {/* Dropdown bên trái */}
            <div className="flex-shrink-0">
              <Dropdown categories={categories} />
            </div>

            {/* Logo ở giữa */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/" className="text-xl font-bold text-gray-900">
                NewsHub
              </Link>
            </div>

            {/* Search bar bên phải */}
            <div className="flex-shrink-0">
              {!isSearchPage && (
                <div className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <SearchHomepage />
                </div>
              )}
            </div>
          </div>

          {/* Desktop layout */}
          <div className="hidden md:flex items-center justify-between w-full">
            {/* Logo bên trái */}
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                NewsHub
              </Link>
            </div>

            {/* Navigation giữa */}
            <nav className="flex space-x-8">
              {categories.slice(0, 6).map((category) => (
                <Link
                  key={category.id}
                  href={`/category/${category.slug}`}
                  className="text-black hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {category.name}
                </Link>
              ))}
              <Dropdown categories={categories} />
            </nav>

            {/* Search bên phải */}
            <div className="flex items-center space-x-4">
              {!isSearchPage && (
                <div className="p-2 text-gray-600 hover:text-gray-900 transition-colors">
                  <SearchHomepage />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavHomepage;
