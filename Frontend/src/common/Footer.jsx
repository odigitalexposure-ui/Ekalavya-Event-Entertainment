import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaGoogle, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Footer() {
  const phone = "+919007744772";

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Gallery", to: "/gallery" },
    { name: "Blogs", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#303030] text-white">
      <div className="relative mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:py-9">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.8fr_1fr_1.25fr]">
          <div>
            <Link to="/" className="inline-flex items-center">
              <img
                src="/footerLogo.png"
                alt="Ekalavya Event & Entertainment"
                loading="lazy"
                decoding="async"
                className="h-14 w-auto object-contain sm:h-16"
              />
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-300">
              Premium event planning, venue management, decor, F&amp;B,
              entertainment, hospitality and celebrity coordination for
              memorable celebrations.
            </p>

            <div className="mt-5 flex gap-4">
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

          <div className="grid grid-cols-2 gap-6 lg:contents">
            <div>
              <FooterTitle>Quick Links</FooterTitle>
              <div className="mt-4 grid gap-2.5">
                {quickLinks.map((link) => (
                  <FooterRoute key={link.name} to={link.to}>
                    {link.name}
                  </FooterRoute>
                ))}
              </div>
            </div>

            <div>
              <FooterTitle>Services</FooterTitle>
              <div className="mt-4 grid gap-2.5">
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
          </div>

          <div>
            <FooterTitle>Contact</FooterTitle>
            <div className="mt-4 grid gap-3">
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
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-5">
          <div className="flex flex-col gap-3 text-xs text-gray-300 md:flex-row md:items-center md:justify-between">
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
                className="font-bold text-white transition hover:text-[#ed1968]"
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
  return <h3 className="text-base font-extrabold leading-snug text-white">{children}</h3>;
}

function FooterRoute({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex text-xs font-medium text-gray-300 transition hover:text-white sm:text-sm"
    >
      {children}
    </Link>
  );
}

function FooterContact({ icon: Icon, text, href }) {
  const content = (
    <span className="flex gap-3 text-xs font-medium leading-6 text-gray-300 transition hover:text-white sm:text-sm">
      <Icon size={16} className="mt-1 shrink-0 text-gray-300" />
      {text}
    </span>
  );

  return href ? <a href={href}>{content}</a> : content;
}

function SocialLink({ href, label, icon: Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-8 w-8 items-center justify-center rounded-full text-white transition hover:-translate-y-1 hover:text-[#ed1968]"
    >
      <Icon size={14} />
    </a>
  );
}
