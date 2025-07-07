"use client";

import { useSearchParams } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import quotes from "@/data/quotes.json";

export default function QuoteList() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  const filteredQuotes = searchQuery
    ? quotes.filter(
        (quote) =>
          quote.topic.toLowerCase().includes(searchQuery) ||
          quote.author.toLowerCase().includes(searchQuery) ||
          quote.text.toLowerCase().includes(searchQuery)
      )
    : quotes.slice(0, 3); // Show 3 default quotes when no search

  return (
    <div className="w-full">
      <div className="mt-8 space-y-4 w-full">
        {filteredQuotes.length > 0 ? (
          filteredQuotes.map((quote) => (
            <Card key={quote.id} className="w-full">
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
          ))
        ) : (
          <Card className="w-full">
            <CardContent className="py-8 text-center">
              <p className="text-muted-foreground">
                No quotes found matching "{searchQuery}"
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Try a different search term
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}