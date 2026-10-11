import CategoryCard from "@/components/ui/CategoryCard";
import { tutorials } from "@/data/tutorials";
import type { TutorialCategory } from "@/types/tutorial";

const ALL_CATEGORIES: TutorialCategory[] = [
  "whatsapp",
  "email",
  "file",
  "browser",
  "lainnya",
];

export default function CategorySection() {
  const categoryCounts = ALL_CATEGORIES.reduce<Record<string, number>>(
    (acc, cat) => {
      acc[cat] = tutorials.filter((t) => t.category === cat).length;
      return acc;
    },
    {}
  );

  const activeCategories = ALL_CATEGORIES.filter(
    (cat) => categoryCounts[cat] > 0
  );

  return (
    <section aria-labelledby="category-heading" className="max-w-5xl mx-auto px-4 py-10">
      <h2
        id="category-heading"
        className="text-xl font-bold text-gray-800 mb-6"
      >
        Pilih Kategori
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {activeCategories.map((cat) => (
          <CategoryCard
            key={cat}
            category={cat}
            count={categoryCounts[cat]}
          />
        ))}
      </div>
    </section>
  );
}
