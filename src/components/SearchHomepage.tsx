"use client";

import { Search } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import motion và AnimatePresence
import SearchForm from "./SearchForm";

function SearchHomepage() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchContainerRef = useRef<HTMLDivElement>(null); // Đổi tên ref để rõ ràng hơn

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    // Logic đóng khi click ra ngoài
    const handleClickOutside = (event: MouseEvent) => {
      // Nếu searchFormRef.current tồn tại VÀ click không phải bên trong nó
      if (
        isSearchOpen &&
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  return (
    <div className="relative w-full">
      <AnimatePresence>
        {isSearchOpen ? (
          <motion.div
            ref={searchContainerRef}
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=" z-10 w-full"
          >
            <div className="relative flex items-center">
              {/* Icon search bên trong form */}
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <SearchForm />
            </div>
          </motion.div>
        ) : (
          <button onClick={toggleSearch}>
            <Search />
          </button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default SearchHomepage;
