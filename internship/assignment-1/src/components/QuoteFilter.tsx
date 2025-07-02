"use client";

export default function QuoteFilter({ 
  searchText, 
  setSearchText 
}: {
  searchText: string,
  setSearchText: (text: string) => void
}) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search quotes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded"
      />
    </div>
  );
}