// "use client";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { useRouter } from "next/navigation";

// export default function QuoteSearchForm({
//   initialQuery = "",
// }: {
//   initialQuery?: string;
// }) {
//   const router = useRouter();

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         const formData = new FormData(e.currentTarget as HTMLFormElement);
//         router.push(`?search=${formData.get("query")}`);
//       }}
//       className="flex gap-2 w-full max-w-[600px]"
//     >
//       <Input
//         name="query"
//         placeholder="Search by topic or author..."
//         className="flex-1"
//         defaultValue={initialQuery}
//       />
//       <Button type="submit">Search</Button>
//     </form>
//   );
// }
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function QuoteSearchForm({
  initialQuery = "",
}: {
  initialQuery?: string;
}) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.currentTarget as HTMLFormElement);
        router.push(`?search=${formData.get("query")}`);
        setIsLoading(false);
      }}
      className="flex gap-2 w-full max-w-[600px]"
    >
      <Input
        name="query"
        placeholder="Search by topic or author..."
        className="flex-1"
        defaultValue={initialQuery}
      />
      <Button type="submit" disabled={isLoading}>
        {isLoading ? <LoadingSpinner /> : "Search"}
      </Button>
    </form>
  );
}