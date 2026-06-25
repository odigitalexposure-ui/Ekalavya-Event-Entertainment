import {
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Crown,
  HeartHandshake,
  Lightbulb,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Star,
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
      <section className="relative bg-[#fff8fb] pt-32 pb-20 sm:pt-40 lg:pb-28">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#ed1968]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#650a34]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34] shadow-md shadow-[#650a34]/5">
                <Sparkles size={15} />
                About Ekalavya
              </span>

              <h1 className="mt-6 max-w-4xl text-4xl font-extrabold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
                Designing Events That Feel Premium, Personal & Unforgettable
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                Ekalavya Event & Entertainment is a professional event
                management brand established on 28th May, 2024, dedicated to
                creating beautiful, smooth and memorable event experiences.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-[#650a34] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968]"
                >
                  Our Journey
                  <ArrowRight size={18} />
                </a>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-[#650a34]/20 bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#650a34] shadow-lg shadow-[#650a34]/5 transition hover:-translate-y-1 hover:border-[#ed1968] hover:text-[#ed1968]"
                >
                  Plan An Event
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-5 -top-5 h-36 w-36 rounded-full bg-[#ed1968]/15" />
              <div className="absolute -right-5 -bottom-5 h-44 w-44 rounded-full bg-[#650a34]/10" />

              <div className="relative overflow-hidden rounded-[2.7rem] bg-white p-3 shadow-[0_30px_90px_rgba(101,10,52,0.18)]">
                <div className="relative overflow-hidden rounded-[2.2rem]">
                  <img
                    src="/images/g16.jpeg"
                    alt="Ekalavya Event & Entertainment"
                    className="h-[480px] w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#650a34]/85 via-[#650a34]/20 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/25 bg-white/15 p-5 text-white backdrop-blur-md">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">
                      Since 2024
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold">
                      We Build Your Dream Event
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/85">
                      A unit of J N Media & Advertising.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

                  <h3 className="text-4xl font-extrabold text-gray-800">
                    {item.number}
                  </h3>

                  <p className="mt-2 font-semibold text-gray-500">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="relative bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
            <div className="relative">
              <div className="relative overflow-hidden rounded-[2.5rem] p-3 shadow-[0_30px_90px_rgba(101,10,52,0.16)]">
                <img
                  src="/images/g41.jpeg"
                  alt="Event Planning Journey"
                  className="h-[520px] w-full rounded-[2rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-8 left-6 right-6 rounded-[2rem] bg-white p-5 shadow-2xl shadow-[#650a34]/15">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <h4 className="text-2xl font-extrabold text-[#650a34]">
                      9+
                    </h4>
                    <p className="text-xs font-semibold text-gray-500">
                      Years
                    </p>
                  </div>

                  <div className="border-x border-[#650a34]/10">
                    <h4 className="text-2xl font-extrabold text-[#650a34]">
                      200+
                    </h4>
                    <p className="text-xs font-semibold text-gray-500">
                      Events
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-extrabold text-[#650a34]">
                      30+
                    </h4>
                    <p className="text-xs font-semibold text-gray-500">
                      Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <span className="inline-flex rounded-full bg-[#650a34]/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34]">
                Our Journey
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
                From Ideas To Experiences, We Manage Every Detail With Passion
              </h2>

              <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
                Ekalavya Event & Entertainment was built with a vision to offer
                complete event solutions under one trusted name. With 9 years of
                industry experience, the team understands how to plan, manage and
                execute events that feel effortless for the client and memorable
                for the guests.
              </p>

              <p className="mt-4 leading-8 text-gray-600">
                Our experience includes venue management, food and beverage
                support, decor and production, entertainment, hospitality,
                logistics and celebrity management. We work with creativity,
                discipline and clear coordination so that every event runs
                smoothly from beginning to end.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-3 rounded-2xl border border-[#650a34]/10 bg-[#fff8fb] p-4"
                  >
                    <CheckCircle2
                      size={21}
                      className="shrink-0 text-[#ed1968]"
                    />
                    <span className="font-semibold text-gray-700">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision */}
      <section className="relative bg-[#fff8fb] py-20 sm:py-24 lg:py-28">
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#650a34]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#ed1968]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34] shadow-md shadow-[#650a34]/5">
              Purpose & Promise
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Built On Creativity, Trust & Seamless Execution
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-[#650a34]/10 bg-white p-7 shadow-lg shadow-[#650a34]/5">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34]">
                <Target size={29} />
              </div>

              <h3 className="text-2xl font-extrabold text-gray-800">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To provide complete event solutions that combine creative ideas,
                professional planning and flawless execution for every client.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#650a34] p-7 shadow-2xl shadow-[#650a34]/20">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#650a34]">
                <Crown size={29} />
              </div>

              <h3 className="text-2xl font-extrabold text-white">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-white/80">
                To become a trusted event partner known for premium experiences,
                smooth coordination and memorable celebrations.
              </p>
            </div>

            <div className="rounded-[2rem] border border-[#650a34]/10 bg-white p-7 shadow-lg shadow-[#650a34]/5">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#ed1968]/10 text-[#ed1968]">
                <ShieldCheck size={29} />
              </div>

              <h3 className="text-2xl font-extrabold text-gray-800">
                Our Promise
              </h3>

              <p className="mt-4 leading-8 text-gray-600">
                To understand your requirement, respect your vision and manage
                every detail with care, transparency and professionalism.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full bg-[#650a34]/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34]">
                How We Work
              </span>

              <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
                Simple Process. Premium Result.
              </h2>

              <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
                Our approach keeps your event journey clear, organized and
                stress-free.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-full bg-[#650a34] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968]"
            >
              Start Now
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                <span className="text-6xl font-extrabold text-[#650a34]/8">
                  {item.step}
                </span>

                <h3 className="mt-5 text-2xl font-extrabold text-gray-800">
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
      <section className="bg-[#650a34] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-[#650a34]">
              <CalendarCheck size={30} />
            </div>

            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready To Plan Your Next Event?
            </h2>

            <p className="mt-4 text-white/80">
              Let Ekalavya Event & Entertainment create a beautiful, organized
              and memorable event experience for you.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-wide text-[#650a34] transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white"
            >
              Enquire Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
