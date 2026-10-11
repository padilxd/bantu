"use client";

import { useState } from "react";
import type { TutorialStep } from "@/types/tutorial";
import StepHelpPanel from "@/components/tutorial/StepHelpPanel";
import StepProgressBar from "@/components/tutorial/StepProgressBar";

interface Props {
  step: TutorialStep;
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onPrev: () => void;
  onFinish: () => void;
}

export default function StepView({
  step,
  currentStep,
  totalSteps,
  onNext,
  onPrev,
  onFinish,
}: Props) {
  const [showHelp, setShowHelp] = useState(false);
  const isFirst = currentStep === 1;
  const isLast = currentStep === totalSteps;

  return (
    <div className="flex flex-col gap-6">
      {/* Progress */}
      <StepProgressBar currentStep={currentStep} totalSteps={totalSteps} />

      {/* Step card */}
      <article
        aria-labelledby="step-title"
        className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
      >
        {/* Step header */}
        <div className="bg-green-600 px-6 py-4">
          <p className="text-green-100 text-sm font-medium mb-0.5">
            Langkah {currentStep} dari {totalSteps}
          </p>
          <h2
            id="step-title"
            className="text-white text-xl font-bold leading-snug"
          >
            {step.title}
          </h2>
        </div>

        {/* Step body */}
        <div className="px-6 py-6 flex flex-col gap-5">
          {/* Instruction */}
          <p className="text-gray-800 text-base leading-relaxed text-lg">
            {step.instruction}
          </p>

          {/* Placeholder image area */}
          {step.image && (
            <div
              className="rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center h-48 text-gray-400 text-sm"
              role="img"
              aria-label={`Gambar panduan langkah ${currentStep}: ${step.title}`}
            >
              <span aria-hidden="true">🖼️</span>
              <span className="ml-2">Gambar panduan</span>
            </div>
          )}

          {/* Help button */}
          <button
            onClick={() => setShowHelp(true)}
            className="self-start flex items-center gap-2 text-sm font-medium text-orange-600 border border-orange-300 bg-orange-50 rounded-xl px-4 py-2.5 hover:bg-orange-100 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
            aria-label="Tampilkan bantuan untuk langkah ini"
          >
            <span aria-hidden="true">🤔</span>
            Saya Masih Bingung
          </button>
        </div>
      </article>

      {/* Navigation */}
      <nav
        className="flex items-center gap-3"
        aria-label="Navigasi langkah tutorial"
      >
        <button
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Kembali ke langkah sebelumnya"
          className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-300 text-gray-700 text-sm font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
        >
          ← Kembali
        </button>

        {isLast ? (
          <button
            onClick={onFinish}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            aria-label="Selesaikan tutorial"
          >
            ✓ Tutorial Selesai
          </button>
        ) : (
          <button
            onClick={onNext}
            className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-green-600 text-white text-sm font-semibold hover:bg-green-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
            aria-label="Lanjut ke langkah berikutnya"
          >
            Selanjutnya →
          </button>
        )}
      </nav>

      {/* Help panel modal */}
      {showHelp && (
        <StepHelpPanel help={step.help} onClose={() => setShowHelp(false)} />
      )}
    </div>
  );
}
