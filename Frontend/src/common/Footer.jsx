import {
  ArrowRight,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Footer() {
  const phone = "+919007744772";
  const whatsappMessage = encodeURIComponent(
    "Hello Ekalavya Event & Entertainment, I want to enquire about your event services."
  );

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Gallery", to: "/gallery" },
    { name: "Blogs", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#650a34] text-white">
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-[#ed1968]/20 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-white/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.8fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Ekalavya Event & Entertainment"
                className="h-20 w-20 rounded-2xl bg-white object-contain p-2"
              />

              <div>
                <h2 className="text-2xl font-extrabold">Ekalavya</h2>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.24em] text-white/70">
                  Event & Entertainment
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-md leading-8 text-white/75">
              Premium event planning, venue management, decor, F&B,
              entertainment, hospitality and celebrity coordination for
              memorable celebrations.
            </p>

            <div className="mt-7 flex gap-3">
              <SocialLink
                href="https://www.instagram.com/ekalavyaevententertainment/"
                label="Instagram"
                icon={FaInstagram}
              />
              <SocialLink
                href="https://www.facebook.com/ekalavyaevententertainment"
                label="Facebook"
                icon={FaFacebookF}
              />
              <SocialLink
                href="https://share.google/pkeVRIju2IvxucJqs"
                label="Google"
                icon={FaGoogle}
              />
            </div>
          </div>

          <div>
            <FooterTitle>Quick Links</FooterTitle>
            <div className="mt-5 grid gap-3">
              {quickLinks.map((link) => (
                <FooterRoute key={link.name} to={link.to}>
                  {link.name}
                </FooterRoute>
              ))}
            </div>
          </div>

          <div>
            <FooterTitle>Services</FooterTitle>
            <div className="mt-5 grid gap-3">
              {servicesData.map((service) => (
                <FooterRoute
                  key={service.slug}
                  to={`/services/${service.slug}`}
                >
                  {service.title}
                </FooterRoute>
              ))}
            </div>
          </div>

          <div>
            <FooterTitle>Contact</FooterTitle>
            <div className="mt-5 grid gap-4">
              <FooterContact
                icon={MapPin}
                text="26/1, Bhagaban Chatterjee Ln, Bantra, Ichapur, Howrah, West Bengal 711101"
              />
              <FooterContact
                icon={Phone}
                text="+91 9007744772, +91 9836169315"
                href={`tel:${phone}`}
              />
              <FooterContact
                icon={Mail}
                text="ekalavyaentertainmentkolkata@gmail.com"
                href="mailto:ekalavyaentertainmentkolkata@gmail.com"
              />
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#650a34] transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white"
              >
                <Phone size={17} />
                Call Now
              </a>

              <a
                href={`https://wa.me/919007744772?text=${whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#25D366] hover:border-[#25D366]"
              >
                <MessageCircle size={17} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/70 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Ekalavya Event & Entertainment. All
              rights reserved.
            </p>

            <p>
              Designed and developed by{" "}
              <a
                href="https://www.teamdeoskolkata.in/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-white transition hover:text-[#ffb8d5]"
              >
                Digital Exposure Online Services
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterTitle({ children }) {
  return (
    <h3 className="text-lg font-extrabold text-white">
      {children}
    </h3>
  );
}

function FooterRoute({ to, children }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition hover:text-white"
    >
      <ArrowRight
        size={14}
        className="text-[#ffb8d5] transition group-hover:translate-x-1"
      />
      {children}
    </Link>
  );
}

function FooterContact({ icon: Icon, text, href }) {
  const content = (
    <span className="flex gap-3 text-sm font-medium leading-7 text-white/75 transition hover:text-white">
      <Icon size={18} className="mt-1 shrink-0 text-[#ffb8d5]" />
      {text}
    </span>
  );

  return href ? (
    <a href={href}>
      {content}
    </a>
  ) : (
    content
  );
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:-translate-y-1 hover:bg-[#ed1968]"
    >
      <Icon />
    </a>
  );
}
