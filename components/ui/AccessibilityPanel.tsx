"use client";

import { useAccessibility } from "@/hooks/useAccessibility";
import type { FontSize, ContrastMode, MotionMode } from "@/types/accessibility";

interface Props {
  onClose: () => void;
}

export default function AccessibilityPanel({ onClose }: Props) {
  const { settings, setFontSize, setContrast, setMotion } = useAccessibility();

  const fontOptions: { value: FontSize; label: string }[] = [
    { value: "normal", label: "Normal" },
    { value: "besar", label: "Besar" },
    { value: "sangat-besar", label: "Sangat Besar" },
  ];

  const contrastOptions: { value: ContrastMode; label: string }[] = [
    { value: "normal", label: "Normal" },
    { value: "tinggi", label: "Tinggi" },
  ];

  const motionOptions: { value: MotionMode; label: string }[] = [
    { value: "normal", label: "Normal" },
    { value: "reduced", label: "Kurangi Gerak" },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-gray-800 text-sm">
          Pengaturan Aksesibilitas
        </h2>
        <button
          onClick={onClose}
          aria-label="Tutup pengaturan aksesibilitas"
          className="text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
        >
          ✕
        </button>
      </div>

      {/* Font Size */}
      <fieldset className="mb-4">
        <legend className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Ukuran Teks
        </legend>
        <div className="flex gap-2">
          {fontOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFontSize(opt.value)}
              aria-pressed={settings.fontSize === opt.value}
              className={`flex-1 py-1.5 px-2 text-xs rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
                settings.fontSize === opt.value
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Contrast */}
      <fieldset className="mb-4">
        <legend className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Kontras
        </legend>
        <div className="flex gap-2">
          {contrastOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setContrast(opt.value)}
              aria-pressed={settings.contrast === opt.value}
              className={`flex-1 py-1.5 px-2 text-xs rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
                settings.contrast === opt.value
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </fieldset>

      {/* Motion */}
      <fieldset>
        <legend className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">
          Animasi
        </legend>
        <div className="flex gap-2">
          {motionOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setMotion(opt.value)}
              aria-pressed={settings.motion === opt.value}
              className={`flex-1 py-1.5 px-2 text-xs rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
                settings.motion === opt.value
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-400"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
