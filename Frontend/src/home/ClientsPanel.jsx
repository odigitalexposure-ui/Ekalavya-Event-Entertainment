import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "../common/AnimatedSection";
import SnakeBorderBox from "../common/SnakeBorderBox";

const clients = [
  {
    id: 1,
    name: "Indian Army (Eastern Command - Fort William)",
    subtitle: "Defense & Armed Forces",
    logo: "/Final/Eastern-Command-Indian-Army-Kolkata.png",
  },
  {
    id: 2,
    name: "Indian Navy (WOT)",
    subtitle: "Weapon Operating Team / Defense",
    logo: "/Final/Indian_Navy_WOT.png",
  },
  {
    id: 3,
    name: "CGST & CX Kolkata Zone (GST Bhawan)",
    subtitle: "Central Board of Indirect Taxes & Customs",
    logo: "/Final/GST.png",
  },
  {
    id: 4,
    name: "Powergrid Corporation of India Limited",
    subtitle: "Maharatna Public Sector Enterprise",
    logo: "/Final/Power-Grid.png",
  },
  {
    id: 5,
    name: "Bharat Petroleum Limited (LPG Div.)",
    subtitle: "Maharatna Energy Enterprise",
    logo: "/Final/BPCL.png",
  },
  {
    id: 6,
    name: "Garden Reach Shipbuilders & Engineers (GRSE)",
    subtitle: "Miniratna Defense PSU",
    logo: "/Final/GRSE_.png",
  },
  {
    id: 7,
    name: "Haldia Petrochemical",
    subtitle: "Petrochemicals & Polymers",
    logo: "/Final/HPCL.png",
  },
  {
    id: 8,
    name: "Star Cement Limited",
    subtitle: "Building Materials & Cement",
    logo: "/Final/Star-Cement.png",
  },
  {
    id: 9,
    name: "Maithan Alloys Limited",
    subtitle: "Manganese Alloy Producer",
    logo: null,
  },
  {
    id: 10,
    name: "Dr. R Ahmed Dental College & Hospital, Sealdah",
    subtitle: "Healthcare & Medical Education",
    logo: "/Final/RADC.png",
  },
  {
    id: 11,
    name: "PWC",
    subtitle: "PricewaterhouseCoopers",
    logo: null,
  },
  {
    id: 12,
    name: "Zee Bangla (Zee Entertainment Enterprises)",
    subtitle: "Media & Entertainment",
    logo: "/Final/Zee Bangla.png",
  },
  {
    id: 13,
    name: "Star Jalsha (The Walt Disney Company (India)",
    subtitle: "Media & Entertainment",
    logo: "/Final/Star Jalsha.png",
  },
  {
    id: 14,
    name: "GlaxoSmithKline Consumer Healthcare Limited (GSK)",
    subtitle: "Pharmaceuticals & Healthcare",
    logo: "/Final/GSK.png",
  },
  {
    id: 15,
    name: "Canam Group",
    subtitle: "Global Education & Consulting",
    logo: "/Final/Canam-Group.png",
  },
  {
    id: 16,
    name: "Freudenberg",
    subtitle: "Global Technology Group",
    logo: "/Final/Freudenberg-1.png",
  },
  {
    id: 17,
    name: "KANTAR IMRB",
    subtitle: "Market Research & Insights",
    logo: "/Final/Kantar-IMRB.png",
  },
  {
    id: 18,
    name: "Cooper Surgical",
    subtitle: "Medical Devices & Healthcare",
    logo: "/Final/Cooper-Surgical-1.png",
  },
  {
    id: 19,
    name: "Nicco Group",
    subtitle: "Engineering & Parks",
    logo: "/Final/Nicco-Group.png",
  },
  {
    id: 20,
    name: "Reliance Nippon Life Insurance",
    subtitle: "Financial Services & Insurance",
    logo: "/Final/Relience-Insurance.png",
  },
  {
    id: 21,
    name: "HDFC Bank",
    subtitle: "Banking & Financial Services",
    logo: "/Final/HDFC-Bank.png",
  },
  {
    id: 22,
    name: "IDFC First Bank",
    subtitle: "Banking & Financial Services",
    logo: "/Final/IDFC.png",
  },
  {
    id: 23,
    name: "Federal bank",
    subtitle: "Banking & Financial Services",
    logo: "/Final/Federal-Bank.png",
  },
  {
    id: 24,
    name: "Interra Information Technologies",
    subtitle: "IT & Software Solutions",
    logo: null,
  },
  {
    id: 25,
    name: "Innovation Junction, LLC",
    subtitle: "Technology & Business Solutions",
    logo: null,
  },
  {
    id: 26,
    name: "Indusnet Technologies",
    subtitle: "IT Services & Digital Transformation",
    logo: "/Final/Indusnet-Tech.png",
  },
  {
    id: 27,
    name: "Future-first Technologies",
    subtitle: "Next-Gen Tech Solutions",
    logo: null,
  },
  {
    id: 28,
    name: "Bhandari Automobile",
    subtitle: "Automotive Dealership & Services",
    logo: null,
  },
  {
    id: 29,
    name: "Rotary Club of New Town",
    subtitle: "Social Service & Community",
    logo: "/Final/Rotary-Club.png",
  },
];

