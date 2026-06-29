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
            <h2 className="text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              MOMENTS, MEMORIES & EVENT HIGHLIGHTS
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              A beautiful space to showcase real event photos with a clean preview
              experience.
            </p>
          </div>

          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-3 rounded-full bg-[#650a34] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] lg:self-auto"
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
              className="group aspect-[4/3] overflow-hidden shadow-xl shadow-[#650a34]/10 sm:aspect-square"
            >
              <img
                src={photo.src}
                alt={photo.title}
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
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#650a34]"
          >
            <X size={22} />
          </button>

          <div className="w-full max-w-5xl overflow-hidden rounded-[2rem] bg-white p-3">
            <img
              src={selectedItem.src}
              alt={selectedItem.title}
              className="max-h-[82vh] w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}