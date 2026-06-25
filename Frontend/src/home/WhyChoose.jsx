import {
  CheckCircle2,
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
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Glow */}
      <div className="absolute left-[-160px] top-10 h-96 w-96 rounded-full bg-[#650a34]/10 blur-[110px]" />
      <div className="absolute bottom-[-180px] right-[-120px] h-96 w-96 rounded-full bg-[#ed1968]/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Left Content */}
          <div>
            <span className="inline-flex rounded-full bg-[#650a34]/8 px-5 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34]">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              We Don’t Just Manage Events, We Create Experiences
            </h2>

            <p className="mt-5 text-base leading-8 text-gray-600 sm:text-lg">
              Ekalavya Event & Entertainment brings creativity, planning,
              hospitality and professional coordination together to deliver
              events that feel smooth, premium and unforgettable.
            </p>

            <div className="mt-8 space-y-4">
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
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#650a34] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968]"
            >
              Start Planning
              <ArrowRight size={18} />
            </Link>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="absolute -left-6 top-10 h-40 w-40 rounded-full border-[22px] border-[#ed1968]/10" />
            <div className="absolute -right-6 bottom-16 h-48 w-48 rounded-full border-[26px] border-[#650a34]/10" />

            <div className="relative rounded-[2.8rem] bg-white p-3 shadow-[0_30px_90px_rgba(101,10,52,0.18)]">
              <div className="relative overflow-hidden rounded-[2.3rem]">
                <img
                  src="/images/g28.jpeg"
                  alt="Premium Event Management"
                  className="h-[520px] w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#650a34]/85 via-[#650a34]/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-white/25 bg-white/15 p-5 text-white backdrop-blur-md">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#650a34]">
                    <CheckCircle2 size={24} />
                  </div>

                  <h3 className="text-2xl font-extrabold">
                    Trusted Event Partner
                  </h3>
                  <p className="mt-2 leading-7 text-white/85">
                    From small private celebrations to large corporate events,
                    we handle everything with care and confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Mini Card */}
            <div className="absolute -bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-[2rem] bg-white p-5 shadow-2xl shadow-[#650a34]/15 sm:w-[78%]">
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <h4 className="text-2xl font-extrabold text-[#650a34]">
                    200+
                  </h4>
                  <p className="text-xs font-semibold text-gray-500">
                    Events
                  </p>
                </div>

                <div className="border-x border-[#650a34]/10">
                  <h4 className="text-2xl font-extrabold text-[#650a34]">
                    30+
                  </h4>
                  <p className="text-xs font-semibold text-gray-500">
                    Clients
                  </p>
                </div>

                <div>
                  <h4 className="text-2xl font-extrabold text-[#650a34]">
                    9+
                  </h4>
                  <p className="text-xs font-semibold text-gray-500">
                    Years
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
