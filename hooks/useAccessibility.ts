"use client";

import { useState, useEffect, useCallback } from "react";
import type {
  AccessibilitySettings,
  FontSize,
  ContrastMode,
  MotionMode,
} from "@/types/accessibility";

const STORAGE_KEY = "bantuin_accessibility";

const DEFAULT_SETTINGS: AccessibilitySettings = {
  fontSize: "normal",
  contrast: "normal",
  motion: "normal",
};

function loadSettings(): AccessibilitySettings {
  if (typeof window === "undefined") return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...(JSON.parse(raw) as Partial<AccessibilitySettings>) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function applySettings(settings: AccessibilitySettings) {
  const root = document.documentElement;

  // Font size
  const fontSizeMap: Record<FontSize, string> = {
    normal: "16px",
    besar: "20px",
    "sangat-besar": "24px",
  };
  root.style.setProperty("--base-font-size", fontSizeMap[settings.fontSize]);
  root.setAttribute("data-font-size", settings.fontSize);

  // Contrast
  root.setAttribute("data-contrast", settings.contrast);

  // Motion
  root.setAttribute("data-motion", settings.motion);
}

export function useAccessibility() {
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    const loaded = loadSettings();
    setSettings(loaded);
    applySettings(loaded);
  }, []);

  const updateSettings = useCallback((next: AccessibilitySettings) => {
    setSettings(next);
    applySettings(next);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  }, []);

  const setFontSize = useCallback(
    (fontSize: FontSize) => updateSettings({ ...settings, fontSize }),
    [settings, updateSettings]
  );

  const setContrast = useCallback(
    (contrast: ContrastMode) => updateSettings({ ...settings, contrast }),
    [settings, updateSettings]
  );

  const setMotion = useCallback(
    (motion: MotionMode) => updateSettings({ ...settings, motion }),
    [settings, updateSettings]
  );

  return { settings, setFontSize, setContrast, setMotion };
}
