"use client";

import type { Device } from "@/types/tutorial";
import { getDeviceLabel, getDeviceIcon } from "@/lib/utils";

interface Props {
  devices: Device[];
  selected: Device;
  onChange: (device: Device) => void;
}

export default function DeviceSelector({ devices, selected, onChange }: Props) {
  return (
    <section aria-labelledby="device-selector-heading">
      <h2
        id="device-selector-heading"
        className="text-base font-semibold text-gray-700 mb-3"
      >
        Pilih perangkat kamu:
      </h2>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Pilih perangkat">
        {devices.map((device) => {
          const isSelected = selected === device;
          return (
            <button
              key={device}
              onClick={() => onChange(device)}
              aria-pressed={isSelected}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 ${
                isSelected
                  ? "bg-green-600 text-white border-green-600 shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:border-green-400 hover:bg-green-50"
              }`}
            >
              <span aria-hidden="true">{getDeviceIcon(device)}</span>
              {getDeviceLabel(device)}
            </button>
          );
        })}
      </div>
    </section>
  );
}
