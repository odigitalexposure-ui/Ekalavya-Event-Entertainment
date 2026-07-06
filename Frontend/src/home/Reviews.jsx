import {
  ArrowRight,
  ExternalLink,
  MessageSquarePlus,
  Star,
} from "lucide-react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Reviews() {
  const googleReviewUrl =
    "https://www.google.com/search?sca_esv=a34ddc620dd62935&sxsrf=APpeQnukQVfxCYe_YEyXuAtYeBRZ9POfyQ:1782126983296&kgmid=/g/11y_9y8bhw&q=Ekalavya+Event+%26+Entertainment&shem=dlvsc,epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/uni/m1/1&kgs=e774348bc4828039&utm_source=dlvsc,epsd1,ltae,rimspwouoe,sh/x/loc/uni/m1/1#lrd=0x3a0279d65d026ee5:0x653731fc067a368f,1,,,,";

  return (
    <section className="relative overflow-hidden bg-[#fff8fb] pt-6 sm:pt-8 lg:pt-10">
      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold uppercase leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1] lg:text-4xl lg:leading-[1.08]">
            Trusted By Clients For Beautiful Event Experiences
          </h2>

          <p className="mt-5 text-base leading-6 text-gray-600 sm:text-lg sm:leading-8">
            Read genuine client feedback on Google or share your experience
            after an event with Ekalavya Event & Entertainment.
          </p>
        </div>

        {/* Review Card */}
        <div className="mx-auto mt-5 max-w-5xl rounded-[2.5rem] border border-[#650a34]/10 bg-white p-6 text-center shadow-[0_25px_80px_rgba(101,10,52,0.12)] sm:p-8 lg:p-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#650a34]/8 text-[#650a34]">
            <FaGoogle size={30} />
          </div>

          <h3 className="mt-5 text-3xl font-extrabold leading-[1.12] text-gray-800 sm:text-4xl sm:leading-[1.1]">
            Review Us On Google
          </h3>

          <div className="mt-4 flex justify-center gap-1 text-[#ed1968]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="currentColor" />
            ))}
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600 leading-6 sm:leading-8">
            Your review helps future clients understand our event planning,
            decor, hospitality, entertainment and coordination experience.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
            >
              <MessageSquarePlus size={18} />
              Give Review
            </a>

            <a
              href={googleReviewUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#650a34]/20 bg-[#fff8fb] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] transition hover:-translate-y-1 hover:border-[#ed1968] hover:bg-white hover:text-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
            >
              See Reviews
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Full Width CTA */}
      <div className="mt-8 w-full bg-[#650a34]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 py-10 text-center sm:px-6 lg:flex-row lg:py-14 lg:text-left">
          <div>
            <h3 className="text-2xl font-extrabold leading-tight text-white sm:text-3xl lg:text-4xl">
              Want To Create Your Own Memorable Event?
            </h3>

            <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
              Talk to our team today and let us transform your ideas into an
              unforgettable celebration with premium planning, creative décor,
              entertainment and seamless event management.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] shadow-lg transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white sm:px-8 sm:py-4 sm:text-sm"
          >
            Enquire Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}