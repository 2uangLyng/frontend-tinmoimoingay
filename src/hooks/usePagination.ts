import { useState } from "react";

export function usePagination<T>(data: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const start = currentPage * itemsPerPage;
  const end = start + itemsPerPage;
  const currentData = data.slice(start, end);

  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  return {
    currentData,
    currentPage,
    totalPages,
    goToNextPage,
    goToPrevPage,
  };
}
