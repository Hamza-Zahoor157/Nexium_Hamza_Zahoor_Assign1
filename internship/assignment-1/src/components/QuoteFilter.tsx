"use client";
import { useState } from 'react';

export default function QuoteFilter({ allQuotes }: { allQuotes: any[] }) {
  const [searchText, setSearchText] = useState('');

  const filteredQuotes = searchText
    ? allQuotes.filter(quote => 
        quote.topic.toLowerCase().includes(searchText.toLowerCase()) ||
        quote.text.toLowerCase().includes(searchText.toLowerCase()) ||
        quote.author.toLowerCase().includes(searchText.toLowerCase())
      )
    : allQuotes; // Show ALL quotes when no search term

  return (
    <div>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search quotes..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        className="w-full p-2 border mb-6 rounded"
      />

      {/* All Quotes List */}
      <div className="space-y-4">
        {filteredQuotes.map((quote) => (
          <div key={quote.id} className="border p-4 rounded">
            <p className="italic">"{quote.text}"</p>
            <p className="mt-1 font-medium">— {quote.author}</p>
            <p className="text-sm text-gray-500">#{quote.topic}</p>
          </div>
        ))}
      </div>
    </div>
  );
}