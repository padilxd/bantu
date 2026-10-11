"use client";

import { useState, useRef, useEffect } from "react";
import AccessibilityPanel from "@/components/ui/AccessibilityPanel";

export default function AccessibilityToggle() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label="Pengaturan aksesibilitas"
        className="flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition-colors text-lg"
        title="Pengaturan Aksesibilitas"
      >
        ♿
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Pengaturan Aksesibilitas"
          className="absolute right-0 top-11 z-50 w-72 bg-white border border-gray-200 rounded-xl shadow-lg p-4"
        >
          <AccessibilityPanel onClose={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
