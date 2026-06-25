import { ArrowRight, Award, BriefcaseBusiness, HeartHandshake, PartyPopper } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPreview() {
  const stats = [
    {
      icon: Award,
      number: "9+",
      label: "Years of Experience",
    },
    {
      icon: PartyPopper,
      number: "200+",
      label: "Events Managed",
    },
    {
      icon: HeartHandshake,
      number: "1000+",
      label: "Happy Guests",
    },
    {
      icon: BriefcaseBusiness,
      number: "30+",
      label: "Corporate Clients",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background */}
      <div className="absolute left-[-120px] top-20 h-72 w-72 rounded-full bg-[#ed1968]/10 blur-[90px]" />
      <div className="absolute right-[-140px] bottom-10 h-80 w-80 rounded-full bg-[#650a34]/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Left Image */}
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-36 w-36 rounded-full bg-[#ed1968]/15" />
            <div className="absolute -right-5 -bottom-5 h-44 w-44 rounded-full bg-[#650a34]/10" />

            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_25px_80px_rgba(101,10,52,0.16)]">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/images/g9.jpeg"
                  alt="Ekalavya Event Management"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#650a34]/75 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 right-5 rounded-3xl border border-white/20 bg-white/15 p-5 text-white backdrop-blur-md">
                  <p className="text-sm uppercase tracking-[0.22em] text-white/80">
                    Since 2024
                  </p>
                  <h3 className="mt-1 text-2xl font-extrabold">
                    Creating Moments That Stay Forever
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <span className="inline-flex rounded-full bg-[#650a34]/8 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#650a34]">
              About Ekalavya
            </span>

            <h2 className="mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
              Complete Event Solutions With Creativity, Class & Flawless Execution
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
              Ekalavya Event & Entertainment is a professional event management
              brand dedicated to planning, designing and executing unforgettable
              experiences. With strong industry experience and a creative team,
              we manage everything from venue planning and hospitality to decor,
              production, entertainment and corporate event solutions.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-600">
              Whether it is a private celebration, corporate gathering,
              destination event, entertainment night or premium hospitality
              requirement, we bring together strategy, style and seamless
              coordination to make every event truly special.
            </p>

            {/* Highlight Box */}
            <div className="mt-8 rounded-[2rem] border border-[#650a34]/10 bg-[#650a34]/5 p-5 sm:p-6">
              <h3 className="text-xl font-extrabold text-[#650a34]">
                A unit of J N Media & Advertising
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Backed by professional planning, creative production and guest-first
                hospitality, we work with one simple promise — to build your dream
                event with perfection.
              </p>
            </div>

            <div className="mt-8">
              <Link
                to="/#services"
                className="group inline-flex items-center gap-3 rounded-full bg-[#650a34] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968]"
              >
                Explore Services
                <ArrowRight size={18} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-[2rem] border border-[#650a34]/10 bg-white p-6 shadow-lg shadow-[#650a34]/5 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#650a34]/12"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white">
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
  );
}
