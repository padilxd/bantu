import type { Device, TutorialCategory, TutorialStatus } from "@/types/tutorial";

export function formatEstimatedTime(minutes: number): string {
  if (minutes < 60) return `${minutes} menit`;
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return mins > 0 ? `${hours} jam ${mins} menit` : `${hours} jam`;
}

export function getDeviceLabel(device: Device): string {
  const labels: Record<Device, string> = {
    android: "Android",
    iphone: "iPhone",
    laptop: "Laptop",
  };
  return labels[device];
}

export function getDeviceIcon(device: Device): string {
  const icons: Record<Device, string> = {
    android: "📱",
    iphone: "🍎",
    laptop: "💻",
  };
  return icons[device];
}

export function getCategoryLabel(category: TutorialCategory): string {
  const labels: Record<TutorialCategory, string> = {
    whatsapp: "WhatsApp",
    email: "Email",
    file: "File & Dokumen",
    browser: "Browser",
    lainnya: "Lainnya",
  };
  return labels[category];
}

export function getCategoryIcon(category: TutorialCategory): string {
  const icons: Record<TutorialCategory, string> = {
    whatsapp: "💬",
    email: "✉️",
    file: "📁",
    browser: "🌐",
    lainnya: "📌",
  };
  return icons[category];
}

export function getStatusLabel(status: TutorialStatus): string {
  const labels: Record<TutorialStatus, string> = {
    "belum-dimulai": "Belum Dimulai",
    "sedang-dikerjakan": "Sedang Dikerjakan",
    selesai: "Selesai",
  };
  return labels[status];
}

export function calculateProgressPercentage(
  currentStep: number,
  totalSteps: number
): number {
  if (totalSteps === 0) return 0;
  return Math.round((currentStep / totalSteps) * 100);
}

export function cn(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}
