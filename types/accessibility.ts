export type FontSize = "normal" | "besar" | "sangat-besar";
export type ContrastMode = "normal" | "tinggi";
export type MotionMode = "normal" | "reduced";

export interface AccessibilitySettings {
  fontSize: FontSize;
  contrast: ContrastMode;
  motion: MotionMode;
}
