import Link from "next/link";
import AccessibilityToggle from "@/components/ui/AccessibilityToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <nav
        className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between"
        aria-label="Navigasi utama"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-green-600 hover:text-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
          aria-label="Bantuin - Halaman Utama"
        >
          Bantuin
        </Link>

        {/* Nav Links */}
        <ul className="hidden sm:flex items-center gap-6 text-sm font-medium text-gray-600">
          <li>
            <Link
              href="/"
              className="hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded px-1 py-0.5 transition-colors"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              href="/progress"
              className="hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded px-1 py-0.5 transition-colors"
            >
              Progress Saya
            </Link>
          </li>
          <li>
            <Link
              href="/aksesibilitas"
              className="hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded px-1 py-0.5 transition-colors"
            >
              Aksesibilitas
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded px-1 py-0.5 transition-colors"
            >
              Admin
            </Link>
          </li>
        </ul>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <AccessibilityToggle />

          {/* Mobile menu — simple links */}
          <nav
            className="flex sm:hidden items-center gap-4 text-sm font-medium text-gray-600"
            aria-label="Navigasi mobile"
          >
            <Link
              href="/progress"
              className="hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
              aria-label="Progress Saya"
            >
              📋
            </Link>
          </nav>
        </div>
      </nav>
    </header>
  );
}
