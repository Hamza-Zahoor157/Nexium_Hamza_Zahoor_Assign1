"use client";
import { Input } from "@/components/ui/input";

interface QuoteFilterProps {
  searchText: string;
  setSearchText: (text: string) => void;
}

export default function QuoteFilter({
  searchText,
  setSearchText
}: QuoteFilterProps) {
  return (
    <Input
      placeholder="Search by topic/author..."
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="mb-6"
    />
  );
}