import { useState } from "react";
import { ArrowLeft, ArrowRight, Image, X } from "lucide-react";
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
      <section className="relative bg-[#fff8fb] pt-32 pb-20 sm:pt-40 lg:pb-28">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#ed1968]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#650a34]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34] shadow-md shadow-[#650a34]/5">
            <Image size={15} />
            Event Gallery
          </span>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
            Explore Our Event Moments, Setups & Highlights
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
            Browse real Ekalavya event moments including boat party venues,
            decor, dining, entertainment, hospitality and guest celebrations.
          </p>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {galleryImages.map((item, index) => (
              <button
                key={item.src}
                onClick={() => setSelectedIndex(index)}
                className="group mb-6 block w-full break-inside-avoid overflow-hidden rounded-[2rem] bg-white shadow-xl shadow-[#650a34]/10"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                    index % 3 === 0
                      ? "h-[420px]"
                      : index % 3 === 1
                      ? "h-[320px]"
                      : "h-[380px]"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#650a34] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Want Your Event To Be Featured Here?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-white/80">
            Let Ekalavya Event & Entertainment create a beautiful and memorable
            event experience for you.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#650a34] transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white"
          >
            Enquire Now
            <ArrowRight size={18} />
          </Link>
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

          <div className="w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white p-3">
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              className="max-h-[82vh] w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
