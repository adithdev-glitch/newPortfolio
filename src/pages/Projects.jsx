import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { assets } from "../assests/assest.js";
import { FaGithub, FaExternalLinkAlt, FaArrowRight, FaCode, FaCheckCircle } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi2";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "01",
    tag: "Education Tech",
    title: "E-Learning Platform",
    subtitle: "Plan and launch interactive online courses",
    description:
      "A complete MERN-based e-learning platform with secure authentication, interactive video lectures, dynamic course progress tracking, and seamless payment integration. Designed to empower students and instructors alike.",
    image: assets.project_1,
    tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    link: "https://github.com/adithdev-glitch/E-LearningApp",
    live: "https://github.com/adithdev-glitch/E-LearningApp",
    theme: {
      cardBg: "#f3e8ff",          // soft lavender
      titleColor: "#2e1065",      // deep purple
      subtitleColor: "#7e22ce",   // vibrant purple
      descColor: "#581c87",       // muted purple
      btnBg: "#9333ea",           // purple button
      btnHover: "#7e22ce",
      btnText: "#ffffff",
      pillBg: "#ffffff",
      pillText: "#6b21a8",
      watermarkColor: "text-purple-300/40",
      accentCircle: "#e9d5ff",
      badge1: { text: "Interactive Courses", bg: "#f97316", textCol: "#ffffff" },
      badge2: { text: "Verified Certificates", bg: "#ea580c", textCol: "#ffffff" },
    },
  },
  {
    id: "02",
    tag: "Modern Commerce",
    title: "E-Commerce Platform",
    subtitle: "Modern shopping with seamless checkout",
    description:
      "U-Fashion is a full-stack e-commerce marketplace featuring instant product catalog search, cloud media uploads, integrated payment checkout, and an intuitive customer shopping cart designed for maximum conversion.",
    image: assets.project_2,
    tech: ["React", "Node.js", "MongoDB", "Express", "Cloudinary", "JWT"],
    link: "https://github.com/adithdev-glitch/e-commerce",
    live: "https://github.com/adithdev-glitch/e-commerce",
    theme: {
      cardBg: "#e6f9f3",          // soft mint
      titleColor: "#064e3b",      // deep emerald
      subtitleColor: "#059669",   // vibrant emerald
      descColor: "#065f46",       // muted emerald
      btnBg: "#059669",           // emerald button
      btnHover: "#047857",
      btnText: "#ffffff",
      pillBg: "#ffffff",
      pillText: "#065f46",
      watermarkColor: "text-emerald-300/40",
      accentCircle: "#a7f3d0",
      badge1: { text: "Live Cart Sync", bg: "#0d9488", textCol: "#ffffff" },
      badge2: { text: "Instant Checkout", bg: "#0f766e", textCol: "#ffffff" },
    },
  },
  {
    id: "03",
    tag: "Real-Time Chat",
    title: "HeyChat Messenger",
    subtitle: "Instant messaging & media sharing platform",
    description:
      "A high-speed communication application powered by Socket.IO. Features instant bi-directional messaging, live user presence tracking, media uploads via Cloudinary, and responsive messaging layouts across all devices.",
    image: assets.project_3,
    tech: ["React", "Node.js", "MongoDB", "Express", "Socket.IO", "Cloudinary"],
    link: "https://github.com/adithdev-glitch/chatApp",
    live: "https://github.com/adithdev-glitch/chatApp",
    theme: {
      cardBg: "#ffedd5",          // soft warm peach
      titleColor: "#7c2d12",      // deep warm coral
      subtitleColor: "#ea580c",   // vibrant coral
      descColor: "#9a3412",       // muted coral
      btnBg: "#ea580c",           // coral button
      btnHover: "#c2410c",
      btnText: "#ffffff",
      pillBg: "#ffffff",
      pillText: "#9a3412",
      watermarkColor: "text-orange-300/40",
      accentCircle: "#fed7aa",
      badge1: { text: "Socket.IO Realtime", bg: "#e11d48", textCol: "#ffffff" },
      badge2: { text: "Cloud Media Delivery", bg: "#be123c", textCol: "#ffffff" },
    },
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const badgeRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hardware-accelerated GSAP Timeline:
      // Initial positions: Card 0 in place, Card 1 & 2 start below (yPercent: 110)
      gsap.set(cardRefs.current[0], { yPercent: 0, scale: 1, opacity: 1 });
      gsap.set(cardRefs.current[1], { yPercent: 115, scale: 1, opacity: 1 });
      gsap.set(cardRefs.current[2], { yPercent: 115, scale: 1, opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=2200",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Phase 1: Card 0 stays pinned while user scrolls into the section (dwell)
      tl.to({}, { duration: 0.2 });

      // Phase 2: Card 1 comes from bottom into the exact same position over Card 0
      tl.to(
        cardRefs.current[0],
        {
          scale: 0.93,
          opacity: 0.5,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "step1"
      );

      tl.to(
        cardRefs.current[1],
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "step1"
      );

      // Phase 3: Card 1 stays pinned while user views it (dwell)
      tl.to({}, { duration: 0.3 });

      // Phase 4: Card 2 comes from bottom into the exact same position over Card 1
      tl.to(
        cardRefs.current[1],
        {
          scale: 0.93,
          opacity: 0.5,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "step2"
      );

      tl.to(
        cardRefs.current[2],
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "step2"
      );

      // Phase 5: Settle on Card 2 before unpinning
      tl.to({}, { duration: 0.2 });

      ScrollTrigger.refresh();
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative
        w-full
        h-screen
        bg-[#f8f9fa]
        text-black
        flex
        flex-col
        justify-between
        px-4
        sm:px-6
        md:px-12
        lg:px-20
        py-6
        sm:py-8
        box-border
      "
    >
      {/* Background Accent Grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Header Bar */}
      <div className="relative z-20 max-w-5xl w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#7ef1d4] ring-4 ring-[#7ef1d4]/30 animate-pulse" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl sekuya-regular text-black tracking-tight">
            Featured Projects
          </h2>
        </div>

        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-full shadow-xs border border-black/5">
          <span className="text-xs font-mono font-bold uppercase text-black/70">
            Selected Works // 2024 — 2025
          </span>
        </div>
      </div>

      {/* Pinned Card Stage: All cards share the exact same bounds */}
      <div className="relative z-10 max-w-5xl w-full mx-auto my-auto h-[500px] sm:h-[540px] md:h-[570px] lg:h-[590px]">
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            style={{
              backgroundColor: project.theme.cardBg,
              zIndex: i + 10,
              transformOrigin: "center center",
            }}
            className="
              absolute
              inset-0
              w-full
              h-full
              rounded-3xl
              md:rounded-[36px]
              shadow-[0_-15px_35px_rgba(0,0,0,0.06),0_25px_60px_-15px_rgba(0,0,0,0.12)]
              border
              border-black/5
              overflow-hidden
              will-change-transform
            "
          >
            <div className="relative w-full h-full p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              {/* Giant Background Number Watermark */}
              <span
                className={`
                  absolute
                  right-6
                  top-4
                  md:right-10
                  md:top-6
                  text-8xl
                  sm:text-9xl
                  md:text-[170px]
                  font-black
                  leading-none
                  pointer-events-none
                  select-none
                  z-0
                  ${project.theme.watermarkColor}
                `}
              >
                {project.id}
              </span>

              {/* Card Content Grid */}
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center h-full">
                {/* Left Column: Info & Details */}
                <div className="lg:col-span-6 flex flex-col justify-center">
                  {/* Category Pill */}
                  <div className="mb-2.5">
                    <span
                      style={{
                        backgroundColor: project.theme.pillBg,
                        color: project.theme.pillText,
                      }}
                      className="
                        inline-flex
                        items-center
                        gap-1.5
                        px-3.5
                        py-1
                        rounded-full
                        text-xs
                        font-bold
                        shadow-xs
                        border
                        border-black/5
                      "
                    >
                      <HiOutlineSparkles className="text-sm" />
                      {project.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{ color: project.theme.titleColor }}
                    className="
                      text-2xl
                      sm:text-3xl
                      md:text-4xl
                      font-black
                      tracking-tight
                      leading-[1.15]
                      mb-1.5
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Subtitle */}
                  <h4
                    style={{ color: project.theme.subtitleColor }}
                    className="
                      text-sm
                      sm:text-base
                      font-semibold
                      mb-2.5
                      leading-snug
                    "
                  >
                    {project.subtitle}
                  </h4>

                  {/* Description */}
                  <p
                    style={{ color: project.theme.descColor }}
                    className="
                      text-xs
                      sm:text-sm
                      md:text-[13.5px]
                      leading-relaxed
                      opacity-90
                      mb-4
                      line-clamp-4
                      sm:line-clamp-none
                    "
                  >
                    {project.description}
                  </p>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="
                          text-[11px]
                          sm:text-xs
                          font-semibold
                          px-2.5
                          py-1
                          rounded-lg
                          bg-white/80
                          text-black/80
                          border
                          border-black/5
                          shadow-2xs
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        backgroundColor: project.theme.btnBg,
                        color: project.theme.btnText,
                      }}
                      className="
                        group
                        inline-flex
                        items-center
                        gap-2
                        px-5
                        py-2.5
                        rounded-xl
                        font-semibold
                        text-xs
                        sm:text-sm
                        shadow-md
                        transition-all
                        duration-200
                        hover:scale-[1.03]
                        active:scale-[0.98]
                      "
                    >
                      <FaGithub className="text-sm sm:text-base" />
                      <span>View Project</span>
                      <FaArrowRight className="text-[10px] sm:text-xs transition-transform group-hover:translate-x-1" />
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          gap-1.5
                          px-4
                          py-2.5
                          rounded-xl
                          bg-white/80
                          hover:bg-white
                          text-black/80
                          hover:text-black
                          font-semibold
                          text-xs
                          sm:text-sm
                          border
                          border-black/10
                          shadow-2xs
                          transition-all
                          duration-200
                        "
                      >
                        <FaCode className="text-xs" />
                        <span>Source Code</span>
                        <FaExternalLinkAlt className="text-[9px] opacity-70" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column: Device Frame Mockup + Floating Action Badges */}
                <div className="lg:col-span-6 relative flex items-center justify-center">
                  {/* Decorative soft pastel circle backdrop */}
                  <div
                    style={{ backgroundColor: project.theme.accentCircle }}
                    className="
                      absolute
                      w-52
                      h-52
                      sm:w-72
                      sm:h-72
                      rounded-full
                      opacity-60
                      blur-2xl
                      -z-10
                    "
                  />

                  {/* Device White Container Frame */}
                  <div
                    className="
                      relative
                      w-full
                      max-w-sm
                      sm:max-w-md
                      lg:max-w-lg
                      bg-white
                      p-2.5
                      sm:p-3.5
                      rounded-2xl
                      sm:rounded-[28px]
                      shadow-xl
                      border
                      border-white/80
                    "
                  >
                    {/* Device Screen Viewport */}
                    <div
                      className="
                        relative
                        w-full
                        h-44
                        sm:h-56
                        md:h-64
                        rounded-xl
                        sm:rounded-[20px]
                        overflow-hidden
                        bg-gray-100
                      "
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />

                      {/* Subtle Glass Gradient Shine */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/10 pointer-events-none" />
                    </div>

                    {/* Floating Action Badge 1 (Top Right) */}
                    <div
                      style={{
                        backgroundColor: project.theme.badge1.bg,
                        color: project.theme.badge1.textCol,
                      }}
                      className="
                        absolute
                        -top-3
                        -right-3
                        sm:-top-4
                        sm:-right-4
                        z-20
                        flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-xl
                        shadow-lg
                        text-[11px]
                        sm:text-xs
                        font-bold
                        tracking-wide
                        animate-float
                      "
                    >
                      <HiOutlineSparkles className="text-xs sm:text-sm" />
                      <span>{project.theme.badge1.text}</span>
                    </div>

                    {/* Floating Action Badge 2 (Bottom Right) */}
                    <div
                      style={{
                        backgroundColor: project.theme.badge2.bg,
                        color: project.theme.badge2.textCol,
                      }}
                      className="
                        absolute
                        -bottom-3
                        -right-2
                        sm:-bottom-4
                        sm:-right-3
                        z-20
                        flex
                        items-center
                        gap-1.5
                        px-3
                        py-1.5
                        rounded-xl
                        shadow-lg
                        text-[11px]
                        sm:text-xs
                        font-bold
                        tracking-wide
                      "
                    >
                      <FaCheckCircle className="text-xs sm:text-sm" />
                      <span>{project.theme.badge2.text}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Scroll Hint */}
      <div className="relative z-20 max-w-5xl w-full mx-auto flex items-center justify-between text-xs font-mono text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-black/40" />
          Scroll down to reveal each project
        </span>
        <span>03 Featured Projects</span>
      </div>
    </section>
  );
}