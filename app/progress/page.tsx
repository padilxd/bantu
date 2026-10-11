import type { Metadata } from "next";
import ProgressClient from "@/components/progress/ProgressClient";

export const metadata: Metadata = {
  title: "Progress Saya — Bantuin",
  description: "Lihat tutorial yang sedang kamu kerjakan dan yang sudah selesai.",
};

export default function ProgressPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Progress Saya
        </h1>
        <p className="text-gray-500">
          Tutorial yang sedang kamu kerjakan dan yang sudah selesai.
        </p>
      </header>

      <ProgressClient />
    </main>
  );
}
