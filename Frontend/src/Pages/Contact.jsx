import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  Clock,
  Navigation,
  AlertCircle,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaGoogle } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    eventDate: "",
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

    if (!formData.eventType.trim()) {
      newErrors.eventType = "Event type is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
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
    "w-full rounded-2xl border border-[#650a34]/10 bg-white px-4 py-3.5 text-sm font-semibold text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-[#ed1968] focus:ring-4 focus:ring-[#ed1968]/10 sm:px-5 sm:py-4";

  const errorClass = "mt-2 flex items-center gap-1 text-xs font-semibold text-red-500";

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative bg-[#fff8fb] pt-36 pb-6 sm:pt-40 sm:pb-8 lg:pt-44 lg:pb-8">

        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h1 className="mx-auto max-w-4xl text-3xl font-extrabold uppercase leading-[1.1] text-gray-800 sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
            Let&apos;s Plan Your Next Beautiful Event Together
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
            Share your event requirement with Ekalavya Event & Entertainment.
            Our team will connect with you and help you plan the perfect event.
          </p>
        </div>
      </section>

      {/* Contact Details + Form */}
      <section className="relative py-6 sm:py-8 lg:py-10">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Info */}
          <div>
            <h2 className="text-2xl font-extrabold uppercase leading-[1.14] text-gray-800 sm:text-4xl sm:leading-[1.1]">
              Contact Details
            </h2>

            <p className="mt-4 leading-6 text-gray-600 sm:leading-8">
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
                text="+91 9007744772, +91 9836169315"
                link="tel:+919007744772"
              />

              <ContactCard
                icon={Mail}
                title="Email Us"
                text="ekalavyaentertainmentkolkata@gmail.com"
                link="mailto:ekalavyaentertainmentkolkata@gmail.com"
              />

              {/* <ContactCard
                icon={Clock}
                title="Business Support"
                text="Available for event enquiries and consultation"
              /> */}
            </div>

            <div className="mt-5 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href={mapLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                <Navigation size={18} />
                Get Direction
              </a>
            </div>

            <div className="mt-5 flex items-center gap-4 text-[#650a34]">
              <a
                href="https://www.instagram.com/ekalavyaevententertainment/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#650a34]/8 transition hover:bg-[#ed1968] hover:text-white"
              >
                <FaInstagram />
              </a>

              <a
                href="https://www.facebook.com/ekalavyaevententertainment"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#650a34]/8 transition hover:bg-[#ed1968] hover:text-white"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://share.google/pkeVRIju2IvxucJqs"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#650a34]/8 transition hover:bg-[#ed1968] hover:text-white"
              >
                <FaGoogle />
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-[1.7rem] border border-[#650a34]/10 bg-[#fff8fb] p-4 shadow-[0_25px_80px_rgba(101,10,52,0.12)] sm:rounded-[2.5rem] sm:p-8">
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
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                Send Enquiry
                <Send size={18} className="transition group-hover:translate-x-1" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-[#fff8fb] py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold uppercase leading-[1.14] text-gray-800 sm:text-4xl sm:leading-[1.1]">
                Visit Our Location
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:w-fit sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
            >
              Open Exact Navigation
              <Navigation size={18} />
            </a>
          </div>

          <div className="overflow-hidden rounded-[1.7rem] border border-[#650a34]/10 bg-white p-2 shadow-[0_25px_80px_rgba(101,10,52,0.12)] sm:rounded-[2.5rem] sm:p-3">
            <iframe
              title="Ekalavya Event & Entertainment Location"
              src={mapEmbed}
              width="100%"
              height="520"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] rounded-[1.3rem] sm:h-[420px] sm:rounded-[2rem] lg:h-[520px]"
              style={{ border: 0 }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({ icon: Icon, title, text, link }) {
  const content = (
    <div className="group flex gap-4 rounded-[1.4rem] bg-white p-4 transition hover:-translate-y-1 sm:rounded-[1.7rem] sm:p-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34] transition group-hover:bg-[#ed1968] group-hover:text-white sm:h-14 sm:w-14">
        <Icon size={23} />
      </div>

      <div className="min-w-0">
        <h3 className="font-extrabold leading-snug text-gray-800">{title}</h3>
        <p className="mt-1 break-words leading-6 text-gray-600 sm:leading-7">{text}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} className="block">
      {content}
    </a>
  ) : (
    content
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
