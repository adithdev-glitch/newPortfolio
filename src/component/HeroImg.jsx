import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assests/assest.js";

const HeroImg = () => {
  return (
    <>
      <div className="relative z-30 flex justify-center items-center">
        <div className="relative">
          {/* Hero Image */}
          <motion.img
            src={assets.me}
            alt="hero"
            initial={{ opacity: 0, y: 120, scale: 0.8, rotate: -8 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.6,
              delay: 2,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              scale: 1.03,
              rotate: 1,
              y: -8,
              transition: { duration: 0.4 },
            }}
            className="
              w-[58vw]
              sm:w-[36vw]
              md:w-[380px]
              lg:w-[400px]
              xl:w-[420px]
              max-w-[420px]
              min-w-[220px]
              h-auto
              object-contain
            "
            style={{
              filter: "contrast(1.2) saturate(1.3) hue-rotate(-8deg)",
            }}
          />

          {/* Think Cloud */}
          <motion.div
            initial={{ opacity: 0, scale: 0, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              delay: 3,
              duration: 0.8,
              ease: "backOut",
            }}
            className="
              absolute
              top-[2%] sm:top-[8%]
              right-[-8vw] sm:right-[-80px]
              z-40
            "
          >
            {/* Cloud Image */}
            <motion.img
              src={assets.cloud}
              alt="cloud"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                w-[30vw]
                sm:w-[220px]
                max-w-[220px]
                min-w-[110px]
                object-contain
                drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]
              "
            />

            {/* Character Animation */}
            <div
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
                gap-[2px]
                text-black
                text-xs sm:text-2xl
                -rotate-6
                pb-2
                shadows-into-light-regular
                animate-float
              "
            >
              {"Heyy!".split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 3.5 + index * 0.12,
                    duration: 0.3,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default HeroImg;