import Link from "next/link";
import type { Tutorial, Device } from "@/types/tutorial";
import { getDeviceLabel } from "@/lib/utils";

interface Props {
  tutorial: Tutorial;
  device: Device;
  onRestart: () => void;
}

export default function TutorialCompleteCard({
  tutorial,
  device,
  onRestart,
}: Props) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center text-center gap-6 py-12"
    >
      <div
        className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl"
        aria-hidden="true"
      >
        🎉
      </div>

      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Tutorial Selesai!
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
          Kamu berhasil menyelesaikan{" "}
          <span className="font-semibold text-gray-700">{tutorial.title}</span>{" "}
          di perangkat{" "}
          <span className="font-semibold text-gray-700">
            {getDeviceLabel(device)}
          </span>
          .
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs">
        <button
          onClick={onRestart}
          className="flex-1 py-3 px-4 rounded-xl border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition-colors"
        >
          Ulangi Tutorial
        </button>
        <Link
          href="/progress"
          className="flex-1 py-3 px-4 rounded-xl bg-green-600 text-white text-sm font-semibold text-center hover:bg-green-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 transition-colors"
        >
          Lihat Progress
        </Link>
      </div>

      <Link
        href="/"
        className="text-sm text-green-600 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
      >
        ← Kembali ke Beranda
      </Link>
    </div>
  );
}
