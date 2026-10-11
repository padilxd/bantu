import SearchBar from "@/components/ui/SearchBar";

interface Props {
  searchQuery?: string;
}

export default function HeroSection({ searchQuery }: Props) {
  return (
    <section
      className="bg-gradient-to-b from-green-50 to-white py-16 px-4"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        <div>
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight mb-3"
          >
            Bingung cara melakukan sesuatu di HP?
          </h1>
          <p className="text-lg text-gray-600">
            Cari caranya. Ikuti langkahnya.
          </p>
        </div>

        <SearchBar defaultValue={searchQuery} />

        <p className="text-sm text-gray-400">
          Coba:{" "}
          <span className="text-green-600 font-medium">kirim PDF</span>,{" "}
          <span className="text-green-600 font-medium">buat email</span>,{" "}
          <span className="text-green-600 font-medium">upload file</span>
        </p>
      </div>
    </section>
  );
}
