import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phone = "919007744772";
  const displayPhone = "+919007744772";
  const message = encodeURIComponent(
    "Hello Ekalavya Event & Entertainment, I want to enquire about your event services."
  );

  return (
    <div className="fixed bottom-5 right-5 z-[200] flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <motion.a
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.15, rotate: 12 }}
        whileTap={{ scale: 0.9 }}
        href={`tel:${displayPhone}`}
        aria-label="Call Ekalavya Event & Entertainment"
        className="flex h-14 w-14 items-center justify-center !rounded-full bg-[#650a34] text-white shadow-xl shadow-[#650a34]/30 transition-colors duration-300 hover:bg-[#ed1968] animate-iconFloat"
      >
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <FaPhoneAlt size={22} />
        </motion.div>
      </motion.a>

      <motion.a
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.15, rotate: -12 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Ekalavya Event & Entertainment"
        className="flex h-14 w-14 items-center justify-center !rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-colors duration-300 hover:bg-[#1ebe5d] animate-iconPulseGlow"
      >
        <motion.div
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <FaWhatsapp size={29} />
        </motion.div>
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;
