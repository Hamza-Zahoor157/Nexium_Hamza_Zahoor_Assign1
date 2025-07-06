import QuoteSearchForm from "@/components/QuoteSearchForm";
import QuoteList from "@/components/QuoteList";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Home() {
  return (
    <main className="p-8 max-w-3xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Quote Generator</h1>
        <ThemeToggle />
      </div>

      <QuoteSearchForm />
      <QuoteList />
    </main>
  );
}
