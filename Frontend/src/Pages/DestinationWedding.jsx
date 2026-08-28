import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Clock,
  Crown,
  Gem,
  HeartHandshake,
  Hotel,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
  CheckCircle2,
} from "lucide-react";
import AnimatedSection, { AnimatedCard } from "../common/AnimatedSection";
import SnakeBorderBox from "../common/SnakeBorderBox";
import SEO from "../common/SEO";

export default function DestinationWedding() {
  const [titleImgError, setTitleImgError] = useState(false);
  const weddingServices = [
    {
      icon: MapPin,
      title: "Venue Selection & Management",
      description:
        "Finding and securing the perfect backdrop for your celebration — sun-kissed beaches, royal palaces, mountain resorts, or luxury river cruises on the Ganges.",
    },
    {
      icon: ShieldCheck,
      title: "Budget Planning & Management",
      description:
        "Keeping your wedding vision on track financially with transparent cost breakdowns, expert resource allocation, and zero hidden fees.",
    },
    {
      icon: Users,
      title: "Vendor Curation & Coordination",
      description:
        "Connecting you with premier caterers, florists, photographers, makeup artists, and live performers, managing all vendor communications effortlessly.",
    },
    {
      icon: Sparkles,
      title: "Design & Styling",
      description:
        "Bringing your aesthetic to life through cohesive themes, royal mandap concepts, photo-op installations, and opulent floral styling.",
    },
    {
      icon: Clock,
      title: "Timeline Creation & Execution",
      description:
        "Ensuring every moment of your Sangeet, Mehendi, Haldi, Varmala, and Reception flows flawlessly with dedicated cue-sheet management.",
    },
    {
      icon: Hotel,
      title: "Guest Hospitality & Logistics",
      description:
        "Complete guest assistance including airport/station transfers, rooming list allocations, welcome desks, itineraries, and travel support.",
    },
    {
      icon: HeartHandshake,
      title: "On-The-Day Coordination",
      description:
        "Our experienced event directors remain on-ground to oversee every single detail and backstage movement so you can focus entirely on celebrating.",
    },
    {
      icon: BadgeCheck,
      title: "Post-Event Wrap-Up",
      description:
        "Handling final vendor checkouts, hotel handovers, loading logistics, and ensuring a calm, smooth conclusion to your celebration.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Personalised Vision, Flawless Execution",
      description:
        "We believe your wedding should be a unique reflection of your love story. We take the time to understand your individual style, preferences, and desires to craft a bespoke experience.",
    },
    {
      title: "Expert Guidance Every Step of the Way",
      description:
        "Navigating destination wedding planning can be complex. Our 10+ years of expertise brings deep clarity, guiding you from initial concept to the final dance.",
    },
    {
      title: "Stress-Free Planning, Memorable Moments",
      description:
        "Imagine being fully present on your wedding day, enjoying every laugh and embrace. We manage all logistics, vendor timing, and unforeseen challenges.",
    },
    {
      title: "Curated Network of Premier Vendors",
      description:
        "We connect you with trusted professionals — from breathtaking venues and exquisite caterers to captivating photographers and renowned live artists.",
    },
    {
      title: "Transparent Pricing, Exceptional Value",
      description:
        "Clear and comprehensive pricing packages tailored to suit various needs and budgets with complete cost transparency and high-end execution.",
    },
    {
      title: "From Family Rhythm to Wedding Symphony",
      description:
        "We believe every family has a rhythm. Our job is to find it, amplify it, and turn it into a grand symphony, crafting your unforgettable destination wedding journey.",
    },
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Scouting & Venue Selection",
      text: "We understand your vision, shortlist dream destinations (beaches, heritage palaces, Ganges cruises), and secure optimal venue deals.",
    },
    {
      step: "02",
      title: "Logistics & Hospitality Blueprint",
      text: "We create guest travel itineraries, coordinate pickup routes, manage hotel rooming lists, and set up dedicated hospitality welcome desks.",
    },
    {
      step: "03",
      title: "Theme, Decor & Menu Curation",
      text: "We design custom ceremony themes, stagecraft, floral installations, live counter menus, and book engaging entertainment acts.",
    },
    {
      step: "04",
      title: "Flawless On-Ground Execution",
      text: "Our dedicated event team handles all cue sheets, backstage artist movement, and ceremony timing so you can savour every moment.",
    },
  ];

  return (
    <main className="overflow-hidden bg-white text-gray-700">
      <SEO
        title="Destination Wedding Planner in Kolkata | Royal & Luxury Weddings - Ekalavya Event"
        description="Plan your dream destination wedding with Ekalavya Event. From Ganges river cruises to palace & beach weddings, we provide end-to-end venue selection, decor, and guest hospitality."
        keywords="Destination wedding planner Kolkata, Royal wedding planner West Bengal, Ganges cruise wedding, Luxury beach wedding India, Heritage palace wedding planner"
        canonicalPath="/destination-wedding"
      />
      {/* Hero Header */}
      <section className="relative bg-[#fff8fb] pt-28 pb-6 sm:pt-24 sm:pb-6 lg:pt-28 lg:pb-6">
        <AnimatedSection className="relative mx-auto grid max-w-7xl items-center gap-6 px-4 sm:px-6 lg:grid-cols-[1fr_0.92fr]">
          <div className="text-center lg:text-left">
            {/* Screen reader accessible H1 for SEO */}
            <h1 className="sr-only">
              Love Knows No Boundaries, Just Like A Destination Wedding - Discovering Love In Every Corner Of The World
            </h1>

            {/* Title Image Graphic */}
            {!titleImgError ? (
              <div className="my-2 flex justify-center lg:justify-start">
                <img
                  src="/WeddingTitle.png"
                  alt="Love Knows No Boundaries - Destination Wedding - Discovering Love In Every Corner Of The World"
                  loading="eager"
                  decoding="async"
                  onError={() => setTitleImgError(true)}
                  className="h-auto w-full max-w-[340px] sm:max-w-[460px] lg:max-w-[540px] object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
                />
              </div>
            ) : (
              /* Fallback HTML Typography if image fails to load */
              <div>
                <p className="font-serif text-sm sm:text-base lg:text-lg uppercase tracking-[0.22em] text-[#650a34] font-medium">
                  LOVE KNOWS NO BOUNDARIES, JUST LIKE A
                </p>
                <h2 className="my-2 font-serif text-5xl sm:text-7xl lg:text-8xl font-normal leading-[0.92] text-[#ed1968] tracking-tight">
                  <span className="block">Destination</span>
                  <span className="block">Wedding</span>
                </h2>
                <div className="font-serif text-xs sm:text-sm lg:text-base uppercase tracking-[0.2em] text-[#650a34] font-medium leading-snug">
                  <p>DISCOVERING LOVE</p>
                  <p>IN EVERY CORNER OF THE WORLD</p>
                </div>
              </div>
            )}

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-8 lg:mx-0">
              Celebrate the union of two souls against the backdrop of a sun-kissed beach,
              atop a majestic mountain, or aboard a luxury cruise on the River Ganges.
              From pristine venues to gourmet cuisine and seamless planning, we ensure your special day is nothing short of magical.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:mt-6 sm:flex-row lg:justify-start">
              <Link
                to="/contact"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Plan Your Destination Wedding
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-none shadow-2xl border border-[#650a34]/15"
            >
              <img
                src="/ExtraImages/Destination-wedding.png"
                alt="Destination Wedding Celebration"
                loading="eager"
                decoding="async"
                className="aspect-square w-full object-cover"
              />
            </motion.div>
          </div>
        </AnimatedSection>
      </section>

      {/* Dream. Design. Deliver. Section */}
      <section className="py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="text-center lg:text-left">
            <h2 className="mx-auto max-w-3xl text-2xl font-medium uppercase leading-[1.12] text-[#ed1968] sm:text-4xl sm:leading-[1.1] lg:mx-0 lg:max-w-none">
              DREAM. DESIGN. DELIVER.
            </h2>
            <p className="mt-4 font-heading text-sm font-bold uppercase tracking-[0.2em] text-[#ed1968]">
              Let Us Take The Responsibility To Deliver Your Perfect Celebration
            </p>
          </div>

          <div className="text-center lg:text-left">
            <p className="mx-auto max-w-2xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-none">
              From the house of Boat Party Kolkata, Ekalavya Event &amp; Entertainment is the one-stop solution for building your dream with innovation, creativity, and passion for perfection. Following our principal mantra — <strong>&ldquo;prioritizing client&rsquo;s need and satisfaction&rdquo;</strong> — we bring your ideas to life with tailored design, accurate planning, and flawless execution.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              <SnakeBorderBox className="flex min-h-[120px] flex-col items-center justify-center rounded-none border border-[#650a34]/10 bg-[#fff8fb] p-4 text-center transition hover:-translate-y-1 hover:shadow-md">
                <Crown size={24} className="text-[#650a34] mb-2" />
                <span className="text-sm font-extrabold text-gray-800">10+ Years</span>
                <span className="text-xs text-gray-600">Industry Expertise</span>
              </SnakeBorderBox>

              <SnakeBorderBox className="flex min-h-[120px] flex-col items-center justify-center rounded-none border border-[#650a34]/10 bg-[#fff8fb] p-4 text-center transition hover:-translate-y-1 hover:shadow-md">
                <Gem size={24} className="text-[#ed1968] mb-2" />
                <span className="text-sm font-extrabold text-gray-800">Premier Network</span>
                <span className="text-xs text-gray-600">Venues &amp; Artists</span>
              </SnakeBorderBox>

              <SnakeBorderBox className="flex min-h-[120px] flex-col items-center justify-center rounded-none border border-[#650a34]/10 bg-[#fff8fb] p-4 text-center transition hover:-translate-y-1 hover:shadow-md col-span-2 sm:col-span-1">
                <ShieldCheck size={24} className="text-[#650a34] mb-2" />
                <span className="text-sm font-extrabold text-gray-800">Transparent</span>
                <span className="text-xs text-gray-600">Zero Hidden Surprises</span>
              </SnakeBorderBox>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Complete Services Grid */}
      <section className="bg-[#fff8fb] py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-2xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1]">
              COMPLETE DESTINATION WEDDING PLANNING & MANAGEMENT
            </h2>
            <p className="mt-4 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
              We manage every element so your guests have the best time possible while you savour every moment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {weddingServices.map((item, index) => {
              const Icon = item.icon;
              return (
                <AnimatedCard
                  key={item.title}
                  delay={index * 0.08}
                >
                  <SnakeBorderBox className="h-full rounded-none bg-white p-6 shadow-md border border-[#650a34]/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#650a34]/15">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                      className="mb-5 flex h-13 w-13 items-center justify-center rounded-none bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white"
                    >
                      <Icon size={24} />
                    </motion.div>
                    <h3 className="text-lg font-medium leading-snug text-[#232020]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                      {item.description}
                    </p>
                  </SnakeBorderBox>
                </AnimatedCard>
              );
            })}
          </div>
        </AnimatedSection>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-2xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1]">
              WHY WITH US?
            </h2>
            <p className="mt-4 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
              Personalised vision, expert guidance, and stress-free planning from initial concept to the final dance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <AnimatedCard
                key={item.title}
                delay={index * 0.1}
              >
                <SnakeBorderBox className="h-full rounded-none border border-[#650a34]/10 bg-[#fff8fb] p-7 transition hover:shadow-lg">
                  <div className="mb-4 flex items-center gap-3">
                    <CheckCircle2 size={24} className="shrink-0 text-[#ed1968]" />
                    <h3 className="text-lg font-medium leading-snug text-[#232020]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-gray-600">
                    {item.description}
                  </p>
                </SnakeBorderBox>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* Workflow Section */}
      <section className="bg-[#fff8fb] py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-2xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1]">
              OUR DESTINATION WEDDING WORKFLOW
            </h2>
            <p className="mt-4 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
              A practical, clear process designed for an effortless event experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((item, index) => (
              <AnimatedCard
                key={item.step}
                delay={index * 0.1}
              >
                <SnakeBorderBox className="relative h-full overflow-hidden rounded-none border border-[#650a34]/10 bg-white p-7 shadow-lg transition hover:-translate-y-2 hover:shadow-xl">
                  <span className="font-heading text-5xl font-extrabold leading-none text-[#650a34]/10 transition group-hover:text-[#ed1968]/20">
                    {item.step}
                  </span>

                  <h3 className="mt-4 text-xl font-medium leading-snug text-[#232020]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {item.text}
                  </p>
                </SnakeBorderBox>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA Banner with Mouse Hover Snake Border */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <SnakeBorderBox className="rounded-none bg-[#650a34] px-6 py-10 text-center shadow-2xl shadow-[#650a34]/20 sm:px-8 lg:px-12 lg:py-14 lg:text-left">
            <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
              <div>
                <p className="font-heading text-sm font-bold uppercase tracking-[0.24em] text-[#ffb8d5]">
                  Let us plan your dream wedding
                </p>
                <h2 className="mt-2 text-2xl font-medium uppercase leading-[1.12] text-white sm:text-4xl sm:leading-[1.1]">
                  READY TO PLAN YOUR DESTINATION WEDDING?
                </h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
                  Planning your dream wedding should be an exciting journey, not a stressful one. We&apos;re here to turn your vision into a breathtaking reality so you can savour every moment.
                </p>
              </div>

              <Link
                to="/contact"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-none bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white sm:px-8 sm:py-4 sm:text-sm"
              >
                Plan Your Wedding
                <ArrowRight size={18} />
              </Link>
            </div>
          </SnakeBorderBox>
        </AnimatedSection>
      </section>
    </main>
  );
}
