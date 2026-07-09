import {
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Crown,
  HeartHandshake,
  PartyPopper,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const stats = [
    { number: "9+", label: "Years Industry Experience", icon: Award },
    { number: "200+", label: "Events Managed", icon: PartyPopper },
    { number: "1000+", label: "Happy Guests", icon: Users },
    { number: "30+", label: "Corporate Clients", icon: HeartHandshake },
  ];

  const values = [
    "Creative event concepts",
    "Professional planning",
    "Premium decor execution",
    "Guest-focused hospitality",
    "Smooth coordination",
    "Reliable vendor management",
  ];

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative bg-[#fff8fb] pt-36 pb-6 sm:pt-40 lg:pt-44 lg:pb-8">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
            <div className="text-center lg:text-left">
              <h1 className="mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-[1.08] text-gray-800 sm:text-5xl sm:leading-[1.06] lg:mx-0 lg:text-6xl lg:leading-[1.05]">
                Designing Events That Feel Premium, Personal & Unforgettable
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
                Ekalavya Event & Entertainment is a professional event
                management brand established on 28th May, 2024, dedicated to
                creating beautiful, smooth and memorable event experiences.
              </p>

              <div className="mt-5 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
                >
                  Our Journey
                  <ArrowRight size={18} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#650a34]/20 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] shadow-lg shadow-[#650a34]/5 transition hover:-translate-y-1 hover:border-[#ed1968] hover:text-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
                >
                  Plan An Event
                </Link>
              </div>
            </div>

            <div className="relative order-2 lg:order-1">

              <div className="relative overflow-hidden bg-white p-3">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src="/images/g16.jpeg"
                    alt="Ekalavya Event & Entertainment"
                    className="h-full w-full object-cover"
                  />

                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          {/* <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="rounded-[2rem] border border-[#650a34]/10 bg-white p-6 shadow-lg shadow-[#650a34]/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#650a34]/12"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34]">
                    <Icon size={25} />
                  </div>

                  <h3 className="text-4xl font-extrabold leading-none text-gray-800">
                    {item.number}
                  </h3>

                  <p className="mt-2 font-semibold text-gray-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="relative bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:items-stretch">
            <div className="relative order-2 lg:order-1 lg:h-full">
              <div className="relative h-full overflow-hidden rounded-2xl lg:absolute lg:inset-0">
                <img
                  src="/images/g41.jpeg"
                  alt="Event Planning Journey"
                  className="aspect-square h-full w-full object-cover lg:aspect-auto"
                />
              </div>
            </div>

            <div className="order-1 text-center lg:order-2 lg:text-left">
              <h2 className="text-3xl font-extrabold uppercase leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
                From Ideas To Experiences, We Manage Every Detail With Passion
              </h2>

              <p className="mt-6 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
                Ekalavya Event & Entertainment was built with a vision to offer
                complete event solutions under one trusted name. With 9 years of
                industry experience, the team understands how to plan, manage and
                execute events that feel effortless for the client and memorable
                for the guests.
              </p>

              <p className="mt-4 leading-6 text-gray-600 sm:text-lg sm:leading-8">
                Our experience includes venue management, food and beverage
                support, decor and production, entertainment, hospitality,
                logistics and celebrity management. We work with creativity,
                discipline and clear coordination so that every event runs
                smoothly from beginning to end.
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value}
                    className="group flex flex-col items-center justify-center rounded-2xl border border-[#650a34]/10 bg-white p-4 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:flex-row sm:justify-start sm:text-left"
                  >
                    <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white sm:mb-0 sm:mr-4 sm:h-12 sm:w-12">
                      <CheckCircle2 size={21} />
                    </div>
                    <div>
                      <span className="text-base font-extrabold leading-snug text-gray-800">
                        {value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="relative bg-[#fff8fb] py-6 sm:py-8 lg:py-10">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold uppercase leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
              Built On Creativity, Trust & Seamless Execution
            </h2>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-[#650a34] p-7 shadow-2xl shadow-[#650a34]/20">
              <div className="mb-6 text-white">
                <Target size={40} />
              </div>

              <h3 className="text-2xl font-extrabold leading-snug text-white">
                Our Mission
              </h3>

              <p className="mt-4 leading-6 text-white/80 sm:leading-8">
                To provide complete event solutions that combine creative ideas,
                professional planning and flawless execution for every client.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#ed1968] p-7 shadow-2xl shadow-[#ed1968]/20">
              <div className="mb-6 text-white">
                <Crown size={40} />
              </div>

              <h3 className="text-2xl font-extrabold leading-snug text-white">
                Our Vision
              </h3>

              <p className="mt-4 leading-6 text-white/80 sm:leading-8">
                To become a trusted event partner known for premium experiences,
                smooth coordination and memorable celebrations.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#650a34] p-7 shadow-2xl shadow-[#650a34]/20">
              <div className="mb-6 text-white">
                <ShieldCheck size={40} />
              </div>

              <h3 className="text-2xl font-extrabold leading-snug text-white">
                Our Promise
              </h3>

              <p className="mt-4 leading-6 text-white/80 sm:leading-8">
                To understand your requirement, respect your vision and manage
                every detail with care, transparency and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center text-center gap-6 lg:flex-row lg:items-end lg:justify-between lg:text-left">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-extrabold uppercase leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
                Simple Process. Premium Result.
              </h2>

              <p className="mt-5 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
                Our approach keeps your event journey clear, organized and
                stress-free.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
            >
              Start Now
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Consultation",
                text: "We understand your event type, budget, guest count and expectations.",
              },
              {
                step: "02",
                title: "Planning",
                text: "We create the event concept, service flow and execution plan.",
              },
              {
                step: "03",
                title: "Coordination",
                text: "Our team manages vendors, venue, production, hospitality and logistics.",
              },
              {
                step: "04",
                title: "Execution",
                text: "We deliver the event smoothly so you can enjoy every moment.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="group relative overflow-hidden rounded-[2rem] border border-[#650a34]/10 bg-white p-7 shadow-lg shadow-[#650a34]/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#650a34]/15"
              >
                <span className="font-heading text-6xl font-extrabold leading-none text-[#650a34]/8">
                  {item.step}
                </span>

                <h3 className="mt-5 text-2xl font-extrabold leading-snug text-gray-800">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="rounded-[2rem] bg-[#650a34] px-4 py-10 text-center shadow-2xl shadow-[#650a34]/20 sm:px-6 lg:py-16">
            <div className="mx-auto max-w-3xl">
              <div className="mb-6 flex justify-center text-white">
                <CalendarCheck size={45} />
              </div>

              <h2 className="text-3xl font-extrabold uppercase leading-[1.12] text-white sm:text-4xl sm:leading-[1.1]">
                Ready To Plan Your Next Event?
              </h2>

              <p className="mt-4 text-white/80">
                Let Ekalavya Event & Entertainment create a beautiful, organized
                and memorable event experience for you.
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
        </div>
      </section>
    </main>
  );
}
