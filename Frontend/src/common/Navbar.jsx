import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Phone,
  ChevronDown,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { servicesData } from "../data/servicesData";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const phone = "+919007744772";

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Destination Wedding", href: "/destination-wedding" },
    { name: "Gallery", href: "/gallery" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = servicesData.map((service) => ({
    name: service.title,
    href: `/services/${service.slug}`,
  }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-white/95 shadow-[0_8px_30px_rgba(101,10,52,0.12)] backdrop-blur-xl"
            : "bg-white/80 backdrop-blur-md"
        }`}
      >
        {/* Main Navbar */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Ekalavya Event & Entertainment"
                loading="eager"
                decoding="async"
                className="object-contain w-52 h-52 -my-16 transition-all duration-300"
              />
            

          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="group relative text-md font-semibold text-gray-700 transition hover:text-[#650a34]"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#ed1968] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <button
                type="button"
                onClick={() => setServiceOpen((open) => !open)}
                className="group flex items-center gap-1 text-md font-semibold text-gray-700 transition hover:text-[#650a34]"
                aria-expanded={serviceOpen}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition ${serviceOpen ? "rotate-180" : ""}`}
                />
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#ed1968] transition-all duration-300 group-hover:w-full" />
              </button>

              <div
                className={`absolute left-1/2 top-9 w-72 -translate-x-1/2 rounded-none border border-[#650a34]/10 bg-white p-3 shadow-2xl shadow-[#650a34]/15 transition-all duration-300 ${
                  serviceOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible translate-y-3 opacity-0"
                }`}
              >
                {services.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setServiceOpen(false)}
                    className="block rounded-none px-4 py-3 text-md font-semibold text-gray-700 transition hover:bg-[#650a34]/8 hover:text-[#650a34]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="group relative text-md font-semibold text-gray-700 transition hover:text-[#650a34]"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full bg-[#ed1968] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center gap-2 rounded-none bg-[#650a34] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#650a34]/25 transition hover:-translate-y-0.5 hover:bg-[#ed1968]"
            >
              <Phone size={17} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-none bg-[#650a34] text-white lg:hidden"
          >
            <Menu size={23} />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <div
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-gray-900/50 backdrop-blur-sm transition-opacity lg:hidden ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Mobile Drawer */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
          <div>
            <h2 className="text-xl font-bold leading-snug text-[#650a34]">Ekalavya</h2>
          </div>

          <button
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-none bg-[#650a34]/10 text-[#650a34]"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6">
          <div className="space-y-2">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="block rounded-none px-4 py-3 text-base font-semibold text-gray-700 transition hover:bg-[#650a34]/8 hover:text-[#650a34]"
              >
                {link.name}
              </Link>
            ))}

            <div className="relative">
              <button
                type="button"
                onClick={() => setMobileServiceOpen((open) => !open)}
                className="flex w-full items-center justify-between rounded-none px-4 py-3 text-base font-semibold text-gray-700 transition hover:bg-[#650a34]/8 hover:text-[#650a34]"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${mobileServiceOpen ? "rotate-180" : ""}`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  mobileServiceOpen ? "max-h-[1000px] mt-2 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="mx-4 grid gap-1 py-2">
                  {services.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      onClick={closeMenu}
                      className="block rounded-none px-4 py-3 text-sm font-medium text-gray-600 transition hover:bg-[#650a34]/5 hover:text-[#650a34]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={closeMenu}
                className="block rounded-none px-4 py-3 text-base font-semibold text-gray-700 transition hover:bg-[#650a34]/8 hover:text-[#650a34]"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-2 rounded-none border border-[#650a34] px-5 py-3 font-semibold text-[#650a34]"
            >
              <Phone size={18} />
              Call Now
            </a>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-none bg-[#650a34] px-5 py-3 font-semibold text-white"
            >
              Contact Us
            </Link>
          </div>

          <div className="mt-5 flex items-center justify-center gap-5 text-[#650a34]">
            <a
              href="https://www.instagram.com/ekalavyaevententertainment/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/ekalavyaevententertainment"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="https://share.google/pkeVRIju2IvxucJqs"
              target="_blank"
              rel="noreferrer"
            >
              <FaGoogle size={19} />
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
