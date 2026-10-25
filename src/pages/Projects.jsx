import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assests/assest.js";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

const projects = [
  {
    id: "eonix",
    title: "Eonix",
    category: "Personal Project",
    description:
      "A full-stack eLearning platform featuring role-based authentication for admins, instructors, and students, course and lecture management, learning progress tracking, and automated certificate delivery upon 100% course completion.",
    image: assets.project_1,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/adithdev-glitch/E-LearningApp",
    live: "https://e-learning-app-blush-one.vercel.app/",
  },
  {
    id: "ufashion",
    title: "U/Fashion",
    category: "Personal Project",
    description:
      "A modern fashion e-commerce platform with product browsing, shopping cart, wishlist management, and secure checkout options, including Razorpay payments and cash on delivery.",
    image: assets.project_2,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TailwindCSS",
      "Razorpay",
      "Cloudinary",
    ],
    github: "https://github.com/adithdev-glitch/e-commerce",
    live: "https://github.com/adithdev-glitch/e-commerce",
  },
  {
    id: "campusshare",
    title: "CampusShare",
    category: "Personal Project",
    description:
      "A campus resource-sharing platform that enables students to discover and access shared academic resources through a centralized interface with resource listing and sorting functionality.",
    image: assets.project_3,
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
    github: "https://github.com/adithdev-glitch/CampusShare",
    live: "https://campus-share-tau.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        w-full
        min-h-screen
        bg-[#fefce8]
        text-black
        py-16
        sm:py-20
        md:py-24
        px-4
        sm:px-6
        md:px-10
        lg:px-14
        xl:px-20
        flex
        flex-col
        justify-center
        items-center
        box-border
      "
    >
      <div className="w-full max-w-[1240px] mx-auto">
        {/* Section Heading with Yellow Accent Bar */}
        <div className="flex items-center gap-3 mb-8 sm:mb-10 text-left">
          <span className="w-2.5 h-8 bg-[#f8ca13] rounded-xs inline-block" />
          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              font-black
              tracking-tight
              text-black
              uppercase
            "
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            FEATURED PROJECTS
          </h2>
        </div>

        {/* Responsive Grid: 1 col on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
          {projects.map((project, index) => {
            const isLastOdd =
              index === projects.length - 1 && projects.length % 2 !== 0;
            const destination = project.live || project.github;

            return (
              <div
                key={project.id}
                className={`
                  ${isLastOdd ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full" : "w-full"}
                  bg-white
                  border-[3.5px]
                  border-black
                  rounded-2xl
                  p-4
                  sm:p-5
                  flex
                  flex-col
                  justify-between
                  shadow-[6px_6px_0px_0px_#000]
                  hover:shadow-[9px_9px_0px_0px_#000]
                  hover:-translate-y-1
                  transition-all
                  duration-200
                  group
                `}
              >
                {/* Top Section */}
                <div>
                  {/* Screenshot Mockup Container */}
                  <div
                    className="
                      relative
                      w-full
                      aspect-[16/10]
                      rounded-xl
                      overflow-hidden
                      border-[2.5px]
                      border-black
                      bg-black
                      mb-4
                      sm:mb-5
                    "
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        object-top
                        transition-transform
                        duration-300
                        group-hover:scale-[1.02]
                      "
                    />

                    {/* Quick Link Hover Overlay */}
                    <div
                      className="
                        absolute
                        inset-0
                        bg-black/25
                        opacity-0
                        group-hover:opacity-100
                        transition-opacity
                        duration-200
                        flex
                        items-center
                        justify-center
                        gap-3
                      "
                    >
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${project.title} source on GitHub`}
                        className="
                          p-2.5
                          bg-white
                          text-black
                          rounded-full
                          border-2
                          border-black
                          shadow-[2px_2px_0px_0px_#000]
                          hover:scale-110
                          active:scale-95
                          transition-transform
                        "
                      >
                        <FaGithub className="text-base" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`View live ${project.title}`}
                          className="
                            p-2.5
                            bg-[#f8ca13]
                            text-black
                            rounded-full
                            border-2
                            border-black
                            shadow-[2px_2px_0px_0px_#000]
                            hover:scale-110
                            active:scale-95
                            transition-transform
                          "
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-2xl
                      sm:text-[26px]
                      font-black
                      text-black
                      tracking-tight
                      mb-1
                    "
                  >
                    {project.title}
                  </h3>

                  {/* Category Subtitle */}
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 mb-3">
                    <HiOutlineCog6Tooth className="text-sm text-gray-700" />
                    <span>{project.category}</span>
                  </div>

                  {/* Description */}
                  <p
                    className="
                      text-[13.5px]
                      sm:text-sm
                      text-gray-800
                      leading-relaxed
                      font-normal
                      mb-5
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* Bottom Area: Badges & View Project Button */}
                <div className="pt-2 mt-auto flex flex-col gap-4">
                  {/* Tech Stack Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="
                          bg-[#f8ca13]
                          text-black
                          text-[11.5px]
                          sm:text-xs
                          font-semibold
                          px-2.5
                          py-0.5
                          rounded-[5px]
                          border
                          border-black
                          select-none
                          transition-transform
                          duration-150
                          hover:scale-105
                        "
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="mt-8 sm:mt-10 w-full">
          <Link
            to="/all-projects"
            className="
              w-full
              block
              py-3.5
              sm:py-4
              px-6
              bg-black
              text-white
              hover:bg-[#1a1a1a]
              border-2
              border-black
              rounded-xl
              text-center
              font-bold
              text-xs
              sm:text-sm
              tracking-widest
              transition-all
              duration-200
              hover:shadow-[4px_4px_0px_0px_#f8ca13]
              active:scale-[0.99]
            "
          >
            <span className="inline-flex items-center justify-center gap-2">
              VIEW ALL PROJECTS <FaArrowRight className="text-xs" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}