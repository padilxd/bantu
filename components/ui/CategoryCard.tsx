import Link from "next/link";
import type { TutorialCategory } from "@/types/tutorial";
import { getCategoryLabel, getCategoryIcon } from "@/lib/utils";

interface Props {
  category: TutorialCategory;
  count: number;
}

export default function CategoryCard({ category, count }: Props) {
  return (
    <Link
      href={`/?kategori=${category}`}
      className="flex flex-col items-center justify-center gap-2 bg-white rounded-2xl border border-gray-200 p-5 hover:border-green-400 hover:shadow-md transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 text-center"
      aria-label={`Kategori ${getCategoryLabel(category)}, ${count} tutorial`}
    >
      <span className="text-3xl" role="img" aria-hidden="true">
        {getCategoryIcon(category)}
      </span>
      <span className="text-sm font-semibold text-gray-700">
        {getCategoryLabel(category)}
      </span>
      <span className="text-xs text-gray-400">{count} tutorial</span>
    </Link>
  );
}
