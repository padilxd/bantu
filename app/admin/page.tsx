import type { Metadata } from "next";
import AdminClient from "@/components/admin/AdminClient";

export const metadata: Metadata = {
  title: "Admin — Bantuin",
  description: "Kelola daftar tutorial Bantuin.",
};

export default function AdminPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl" aria-hidden="true">⚙️</span>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Admin Panel
          </h1>
        </div>
        <p className="text-gray-500">
          Kelola tutorial yang tersedia di Bantuin. Data disimpan sementara di
          sesi ini.
        </p>
      </header>

      <AdminClient />
    </main>
  );
}
