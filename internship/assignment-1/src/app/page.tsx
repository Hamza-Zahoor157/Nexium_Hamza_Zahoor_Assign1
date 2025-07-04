import QuoteSearchForm from "@/components/QuoteSearchForm";
import QuoteList from "@/components/QuoteList";
import quotes from "@/data/quotes.json";
import { ThemeToggle } from "@/components/ThemeToggle";

export default async function Home({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const searchQuery =
    typeof searchParams?.search === "string" ? searchParams.search : "";

  const defaultQuotes = quotes.slice(0, 3);

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quote Generator</h1>
        <ThemeToggle />
      </div>

      <QuoteSearchForm initialQuery={searchQuery} />

      <QuoteList
        quotes={quotes}
        searchQuery={searchQuery}
        defaultQuotes={defaultQuotes}
      />
    </main>
  );
}
