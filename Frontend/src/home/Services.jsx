import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-[#fff8fb] py-6 sm:py-8 lg:py-10">

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
            Everything You Need To Make Your Event Extraordinary
          </h2>

          <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
            From the first idea to the final guest experience, our team manages
            every important detail with creativity, planning and precision.
          </p>
        </div>

        <div className="mt-5 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((item) => (
            <Link
              key={item.title}
              to={`/services/${item.slug}`}
              className="group block border-b border-[#650a34]/15 pb-7 transition hover:border-[#ed1968]"
            >
              <h3 className="text-2xl font-extrabold text-gray-800">
                {item.title}
              </h3>

              <span className="mt-3 block h-[3px] w-14 rounded-full bg-[#ed1968] transition group-hover:w-24" />

              <p className="mt-5 leading-7 text-gray-600">
                {item.shortDescription}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#650a34] transition group-hover:text-[#ed1968]">
                View Service
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
