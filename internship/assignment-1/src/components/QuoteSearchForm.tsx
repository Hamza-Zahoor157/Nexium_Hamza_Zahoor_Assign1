"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function QuoteSearchForm() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("search", query);
    window.location.href = newUrl.toString(); // Triggers a refresh with new query
  };

  return (
    <div className="flex space-x-2 mb-4">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search quotes..."
        className="border px-4 py-2 rounded w-full"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </div>
  );
}
