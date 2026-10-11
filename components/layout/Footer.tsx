export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8 text-center text-sm text-gray-500">
        <p className="font-semibold text-gray-700 mb-1">Bantuin</p>
        <p>Panduan digital langkah demi langkah untuk semua orang.</p>
        <p className="mt-3 text-xs text-gray-400">
          © {new Date().getFullYear()} Bantuin. Dibuat untuk membantu kamu.
        </p>
      </div>
    </footer>
  );
}
