import {
  MapPin,
  Utensils,
  Sparkles,
  Music,
  Plane,
  Star,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Services() {
  const iconMap = {
    "venue-management": MapPin,
    "fb-service": Utensils,
    "decor-production": Sparkles,
    entertainment: Music,
    "hospitality-logistics": Plane,
    "celebrity-management": Star,
  };

  return (
    <section id="services" className="relative overflow-hidden bg-[#fff8fb] py-20 sm:py-24 lg:py-28">
      <div className="absolute left-[-160px] top-20 h-96 w-96 rounded-full bg-[#ed1968]/10 blur-[110px]" />
      <div className="absolute right-[-180px] bottom-10 h-96 w-96 rounded-full bg-[#650a34]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-white px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34] shadow-md shadow-[#650a34]/5">
            Our Expertise
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Everything You Need To Make Your Event Extraordinary
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            From the first idea to the final guest experience, our team manages
            every important detail with creativity, planning and precision.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((item, index) => {
            const Icon = iconMap[item.slug];

            return (
              <Link
                key={item.title}
                to={`/services/${item.slug}`}
                className="group relative overflow-hidden rounded-[2rem] border border-[#650a34]/10 bg-white p-7 shadow-lg shadow-[#650a34]/5 transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#650a34]/15"
              >
                <div className="absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-[#ed1968]/8 transition group-hover:scale-150" />

                <div className="relative z-10">
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#650a34] group-hover:text-white">
                      <Icon size={28} />
                    </div>

                    <span className="text-5xl font-extrabold text-[#650a34]/5">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.shortDescription}
                  </p>

                  <span
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#650a34] transition hover:text-[#ed1968]"
                  >
                    View Service
                    <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 rounded-[2.2rem] bg-[#650a34] p-7 text-center shadow-2xl shadow-[#650a34]/20 sm:p-10 lg:flex lg:items-center lg:justify-between lg:text-left">
          <div>
            <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
              Have an event idea in mind?
            </h3>
            <p className="mt-3 max-w-2xl text-white/80">
              Share your requirement with us and our team will help you plan the
              perfect event experience.
            </p>
          </div>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#650a34] transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white lg:mt-0"
          >
            Get Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
