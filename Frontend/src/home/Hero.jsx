import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-36 sm:pt-40 lg:pt-44"
    >
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-center gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-800 sm:text-5xl md:text-6xl xl:text-7xl">
            We Build Your{" "}
            <span className="relative inline-block text-[#650a34]">
              Dream Event
            </span>{" "}
            Into Reality
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg lg:mx-0">
            From venue management, decor production and F&B service to
            entertainment, hospitality, logistics and celebrity management —
            Ekalavya Event & Entertainment creates unforgettable celebrations
            with style, planning and perfection.
          </p>

          {/* CTA Buttons */}
          <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#650a34] px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-[#650a34]/25 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:w-auto"
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
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(101,10,52,0.22)]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#650a34]">
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
