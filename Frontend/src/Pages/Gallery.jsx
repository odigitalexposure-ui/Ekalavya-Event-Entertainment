import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Link } from "react-router-dom";
import { galleryImages } from "../data/galleryData";
import AnimatedSection, { AnimatedCard } from "../common/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const selectedItem =
    selectedIndex !== null && galleryImages[selectedIndex]
      ? galleryImages[selectedIndex]
      : null;

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

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") nextItem();
      if (e.key === "ArrowLeft") prevItem();
      if (e.key === "Escape") setSelectedIndex(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <main className="overflow-hidden bg-white text-gray-700">
      {/* Hero Header */}
      <section className="relative bg-[#fff8fb] pt-28 pb-8 sm:pt-24 sm:pb-8 lg:pt-28 lg:pb-10">
        <AnimatedSection className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <span className="font-heading text-xs font-bold uppercase tracking-[0.24em] text-[#ed1968]">
            Visual Showcase
          </span>
          <h1 className="mx-auto mt-2 max-w-4xl text-2xl font-medium uppercase leading-snug text-[#232020] sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
            Explore Our Event Moments &amp; Highlights
          </h1>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-8">
            Browse real event moments including luxury river cruises, opulent weddings,
            decor production, entertainment nights, and hospitality excellence.
          </p>
        </AnimatedSection>
      </section>

      {/* Gallery Section */}
      <section className="relative py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Images Grid with Scroll Animation */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {galleryImages.map((item, index) => (
              <AnimatedCard
                key={`${item.src}-${index}`}
                delay={(index % 4) * 0.08}
              >
                <button
                  onClick={() => setSelectedIndex(index)}
                  className="group relative aspect-square w-full overflow-hidden bg-gray-100 rounded-none border border-[#650a34]/10 shadow-sm focus:outline-none block"
                >
                  <img
                    src={item.src}
                    alt={item.title}
                    loading={index < 8 ? "eager" : "lazy"}
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  {/* Subtle Hover Info Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#ff80ab]">
                      {item.category}
                    </span>
                    <h3 className="text-xs sm:text-sm font-extrabold text-white leading-tight mt-0.5 line-clamp-2">
                      {item.title}
                    </h3>
                  </div>
                </button>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-8 rounded-none bg-[#650a34] px-6 py-10 text-center shadow-2xl shadow-[#650a34]/20 sm:px-8 lg:flex-row lg:px-12 lg:py-14 lg:text-left">
            <div>
              <p className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-[#ffb8d5]">
                Crafting Your Special Moments
              </p>
              <h2 className="mt-2 text-3xl font-extrabold uppercase leading-[1.12] text-white sm:text-4xl sm:leading-[1.1]">
                WANT YOUR EVENT FEATURED HERE?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
                Let Ekalavya Event &amp; Entertainment create a beautiful, organized, and memorable celebration for you.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-none bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white sm:px-8 sm:py-4 sm:text-sm"
            >
              Enquire Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-none bg-white text-[#650a34] shadow-lg transition hover:bg-[#ed1968] hover:text-white"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevItem();
              }}
              className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-none bg-white/90 text-[#650a34] shadow-lg transition hover:bg-[#ed1968] hover:text-white sm:left-6"
              aria-label="Previous Image"
            >
              <ArrowLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextItem();
              }}
              className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-none bg-white/90 text-[#650a34] shadow-lg transition hover:bg-[#ed1968] hover:text-white sm:right-6"
              aria-label="Next Image"
            >
              <ArrowRight size={24} />
            </button>

            {/* Image & Caption Container */}
            <div
              className="relative max-h-[85vh] max-w-5xl overflow-hidden text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[75vh] w-auto max-w-full object-contain mx-auto shadow-2xl"
              />

              <div className="mt-4 flex flex-col items-center text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-[#ff80ab]">
                  {selectedItem.category} &bull; Image {selectedIndex + 1} of {galleryImages.length}
                </span>
                <h3 className="mt-1 text-lg font-extrabold sm:text-xl text-white">
                  {selectedItem.title}
                </h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
