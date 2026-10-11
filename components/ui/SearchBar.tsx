"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

interface Props {
  defaultValue?: string;
}

export default function SearchBar({ defaultValue = "" }: Props) {
  const [query, setQuery] = useState(defaultValue);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const q = query.trim();
    startTransition(() => {
      if (q) {
        router.push(`/?q=${encodeURIComponent(q)}`);
      } else {
        router.push("/");
      }
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className="flex w-full max-w-xl gap-2"
    >
      <label htmlFor="search-input" className="sr-only">
        Cari tutorial
      </label>
      <input
        id="search-input"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Contoh: kirim PDF, buat email..."
        autoComplete="off"
        className="flex-1 rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-800 text-base placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
        aria-label="Cari tutorial"
      />
      <button
        type="submit"
        disabled={isPending}
        className="rounded-xl bg-green-600 text-white px-5 py-3 text-base font-semibold hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 transition-colors disabled:opacity-60"
        aria-label="Cari"
      >
        {isPending ? "..." : "Cari"}
      </button>
    </form>
  );
}
