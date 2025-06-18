import NewsList from "@/components/NewsList";
import SearchForm from "@/components/SearchForm";
import { getSearchResults } from "@/services/getSearchResults";
import { Search } from "lucide-react";
import { notFound } from "next/navigation";
import React from "react";

type SearchPageProps = {
  searchParams: {
    q?: string;
  };
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const query = await searchParams;
  if (!query || !query.q) {
    return notFound();
  }
  const result = await getSearchResults(query.q);
  return (
    <div className="max-w-3xl mx-auto py-6 px-2 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-center">Tìm kiếm</h1>
      <SearchForm />
      <p className="font-black text-xl ">{result.total} kết quả phù hợp</p>
      <NewsList news={result.data} singleColumn/>
    </div>
  );
}
