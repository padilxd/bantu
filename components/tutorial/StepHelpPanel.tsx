"use client";

import { useState } from "react";
import type { StepHelp } from "@/types/tutorial";

interface HelpOption {
  id: keyof StepHelp;
  label: string;
}

const HELP_OPTIONS: HelpOption[] = [
  { id: "tidakMenemukanTombol", label: "Saya tidak menemukan tombolnya" },
  { id: "tidakTahuKlikApa", label: "Saya tidak tahu harus klik apa" },
  { id: "salahLangkah", label: "Saya salah melakukan langkah" },
];

interface Props {
  help: StepHelp;
  onClose: () => void;
}

export default function StepHelpPanel({ help, onClose }: Props) {
  const [selected, setSelected] = useState<keyof StepHelp | null>(null);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="help-dialog-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id="help-dialog-title"
              className="text-lg font-bold text-gray-800"
            >
              Saya Masih Bingung
            </h2>
            <p className="text-sm text-gray-500 mt-0.5">
              Pilih masalah yang kamu hadapi:
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup bantuan"
            className="text-gray-400 hover:text-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded-lg p-1 flex-shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Options */}
        {!selected ? (
          <ul className="flex flex-col gap-2">
            {HELP_OPTIONS.map((opt) => (
              <li key={opt.id}>
                <button
                  onClick={() => setSelected(opt.id)}
                  className="w-full text-left px-4 py-3 rounded-xl border border-gray-200 text-sm text-gray-700 font-medium hover:bg-green-50 hover:border-green-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
                >
                  {opt.label}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Help answer */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-4">
              <p className="text-sm font-semibold text-green-800 mb-1">
                {HELP_OPTIONS.find((o) => o.id === selected)?.label}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {help[selected]}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => setSelected(null)}
                className="flex-1 py-2.5 px-4 text-sm font-medium text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition-colors"
              >
                Pilih masalah lain
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 text-sm font-semibold text-white bg-green-600 rounded-xl hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition-colors"
              >
                Lanjut Tutorial
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
