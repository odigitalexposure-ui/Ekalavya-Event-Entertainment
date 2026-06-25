import { ArrowRight, CalendarCheck, Sparkles, Star } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Hero() {
  const phone = "919007744772";

  const whatsappMessage = encodeURIComponent(
    "Hello Ekalavya Event & Entertainment, I want to enquire about your event services."
  );

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-white pt-32 lg:pt-40"
    >
      {/* Soft Brand Background */}
      <div className="absolute inset-0">
        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#ed1968]/15 blur-[100px]" />
        <div className="absolute right-[-180px] top-28 h-[520px] w-[520px] rounded-full bg-[#650a34]/15 blur-[120px]" />
        <div className="absolute bottom-[-220px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#ed1968]/10 blur-[120px]" />
      </div>

      {/* Pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#650a34_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-120px)] max-w-7xl items-center gap-12 px-4 pb-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#650a34]/15 bg-white/80 px-4 py-2 shadow-lg shadow-[#650a34]/5 backdrop-blur">
            <Sparkles size={16} className="text-[#ed1968]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#650a34] sm:text-sm">
              Premium Event Experience
            </span>
          </div>

          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-800 sm:text-5xl md:text-6xl xl:text-7xl">
            We Build Your{" "}
            <span className="relative inline-block text-[#650a34]">
              Dream Event
              <span className="absolute -bottom-1 left-0 h-1 sm:h-3 w-full rounded-full bg-[#ed1968]/20" />
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
          <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
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

            <a
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#650a34]/20 bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#650a34] shadow-xl shadow-[#650a34]/5 transition hover:-translate-y-1 hover:border-[#ed1968] hover:text-[#ed1968] sm:w-auto"
            >
              <FaWhatsapp size={20} />
              WhatsApp Now
            </a>
          </div>

          {/* Stats */}
          <div className="mt-11 grid grid-cols-3 gap-3 sm:max-w-xl lg:max-w-2xl">
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
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Decorative Rings */}
          <div className="absolute -left-6 top-16 h-32 w-32 rounded-full border-[18px] border-[#ed1968]/10" />
          <div className="absolute -right-8 bottom-20 h-44 w-44 rounded-full border-[24px] border-[#650a34]/10" />

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(101,10,52,0.22)]">
            <div className="relative min-h-[520px] overflow-hidden rounded-[2rem] bg-[#650a34]">
              <img
                src="/images/g26.jpeg"
                alt="Ekalavya Event & Entertainment"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#650a34]/20 via-[#650a34]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-white backdrop-blur-md">
                  <CalendarCheck size={17} />
                  <span className="text-sm font-semibold">
                    Complete Event Solution
                  </span>
                </div>

                <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                  Venue. Decor. Food. Entertainment.
                </h2>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
                  One expert team to manage every detail of your event with
                  creativity, coordination and care.
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card */}
          <div className="absolute -left-2 top-10 rounded-3xl border border-white/70 bg-white/90 p-4 shadow-2xl shadow-[#650a34]/15 backdrop-blur sm:-left-10">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ed1968]/10 text-[#ed1968]">
                <Star size={22} fill="currentColor" />
              </div>
              <div>
                <h4 className="font-extrabold text-gray-800">Premium</h4>
                <p className="text-sm font-medium text-gray-500">
                  Event Planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 120"
          className="h-[70px] w-full fill-[#650a34]/5"
          preserveAspectRatio="none"
        >
          <path d="M0,64L80,58.7C160,53,320,43,480,58.7C640,75,800,117,960,112C1120,107,1280,53,1360,26.7L1440,0L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
}
