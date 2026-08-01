import {
  ArrowRight,
  CheckCircle2,
  Crown,
  ShieldCheck,
  Target,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection, { AnimatedCard } from "../common/AnimatedSection";
import SnakeBorderBox from "../common/SnakeBorderBox";

export default function About() {
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
      <section className="relative bg-[#fff8fb] pt-28 pb-6 sm:pt-24 sm:pb-6 lg:pt-28 lg:pb-6">
        <AnimatedSection className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-8">
            <div className="text-center lg:text-left">
              <h1 className="mx-auto max-w-3xl text-2xl font-medium uppercase leading-snug text-[#232020] sm:text-5xl sm:leading-[1.06] lg:mx-0 lg:text-6xl lg:leading-[1.05]">
                Designing Events That Feel Premium, Personal &amp; Unforgettable
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
                Ekalavya Event &amp; Entertainment is a professional event
                management company, dedicated to
                creating beautiful, smooth and memorable event experiences.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-4 sm:mt-5 sm:flex-row lg:justify-start">
                <a
                  href="#journey"
                  className="inline-flex items-center justify-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
                >
                  Our Journey
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0 order-2 lg:order-1">
              <div className="relative overflow-hidden">
                <img
                  src="/images/g10.jpeg"
                  alt="Ekalavya Team Planning"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square h-auto w-full object-cover sm:aspect-auto sm:h-[460px]"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Journey */}
      <section id="journey" className="relative bg-white py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:items-stretch">
            <div className="relative order-2 lg:order-1 lg:h-full">
              <div className="relative h-full overflow-hidden rounded-none lg:absolute lg:inset-0">
                <img
                  src="/images/g41.jpeg"
                  alt="Event Planning Journey"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square h-full w-full object-cover lg:aspect-auto"
                />
              </div>
            </div>

            <div className="order-1 text-center lg:order-2 lg:text-left">
              <h2 className="text-3xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1]">
                From Ideas To Experiences, We Manage Every Detail With Passion
              </h2>

              <p className="mt-6 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
                Ekalavya Event &amp; Entertainment was built with a vision to offer
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

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-4">
                {values.map((value, index) => (
                  <AnimatedCard
                    key={value}
                    delay={index * 0.08}
                  >
                    <SnakeBorderBox className="group flex aspect-square flex-col items-center justify-center rounded-none border border-[#650a34]/10 bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md sm:aspect-auto sm:flex-row sm:justify-start sm:p-4 sm:text-left h-full">
                      <div className="mb-2 flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white sm:mb-0 sm:mr-4 sm:h-12 sm:w-12 sm:rounded-none">
                        <CheckCircle2 size={20} className="sm:h-[21px] sm:w-[21px]" />
                      </div>
                      <div>
                        <span className="text-[13px] font-medium leading-tight text-[#232020] sm:text-base sm:leading-snug">
                          {value}
                        </span>
                      </div>
                    </SnakeBorderBox>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Mission Vision */}
      <section className="relative bg-[#fff8fb] py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1]">
              Built On Creativity, Trust &amp; Seamless Execution
            </h2>
          </div>

          <div className="mt-5 grid gap-6 lg:grid-cols-3">
            <AnimatedCard delay={0.1}>
              <SnakeBorderBox className="rounded-none bg-[#650a34] p-7 shadow-2xl shadow-[#650a34]/20 h-full">
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
              </SnakeBorderBox>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <SnakeBorderBox className="rounded-none bg-[#ed1968] p-7 shadow-2xl shadow-[#ed1968]/20 h-full">
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
              </SnakeBorderBox>
            </AnimatedCard>

            <AnimatedCard delay={0.3}>
              <SnakeBorderBox className="rounded-none bg-[#650a34] p-7 shadow-2xl shadow-[#650a34]/20 h-full">
                <div className="mb-6 text-white">
                  <ShieldCheck size={40} />
                </div>

                <h3 className="text-2xl font-extrabold leading-snug text-white">
                  Our Promise
                </h3>

                <p className="mt-4 leading-6 text-white/80 sm:leading-8">
                  Clear communication, honest pricing, dedicated coordination and
                  complete event ownership from start to finish.
                </p>
              </SnakeBorderBox>
            </AnimatedCard>
          </div>
        </AnimatedSection>
      </section>

      {/* How We Work / Process Section with Mouse Hover Snake Border */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1]">
              A Simple Process Designed For A Calm Event Day
            </h2>

            <p className="mt-4 leading-6 text-gray-600 sm:text-lg sm:leading-8">
              We follow a disciplined event planning process so that every
              requirement is captured and executed properly.
            </p>
          </div>

          <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Enquiry & Vision",
                text: "We listen to your ideas, event type, audience and budget expectations.",
              },
              {
                step: "02",
                title: "Planning & Design",
                text: "We create a clear proposal covering venue, decor, production and entertainment.",
              },
              {
                step: "03",
                title: "Coordination",
                text: "Our team manages vendors, setup timelines and event-day operational plans.",
              },
              {
                step: "04",
                title: "Execution",
                text: "We deliver the event smoothly so you can enjoy every moment.",
              },
            ].map((item, index) => (
              <AnimatedCard
                key={item.step}
                delay={index * 0.1}
              >
                <SnakeBorderBox className="group relative overflow-hidden rounded-none border border-[#650a34]/10 bg-white p-7 shadow-lg shadow-[#650a34]/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#650a34]/15 h-full">
                  <span className="font-heading text-6xl font-extrabold leading-none text-[#650a34]/8 transition group-hover:text-[#ed1968]/20">
                    {item.step}
                  </span>

                  <h3 className="mt-5 text-2xl font-medium leading-snug text-[#232020]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.text}
                  </p>
                </SnakeBorderBox>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <SnakeBorderBox className="rounded-none bg-[#650a34] px-6 py-10 text-center shadow-2xl shadow-[#650a34]/20 sm:px-8 lg:px-12 lg:py-14 lg:text-left">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <h2 className="text-3xl font-extrabold uppercase leading-[1.12] text-white sm:text-4xl sm:leading-[1.1]">
                  Ready To Plan Your Next Event?
                </h2>

                <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
                  Let Ekalavya Event &amp; Entertainment create a beautiful, organized
                  and memorable event experience for you.
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
          </SnakeBorderBox>
        </AnimatedSection>
      </section>
    </main>
  );
}
