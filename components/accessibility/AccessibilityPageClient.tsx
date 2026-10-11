"use client";

import { useAccessibility } from "@/hooks/useAccessibility";
import type { FontSize, ContrastMode, MotionMode } from "@/types/accessibility";

export default function AccessibilityPageClient() {
  const { settings, setFontSize, setContrast, setMotion } = useAccessibility();

  return (
    <div className="flex flex-col gap-8 max-w-lg">
      {/* Font Size */}
      <section aria-labelledby="font-size-heading">
        <h2
          id="font-size-heading"
          className="text-base font-semibold text-gray-800 mb-1"
        >
          Ukuran Teks
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Pilih ukuran teks yang nyaman untuk kamu baca.
        </p>
        <div
          className="grid grid-cols-3 gap-3"
          role="group"
          aria-label="Pilih ukuran teks"
        >
          {(
            [
              { value: "normal" as FontSize, label: "Normal", preview: "Aa" },
              { value: "besar" as FontSize, label: "Besar", preview: "Aa" },
              {
                value: "sangat-besar" as FontSize,
                label: "Sangat Besar",
                preview: "Aa",
              },
            ] as const
          ).map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFontSize(opt.value)}
              aria-pressed={settings.fontSize === opt.value}
              className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
                settings.fontSize === opt.value
                  ? "bg-green-600 text-white border-green-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:border-green-400"
              }`}
            >
              <span
                className={`font-bold leading-none ${
                  opt.value === "normal"
                    ? "text-xl"
                    : opt.value === "besar"
                    ? "text-2xl"
                    : "text-3xl"
                } ${settings.fontSize === opt.value ? "text-white" : "text-gray-700"}`}
                aria-hidden="true"
              >
                {opt.preview}
              </span>
              <span className="text-xs font-medium">{opt.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Contrast */}
      <section aria-labelledby="contrast-heading">
        <h2
          id="contrast-heading"
          className="text-base font-semibold text-gray-800 mb-1"
        >
          Kontras Warna
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Mode kontras tinggi membantu jika layar sulit dibaca.
        </p>
        <div
          className="grid grid-cols-2 gap-3"
          role="group"
          aria-label="Pilih mode kontras"
        >
          {(
            [
              {
                value: "normal" as ContrastMode,
                label: "Normal",
                icon: "🌤️",
                desc: "Tampilan standar",
              },
              {
                value: "tinggi" as ContrastMode,
                label: "Kontras Tinggi",
                icon: "🔆",
                desc: "Lebih mudah dibaca",
              },
            ] as const
          ).map((opt) => (
            <button
              key={opt.value}
              onClick={() => setContrast(opt.value)}
              aria-pressed={settings.contrast === opt.value}
              className={`flex flex-col items-start gap-1.5 p-4 rounded-xl border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
                settings.contrast === opt.value
                  ? "bg-green-600 text-white border-green-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:border-green-400"
              }`}
            >
              <span className="text-xl" aria-hidden="true">
                {opt.icon}
              </span>
              <span className="text-sm font-semibold">{opt.label}</span>
              <span
                className={`text-xs ${
                  settings.contrast === opt.value
                    ? "text-green-100"
                    : "text-gray-400"
                }`}
              >
                {opt.desc}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Motion */}
      <section aria-labelledby="motion-heading">
        <h2
          id="motion-heading"
          className="text-base font-semibold text-gray-800 mb-1"
        >
          Animasi
        </h2>
        <p className="text-sm text-gray-500 mb-4">
          Kurangi animasi jika terasa mengganggu atau membuat pusing.
        </p>
        <div
          className="grid grid-cols-2 gap-3"
          role="group"
          aria-label="Pilih mode animasi"
        >
          {(
            [
              {
                value: "normal" as MotionMode,
                label: "Normal",
                icon: "✨",
                desc: "Animasi penuh",
              },
              {
                value: "reduced" as MotionMode,
                label: "Kurangi Gerak",
                icon: "🔇",
                desc: "Animasi minimal",
              },
            ] as const
          ).map((opt) => (
            <button
              key={opt.value}
              onClick={() => setMotion(opt.value)}
              aria-pressed={settings.motion === opt.value}
              className={`flex flex-col items-start gap-1.5 p-4 rounded-xl border text-left transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
                settings.motion === opt.value
                  ? "bg-green-600 text-white border-green-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-200 hover:border-green-400"
              }`}
            >
              <span className="text-xl" aria-hidden="true">
                {opt.icon}
              </span>
              <span className="text-sm font-semibold">{opt.label}</span>
              <span
                className={`text-xs ${
                  settings.motion === opt.value
                    ? "text-green-100"
                    : "text-gray-400"
                }`}
              >
                {opt.desc}
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Reset */}
      <section>
        <button
          onClick={() => {
            setFontSize("normal");
            setContrast("normal");
            setMotion("normal");
          }}
          className="text-sm text-gray-500 hover:text-red-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400 rounded transition-colors"
          aria-label="Reset semua pengaturan aksesibilitas ke default"
        >
          Reset ke pengaturan awal
        </button>
      </section>
    </div>
  );
}
