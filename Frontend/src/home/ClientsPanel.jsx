import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function ClientsPanel() {
  const clients = [
    "Corporate Events",
    "Wedding Clients",
    "Private Parties",
    "Brand Activations",
    "Cultural Events",
    "Artist Shows",
    "Hospitality Events",
    "Luxury Celebrations",
  ];

  return (
    <section className="relative overflow-hidden bg-[#fff8fb] py-6 sm:py-8 lg:py-10">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-extrabold leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
              A GROWING NETWORK OF HAPPY CLIENTS & MEMORABLE EVENTS
            </h2>

            <p className="mt-5 text-base leading-6 sm:leading-8 text-gray-600 sm:text-lg">
              With years of industry experience, Ekalavya Event & Entertainment
              has successfully managed events for private clients, corporate
              brands, celebrations and entertainment experiences.
            </p>

            <div className="mt-5 flex justify-center sm:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Work With Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Sliding Panel */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#650a34]/10 bg-white p-5 shadow-[0_30px_90px_rgba(101,10,52,0.13)] sm:p-7">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />

            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-extrabold leading-snug text-gray-800">
                  Events We Proudly Serve
                </h3>
              </div>
            </div>

            <div className="relative h-[430px] overflow-hidden">
              <div className="animate-clientSlide space-y-4">
                {[...clients, ...clients].map((client, index) => (
                  <div
                    key={`${client}-${index}`}
                    className="group flex items-center justify-between rounded-[1.7rem] border border-[#650a34]/10 bg-[#fff8fb] p-5 transition hover:bg-[#650a34] hover:text-white"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#650a34] shadow-sm">
                        <Sparkles size={21} />
                      </div>

                      <div>
                        <h4 className="text-lg font-extrabold leading-snug">
                          {client}
                        </h4>
                        <p className="text-sm text-gray-500 group-hover:text-white/75">
                          Premium event planning & execution
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            <style>{`
              @keyframes clientSlide {
                0% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(-50%);
                }
              }

              .animate-clientSlide {
                animation: clientSlide 18s linear infinite;
              }

              .animate-clientSlide:hover {
                animation-play-state: paused;
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  );
}
