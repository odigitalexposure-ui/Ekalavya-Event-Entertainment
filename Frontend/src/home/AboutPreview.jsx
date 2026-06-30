import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  HeartHandshake,
  PartyPopper,
} from "lucide-react";
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
    <section
      id="about"
      className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10"
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden bg-white p-3">
              <div className="relative overflow-hidden">
                <img
                  src="/images/g9.jpeg"
                  alt="Ekalavya Event Management"
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-5xl lg:leading-[1.08]">
              COMPLETE EVENT SOLUTIONS WITH CREATIVITY, CLASS & FLAWLESS
              EXECUTION
            </h2>

            <p className="mt-6 text-base text-center sm:text-left leading-6 sm:leading-8 text-gray-600 sm:text-lg">
              Ekalavya Event & Entertainment is a professional event management
              brand dedicated to planning, designing and executing unforgettable
              experiences. With strong industry experience and a creative team,
              we manage everything from venue planning and hospitality to decor,
              production, entertainment and corporate event solutions.
            </p>

            <p className="mt-4 text-base leading-6 sm:leading-8 text-gray-600 sm:text-lg">
              Whether it is a private celebration, corporate gathering,
              destination event, entertainment night or premium hospitality
              requirement, we bring together strategy, style and seamless
              coordination to make every event truly special.
            </p>

            <div className="mt-5 flex justify-center lg:justify-start">
              <Link
                to="/#services"
                className="group inline-flex w-auto items-center justify-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/25 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Explore Services
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            const isPrimary = index % 2 === 0;

            return (
              <div
                key={item.label}
                className={`group p-4 transition hover:-translate-y-2 sm:p-6 ${isPrimary ? "bg-[#650a34]" : "bg-[#ed1968]"
                  }`}
              >
                <Icon size={22} className="text-white sm:h-6 sm:w-6" />

                <h3 className="mt-3 text-2xl font-extrabold leading-none text-white sm:mt-5 sm:text-4xl">
                  {item.number}
                </h3>

                <p className="mt-1 text-xs font-semibold leading-5 text-white sm:mt-2 sm:text-base">
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
