"use client";

import { useState, useEffect } from "react";
import type { Tutorial, Device } from "@/types/tutorial";
import DeviceSelector from "@/components/tutorial/DeviceSelector";
import StepView from "@/components/tutorial/StepView";
import TutorialCompleteCard from "@/components/tutorial/TutorialCompleteCard";
import {
  startProgress,
  updateStep,
  getProgress,
  clearProgress,
} from "@/lib/progress";

interface Props {
  tutorial: Tutorial;
}

export default function TutorialClient({ tutorial }: Props) {
  const defaultDevice = tutorial.devices[0];
  const [device, setDevice] = useState<Device>(defaultDevice);
  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [started, setStarted] = useState(false);

  const steps = tutorial.steps[device] ?? [];
  const totalSteps = steps.length;

  // Load saved progress on mount / device change
  useEffect(() => {
    const saved = getProgress(tutorial.id, device);
    if (saved) {
      setCurrentStep(saved.currentStep);
      setStarted(true);
      setIsComplete(saved.status === "selesai");
    } else {
      setCurrentStep(1);
      setStarted(false);
      setIsComplete(false);
    }
  }, [tutorial.id, device]);

  function handleStart() {
    startProgress(tutorial.id, device);
    setStarted(true);
    setCurrentStep(1);
    setIsComplete(false);
  }

  function handleNext() {
    const next = currentStep + 1;
    if (next > totalSteps) {
      handleFinish();
      return;
    }
    setCurrentStep(next);
    updateStep(tutorial.id, device, next, totalSteps);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handlePrev() {
    const prev = Math.max(1, currentStep - 1);
    setCurrentStep(prev);
    updateStep(tutorial.id, device, prev, totalSteps);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function handleFinish() {
    updateStep(tutorial.id, device, totalSteps + 1, totalSteps);
    setIsComplete(true);
  }

  function handleRestart() {
    clearProgress(tutorial.id, device);
    setCurrentStep(1);
    setIsComplete(false);
    setStarted(false);
  }

  function handleDeviceChange(newDevice: Device) {
    setDevice(newDevice);
  }

  const noStepsForDevice = totalSteps === 0;

  return (
    <div className="flex flex-col gap-8">
      {/* Device selector — always visible unless complete */}
      {!isComplete && (
        <DeviceSelector
          devices={tutorial.devices}
          selected={device}
          onChange={handleDeviceChange}
        />
      )}

      {/* No steps available for device */}
      {!isComplete && noStepsForDevice && (
        <div
          role="status"
          className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 text-center"
        >
          <p className="text-2xl mb-2" aria-hidden="true">🚧</p>
          <p className="font-semibold text-yellow-800">
            Tutorial untuk perangkat ini belum tersedia
          </p>
          <p className="text-sm text-yellow-700 mt-1">
            Coba pilih perangkat lain di atas.
          </p>
        </div>
      )}

      {/* Start screen */}
      {!isComplete && !started && !noStepsForDevice && (
        <div className="bg-green-50 border border-green-200 rounded-2xl p-8 flex flex-col items-center text-center gap-4">
          <p className="text-4xl" aria-hidden="true">📖</p>
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-1">
              Siap memulai tutorial?
            </h2>
            <p className="text-sm text-gray-600">
              Tutorial ini memiliki{" "}
              <strong>{totalSteps} langkah</strong> dan membutuhkan sekitar{" "}
              <strong>{tutorial.estimatedTime} menit</strong>.
            </p>
          </div>
          <button
            onClick={handleStart}
            className="mt-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2 transition-colors"
            aria-label={`Mulai tutorial ${tutorial.title}`}
          >
            Mulai Tutorial →
          </button>
        </div>
      )}

      {/* Step view */}
      {!isComplete && started && !noStepsForDevice && steps[currentStep - 1] && (
        <StepView
          step={steps[currentStep - 1]}
          currentStep={currentStep}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrev}
          onFinish={handleFinish}
        />
      )}

      {/* Complete screen */}
      {isComplete && (
        <TutorialCompleteCard
          tutorial={tutorial}
          device={device}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
