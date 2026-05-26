import React from "react";
import { motion } from "framer-motion";

const Content = () => {
  return (
    <motion.div
      initial={{ x: 250, opacity: 0, rotate: 8 }}
      animate={{ x: 0, opacity: 1, rotate: 0 }}
      transition={{
        duration: 0.9,
        delay: 3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        absolute
        right-[4vw]
        sm:right-[5vw]

        top-[64%]
        sm:top-[58%]

        z-40
      "
    >
      {/* Retro Window */}
      <div
        className="
          bg-[#ef1c25]

          w-[36vw]
          sm:w-[200px]
          md:w-[210px]

          max-w-[210px]
          min-w-[150px]

          border-[3px]
          border-black
          rounded-lg
          overflow-hidden
          shadow-xl
        "
      >
        {/* Top Bar */}
        <div
          className="
            h-7
            sm:h-8

            bg-white
            border-b-[3px]
            border-black

            flex
            justify-end
            items-center
            gap-1
            px-2
          "
        >
          <div className="w-3 h-[2px] bg-black" />
          <div className="w-3 h-3 border-[2px] border-black" />
        </div>

        {/* Content */}
        <div className="p-3 sm:p-4 text-center">
          <h3
            className="
              text-white
              text-sm
              sm:text-lg
              md:text-xl

              font-black
              uppercase
              leading-tight
            "
          >
            Are you ready??
          </h3>

          {/* Loader */}
          <div
            className="
              mt-3
              border-[3px]
              border-black
              bg-white

              h-8
              sm:h-10

              flex
              items-center
              gap-[2px]
              px-1
              overflow-hidden
            "
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="
                  h-4
                  sm:h-6

                  w-2
                  sm:w-3

                  bg-[#ef1c25]
                  animate-pulse
                "
              />
            ))}
          </div>

          {/* Button */}
          <button
            className="
              mt-3
              bg-white
              border-[3px]
              border-black

              px-4
              sm:px-6

              py-1

              text-lg
              sm:text-2xl
              md:text-3xl

              font-black
              hover:scale-105
              transition-all
              duration-300
              jersey-10-regular
            "
          >
            Okay!
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Content;