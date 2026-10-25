import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingIcon from "./FloatingIcon.jsx"


gsap.registerPlugin(ScrollTrigger)

const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "HTML", "CSS", "TypeScript"],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "Bootstrap",
      "Framer Motion",
      "GSAP",
      "Three.js",
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "JWT",
      "OAuth",
      "RESTful APIs",
      "Cloudinary",
      "Deployment",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Productivity Tools",
    items: [
      "Microsoft Word",
      "Excel",
      "PowerPoint",
      "Google Docs",
      "Google Sheets",
    ],
  },
]

export default function Skills() {
  const containerRef = useRef(null)
  const sectionRef = useRef(null)
  const trackRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const section = sectionRef.current
    const track = trackRef.current
    if (!container || !section || !track) return

    const scrollLength = track.scrollWidth - window.innerWidth

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${scrollLength}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.to(track, {
            x: -scrollLength * self.progress,
            ease: "none",
            overwrite: "auto",
          })
        },
      })
    }, container)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      <section
        ref={sectionRef}
        className="relative w-full h-[100dvh] min-h-[580px] bg-[#ECE9DB] text-white overflow-hidden"
      >
        <FloatingIcon />
      {/* HORIZONTAL TRACK */}
      <div
        ref={trackRef}
        className="flex h-full will-change-transform"
      >
        {skills.map((skill) => (
          <div
            key={skill.title}
            className="w-screen max-w-full h-full flex items-center px-6 sm:px-12 md:px-24 lg:px-32 flex-shrink-0"
          >
            <div className="max-w-xl w-full">

              {/* TITLE */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black black-ops-one-regular mt-2 mb-6 sm:mb-8">
                {skill.title}
              </h1>

              {/* ITEMS */}
              <div className="flex flex-wrap gap-2.5 sm:gap-3">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3.5 sm:px-4 py-1.5 sm:py-2 text-[#3B2F2F] border border-black/20 rounded-full text-xs sm:text-sm
                    hover:bg-black hover:text-white transition cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  )
}
