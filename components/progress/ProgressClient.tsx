"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getAllProgress } from "@/lib/progress";
import { tutorials } from "@/data/tutorials";
import type { TutorialProgress } from "@/types/tutorial";
import {
  getDeviceLabel,
  getDeviceIcon,
  getStatusLabel,
  calculateProgressPercentage,
} from "@/lib/utils";

type FilterTab = "semua" | "sedang-dikerjakan" | "selesai";

export default function ProgressClient() {
  const [progressList, setProgressList] = useState<TutorialProgress[]>([]);
  const [activeTab, setActiveTab] = useState<FilterTab>("semua");

  useEffect(() => {
    setProgressList(getAllProgress());
  }, []);

  const filtered = progressList.filter((p) => {
    if (activeTab === "semua") return true;
    return p.status === activeTab;
  });

  const inProgress = progressList.filter(
    (p) => p.status === "sedang-dikerjakan"
  ).length;
  const completed = progressList.filter((p) => p.status === "selesai").length;

  const tabs: { value: FilterTab; label: string; count: number }[] = [
    { value: "semua", label: "Semua", count: progressList.length },
    { value: "sedang-dikerjakan", label: "Sedang Dikerjakan", count: inProgress },
    { value: "selesai", label: "Selesai", count: completed },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Summary cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <SummaryCard
          label="Total Tutorial"
          value={progressList.length}
          icon="📚"
        />
        <SummaryCard
          label="Sedang Dikerjakan"
          value={inProgress}
          icon="⏳"
          color="text-orange-600"
        />
        <SummaryCard
          label="Selesai"
          value={completed}
          icon="✅"
          color="text-green-600"
        />
      </div>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Filter progress tutorial"
        className="flex gap-2 border-b border-gray-200 pb-0"
      >
        {tabs.map((tab) => (
          <button
            key={tab.value}
            role="tab"
            aria-selected={activeTab === tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-4 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
              activeTab === tab.value
                ? "border-green-600 text-green-700 bg-green-50"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            {tab.label}
            {tab.count > 0 && (
              <span
                className={`ml-1.5 text-xs rounded-full px-1.5 py-0.5 ${
                  activeTab === tab.value
                    ? "bg-green-200 text-green-800"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {tab.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* List */}
      <div role="tabpanel" aria-live="polite">
        {filtered.length === 0 ? (
          <EmptyState activeTab={activeTab} />
        ) : (
          <ul className="flex flex-col gap-4">
            {filtered.map((progress) => {
              const tutorial = tutorials.find(
                (t) => t.id === progress.tutorialId
              );
              if (!tutorial) return null;
              const steps = tutorial.steps[progress.device] ?? [];
              const totalSteps = steps.length;
              const pct = calculateProgressPercentage(
                progress.currentStep,
                totalSteps
              );

              return (
                <li key={`${progress.tutorialId}-${progress.device}`}>
                  <ProgressCard
                    progress={progress}
                    tutorialTitle={tutorial.title}
                    tutorialSlug={tutorial.slug}
                    totalSteps={totalSteps}
                    percentage={pct}
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ── Sub-components ── */

function SummaryCard({
  label,
  value,
  icon,
  color = "text-gray-800",
}: {
  label: string;
  value: number;
  icon: string;
  color?: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col gap-2">
      <span className="text-2xl" aria-hidden="true">
        {icon}
      </span>
      <span className={`text-2xl font-bold ${color}`}>{value}</span>
      <span className="text-xs text-gray-500">{label}</span>
    </div>
  );
}

function ProgressCard({
  progress,
  tutorialTitle,
  tutorialSlug,
  totalSteps,
  percentage,
}: {
  progress: TutorialProgress;
  tutorialTitle: string;
  tutorialSlug: string;
  totalSteps: number;
  percentage: number;
}) {
  const isComplete = progress.status === "selesai";

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-5 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-800 text-base leading-snug truncate">
            {tutorialTitle}
          </h3>
          <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
            <span aria-hidden="true">{getDeviceIcon(progress.device)}</span>
            <span>{getDeviceLabel(progress.device)}</span>
          </div>
        </div>

        <span
          className={`flex-shrink-0 text-xs font-semibold rounded-full px-2.5 py-1 ${
            isComplete
              ? "bg-green-100 text-green-700"
              : "bg-orange-100 text-orange-700"
          }`}
          aria-label={`Status: ${getStatusLabel(progress.status)}`}
        >
          {getStatusLabel(progress.status)}
        </span>
      </div>

      {/* Progress bar */}
      {!isComplete && (
        <div>
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>
              Langkah {progress.currentStep} dari {totalSteps}
            </span>
            <span className="font-semibold text-green-600">{percentage}%</span>
          </div>
          <div
            className="h-2 bg-gray-100 rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={progress.currentStep}
            aria-valuemin={1}
            aria-valuemax={totalSteps}
            aria-label={`Progress ${tutorialTitle}: ${percentage}%`}
          >
            <div
              className="h-full bg-green-500 rounded-full transition-all"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      )}

      {isComplete && (
        <p className="text-sm text-green-700 font-medium">
          🎉 Selesai pada{" "}
          {progress.completedAt
            ? new Date(progress.completedAt).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })
            : "—"}
        </p>
      )}

      {/* Action */}
      <Link
        href={`/tutorial/${tutorialSlug}`}
        className="self-start text-sm font-semibold text-green-600 hover:text-green-700 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
        aria-label={
          isComplete
            ? `Ulangi tutorial ${tutorialTitle}`
            : `Lanjutkan tutorial ${tutorialTitle}`
        }
      >
        {isComplete ? "Ulangi tutorial →" : "Lanjutkan →"}
      </Link>
    </div>
  );
}

function EmptyState({ activeTab }: { activeTab: FilterTab }) {
  const messages: Record<FilterTab, { title: string; desc: string }> = {
    semua: {
      title: "Belum ada progress",
      desc: "Mulai tutorial pertamamu dari beranda!",
    },
    "sedang-dikerjakan": {
      title: "Tidak ada tutorial yang sedang dikerjakan",
      desc: "Kamu belum memulai tutorial apapun.",
    },
    selesai: {
      title: "Belum ada tutorial yang selesai",
      desc: "Selesaikan tutorial untuk melihatnya di sini.",
    },
  };

  const { title, desc } = messages[activeTab];

  return (
    <div
      role="status"
      className="text-center py-16 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
    >
      <p className="text-4xl mb-3" aria-hidden="true">
        📋
      </p>
      <p className="font-semibold text-gray-700 mb-1">{title}</p>
      <p className="text-sm text-gray-500 mb-6">{desc}</p>
      <Link
        href="/"
        className="inline-block px-5 py-2.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition-colors"
      >
        Cari Tutorial
      </Link>
    </div>
  );
}
