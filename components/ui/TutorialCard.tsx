import Link from "next/link";
import type { Tutorial } from "@/types/tutorial";
import { formatEstimatedTime, getCategoryLabel, getDeviceLabel } from "@/lib/utils";

interface Props {
  tutorial: Tutorial;
}

export default function TutorialCard({ tutorial }: Props) {
  return (
    <Link
      href={`/tutorial/${tutorial.slug}`}
      className="group block bg-white rounded-2xl border border-gray-200 p-5 hover:border-green-400 hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500"
      aria-label={`Tutorial: ${tutorial.title}`}
    >
      {/* Category badge */}
      <span className="inline-block text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-0.5 mb-3">
        {getCategoryLabel(tutorial.category)}
      </span>

      {/* Title */}
      <h3 className="text-base font-semibold text-gray-800 group-hover:text-green-700 leading-snug mb-2 transition-colors">
        {tutorial.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
        {tutorial.description}
      </p>

      {/* Footer meta */}
      <div className="flex items-center justify-between text-xs text-gray-400">
        <span>⏱ {formatEstimatedTime(tutorial.estimatedTime)}</span>
        <span className="flex gap-1">
          {tutorial.devices.map((d) => (
            <span
              key={d}
              className="bg-gray-100 rounded-full px-2 py-0.5 text-gray-600"
              aria-label={getDeviceLabel(d)}
            >
              {getDeviceLabel(d)}
            </span>
          ))}
        </span>
      </div>
    </Link>
  );
}
