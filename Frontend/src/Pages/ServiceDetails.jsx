import React, { memo } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck,
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
import AnimatedSection, { AnimatedCard } from "../common/AnimatedSection";
import SnakeBorderBox from "../common/SnakeBorderBox";
import { motion } from "framer-motion";

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
      {/* Hero Section */}
      <section className="relative bg-[#fff8fb] pt-20 pb-4 sm:pt-24 sm:pb-6 lg:pt-28 lg:pb-6">
        <AnimatedSection className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr]">
          <div className="text-center lg:text-left">
            <h1 className="mx-auto max-w-3xl text-2xl sm:text-3xl lg:text-4xl lg:leading-[1.1] font-medium uppercase text-[#232020] lg:mx-0 lg:max-w-none">
              {service.subtitle}
            </h1>

            {/* Main Short Description */}
            <p className="mx-auto mt-4 max-w-2xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
              {service.shortDescription || service.description}
            </p>

            {/* CTA Button */}
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Enquire Now
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-none shadow-2xl border border-[#650a34]/15"
            >
              <img
                src={service.heroImage}
                alt={service.title}
                loading="eager"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Overview Section */}
      <section className="py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="mx-auto max-w-3xl text-3xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1] lg:mx-0 lg:max-w-none">
              Designed for events
               <br />that feel effortless <br />and memorable
            </h2>
            <p className="mt-4 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#ed1968]">
              Comprehensive Planning &amp; Flawless On-Ground Management
            </p>
          </div>

          <div className="text-center lg:text-left">
            {/* Preserved Full Overview Paragraph */}
            <p className="mx-auto max-w-2xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-none">
              {service.overview}
            </p>

            {/* Highlight Metric Cards */}
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = highlightIcons[index];
                const isLastOdd = highlights.length % 2 !== 0 && index === highlights.length - 1;

                return (
                  <SnakeBorderBox
                    key={item.label}
                    className={`group flex min-h-[140px] flex-col items-center justify-center rounded-none border border-[#650a34]/10 bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md lg:items-start lg:p-4 lg:text-left ${
                      isLastOdd ? "col-span-2 mx-auto w-full max-w-[190px] sm:col-span-1 sm:mx-0 sm:max-w-none" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-none bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white lg:mb-3 lg:h-11 lg:w-11"
                    >
                      <Icon size={21} />
                    </motion.div>
                    <div>
                      <h3 className="text-sm font-medium leading-snug text-[#232020] sm:text-base">{item.label}</h3>
                      <p className="mt-1 text-xs leading-5 text-gray-600 sm:mt-1.5 sm:text-xs sm:leading-5">{item.value}</p>
                    </div>
                  </SnakeBorderBox>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Complete Service Features */}
      <section className="bg-[#f51576] py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            title={`Complete ${service.title} support`}
            text="Every service is planned with the right mix of creativity, coordination, and on-ground control."
          />

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];

              return (
                <AnimatedCard
                  key={feature}
                  delay={index * 0.08}
                >
                  <SnakeBorderBox className="group h-full rounded-none bg-white p-6 transition duration-300 hover:-translate-y-2 border border-white/20 shadow-md">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="mb-5 flex h-14 w-14 items-center justify-center rounded-none bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white"
                    >
                      <Icon size={25} />
                    </motion.div>
                    <h3 className="text-lg font-medium leading-snug text-[#232020]">
                      {feature}
                    </h3>
                  </SnakeBorderBox>
                </AnimatedCard>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* Process Workflow */}
      <section className="py-6 sm:py-8 lg:py-10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-[#650a34]/20 to-transparent"></div>
        
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1]">
              A Clear Plan From First Brief To <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#650a34] to-[#ed1968]">Final Applause</span>
            </h2>
            <p className="mt-5 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
              We keep the workflow transparent, practical, and focused on a calm event-day experience.
            </p>
          </div>

          <div className="mt-16 lg:mt-24 relative">
            <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-[#650a34]/10 via-[#ed1968]/30 to-[#650a34]/10"></div>

            <div className="grid gap-12 lg:gap-6 lg:grid-cols-4">
              {service.process.map((step, index) => (
                <AnimatedCard
                  key={step}
                  delay={index * 0.1}
                >
                  <SnakeBorderBox className="relative flex flex-col items-center text-center p-6 bg-white border border-[#650a34]/10 shadow-sm transition hover:-translate-y-2">
                    <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-none bg-[#fff8fb] shadow-md transition-all duration-500 group-hover:bg-[#650a34] group-hover:text-white">
                      <span className="font-heading text-3xl font-black text-[#650a34] group-hover:text-white">
                        {index + 1}
                      </span>
                    </div>
                    
                    <div className="mt-6 relative">
                      <p className="leading-7 text-gray-600 px-2 sm:px-4 transition-colors duration-300 group-hover:text-gray-900 font-semibold text-sm">
                        {step}
                      </p>
                    </div>
                  </SnakeBorderBox>
                </AnimatedCard>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Section */}
      <section className="bg-[#fff8fb] py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold uppercase leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:mx-0 lg:max-w-none">
              Premium execution with personal attention
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-6 text-gray-600 sm:leading-8 lg:mx-0 lg:max-w-none">
              We combine creative planning, vendor coordination, and hands-on
              supervision so every important detail has a responsible owner.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.whyChoose.map((point) => (
              <SnakeBorderBox
                key={point}
                className="flex gap-4 bg-white p-5 border border-[#650a34]/10 shadow-sm transition hover:shadow-md"
              >
                <span className="mt-1 shrink-0 text-[#ed1968] font-bold">&bull;</span>
                <p className="font-semibold leading-7 text-gray-700">{point}</p>
              </SnakeBorderBox>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Banner */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <SnakeBorderBox className="rounded-none bg-[#650a34] px-6 py-10 text-center shadow-2xl shadow-[#650a34]/20 sm:px-8 lg:px-12 lg:py-14 lg:text-left">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <p className="font-heading text-sm font-bold uppercase leading-snug tracking-[0.24em] text-[#ffb8d5]">
                  Let&apos;s Plan Your Event
                </p>
                <h2 className="mt-2 text-3xl font-extrabold uppercase leading-[1.12] text-white sm:text-4xl sm:leading-[1.1]">
                  Ready to discuss {service.title}?
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
                  Share your event requirement and our team will help you shape
                  the right plan, timeline, and experience.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-none bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white sm:px-8 sm:py-4 sm:text-sm"
              >
                Contact us
                <ArrowRight size={18} />
              </Link>
            </div>
          </SnakeBorderBox>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 lg:mt-10 lg:gap-6">
            {relatedServices.map((item) => (
              <Link
                key={item.title}
                to={`/services/${item.slug}`}
              >
                <SnakeBorderBox className="group flex h-full flex-col justify-between rounded-none border border-[#650a34]/10 bg-[#fff8fb] p-5 transition hover:-translate-y-1 shadow-sm">
                  <div>
                    <h3 className="text-xl font-extrabold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      {item.shortDescription}
                    </p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#650a34] group-hover:text-[#ed1968]">
                    Explore Service
                    <ArrowRight size={15} />
                  </span>
                </SnakeBorderBox>
              </Link>
            ))}
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}

const SectionHeading = memo(function SectionHeading({ title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-medium uppercase leading-[1.12] text-[#fff] sm:text-4xl sm:leading-[1.1]">
        {title}
      </h2>
      <p className="mt-4 leading-6 text-[#fff] sm:text-lg sm:leading-8">
        {text}
      </p>
    </div>
  );
});
