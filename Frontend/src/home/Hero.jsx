import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-24 sm:pt-28 lg:pt-32"
    >
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-120px)] max-w-6xl items-center gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold leading-[1.1] text-gray-800 sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
            <span className="block">WE BUILD </span>
            <span className="relative block text-[#ed1968]">YOUR DREAM EVENT</span>
            <span className="block">INTO REALITY</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-6 sm:leading-8 text-gray-600 sm:text-lg lg:mx-0">
            From venue management, decor production and Food & Beverage service to
            entertainment, hospitality, logistics and celebrity management —
            Ekalavya Event & Entertainment creates unforgettable celebrations
            with style, planning and perfection.
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/contact"
              className="group inline-flex w-auto items-center justify-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/25 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
            >
              Plan Your Event
              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Stats */}
          {/* <div className="mt-5 grid grid-cols-3 gap-3 sm:max-w-xl lg:max-w-2xl">
            <div className="rounded-3xl border border-[#650a34]/10 bg-white/80 p-4 shadow-lg shadow-[#650a34]/5 backdrop-blur">
              <h3 className="text-2xl font-extrabold text-[#650a34] sm:text-3xl">
                9+
              </h3>
              <p className="mt-1 text-xs font-semibold text-gray-500 sm:text-sm">
                Years Experience
              </p>
            </div>

            <div className="rounded-3xl border border-[#650a34]/10 bg-white/80 p-4 shadow-lg shadow-[#650a34]/5 backdrop-blur">
              <h3 className="text-2xl font-extrabold text-[#650a34] sm:text-3xl">
                200+
              </h3>
              <p className="mt-1 text-xs font-semibold text-gray-500 sm:text-sm">
                Events Managed
              </p>
            </div>

            <div className="rounded-3xl border border-[#650a34]/10 bg-white/80 p-4 shadow-lg shadow-[#650a34]/5 backdrop-blur">
              <h3 className="text-2xl font-extrabold text-[#650a34] sm:text-3xl">
                30+
              </h3>
              <p className="mt-1 text-xs font-semibold text-gray-500 sm:text-sm">
                Corporate Clients
              </p>
            </div>
          </div> */}
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Main Card */}
          <div className="relative overflow-hidden">
            <div className="relative aspect-square min-h-[auto] overflow-hidden bg-[#650a34] sm:aspect-auto sm:min-h-[520px]">
              <img
                src="/images/g26.jpeg"
                alt="Ekalavya Event & Entertainment"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
