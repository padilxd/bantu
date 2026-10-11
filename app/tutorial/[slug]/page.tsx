import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getTutorialBySlug, tutorials } from "@/data/tutorials";
import { getCategoryLabel, formatEstimatedTime } from "@/lib/utils";
import TutorialClient from "@/components/tutorial/TutorialClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return tutorials.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);
  if (!tutorial) return { title: "Tutorial tidak ditemukan — Bantuin" };
  return {
    title: `${tutorial.title} — Bantuin`,
    description: tutorial.description,
  };
}

export default async function TutorialPage({ params }: PageProps) {
  const { slug } = await params;
  const tutorial = getTutorialBySlug(slug);

  if (!tutorial) {
    notFound();
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link
              href="/"
              className="hover:text-green-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 rounded"
            >
              Beranda
            </Link>
          </li>
          <li aria-hidden="true">›</li>
          <li className="text-gray-800 font-medium truncate max-w-[200px]">
            {tutorial.title}
          </li>
        </ol>
      </nav>

      {/* Tutorial header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-green-700 bg-green-50 border border-green-200 rounded-full px-3 py-0.5">
            {getCategoryLabel(tutorial.category)}
          </span>
          <span className="text-xs text-gray-400">
            ⏱ {formatEstimatedTime(tutorial.estimatedTime)}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-tight mb-3">
          {tutorial.title}
        </h1>
        <p className="text-gray-600 leading-relaxed">{tutorial.description}</p>
      </header>

      {/* Tutorial interactive client */}
      <TutorialClient tutorial={tutorial} />
    </main>
  );
}
