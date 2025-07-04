"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function QuoteList({
  quotes,
  searchQuery,
  defaultQuotes,
}: {
  quotes: any[];
  searchQuery: string;
  defaultQuotes: any[];
}) {
  const filteredQuotes = searchQuery
    ? quotes.filter(
        (quote) =>
          quote.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
          quote.author.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : defaultQuotes;

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
            <blockquote>"{quote.text}"</blockquote>
            <p className="mt-2 font-medium">— {quote.author}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
