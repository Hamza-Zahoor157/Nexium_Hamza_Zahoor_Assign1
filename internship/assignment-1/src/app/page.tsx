import QuoteFilter from '@/components/QuoteFilter';
import quotes from '@/data/quotes.json';

export default function Home() {
  return (
    <main className="p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-center">Quote Generator</h1>
        <QuoteFilter allQuotes={quotes} />
      </div>
    </main>
  );
}