"use client";
import { useState } from 'react';
import QuoteFilter from '@/components/QuoteFilter';
import quotes from '@/data/quotes.json';

export default function Home() {
  const [searchText, setSearchText] = useState('');

  // Simple filtering function
  const filteredQuotes = quotes.filter(quote => {
    const search = searchText.toLowerCase();
    return (
      quote.topic.toLowerCase().includes(search) ||
      quote.text.toLowerCase().includes(search) ||
      quote.author.toLowerCase().includes(search)
    );
  });

  return (
    <main className="p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Quote Generator</h1>
        
        {/* Pass both values as props */}
        <QuoteFilter 
          searchText={searchText} 
          setSearchText={setSearchText} 
        />
        
        <div className="space-y-6">
          {filteredQuotes.map((quote) => (
            <div key={quote.id} className="border border-gray-200 p-4 rounded">
              <p className="text-lg italic">"{quote.text}"</p>
              <p className="mt-2 font-medium">— {quote.author}</p>
              <p className="mt-1 text-sm text-gray-500">#{quote.topic}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}