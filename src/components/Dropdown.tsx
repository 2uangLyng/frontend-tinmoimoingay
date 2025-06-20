"use client";
import { Category } from "@/lib/Category";
import { Ellipsis, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Dropdown({ categories }: { categories: Category[] }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 cursor-pointer"
      >
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Ellipsis className="h-5 w-5" />
          )}
        </motion.div>
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scaleY: 0.75 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0.75 }}
            transition={{ duration: 0.25 }}
            className="absolute left-0 top-full w-screen bg-indigo-950 shadow-lg z-50 origin-top"
          >
            <div className="max-w-6xl mx-auto px-4 py-4">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/category/${category.slug}`}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 text-[18px] text-white transition-colors hover:text-pink-400"
                  >
                    <span className="flex before:-inset-1 before:block before:h-5 before:w-2 before:-skew-y-10 before:bg-pink-500 before:py-2">
                      {category.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Dropdown;
