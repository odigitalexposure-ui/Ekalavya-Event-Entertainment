import { useState, useMemo } from "react";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Share2,
  X,
  Phone,
  Play,
  CheckCircle2,
  MessageCircle,
  Search,
  Tag,
  Sparkles,
  Check,
} from "lucide-react";
import AnimatedSection, { AnimatedCard } from "../common/AnimatedSection";
import { blogPosts } from "../data/blogData";

export default function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [copiedId, setCopiedId] = useState(null);

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = ["All", ...new Set(blogPosts.map((b) => b.category))];
    return cats;
  }, []);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogPosts.filter((blog) => {
      const matchesCategory =
        activeCategory === "All" || blog.category === activeCategory;
      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured blog is Blog 7 (Why Do You Need An Event Manager? Video Reel)
  const featuredBlog =
    blogPosts.find((b) => b.id === "blog-7") ||
    blogPosts.find((b) => b.mediaType === "video") ||
    blogPosts[0];

  // Grid blogs (exclude featured blog from grid when hero spotlight is active)
  const gridBlogs = useMemo(() => {
    if (!searchQuery && activeCategory === "All" && featuredBlog) {
      return filteredBlogs.filter((b) => b.id !== featuredBlog.id);
    }
    return filteredBlogs;
  }, [filteredBlogs, searchQuery, activeCategory, featuredBlog]);

  const handleShare = async (blog, e) => {
    if (e) e.stopPropagation();
    const shareData = {
      title: blog.title,
      text: blog.excerpt,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // User cancelled share
      }
    } else {
      await navigator.clipboard.writeText(
        `${blog.title}\n\nCall: ${blog.phone}\n${window.location.href}`
      );
      setCopiedId(blog.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  return (
    <main className="overflow-hidden bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#fff5f8] via-[#fff8fb] to-white pt-28 pb-6 sm:pt-32 sm:pb-8">
        <AnimatedSection className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
          {/* Search Bar & Categories */}
          <div className="mx-auto max-w-3xl space-y-4">
            {/* Search Input - Square shape */}
            <div className="relative flex items-center">
              <Search
                size={20}
                className="absolute left-4 text-gray-400 pointer-events-none"
              />
              <input
                type="text"
                placeholder="Search articles by keyword, category, or title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-none border border-gray-200 bg-white py-3.5 pl-11 pr-10 text-sm font-medium text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-[#650a34] focus:outline-none focus:ring-2 focus:ring-[#650a34]/20 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 text-xs font-semibold text-gray-400 hover:text-gray-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Pills - Square shape */}
            <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-1.5 rounded-none px-4 py-2 text-xs font-bold uppercase tracking-wider transition ${
                    activeCategory === cat
                      ? "bg-[#650a34] text-white shadow-md shadow-[#650a34]/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                >
                  <Tag size={12} />
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Featured Blog Highlight (Video Blog Spotlight) - Square shape */}
      {!searchQuery && activeCategory === "All" && featuredBlog && (
        <section className="py-6 sm:py-8 lg:py-10 bg-white">
          <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-none bg-[#ed1968] animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#650a34]">
                Featured Video Highlight
              </span>
            </div>

            <div className="grid overflow-hidden rounded-none bg-white border border-gray-100 shadow-2xl shadow-gray-200/80 lg:grid-cols-12">
              {/* Media */}
              <div
                className="relative aspect-[16/10] w-full cursor-pointer lg:col-span-7 lg:aspect-auto overflow-hidden group bg-black min-h-[320px] sm:min-h-[420px]"
                onClick={() => setSelectedBlog(featuredBlog)}
              >
                {featuredBlog.mediaType === "video" ? (
                  <div className="relative h-full w-full">
                    <video
                      src={featuredBlog.media}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-none bg-[#650a34]/90 text-white shadow-2xl backdrop-blur-md transition group-hover:scale-110 group-hover:bg-[#ed1968]">
                        <Play size={28} className="ml-1 fill-white" />
                      </span>
                    </div>
                    <span className="absolute top-4 right-4 flex items-center gap-1.5 rounded-none bg-black/75 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md z-10">
                      <Play size={12} className="fill-white" /> Video Reel
                    </span>
                  </div>
                ) : (
                  <div className="relative h-full w-full flex items-center justify-center p-2 sm:p-4 bg-gradient-to-b from-gray-950 to-slate-900">
                    <img
                      src={featuredBlog.media}
                      alt={featuredBlog.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full max-h-[520px] object-contain transition duration-700 group-hover:scale-[1.02] rounded-none drop-shadow-lg"
                    />
                  </div>
                )}
                <span className="absolute top-4 left-4 z-10 rounded-none bg-[#650a34]/90 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-sm shadow-md">
                  {featuredBlog.category}
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                <div>
                  <div className="flex flex-wrap gap-4 text-xs font-semibold text-gray-500">
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={15} className="text-[#ed1968]" />
                      {featuredBlog.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={15} className="text-[#ed1968]" />
                      {featuredBlog.readTime}
                    </span>
                  </div>

                  <h2
                    onClick={() => setSelectedBlog(featuredBlog)}
                    className="mt-4 cursor-pointer text-2xl font-bold uppercase leading-snug text-[#232020] transition hover:text-[#650a34] sm:text-3xl"
                  >
                    {featuredBlog.title}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base sm:leading-7">
                    {featuredBlog.excerpt}
                  </p>

                  {/* Bullet points or highlights preview */}
                  {featuredBlog.bulletPoints ? (
                    <div className="mt-4 space-y-2">
                      {featuredBlog.bulletPoints.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs font-medium text-gray-700"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-[#ed1968]"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : featuredBlog.highlights ? (
                    <div className="mt-4 space-y-2">
                      {featuredBlog.highlights.slice(0, 3).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs font-medium text-gray-700"
                        >
                          <CheckCircle2
                            size={15}
                            className="mt-0.5 shrink-0 text-[#ed1968]"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-6">
                  <button
                    onClick={() => setSelectedBlog(featuredBlog)}
                    className="inline-flex items-center justify-center gap-2 rounded-none bg-[#650a34] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#650a34]/20 transition hover:-translate-y-0.5 hover:bg-[#ed1968]"
                  >
                    {featuredBlog.mediaType === "video"
                      ? "Watch Video Reel"
                      : "Read Full Story"}
                    <ArrowRight size={16} />
                  </button>

                  <a
                    href={`tel:${featuredBlog.phone}`}
                    className="inline-flex items-center justify-center gap-2 rounded-none border border-gray-200 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-800 transition hover:border-[#650a34] hover:text-[#650a34]"
                  >
                    <Phone size={16} className="text-[#ed1968]" />
                    Call Us
                  </a>

                  <button
                    onClick={(e) => handleShare(featuredBlog, e)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-gray-200 bg-white text-gray-600 transition hover:border-[#650a34] hover:text-[#650a34]"
                    title="Share article"
                  >
                    {copiedId === featuredBlog.id ? (
                      <Check size={18} className="text-green-600" />
                    ) : (
                      <Share2 size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      )}

      {/* Main Blog Grid - Square shape */}
      <section className="py-8 sm:py-12 lg:py-16">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold uppercase tracking-tight text-[#232020] sm:text-2xl">
              {activeCategory === "All"
                ? "All Articles & Highlights"
                : `${activeCategory} Articles`}
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({gridBlogs.length})
              </span>
            </h2>
          </div>

          {gridBlogs.length === 0 ? (
            <div className="rounded-none border border-dashed border-gray-300 py-16 text-center">
              <p className="text-base font-semibold text-gray-500">
                No blog posts found matching your search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 rounded-none bg-[#650a34] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#ed1968]"
              >
                Reset Search Filters
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {gridBlogs.map((blog, index) => (
                <AnimatedCard
                  key={blog.id}
                  delay={index * 0.08}
                  className="group flex flex-col justify-between rounded-none bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-gray-200/80 overflow-hidden"
                >
                  <div>
                    {/* Media Container - Square shape */}
                    <div
                      className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-gradient-to-b from-gray-900 to-slate-900 cursor-pointer flex items-center justify-center p-2 sm:p-3"
                      onClick={() => setSelectedBlog(blog)}
                    >
                      {blog.mediaType === "video" ? (
                        <div className="relative h-full w-full">
                          <video
                            src={blog.media}
                            muted
                            loop
                            autoPlay
                            playsInline
                            className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                            <span className="flex h-12 w-12 items-center justify-center rounded-none bg-[#650a34]/90 text-white shadow-lg backdrop-blur-sm transition group-hover:scale-110 group-hover:bg-[#ed1968]">
                              <Play size={20} className="ml-0.5 fill-white" />
                            </span>
                          </div>
                          <span className="absolute top-3 right-3 flex items-center gap-1 rounded-none bg-black/75 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm z-10">
                            Video Feature
                          </span>
                        </div>
                      ) : (
                        <img
                          src={blog.media}
                          alt={blog.title}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full max-h-[320px] object-contain transition duration-500 group-hover:scale-105 rounded-none drop-shadow-md"
                        />
                      )}

                      <span className="absolute top-3 left-3 rounded-none bg-[#650a34]/90 px-3 py-1 text-[11px] font-bold text-white shadow-md backdrop-blur-sm">
                        {blog.category}
                      </span>
                    </div>

                    {/* Content Body */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
                        <span className="inline-flex items-center gap-1.5">
                          <CalendarDays size={14} className="text-[#ed1968]" />
                          {blog.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={14} className="text-[#ed1968]" />
                          {blog.readTime}
                        </span>
                      </div>

                      <h3
                        onClick={() => setSelectedBlog(blog)}
                        className="mt-3 cursor-pointer text-xl font-bold leading-snug text-[#232020] transition hover:text-[#650a34] line-clamp-2"
                      >
                        {blog.title}
                      </h3>

                      <p className="mt-3 text-sm leading-relaxed text-gray-600 line-clamp-3">
                        {blog.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Card Actions - Square shape */}
                  <div className="px-6 pb-6 pt-2 border-t border-gray-50 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedBlog(blog)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#650a34] transition hover:text-[#ed1968]"
                    >
                      {blog.mediaType === "video" ? "Watch Video" : "Read Story"}
                      <ArrowRight size={15} />
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={`tel:${blog.phone}`}
                        onClick={(e) => e.stopPropagation()}
                        className="flex h-9 w-9 items-center justify-center rounded-none bg-gray-100 text-gray-600 transition hover:bg-[#650a34] hover:text-white"
                        title={`Call ${blog.phone}`}
                      >
                        <Phone size={16} />
                      </a>

                      <button
                        onClick={(e) => handleShare(blog, e)}
                        className="flex h-9 w-9 items-center justify-center rounded-none bg-gray-100 text-gray-600 transition hover:bg-[#650a34] hover:text-white"
                        title="Share"
                      >
                        {copiedId === blog.id ? (
                          <Check size={16} className="text-green-600" />
                        ) : (
                          <Share2 size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          )}
        </AnimatedSection>
      </section>

      {/* Direct Contact Call-To-Action - Square shape */}
      <section className="bg-white py-8 sm:py-12 lg:py-16">
        <AnimatedSection className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="relative overflow-hidden rounded-none bg-gradient-to-r from-[#650a34] via-[#7d0d42] to-[#650a34] px-6 py-12 text-center shadow-2xl shadow-[#650a34]/30 sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:text-left">
            <div className="relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-none bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                <Sparkles size={14} className="text-[#ed1968]" />
                Book Your Consultation
              </span>

              <h2 className="mt-4 text-2xl font-bold uppercase leading-tight text-white sm:text-4xl">
                Ready To Turn Your Event Vision Into Reality?
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-white/80 sm:text-base">
                Partner with Ekalavya Event &amp; Entertainment for luxury venue sourcing,
                decor production, corporate MICE management, destination weddings, and seamless hospitality.
              </p>
            </div>

            <div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
              <a
                href="tel:+919007744772"
                className="inline-flex items-center justify-center gap-2 rounded-none bg-white px-7 py-4 text-xs font-bold uppercase tracking-wider text-[#650a34] shadow-lg transition hover:-translate-y-0.5 hover:bg-[#ed1968] hover:text-white"
              >
                <Phone size={18} />
                Call +91 9007744772
              </a>

              <a
                href="https://wa.me/919007744772?text=Hello%20Ekalavya%20Events,%20I%20would%20like%20to%20consult%20about%20event%20planning"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-none border border-white/30 bg-white/10 px-7 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/20"
              >
                <MessageCircle size={18} />
                WhatsApp Us
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Reader Detail Modal - Square shape */}
      {selectedBlog && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-gray-950/85 p-3 sm:p-6 backdrop-blur-md overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedBlog(null)}
        >
          <div
            className="relative my-auto max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-none bg-white shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Square shape */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-none bg-black/70 text-white backdrop-blur-md transition hover:bg-[#ed1968]"
              title="Close modal"
            >
              <X size={20} />
            </button>

            {/* Top Media Header - Square shape */}
            <div className="relative min-h-[300px] max-h-[75vh] w-full bg-slate-950 flex items-center justify-center p-3 sm:p-5">
              {selectedBlog.mediaType === "video" ? (
                <video
                  src={selectedBlog.media}
                  controls
                  autoPlay
                  className="max-h-[70vh] w-full object-contain rounded-none shadow-2xl"
                />
              ) : (
                <img
                  src={selectedBlog.media}
                  alt={selectedBlog.title}
                  loading="lazy"
                  className="max-h-[70vh] w-full object-contain rounded-none shadow-2xl"
                />
              )}
              <span className="absolute top-4 left-4 rounded-none bg-[#650a34]/90 px-4 py-1.5 text-xs font-bold text-white shadow-md backdrop-blur-md">
                {selectedBlog.category}
              </span>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={15} className="text-[#ed1968]" />
                  {selectedBlog.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={15} className="text-[#ed1968]" />
                  {selectedBlog.readTime}
                </span>
              </div>

              <h2 className="mt-3 text-2xl font-bold uppercase leading-tight text-[#232020] sm:text-3xl">
                {selectedBlog.title}
              </h2>

              {/* Formatted Content */}
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base sm:leading-7 whitespace-pre-line">
                {selectedBlog.content}
              </div>

              {/* Bullet Points block if present - Square shape */}
              {selectedBlog.bulletPoints && (
                <div className="mt-6 rounded-none bg-gray-50 p-5 border border-gray-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#650a34]">
                    Key Services &amp; Offerings Included:
                  </h4>
                  <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {selectedBlog.bulletPoints.map((point, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-800"
                      >
                        <CheckCircle2
                          size={16}
                          className="shrink-0 text-[#ed1968]"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Highlights list if present - Square shape */}
              {selectedBlog.highlights && (
                <div className="mt-6 rounded-none bg-[#fff8fb] p-5 border border-[#650a34]/10">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#650a34]">
                    Why Partner With Ekalavya:
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedBlog.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-gray-800"
                      >
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#ed1968]"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Callout Notice - Square shape */}
              {selectedBlog.calloutText && (
                <p className="mt-6 rounded-none bg-[#650a34]/5 p-4 text-xs sm:text-sm font-semibold text-[#650a34] border-l-4 border-[#650a34]">
                  {selectedBlog.calloutText}
                </p>
              )}

              {/* Direct Actions in Modal - Square shape */}
              <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-6">
                <a
                  href={`tel:${selectedBlog.phone}`}
                  className="inline-flex items-center justify-center gap-2 rounded-none bg-[#650a34] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#650a34]/20 transition hover:bg-[#ed1968]"
                >
                  <Phone size={16} />
                  Call {selectedBlog.phone}
                </a>

                <a
                  href={`https://wa.me/${selectedBlog.whatsapp}?text=Hi%20Ekalavya%20Team,%20I%20read%20your%20article%20"${encodeURIComponent(
                    selectedBlog.title
                  )}"%20and%20want%20to%20know%20more`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-none bg-emerald-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
                >
                  <MessageCircle size={16} />
                  WhatsApp
                </a>

                <button
                  onClick={(e) => handleShare(selectedBlog, e)}
                  className="inline-flex items-center justify-center gap-2 rounded-none border border-gray-200 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-wider text-gray-700 transition hover:border-[#650a34] hover:text-[#650a34]"
                >
                  {copiedId === selectedBlog.id ? (
                    <>
                      <Check size={16} className="text-green-600" />
                      Link Copied!
                    </>
                  ) : (
                    <>
                      <Share2 size={16} />
                      Share
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
