import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryImages } from "../data/galleryData";

export default function GalleryPreview() {
  const [selectedItem, setSelectedItem] = useState(null);

  const photos = galleryImages
    .filter((item) =>
      ["Venue", "Decor", "F&B", "Entertainment"].includes(item.category)
    )
    .slice(0, 4);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-end lg:justify-between lg:text-left">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extrabold leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
              MOMENTS, MEMORIES & EVENT HIGHLIGHTS
            </h2>

            <p className="mt-5 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
              A beautiful space to showcase real event photos with a clean preview
              experience.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide lg:self-auto"
          >
            View Full Gallery
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {photos.map((photo) => (
            <button
              key={photo.src}
              onClick={() => setSelectedItem(photo)}
              className="group aspect-square overflow-hidden sm:aspect-[4/3] lg:aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/80 p-4 backdrop-blur-md">
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-none bg-white text-[#650a34]"
          >
            <X size={22} />
          </button>

          <div className="w-full max-w-5xl overflow-hidden">
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
    </section>
  );
}
