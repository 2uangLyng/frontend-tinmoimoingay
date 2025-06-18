"use client";

import { useRouter } from "next/navigation";

export default function SearchForm() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = (e.target as HTMLFormElement).query.value.trim();

    // Kiểm tra nếu có giá trị query
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        name="query"
        className="w-full py-2 pl-10 pr-4 text-sm text-gray-900 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
        placeholder="Search ..."
      />
    </form>
  );
}
