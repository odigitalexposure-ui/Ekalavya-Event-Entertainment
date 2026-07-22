import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  HeartHandshake,
  PartyPopper,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import AnimatedSection, { AnimatedCard } from "../common/AnimatedSection";

function CounterNumber({ target, suffix = "+" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px 0px -40px 0px" });

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const duration = 2200; // 2.2 seconds total animation time
    const frameTime = 1000 / 60; // 60 FPS
    const totalFrames = Math.round(duration / frameTime);

    const timer = setInterval(() => {
      frame++;
      // Cubic ease-out calculation for smooth deceleration
      const progress = frame / totalFrames;
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.min(Math.floor(easedProgress * target), target);

      setCount(currentCount);

      if (frame >= totalFrames) {
        setCount(target);
        clearInterval(timer);
      }
    }, frameTime);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function AboutPreview() {
  const stats = [
    {
      icon: Award,
      target: 9,
      suffix: "+",
      label: "Years of Experience",
    },
    {
      icon: PartyPopper,
      target: 200,
      suffix: "+",
      label: "Events Managed",
    },
    {
      icon: HeartHandshake,
      target: 1000,
      suffix: "",
      label: "Of Happy Guests",
    },
    {
      icon: BriefcaseBusiness,
      target: 30,
      suffix: "+",
      label: "Corporate Clients",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-6 sm:py-8 lg:py-10"
    >
      <AnimatedSection className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-8">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src="/images/g9.jpeg"
                  alt="Ekalavya Event Management"
                  loading="lazy"
                  decoding="async"
                  className="aspect-square h-auto w-full object-cover sm:aspect-auto sm:h-[520px]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 lg:pt-3"
          >
            <h2 className="max-w-3xl text-3xl font-extrabold leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
              COMPLETE EVENT SOLUTIONS WITH CREATIVITY, CLASS &amp; FLAWLESS
              EXECUTION
            </h2>

            <p className="mt-6 text-base text-center sm:text-left leading-6 sm:leading-8 text-gray-600 sm:text-lg">
              Ekalavya Event &amp; Entertainment is a professional event management
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
                className="group inline-flex w-auto items-center justify-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/25 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Explore Services
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats Grid with Animated Counting Numbers */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {stats.map((item, index) => {
            const Icon = item.icon;
            
            let bgClass = "";
            if (index === 0) bgClass = "bg-[#650a34] lg:bg-[#650a34]";
            else if (index === 1) bgClass = "bg-[#ed1968] lg:bg-[#ed1968]";
            else if (index === 2) bgClass = "bg-[#ed1968] lg:bg-[#650a34]";
            else if (index === 3) bgClass = "bg-[#650a34] lg:bg-[#ed1968]";

            return (
              <AnimatedCard
                key={item.label}
                delay={index * 0.1}
                className={`group p-4 transition hover:-translate-y-2 sm:p-6 ${bgClass}`}
              >
                <motion.div
                  whileHover={{ scale: 1.25, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-fit"
                >
                  <Icon size={24} className="text-white sm:h-7 sm:w-7" />
                </motion.div>

                <h3 className="mt-3 text-2xl font-extrabold leading-none text-white sm:mt-5 sm:text-4xl">
                  <CounterNumber target={item.target} suffix={item.suffix} />
                </h3>

                <p className="mt-1 text-xs font-semibold leading-5 text-white sm:mt-2 sm:text-base">
                  {item.label}
                </p>
              </AnimatedCard>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