function ClientCard({ client }) {
  const [imgError, setImgError] = useState(false);

  if (!client.logo || imgError) return null;

  return (
    <div className="group flex aspect-square w-full items-center justify-center rounded-none border border-[#650a34]/15 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#650a34] hover:shadow-xl hover:-translate-y-1">
      <img
        src={encodeURI(client.logo)}
        alt={client.name}
        loading="lazy"
        onError={() => setImgError(true)}
        className="max-h-[85%] max-w-[85%] object-contain transition-transform duration-300 group-hover:scale-105"
      />
    </div>
  );
}

export default function ClientsPanel() {
  const logoClients = clients.filter((client) => Boolean(client.logo));

  return (
    <section className="relative overflow-hidden bg-[#fff8fb] py-6 sm:py-8 lg:py-10">
      <AnimatedSection className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          {/* Left Content */}
          <div>
            <h2 className="text-2xl font-medium leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
              A GROWING NETWORK OF HAPPY CLIENTS &amp; MEMORABLE EVENTS
            </h2>

            <p className="mt-5 text-base leading-6 sm:leading-8 text-gray-600 sm:text-lg">
              With years of industry experience, Ekalavya Event &amp; Entertainment
              has successfully managed events for private clients, corporate
              brands, celebrations and entertainment experiences.
            </p>

            <div className="mt-5 flex justify-center sm:justify-start">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Work With Us
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Right Sliding Panel with Snake Border Animation */}
          <SnakeBorderBox className="rounded-none border border-[#650a34]/10 bg-white p-5 shadow-[0_30px_90px_rgba(101,10,52,0.13)] sm:p-7">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-medium leading-snug text-[#232020]">
                  Our Prestigious Clients
                </h3>
                <p className="text-xs sm:text-sm text-[#650a34] font-semibold mt-0.5">
                  Trusted by 29+ Government, Defense &amp; Corporate Organizations
                </p>
              </div>
            </div>

            <div className="relative h-[540px] sm:h-[580px] overflow-hidden">
              <div className="animate-clientSlide grid grid-cols-2 gap-4 sm:gap-6">
                {[...logoClients, ...logoClients].map((client, index) => (
                  <ClientCard
                    key={`${client.id}-${index}`}
                    client={client}
                  />
                ))}
              </div>
            </div>

            <style>{`
              @keyframes clientSlide {
                0% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(-50%);
                }
              }

              .animate-clientSlide {
                animation: clientSlide 60s linear infinite;
              }

              .animate-clientSlide:hover {
                animation-play-state: paused;
              }
            `}</style>
          </SnakeBorderBox>
        </div>
      </AnimatedSection>
    </section>
  );
}
