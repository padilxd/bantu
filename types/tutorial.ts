export type Device = "android" | "iphone" | "laptop";

export type TutorialCategory =
  | "whatsapp"
  | "email"
  | "file"
  | "browser"
  | "lainnya";

export type TutorialStatus = "belum-dimulai" | "sedang-dikerjakan" | "selesai";

export interface TutorialStep {
  stepNumber: number;
  title: string;
  instruction: string;
  image?: string;
  help: StepHelp;
}

export interface StepHelp {
  tidakMenemukanTombol: string;
  tidakTahuKlikApa: string;
  salahLangkah: string;
}

export interface Tutorial {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: TutorialCategory;
  thumbnail: string;
  devices: Device[];
  estimatedTime: number; // in minutes
  steps: Record<Device, TutorialStep[]>;
}

export interface TutorialProgress {
  tutorialId: string;
  device: Device;
  currentStep: number;
  status: TutorialStatus;
  startedAt: string;
  completedAt?: string;
}
