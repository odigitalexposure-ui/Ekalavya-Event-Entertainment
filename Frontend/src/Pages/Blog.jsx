import { useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Share2,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection, { AnimatedCard } from "../common/AnimatedSection";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const blogs = [
    {
      title: "How To Plan A Perfect Corporate Event",
      category: "Corporate",
      date: "12 June 2026",
      readTime: "4 min read",
      image: "/images/g51.jpeg",
      excerpt:
        "Corporate events need clear planning, guest management, branding, food, production and smooth coordination.",
      content:
        "A successful corporate event starts with a clear objective. Decide whether the event is for networking, product launch, employee engagement, award ceremony or client interaction. After that, plan the venue, guest flow, stage setup, branding, food, sound, lighting and hospitality. A professional event team helps manage every detail so the client can focus on the audience and the purpose of the event.",
    },
    {
      title: "Why Decor & Production Matter In Every Event",
      category: "Decor",
      date: "18 June 2026",
      readTime: "3 min read",
      image: "/images/g4.jpeg",
      excerpt:
        "Good decor creates the first impression and production quality makes the full event feel premium.",
      content:
        "Decor and production are two of the most important parts of any event. The right theme, lighting, stage, floral setup and backdrop create a premium feel. Production quality also affects guest experience through sound, light, entry design, seating arrangement and visual presentation. A beautiful event is not only about decoration, it is about creating a complete atmosphere.",
    },
    {
      title: "Wedding Event Planning Checklist For Families",
      category: "Wedding",
      date: "25 June 2026",
      readTime: "5 min read",
      image: "/images/g9.jpeg",
      excerpt:
        "A proper checklist helps families stay stress-free while planning wedding functions and guest arrangements.",
      content:
        "Wedding planning becomes easier when everything is listed clearly. Start with budget, guest count, venue booking and event date. Then plan decor, food, photography, entertainment, hospitality, transport and accommodation. Families should also keep a backup plan for weather, vendor delay and guest movement. A professional event manager keeps everything organized and reduces stress.",
    },
    {
      title: "How Hospitality Improves Guest Experience",
      category: "Hospitality",
      date: "02 July 2026",
      readTime: "4 min read",
      image: "/images/g2.jpeg",
      excerpt:
        "Guest comfort, welcome desks, logistics and personal attention make any celebration memorable.",
      content:
        "Hospitality is the soul of any event. From airport transfer and hotel check-in to welcome desk, seating, food service and information desk, guest care leaves a lasting impression. When guests feel comfortable and valued, the event becomes successful. Professional hospitality teams ensure every attendee has a pleasant experience.",
    },
  ];

  const handleShare = async (blog) => {
    const shareData = {
      title: blog.title,
      text: blog.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(`${blog.title} - ${window.location.href}`);
      alert("Blog link copied!");
    }
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero */}
      <section className="relative bg-[#fff8fb] pt-28 pb-6 sm:pt-24 sm:pb-6 lg:pt-28 lg:pb-6">
        <AnimatedSection className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          <h1 className="mx-auto max-w-4xl text-2xl font-medium uppercase leading-snug text-[#232020] sm:text-5xl sm:leading-[1.06] lg:text-6xl lg:leading-[1.05]">
            Event Insights, Ideas &amp; Planning Guides
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg sm:leading-8">
            Read simple guides, event tips and practical ideas on planning,
            decor, food, entertainment, hospitality and event management.
          </p>
        </AnimatedSection>
      </section>

      {/* Featured Blog */}
      {blogs[0] && (
        <section className="py-6 sm:py-8 lg:py-10">
          <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid overflow-hidden rounded-none bg-white shadow-2xl shadow-gray-200 lg:grid-cols-2">
              <div className="relative aspect-[4/3] w-full lg:aspect-auto">
                <img
                  src={blogs[0].image}
                  alt={blogs[0].title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#650a34]/80 via-transparent to-transparent lg:hidden" />
              </div>

              <div className="p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1]">
                  {blogs[0].title}
                </h2>

                <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-gray-500">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays size={16} />
                    {blogs[0].date}
                  </span>

                  <span className="inline-flex items-center gap-2">
                    <Clock size={16} />
                    {blogs[0].readTime}
                  </span>
                </div>

                <p className="mt-5 leading-6 text-gray-600 sm:leading-8">
                  {blogs[0].excerpt}
                </p>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <button
                    onClick={() => setSelectedBlog(blogs[0])}
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white shadow-xl shadow-[#650a34]/20 transition hover:-translate-y-1 hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
                  >
                    Read Blog
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={() => handleShare(blogs[0])}
                    className="inline-flex items-center justify-center gap-2 rounded-none border border-[#650a34]/15 bg-white px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] transition hover:-translate-y-1 hover:border-[#ed1968] hover:text-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
                  >
                    <Share2 size={18} />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <AnimatedCard
                key={blog.title}
                delay={index * 0.1}
                className="group bg-white transition hover:-translate-y-2 border border-gray-100 shadow-sm"
              >
                <div className="aspect-square sm:aspect-[16/9] overflow-hidden bg-[#fff8fb]">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-500">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays size={15} />
                      {blog.date}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <Clock size={15} />
                      {blog.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-2xl font-medium leading-snug text-[#232020]">
                    {blog.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {blog.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-[#650a34] transition hover:text-[#ed1968]"
                    >
                      Read Article
                      <ArrowRight size={16} />
                    </button>

                    <button
                      onClick={() => handleShare(blog)}
                      className="text-gray-500 transition hover:text-[#650a34]"
                    >
                      <Share2 size={18} />
                    </button>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="bg-white py-6 sm:py-8 lg:py-10">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-8 rounded-none bg-[#650a34] px-6 py-10 text-center shadow-2xl shadow-[#650a34]/20 sm:px-8 lg:flex-row lg:px-12 lg:py-14 lg:text-left">
            <div>
              <h2 className="text-2xl font-medium uppercase leading-[1.12] text-white sm:text-4xl sm:leading-[1.1]">
                Need Help Planning Your Event?
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-7 text-white/80">
                Contact Ekalavya Event &amp; Entertainment for premium event planning,
                decor, production, hospitality and entertainment services.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-none bg-white px-6 py-3 text-xs font-bold uppercase tracking-[0.08em] text-[#650a34] shadow-lg shadow-black/10 transition hover:-translate-y-1 hover:bg-[#ed1968] hover:text-white sm:px-8 sm:py-4 sm:text-sm"
            >
              Enquire Now
              <ArrowRight size={18} />
            </Link>
          </div>
        </AnimatedSection>
      </section>

      {/* Blog Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/85 p-4 backdrop-blur-md">
          <button
            onClick={() => setSelectedBlog(null)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-none bg-white text-[#650a34]"
          >
            <X size={22} />
          </button>

          <div className="max-h-[88vh] w-full max-w-4xl overflow-y-auto bg-white">
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              loading="lazy"
              decoding="async"
              className="aspect-video w-full object-cover"
            />

            <div className="p-5 sm:p-7">
              <h2 className="text-2xl font-medium uppercase leading-[1.12] text-[#232020] sm:text-4xl sm:leading-[1.1]">
                {selectedBlog.title}
              </h2>

              <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold text-gray-500">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays size={16} />
                  {selectedBlog.date}
                </span>

                <span className="inline-flex items-center gap-2">
                  <Clock size={16} />
                  {selectedBlog.readTime}
                </span>
              </div>

              <p className="mt-6 whitespace-pre-line leading-6 text-gray-600 sm:leading-8">
                {selectedBlog.content}
              </p>

              <button
                onClick={() => handleShare(selectedBlog)}
                className="mt-5 inline-flex items-center gap-2 rounded-none bg-[#650a34] px-5 py-3 text-xs font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#ed1968] sm:px-8 sm:py-4 sm:text-sm sm:tracking-wide"
              >
                <Share2 size={18} />
                Share Blog
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
