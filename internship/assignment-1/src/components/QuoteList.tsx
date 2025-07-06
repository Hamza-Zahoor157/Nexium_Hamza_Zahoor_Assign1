// src/components/QuoteList.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import quotes from "@/data/quotes.json";

type Quote = {
  id: number;
  text: string;
  author: string;
  topic: string;
};

export default function QuoteList() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const filteredQuotes = searchQuery
    ? quotes.filter(
        (quote) =>
          quote.topic.toLowerCase().includes(searchQuery) ||
          quote.author.toLowerCase().includes(searchQuery)
      )
    : quotes.slice(0, 3); // default quotes

  return (
    <div className="mt-8 space-y-4">
      {filteredQuotes.map((quote) => (
        <Card key={quote.id} className="w-full max-w-[600px]">
          <CardHeader className="pb-2">
            <span className="text-sm text-muted-foreground">
              #{quote.topic}
            </span>
          </CardHeader>
          <CardContent>
            <blockquote>&quot;{quote.text}&quot;</blockquote>
            <p className="mt-2 font-medium">— {quote.author}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
