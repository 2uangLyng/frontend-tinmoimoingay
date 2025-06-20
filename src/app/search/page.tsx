import NewsList from "@/components/NewsList";
import SearchForm from "@/components/SearchForm";
import { getSearchResults } from "@/services/getSearchResults";
import React from "react";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const resolved = await searchParams;
  const result = await getSearchResults(resolved.q ?? "");

  return (
    <div className="max-w-3xl mx-auto py-6 px-2 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Tìm kiếm</h1>
      <SearchForm />
      <p className="font-black text-xl ">{result.total} kết quả phù hợp</p>
      <NewsList news={result.data} singleColumn />
    </div>
  );
}
