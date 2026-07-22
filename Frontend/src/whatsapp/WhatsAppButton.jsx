import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phone = "919007744772";
  const displayPhone = "+919007744772";
  const message = encodeURIComponent(
    "Hello Ekalavya Event & Entertainment, I want to enquire about your event services."
  );

  return (
    <div className="fixed bottom-5 right-5 z-[200] flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`tel:${displayPhone}`}
        aria-label="Call Ekalavya Event & Entertainment"
        className="flex h-14 w-14 items-center justify-center !rounded-2xl bg-[#650a34] text-white shadow-xl shadow-[#650a34]/25 transition hover:-translate-y-1 hover:bg-[#ed1968]"
      >
        <FaPhoneAlt size={22} />
      </a>

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Ekalavya Event & Entertainment"
        className="flex h-14 w-14 items-center justify-center !rounded-2xl bg-[#25D366] text-white shadow-xl shadow-[#25D366]/25 transition hover:-translate-y-1 hover:bg-[#1ebe5d]"
      >
        <FaWhatsapp size={29} />
      </a>
    </div>
  );
};

export default WhatsAppButton;
