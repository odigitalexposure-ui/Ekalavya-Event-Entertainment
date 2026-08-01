import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black pt-28 pb-20 sm:pt-16 sm:pb-0"
    >
      {/* Original Background Video without dark gradient overlay */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        preload="metadata"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
        src="/Vedio/Home_HeroSection.mp4"
      />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-5 py-4 text-center sm:px-6 sm:py-16 lg:py-20"
      >
        {/* Main Heading with text shadow for crisp legibility over video */}
        <h1 className="max-w-4xl text-[32px] font-extrabold uppercase leading-[1.1] tracking-wide text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
          <span className="block">WE BUILD </span>
          <span className="relative inline-block text-[#ed1968]">
            YOUR DREAM EVENT
          </span>
          <span className="block">INTO REALITY</span>
        </h1>

        {/* Subtitle with background pill for clean readability */}
        <p className="mt-8 max-w-3xl rounded-none bg-black/40 px-5 py-4.5 text-base leading-relaxed text-white backdrop-blur-md shadow-lg drop-shadow sm:mt-10 sm:px-7 sm:py-5 sm:text-lg sm:leading-8 lg:mt-12">
          From venue management, decor production and Food &amp; Beverage service to
          entertainment, hospitality, logistics and celebrity management — we
          create unforgettable celebrations with style, planning and perfection.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-none bg-gradient-to-r from-[#650a34] via-[#ed1968] to-[#650a34] bg-[length:200%_auto] px-7 py-3.5 text-[13px] font-bold uppercase tracking-[0.08em] text-white shadow-2xl shadow-[#ed1968]/40 transition-all duration-300 hover:bg-right hover:-translate-y-1 sm:px-9 sm:py-4 sm:text-sm sm:tracking-wide"
          >
            Plan Your Event
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </motion.div>

      {/* Sound On/Off Button (Icon Symbol Only) on the Left Side */}
      <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-4 left-4 z-20 flex h-11 w-11 items-center justify-center rounded-none border border-white/30 bg-black/50 text-white backdrop-blur-md shadow-xl transition-all hover:bg-black/75 hover:scale-110 sm:bottom-8 sm:left-8 sm:h-12 sm:w-12"
        aria-label={isMuted ? "Turn Sound On" : "Turn Sound Off"}
        title={isMuted ? "Unmute Sound" : "Mute Sound"}
      >
        {isMuted ? (
          <VolumeX size={18} className="text-red-400 sm:size-[20px]" />
        ) : (
          <Volume2 size={18} className="text-emerald-400 animate-pulse sm:size-[20px]" />
        )}
      </button>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll Down"
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-white/80 transition hover:text-white sm:bottom-6"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 drop-shadow">Scroll</span>
        <ChevronDown size={18} className="animate-bounce text-[#ed1968] sm:size-[20px]" />
      </a>
    </section>
  );
}
