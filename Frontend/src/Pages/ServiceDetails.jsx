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
  MessageCircle,
  Music,
  Plane,
  Sparkles,
  Star,
  Utensils,
} from "lucide-react";
import { getServiceBySlug, servicesData } from "../data/servicesData";

const phone = "919007744772";

const serviceIconMap = {
  "venue-management": MapPin,
  "fb-service": Utensils,
  "decor-production": Sparkles,
  entertainment: Music,
  "hospitality-logistics": Plane,
  "celebrity-management": Star,
};

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

  const ServiceIcon = serviceIconMap[service.slug] || Sparkles;
  const whatsappText = encodeURIComponent(
    `Hello Ekalavya Event & Entertainment, I want to enquire about ${service.title}.`
  );
  const relatedServices = servicesData.filter((item) => item.slug !== service.slug).slice(0, 3);

  const highlights = [
    { label: "Planned With Detail", value: "Concept to closure" },
    { label: "Premium Experience", value: "Elegant guest journey" },
    { label: "On-Ground Control", value: "Managed event flow" },
  ];

  return (
    <main className="overflow-hidden bg-white text-gray-700">
      <section className="relative bg-[#fff8fb] pt-32 pb-16 sm:pt-40 lg:pb-24">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#ed1968]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#650a34]/10 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#650a34] shadow-md shadow-[#650a34]/5">
              <ServiceIcon size={16} />
              Ekalavya Services
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight text-gray-800 sm:text-5xl lg:text-6xl">
              {service.title}
            </h1>

            <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-[#650a34] sm:text-xl">
              {service.subtitle}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
              {service.shortDescription}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#650a34] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968]"
              >
                Enquire Now
                <ArrowRight size={18} />
              </Link>

              <a
                href={`https://wa.me/${phone}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#650a34]/20 bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#650a34] shadow-lg shadow-[#650a34]/5 transition hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-5 -top-5 h-24 w-24 rounded-[2rem] bg-[#ed1968]/15" />
            <div className="absolute -bottom-5 -right-5 h-32 w-32 rounded-full bg-[#650a34]/12" />

            <div className="relative overflow-hidden rounded-[2.3rem] border border-white bg-white p-3 shadow-[0_30px_90px_rgba(101,10,52,0.18)]">
              <img
                src={service.heroImage}
                alt={service.title}
                className="h-[330px] w-full rounded-[1.8rem] object-cover sm:h-[430px] lg:h-[500px]"
              />
              <div className="absolute bottom-7 left-7 right-7 rounded-[1.5rem] bg-white/92 p-5 shadow-xl shadow-[#650a34]/10 backdrop-blur">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#650a34] text-white">
                    <ServiceIcon size={25} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ed1968]">
                      Premium Service
                    </p>
                    <h2 className="mt-1 text-lg font-extrabold text-gray-800">
                      Planned by Ekalavya
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="inline-flex rounded-full bg-[#650a34]/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34]">
              Overview
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl">
              Designed for events that feel effortless and memorable
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              {service.overview}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {highlights.map((item, index) => {
                const Icon = highlightIcons[index];

                return (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-[#650a34]/10 bg-[#fff8fb] p-5 shadow-lg shadow-[#650a34]/5"
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#650a34] shadow-md shadow-[#650a34]/5">
                      <Icon size={21} />
                    </div>
                    <h3 className="font-extrabold text-gray-800">{item.label}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff8fb] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="What We Offer"
            title={`Complete ${service.title} support`}
            text="Every service is planned with the right mix of creativity, coordination, and on-ground control."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.features.map((feature, index) => {
              const Icon = featureIcons[index % featureIcons.length];

              return (
                <div
                  key={feature}
                  className="group rounded-[2rem] border border-[#650a34]/10 bg-white p-6 shadow-lg shadow-[#650a34]/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#650a34]/12"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white">
                    <Icon size={25} />
                  </div>
                  <h3 className="text-lg font-extrabold leading-7 text-gray-800">
                    {feature}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Our Process"
            title="A clear plan from first brief to final applause"
            text="We keep the workflow transparent, practical, and focused on a calm event-day experience."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <div
                key={step}
                className="relative rounded-[2rem] border border-[#650a34]/10 bg-white p-6 shadow-lg shadow-[#650a34]/5"
              >
                <div className="mb-6 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#650a34] text-lg font-extrabold text-white">
                    {index + 1}
                  </span>
                  <ClipboardList className="text-[#ed1968]" size={25} />
                </div>
                <p className="leading-7 text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff8fb] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34] shadow-md shadow-[#650a34]/5">
              Why Choose Ekalavya
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl">
              Premium execution with personal attention
            </h2>
            <p className="mt-5 leading-8 text-gray-600">
              We combine creative planning, vendor coordination, and hands-on
              supervision so every important detail has a responsible owner.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {service.whyChoose.map((point) => (
              <div
                key={point}
                className="flex gap-4 rounded-[1.7rem] border border-[#650a34]/10 bg-white p-5 shadow-lg shadow-[#650a34]/5"
              >
                <CheckCircle2 className="mt-1 shrink-0 text-[#ed1968]" size={22} />
                <p className="font-semibold leading-7 text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="overflow-hidden rounded-[2.4rem] bg-[#650a34] p-8 text-center shadow-2xl shadow-[#650a34]/20 sm:p-12 lg:flex lg:items-center lg:justify-between lg:text-left">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#ffb8d5]">
                Let&apos;s Plan Your Event
              </p>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Ready to discuss {service.title}?
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/80">
                Share your event requirement and our team will help you shape
                the right plan, timeline, and experience.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#650a34] transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white"
              >
                Contact Page
                <ArrowRight size={18} />
              </Link>
              <a
                href={`https://wa.me/${phone}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/20 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:-translate-y-1 hover:bg-[#25D366]"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {relatedServices.map((item) => (
              <Link
                key={item.slug}
                to={`/services/${item.slug}`}
                className="group rounded-[1.7rem] border border-[#650a34]/10 bg-[#fff8fb] p-5 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-[#650a34]/10"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#ed1968]">
                  Explore More
                </p>
                <h3 className="mt-3 text-lg font-extrabold text-gray-800">
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

function SectionHeading({ eyebrow, title, text }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34] shadow-md shadow-[#650a34]/5">
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">{text}</p>
    </div>
  );
}
