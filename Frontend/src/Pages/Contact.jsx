import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Navigation,
  AlertCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";
import { motion } from "framer-motion";
import AnimatedSection from "../common/AnimatedSection";
import SnakeBorderBox from "../common/SnakeBorderBox";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
    numberOfGuests: "",
    preferredLocation: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const whatsappNumber = "919007744772";

  const mapLink =
    "https://www.google.com/maps?gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRifBTIHCAIQIRiPAtIBCDEzOTZqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KeVuAl3WeQI6MY82egb8MTdl&daddr=26/1,+Bhagaban+Chatterjee+Ln,+Bantra,+Ichapur,+Howrah,+West+Bengal+711101";

  const mapEmbed =
    "https://www.google.com/maps?q=26/1,+Bhagaban+Chatterjee+Ln,+Bantra,+Ichapur,+Howrah,+West+Bengal+711101&output=embed";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.eventType) {
      newErrors.eventType = "Select an event type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const whatsappMessage = `
Hello Ekalavya Event & Entertainment,

I want to enquire about your event services.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Event Type: ${formData.eventType}
Event Date: ${formData.eventDate || "Not mentioned"}
Number of Guests: ${formData.numberOfGuests || "Not mentioned"}
Preferred Location: ${formData.preferredLocation || "Not mentioned"}

Message:
${formData.message}
`;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  const inputClass =
    "w-full rounded-none border border-[#650a34]/10 bg-white px-4 py-3.5 text-sm font-semibold text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#ed1968] focus:ring-4 focus:ring-[#ed1968]/10 sm:px-5 sm:py-4";

  const errorClass = "mt-2 flex items-center gap-1 text-xs font-semibold text-red-500";

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative bg-[#fff8fb] pt-20 pb-4 sm:pt-24 sm:pb-6 lg:pt-28 lg:pb-6">
        <AnimatedSection className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h1 className="mx-auto max-w-4xl text-2xl font-extrabold uppercase leading-[1.1] text-gray-800 sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
            Let&apos;s Plan Your Next Beautiful Event Together
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
            Share your event requirement with Ekalavya Event & Entertainment.
            Our team will connect with you and help you plan the perfect event.
          </p>
        </AnimatedSection>
      </section>

      {/* Contact Details + Form */}
      <section className="relative py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Info */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-extrabold uppercase leading-[1.14] text-gray-800 sm:text-4xl sm:leading-[1.1]">
              Contact Details
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-6 text-gray-600 sm:leading-8 lg:mx-0 lg:max-w-none">
              For event planning, venue management, decor, entertainment,
              hospitality, corporate events or celebrity management, contact us
              directly.
            </p>

            <div className="mt-5 space-y-5">
              <ContactCard
                icon={MapPin}
                title="Business Address"
                text="26/1, Bhagaban Chatterjee Ln, Bantra, Ichapur, Howrah, West Bengal 711101"
              />

              <ContactCard
                icon={Phone}
                title="Call Us"
                text="9007744772, 9836169315"
                link="tel:9007744772"
              />

              <ContactCard
                icon={Mail}
                title="Email Us"
                text="ekalavyaentertainmentkolkata@gmail.com"
                link="mailto:ekalavyaentertainmentkolkata@gmail.com"
              />
            </div>

            <div className="mt-8 flex justify-center gap-3 sm:flex-wrap lg:justify-start">
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-fit items-center justify-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                <Navigation size={18} />
                Get Direction
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-4 text-[#650a34] lg:justify-start">
              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="https://www.instagram.com/ekalavyaevententertainment/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-none bg-[#650a34]/8 transition hover:bg-[#ed1968] hover:text-white"
              >
                <FaInstagram size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: -10 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="https://www.facebook.com/BoatPartyKolkata"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-none bg-[#650a34]/8 transition hover:bg-[#ed1968] hover:text-white"
              >
                <FaFacebookF size={18} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                href="https://www.google.com/search?q=Ekalavya+Event+%26+Entertainment"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-none bg-[#650a34]/8 transition hover:bg-[#ed1968] hover:text-white"
              >
                <FaGoogle size={18} />
              </motion.a>
            </div>
          </div>

          {/* Form with Snake Border */}
          <SnakeBorderBox className="rounded-none border border-[#650a34]/10 bg-[#fff8fb] p-4 shadow-[0_25px_80px_rgba(101,10,52,0.12)] sm:p-8">
            <h3 className="text-2xl font-extrabold leading-snug text-gray-800 sm:text-3xl">
              Send Enquiry
            </h3>

            <p className="mt-2 leading-6 text-gray-600 sm:leading-7">
              Fill the form and our team will receive your enquiry details.
            </p>

            <form onSubmit={handleSubmit} className="mt-5 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  error={errors.name}
                  inputClass={inputClass}
                  errorClass={errorClass}
                />

                <FormField
                  label="Mobile Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter 10-digit mobile"
                  error={errors.phone}
                  inputClass={inputClass}
                  errorClass={errorClass}
                />
              </div>

              <FormField
                label="Email Address"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                error={errors.email}
                inputClass={inputClass}
                errorClass={errorClass}
              />

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Event Type"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  placeholder="Wedding / Corporate / Party"
                  error={errors.eventType}
                  inputClass={inputClass}
                  errorClass={errorClass}
                />

                <FormField
                  label="Event Date"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  inputClass={inputClass}
                  errorClass={errorClass}
                />
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Number of Guests"
                  name="numberOfGuests"
                  type="number"
                  value={formData.numberOfGuests}
                  onChange={handleChange}
                  placeholder="Expected guest count"
                  error={errors.numberOfGuests}
                  inputClass={inputClass}
                  errorClass={errorClass}
                />

                <FormField
                  label="Preferred Location"
                  name="preferredLocation"
                  value={formData.preferredLocation}
                  onChange={handleChange}
                  placeholder="City or Area"
                  error={errors.preferredLocation}
                  inputClass={inputClass}
                  errorClass={errorClass}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-bold text-gray-700">
                  Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your event requirement..."
                  rows="5"
                  className={`${inputClass} resize-none`}
                />

                {errors.message && (
                  <p className={errorClass}>
                    <AlertCircle size={13} />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Send Enquiry
                <Send size={18} className="transition group-hover:translate-x-1" />
              </button>
            </form>
          </SnakeBorderBox>
        </AnimatedSection>
      </section>

      {/* Map */}
      <section className="bg-[#fff8fb] py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-3xl font-extrabold uppercase leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1]">
                Locate Us
              </h2>

              <p className="mt-3 max-w-2xl leading-6 text-gray-600 sm:leading-8">
                26/1, Bhagaban Chatterjee Ln, Bantra, Ichapur, Howrah, West
                Bengal 711101
              </p>
            </div>

            <a
              href={mapLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
            >
              Open Full Map
              <Navigation size={18} />
            </a>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-none border border-[#650a34]/10 bg-white shadow-2xl shadow-[#650a34]/10 sm:aspect-[21/9]">
            <iframe
              title="Ekalavya Location Map"
              src={mapEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            />
          </div>
        </AnimatedSection>
      </section>
    </main>
  );
}

function ContactCard({ icon: Icon, title, text, link }) {
  const content = (
    <div className="group flex w-full flex-col items-center gap-3 rounded-none bg-white p-4 text-center transition hover:-translate-y-1 sm:flex-row sm:gap-4 sm:p-5 sm:text-left">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-none bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white sm:h-14 sm:w-14"
      >
        <Icon size={23} />
      </motion.div>

      <div className="min-w-0 flex-1">
        <h3 className="font-extrabold leading-snug text-gray-800 sm:text-lg">{title}</h3>
        <p className="mt-1 break-words text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">{text}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="block w-full">
      {content}
    </a>
  ) : (
    <div className="block w-full">{content}</div>
  );
}

function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  inputClass,
  errorClass,
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-gray-700">
        {label}
      </label>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={inputClass}
      />

      {error && (
        <p className={errorClass}>
          <AlertCircle size={13} />
          {error}
        </p>
      )}
    </div>
  );
}
