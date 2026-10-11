import TutorialCard from "@/components/ui/TutorialCard";
import type { Tutorial } from "@/types/tutorial";

interface Props {
  tutorials: Tutorial[];
  heading: string;
  emptyMessage?: string;
}

export default function TutorialListSection({
  tutorials,
  heading,
  emptyMessage = "Tidak ada tutorial yang ditemukan.",
}: Props) {
  return (
    <section
      aria-labelledby="tutorial-list-heading"
      className="max-w-5xl mx-auto px-4 py-10"
    >
      <h2
        id="tutorial-list-heading"
        className="text-xl font-bold text-gray-800 mb-6"
      >
        {heading}
      </h2>

      {tutorials.length === 0 ? (
        <div
          role="status"
          className="text-center py-16 text-gray-500 bg-gray-50 rounded-2xl border border-dashed border-gray-300"
        >
          <p className="text-4xl mb-3" aria-hidden="true">🔍</p>
          <p className="font-medium text-gray-700 mb-1">Tidak ditemukan</p>
          <p className="text-sm">{emptyMessage}</p>
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tutorials.map((tutorial) => (
            <li key={tutorial.id}>
              <TutorialCard tutorial={tutorial} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
