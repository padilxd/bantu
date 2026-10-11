import Link from "next/link";

export default function TutorialNotFound() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-20 text-center">
      <p className="text-5xl mb-4" aria-hidden="true">🔍</p>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">
        Tutorial tidak ditemukan
      </h1>
      <p className="text-gray-500 mb-8">
        Tutorial yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>
      <Link
        href="/"
        className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition-colors"
      >
        ← Kembali ke Beranda
      </Link>
    </main>
  );
}
