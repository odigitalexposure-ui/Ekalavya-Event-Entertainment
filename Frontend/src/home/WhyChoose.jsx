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
      {/* Background Glow */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              We Don’t Just Manage Events, We Create Experiences
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Ekalavya Event & Entertainment brings creativity, planning,
              hospitality and professional coordination together to deliver
              events that feel smooth, premium and unforgettable.
            </p>

            <div className="mt-5 space-y-4">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group flex gap-4 rounded-[1.5rem] border border-[#650a34]/10 bg-white p-4 shadow-md shadow-[#650a34]/5 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#650a34]/10"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white">
                      <Icon size={22} />
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-gray-800">
                        {item.title}
                      </h3>
                      <p className="mt-1 leading-6 text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/contact"
              className="mt-5 inline-flex items-center gap-3 rounded-full bg-[#650a34] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968]"
            >
              Start Planning
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">

            <div className="relative rounded-[2.8rem] bg-white p-3 shadow-[0_30px_90px_rgba(101,10,52,0.18)]">
              <div className="relative overflow-hidden rounded-[2.3rem]">
                <img
                  src="/images/g28.jpeg"
                  alt="Premium Event Management"
                  className="h-[520px] w-full object-cover"
                />

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
