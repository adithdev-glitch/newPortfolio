import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assests/assest.js";
import {
  FaArrowLeft,
  FaArrowRight,
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { HiOutlineCog6Tooth } from "react-icons/hi2";

const featuredProjects = [
  {
    id: "eonix",
    title: "Eonix",
    category: "Personal Project",
    description:
      "A full-stack eLearning platform featuring role-based authentication for admins, instructors, and students, course and lecture management, learning progress tracking, and automated certificate delivery upon 100% course completion.",
    image: assets.project_1,
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST API"],
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
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "REST API"],
    github: "https://github.com/adithdev-glitch/CampusShare",
    live: "https://campus-share-tau.vercel.app/",
  },
];

const otherProjects = [
  {
    id: "heychat",
    title: "HeyChat",
    category: "Personal Project",
    description:
      "A full-stack real-time communication platform powered by Socket.IO featuring instant messaging, online user status, media upload support via Cloudinary, and responsive chat UI.",
    image: assets.project_4,
    tech: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Socket.IO",
      "Cloudinary",
      "JWT",
    ],
    github: "https://github.com/adithdev-glitch/chatApp",
    live: "https://github.com/adithdev-glitch/chatApp",
  },
  {
    id: "expense-tracker",
    title: "Expense Tracker",
    category: "Personal Project",
    description:
      "A personal finance and budget management tool to log everyday transactions, categorize expenditures, visualize monthly spending patterns, and track cashflow.",
    image: assets.expense_tracker,
    tech: ["React.js", "Node.js", "MongoDB", "Express.js", "TailwindCSS"],
    github: "https://github.com/adithdev-glitch/Expense-Tracker",
    live: "https://github.com/adithdev-glitch/Expense-Tracker",
  },

];

function ProjectCard({ project, isLastOdd }) {
  const destination = project.live || project.github;

  return (
    <div
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
      {/* Top Details */}
      <div>
        {/* Screenshot Container */}
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

          {/* Quick links hover overlay */}
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
              aria-label={`View ${project.title} on GitHub`}
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
        {/* Tech Badges */}
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

        {/* View Project Button */}
        <div>
          <a
            href={destination}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              bg-black
              text-white
              hover:bg-[#1a1a1a]
              border-2
              border-black
              rounded-lg
              font-bold
              text-xs
              tracking-wider
              uppercase
              shadow-[4px_4px_0px_0px_#000]
              hover:shadow-[2px_2px_0px_0px_#000]
              hover:translate-x-[2px]
              hover:translate-y-[2px]
              transition-all
              duration-150
            "
          >
            <span>VIEW PROJECT</span>
            <FaArrowRight className="text-[11px]" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function AllProjects() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main
      className="
        w-full
        min-h-screen
        bg-[#fefce8]
        text-black
        py-10
        sm:py-16
        px-4
        sm:px-6
        md:px-10
        lg:px-14
        xl:px-20
        box-border
      "
    >
      <div className="w-full max-w-[1240px] mx-auto">
        {/* Navigation: Go Back Link */}
        <div className="mb-6">
          <button
            onClick={handleGoBack}
            className="
              inline-flex
              items-center
              gap-2
              text-sm
              sm:text-base
              font-bold
              text-black/80
              hover:text-black
              cursor-pointer
              transition-colors
              group
            "
          >
            <FaArrowLeft className="text-xs transition-transform group-hover:-translate-x-1" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Page Title */}
        <div className="mb-4">
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-black
              tracking-tight
              text-black
              uppercase
            "
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            ALL PROJECTS
          </h1>
        </div>

        {/* Black Divider Bar */}
        <div className="w-full h-[2.5px] bg-black mb-10 sm:mb-14" />

        {/* SECTION 1: FEATURED PROJECTS */}
        <section className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <span className="w-2.5 h-8 bg-[#f8ca13] rounded-xs inline-block" />
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
            {featuredProjects.map((project, index) => {
              const isLastOdd =
                index === featuredProjects.length - 1 &&
                featuredProjects.length % 2 !== 0;

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isLastOdd={isLastOdd}
                />
              );
            })}
          </div>
        </section>

        {/* SECTION 2: OTHER PROJECTS */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8 sm:mb-10">
            <span className="w-2.5 h-8 bg-[#f8ca13] rounded-xs inline-block" />
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                font-black
                tracking-tight
                text-black
                uppercase
              "
              style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              OTHER PROJECTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8 items-stretch">
            {otherProjects.map((project, index) => {
              const isLastOdd =
                index === otherProjects.length - 1 &&
                otherProjects.length % 2 !== 0;

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isLastOdd={isLastOdd}
                />
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
