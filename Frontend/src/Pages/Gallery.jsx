import { useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryImages } from "../data/galleryData";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedItem =
    selectedIndex !== null ? galleryImages[selectedIndex] : null;

  const nextItem = () => {
    setSelectedIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const prevItem = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <main className="overflow-hidden bg-white">
      <section className="relative bg-[#fff8fb] pt-36 pb-6 sm:pt-40 lg:pt-44 lg:pb-8">

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h1 className="mx-auto max-w-4xl text-4xl font-extrabold uppercase leading-[1.08] text-gray-800 sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
            Explore Our Event Moments, Setups & Highlights
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
            Browse real Ekalavya event moments including boat party venues,
            decor, dining, entertainment, hospitality and guest celebrations.
          </p>
        </div>
      </section>

      <section className="relative py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item, index) => (
              <button
                key={item.src}
                onClick={() => setSelectedIndex(index)}
                className="group aspect-square overflow-hidden bg-[#fff8fb] sm:aspect-[4/3] lg:aspect-square"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[2rem] bg-[#650a34] px-4 py-10 text-center shadow-2xl shadow-[#650a34]/20 sm:px-6 lg:py-16">
            <h2 className="text-3xl font-extrabold uppercase leading-[1.12] text-white sm:text-4xl sm:leading-[1.1]">
              Want Your Event To Be Featured Here?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-white/80">
              Let Ekalavya Event & Entertainment create a beautiful and memorable
              event experience for you.
            </p>

            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
            >
              Enquire Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/85 p-4 backdrop-blur-md">
          <button
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#650a34]"
          >
            <X size={22} />
          </button>

          <button
            onClick={prevItem}
            className="absolute left-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#650a34] md:flex"
          >
            <ArrowLeft size={22} />
          </button>

          <button
            onClick={nextItem}
            className="absolute right-5 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#650a34] md:flex"
          >
            <ArrowRight size={22} />
          </button>

          <div className="w-full max-w-6xl overflow-hidden bg-white p-3">
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              loading="lazy"
              decoding="async"
              className="aspect-square max-h-[82vh] w-full object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
