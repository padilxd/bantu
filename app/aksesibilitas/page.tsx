import type { Metadata } from "next";
import AccessibilityPageClient from "@/components/accessibility/AccessibilityPageClient";

export const metadata: Metadata = {
  title: "Pengaturan Aksesibilitas — Bantuin",
  description: "Sesuaikan tampilan Bantuin agar lebih nyaman untuk kamu.",
};

export default function AksesibilitasPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Pengaturan Aksesibilitas
        </h1>
        <p className="text-gray-500">
          Sesuaikan tampilan agar lebih nyaman untuk kamu.
        </p>
      </header>

      <AccessibilityPageClient />
    </main>
  );
}
