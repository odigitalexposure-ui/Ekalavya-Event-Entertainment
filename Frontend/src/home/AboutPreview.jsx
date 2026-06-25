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
    <section id="about" className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10">
      {/* Background */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Left Image */}
          <div className="relative">

            <div className="relative overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-[0_25px_80px_rgba(101,10,52,0.16)]">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src="/images/g9.jpeg"
                  alt="Ekalavya Event Management"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />

              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <h2 className="max-w-3xl text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl lg:text-5xl">
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
            <div className="mt-5 rounded-[2rem] border border-[#650a34]/10 bg-[#650a34]/5 p-5 sm:p-6">
              <h3 className="text-xl font-extrabold text-[#650a34]">
                A unit of J N Media & Advertising
              </h3>
              <p className="mt-2 leading-7 text-gray-600">
                Backed by professional planning, creative production and guest-first
                hospitality, we work with one simple promise — to build your dream
                event with perfection.
              </p>
            </div>

            <div className="mt-5">
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
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
