import HeroSection from "@/components/home/HeroSection";
import CategorySection from "@/components/home/CategorySection";
import TutorialListSection from "@/components/home/TutorialListSection";
import { tutorials, searchTutorials, getTutorialsByCategory } from "@/data/tutorials";
import type { TutorialCategory } from "@/types/tutorial";

interface PageProps {
  searchParams: Promise<{ q?: string; kategori?: string }>;
}

export default async function HomePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const kategori = params.kategori as TutorialCategory | undefined;

  let displayedTutorials = tutorials;
  let heading = "Tutorial Populer";

  if (query) {
    displayedTutorials = searchTutorials(query);
    heading = `Hasil pencarian: "${query}"`;
  } else if (kategori) {
    displayedTutorials = getTutorialsByCategory(kategori);
    const labels: Record<string, string> = {
      whatsapp: "WhatsApp",
      email: "Email",
      file: "File & Dokumen",
      browser: "Browser",
      lainnya: "Lainnya",
    };
    heading = `Kategori: ${labels[kategori] ?? kategori}`;
  }

  return (
    <main>
      <HeroSection searchQuery={query} />
      {!query && !kategori && <CategorySection />}
      <TutorialListSection
        tutorials={displayedTutorials}
        heading={heading}
        emptyMessage={
          query
            ? `Tidak ada tutorial untuk "${query}". Coba kata kunci lain.`
            : "Belum ada tutorial di kategori ini."
        }
      />
    </main>
  );
}
