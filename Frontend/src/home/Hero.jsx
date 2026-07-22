import { useRef, useState } from "react";
import { ArrowRight, ChevronDown, Volume2, VolumeX } from "lucide-react";
import { Link } from "react-router-dom";

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
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black pt-16"
    >
      {/* Original Background Video without dark gradient overlay */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
        src="/Vedio/Home_HeroSection.mp4"
      />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center px-4 py-12 text-center sm:px-6 sm:py-16 lg:py-20">
        
        {/* Main Heading with text shadow for crisp legibility over video */}
        <h1 className="max-w-4xl text-3xl font-extrabold uppercase leading-[1.1] text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)] sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
          <span className="block">WE BUILD </span>
          <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#ff609a] via-[#ed1968] to-[#ffa3c4]">
            YOUR DREAM EVENT
          </span>
          <span className="block">INTO REALITY</span>
        </h1>

        {/* Subtitle with background pill for clean readability */}
        <p className="mt-6 max-w-2xl rounded-2xl bg-black/40 px-6 py-3 text-base leading-6 text-white backdrop-blur-md shadow-lg drop-shadow sm:text-lg sm:leading-8">
          From venue management, decor production and Food &amp; Beverage service to
          entertainment, hospitality, logistics and celebrity management — we
          create unforgettable celebrations with style, planning and perfection.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#650a34] via-[#ed1968] to-[#650a34] bg-[length:200%_auto] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-2xl shadow-[#ed1968]/40 transition-all duration-300 hover:bg-right hover:-translate-y-1 sm:px-9 sm:py-4 sm:text-sm sm:tracking-wide"
          >
            Plan Your Event
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Sound On/Off Button (Icon Symbol Only) on the Left Side */}
      <button
        type="button"
        onClick={toggleSound}
        className="absolute bottom-6 left-5 z-20 flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-black/50 text-white backdrop-blur-md shadow-xl transition-all hover:bg-black/75 hover:scale-110 sm:bottom-8 sm:left-8"
        aria-label={isMuted ? "Turn Sound On" : "Turn Sound Off"}
        title={isMuted ? "Unmute Sound" : "Mute Sound"}
      >
        {isMuted ? (
          <VolumeX size={20} className="text-red-400" />
        ) : (
          <Volume2 size={20} className="text-emerald-400 animate-pulse" />
        )}
      </button>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll Down"
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center text-white/80 transition hover:text-white"
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-1 drop-shadow">Scroll</span>
        <ChevronDown size={20} className="animate-bounce text-[#ed1968]" />
      </a>
    </section>
  );
}
