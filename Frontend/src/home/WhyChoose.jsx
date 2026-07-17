import {
  Headphones,
  Lightbulb,
  ShieldCheck,
  Smile,
  Timer,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function WhyChoose() {
  const features = [
    {
      icon: Lightbulb,
      title: "Creative Planning",
      desc: "Fresh concepts, premium themes and customized ideas for every event.",
    },
    {
      icon: ShieldCheck,
      title: "Reliable Execution",
      desc: "A professional team that manages every detail with responsibility.",
    },
    {
      icon: Timer,
      title: "On-Time Management",
      desc: "Smooth coordination, timely setup and well-planned event flow.",
    },
    {
      icon: Headphones,
      title: "End-to-End Support",
      desc: "From enquiry to final execution, our team stays connected with you.",
    },
    {
      icon: Smile,
      title: "Guest-Focused Service",
      desc: "Hospitality, comfort and experience are always our priority.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
              WE DON'T JUST MANAGE EVENTS, WE CREATE EXPERIENCES
            </h2>

            <p className="mt-5 text-base leading-6 sm:leading-8 text-gray-600 sm:text-lg">
              Ekalavya Event &amp; Entertainment brings creativity, planning,
              hospitality and professional coordination together to deliver
              events that feel smooth, premium and unforgettable.
            </p>

            <div className="mt-5 grid grid-cols-2 gap-4 md:gap-5">
              {features.map((item, index) => {
                const Icon = item.icon;
                const isLastOdd =
                  features.length % 2 !== 0 && index === features.length - 1;

                return (
                  <div
                    key={item.title}
                    className={`group flex min-h-[155px] flex-col items-center justify-cente bg-white p-3 text-center transition hover:-translate-y-1 md:min-h-0 md:flex-row md:items-start md:justify-start md:p-4 md:text-left ${
                      isLastOdd
                        ? "col-span-2 mx-auto w-full max-w-[190px] md:col-span-1 md:mx-0 md:max-w-none"
                        : ""
                    }`}
                  >
                    <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white md:mb-0 md:mr-4 md:h-12 md:w-12">
                      <Icon size={21} />
                    </div>

                    <div>
                      <h3 className="text-base font-extrabold leading-snug text-gray-800 md:text-lg">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-gray-600 md:border-b md:pb-2 md:text-base md:leading-6">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-5 flex justify-center md:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Start Planning
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="relative overflow-hidden">
                <img
                  src="/images/g28.jpeg"
                  alt="Premium Event Management"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square h-auto w-full object-cover sm:aspect-auto sm:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
