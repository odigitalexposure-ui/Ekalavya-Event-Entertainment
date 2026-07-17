import React, { memo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  ConciergeBell,
  Gem,
  HeartHandshake,
  MapPin,
  Music,
  Plane,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";
import { getServiceBySlug, servicesData } from "../data/servicesData";

const highlightIcons = [Gem, ConciergeBell, CalendarCheck];
const featureIcons = [
  MapPin,
  Utensils,
  Sparkles,
  Music,
  Plane,
  Star,
  HeartHandshake,
  BadgeCheck,
];

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const relatedServices = servicesData.filter((item) => item.slug !== service.slug).slice(0, 3);

  const highlights = [
    { label: "Planned With Detail", value: "Concept to closure" },
    { label: "Premium Experience", value: "Elegant guest journey" },
    { label: "On-Ground Control", value: "Managed event flow" },
  ];

  return (
    <main className="overflow-hidden bg-white text-gray-700">
      <section className="relative bg-[#fff8fb] pt-24 pb-6 sm:pt-28 lg:pt-32 lg:pb-8">

        <div className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr]">
          <div className="text-center lg:text-left">
            <h1 className="mx-auto max-w-3xl text-4xl font-extrabold uppercase leading-[1.08] text-gray-800 sm:text-4xl sm:leading-[1.06] lg:mx-0 lg:max-w-none lg:text-6xl lg:leading-[1.05]">
              {service.title}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl font-heading text-lg font-semibold leading-snug text-[#650a34] sm:text-xl lg:mx-0">
              {service.subtitle}
            </p>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
              {service.shortDescription}
            </p>

            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Enquire Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative">

            <div className="relative overflow-hidden">
              <img
                src={service.heroImage}
                alt={service.title}
                loading="eager"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 sm:py-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="text-center lg:text-left">
            <h2 className="mx-auto max-w-3xl text-3xl font-extrabold uppercase leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:mx-0 lg:max-w-none">
              Designed for events
               <br />that feel effortless <br />and memorable
            </h2>
          </div>

          <div className="text-center lg:text-left">
            <p className="mx-auto max-w-2xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-none">
              {service.overview}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = highlightIcons[index];
                const isLastOdd = highlights.length % 2 !== 0 && index === highlights.length - 1;

                return (
                  <div
                    key={item.label}
                    className={`group flex min-h-[140px] flex-col items-center justify-center rounded-2xl border border-[#650a34]/10 bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md lg:min-h-0 lg:items-start lg:border-none lg:bg-transparent lg:p-0 lg:text-left lg:shadow-none lg:hover:translate-y-0 lg:hover:shadow-none ${
                      isLastOdd ? "col-span-2 mx-auto w-full max-w-[190px] sm:col-span-1 sm:mx-0 sm:max-w-none" : ""
                    }`}
                  >
                    <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white lg:mb-4 lg:h-12 lg:w-12">
                      <Icon size={21} />
                    </div>
                    <div>
                      <h3 className="text-sm font-extrabold leading-snug text-gray-800 sm:text-base">{item.label}</h3>
                      <p className="mt-1 text-xs leading-5 text-gray-600 sm:mt-2 sm:text-sm sm:leading-6">{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f51576] py-6 sm:py-8 lg:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            title={`Complete ${service.title} support`}
            text="Every service is planned with the right mix of creativity, coordination, and on-ground control."
          />

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];

              return (
                <div
                  key={feature}
                  className="group rounded-[2rem] bg-white p-6 transition duration-300 hover:-translate-y-2"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white">
                    <Icon size={25} />
                  </div>
                  <h3 className="text-lg font-extrabold leading-snug text-gray-800">
                    {feature}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#650a34]/20 to-transparent"></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-extrabold uppercase leading-[1.2] text-gray-800 sm:text-4xl lg:text-5xl">
              A Clear Plan From First Brief To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#650a34] to-[#ed1968]">Final Applause</span>
            </h2>
            <p className="mt-5 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
              We keep the workflow transparent, practical, and focused on a calm event-day experience.
            </p>
          </div>

          <div className="mt-16 lg:mt-24 relative">
            {/* Connecting Line (visible on desktop) */}
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#650a34]/10 via-[#ed1968]/30 to-[#650a34]/10"></div>

            <div className="grid gap-12 lg:gap-6 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <div
                  key={step}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Elegant Number Marker */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_8px_30px_rgba(237,25,104,0.2)]">
                    <div className="absolute inset-0 rounded-full border border-[#650a34]/5 group-hover:border-[#ed1968]/30 transition-colors duration-500"></div>
                    <span className="font-heading text-3xl font-black text-[#650a34] transition-colors duration-500 group-hover:text-[#ed1968]">
                      {index + 1}
                    </span>
                  </div>
                  
                  {/* Step Content */}
                  <div className="mt-8 relative">
                    {/* Subtle connecting line for mobile */}
                    {index !== 0 && (
                      <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-10 w-px bg-gradient-to-b from-transparent to-[#650a34]/20 lg:hidden"></div>
                    )}
                    <p className="leading-7 text-gray-600 px-2 sm:px-6 transition-colors duration-300 group-hover:text-gray-900">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8fb] py-6 sm:py-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="mx-auto max-w-2xl text-2 font-extrabold uppercase leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:mx-0 lg:max-w-none">
              Premium execution with personal attention
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-6 text-gray-600 sm:leading-8 lg:mx-0 lg:max-w-none">
              We combine creative planning, vendor coordination, and hands-on
              supervision so every important detail has a responsible owner.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.whyChoose.map((point) => (
              <div
                key={point}
                className="flex gap-4 bg-white p-5 "
              >
                <CheckCircle2 className="mt-1 shrink-0 text-[#ed1968]" size={22} />
                <p className="font-semibold leading-7 text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-[#650a34] px-6 py-10 text-center shadow-2xl shadow-[#650a34]/20 sm:px-8 lg:flex-row lg:px-12 lg:py-14 lg:text-left">
            <div>
              <p className="font-heading text-sm font-bold uppercase leading-snug tracking-[0.24em] text-[#ffb8d5]">
                Let&apos;s Plan Your Event
              </p>
              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
                Ready to discuss {service.title}?
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
                Share your event requirement and our team will help you shape
                the right plan, timeline, and experience.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white sm:px-8 sm:py-4 sm:text-sm"
            >
              Contact us
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10 lg:gap-6">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group block rounded-2xl bg-gray-50 p-5 transition hover:-translate-y-1 hover:bg-gray-100 hover:shadow-md"
              >
                <h3 className="text-lg font-extrabold leading-snug text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                  {item.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const SectionHeading = memo(function SectionHeading({ title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-extrabold uppercase leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">{text}</p>
    </div>
  );
});
