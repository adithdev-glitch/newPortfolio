import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const Nav = () => {
  const navRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      navRef.current,
      {
        y: -120,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.4,
        ease: "expo.out",
      }
    );

    tl.fromTo(
      ".nav-item",
      {
        y: -40,
        opacity: 0,
        rotateX: 90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.8"
    );

    tl.fromTo(
      lineRef.current,
      {
        width: 0,
      },
      {
        width: "100%",
        duration: 1.2,
        ease: "power4.out",
      },
      "-=0.6"
    );
  }, []);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Project", id: "projects" },
    { name: "About", id: "about" },
    { name: "Hire Me", id: "contact" },
  ];

  return (
    <motion.header
      ref={navRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="
        absolute
        top-0
        left-0
        right-0
        z-50
        w-full
        flex
        justify-center
        mix-blend-difference
      "
    >
      <div
        className="
          relative
          overflow-hidden
          w-full
          max-w-5xl
          px-4 sm:px-6 md:px-8
          py-4 sm:py-5
        "
      >
        {/* Animated Line */}
        <div
          ref={lineRef}
          className="absolute bottom-0 left-0 h-[2px] bg-white"
        />

        {/* Nav Items */}
        <div
          className="
            relative
            flex
            items-center
            justify-center
            gap-4
            sm:gap-6
            md:gap-10
            lg:gap-16
          "
        >
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => {
                document.getElementById(item.id)?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="
                nav-item
                relative
                uppercase
                font-black
                text-white
                text-sm
                sm:text-base
                md:text-xl
                lg:text-2xl
                tracking-[0.1em]
                sm:tracking-[0.15em]
                whitespace-nowrap
              "
              whileHover={{
                y: -4,
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.92,
              }}
            >
              {/* Hover Glow */}
              <motion.div
                className="
                  absolute
                  inset-0
                  blur-2xl
                  bg-white/20
                  rounded-full
                  -z-10
                "
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1.2,
                }}
                transition={{
                  duration: 0.4,
                }}
              />

              {/* Text */}
              <span>{item.name}</span>

              {/* Underline */}
              <motion.div
                className="
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  bg-white
                "
                initial={{ width: 0 }}
                whileHover={{
                  width: "100%",
                }}
                transition={{
                  duration: 0.3,
                }}
              />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.header>
  );
};

export default Nav;