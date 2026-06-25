import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phone = "919007744772";
  const message = encodeURIComponent(
    "Hello Ekalavya Event & Entertainment, I want to enquire about your event services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[200]
      bg-green-500 hover:bg-green-600
      text-white p-4 rounded-full
      shadow-lg hover:scale-110 transition duration-300"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
