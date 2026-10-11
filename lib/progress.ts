"use client";

import type { TutorialProgress, Device } from "@/types/tutorial";

const STORAGE_KEY = "bantuin_progress";

export function getAllProgress(): TutorialProgress[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as TutorialProgress[];
  } catch {
    return [];
  }
}

export function getProgress(
  tutorialId: string,
  device: Device
): TutorialProgress | undefined {
  return getAllProgress().find(
    (p) => p.tutorialId === tutorialId && p.device === device
  );
}

export function saveProgress(progress: TutorialProgress): void {
  if (typeof window === "undefined") return;
  const all = getAllProgress();
  const index = all.findIndex(
    (p) => p.tutorialId === progress.tutorialId && p.device === progress.device
  );
  if (index >= 0) {
    all[index] = progress;
  } else {
    all.push(progress);
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}

export function startProgress(tutorialId: string, device: Device): TutorialProgress {
  const existing = getProgress(tutorialId, device);
  if (existing) return existing;
  const progress: TutorialProgress = {
    tutorialId,
    device,
    currentStep: 1,
    status: "sedang-dikerjakan",
    startedAt: new Date().toISOString(),
  };
  saveProgress(progress);
  return progress;
}

export function updateStep(
  tutorialId: string,
  device: Device,
  step: number,
  totalSteps: number
): void {
  const progress = getProgress(tutorialId, device);
  if (!progress) return;
  const isComplete = step > totalSteps;
  saveProgress({
    ...progress,
    currentStep: isComplete ? totalSteps : step,
    status: isComplete ? "selesai" : "sedang-dikerjakan",
    completedAt: isComplete ? new Date().toISOString() : undefined,
  });
}

export function clearProgress(tutorialId: string, device: Device): void {
  if (typeof window === "undefined") return;
  const all = getAllProgress().filter(
    (p) => !(p.tutorialId === tutorialId && p.device === device)
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}
