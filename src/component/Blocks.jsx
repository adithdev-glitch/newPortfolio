import React from "react";
import { motion } from "framer-motion";

const Blocks = () => {
  return (
    <>
      {/* Left Vertical Block */}
      <div
        className="
          absolute
          left-0
          bottom-[12vh]

          w-[16vw]
          sm:w-[15vw]

          max-w-[130px]
          min-w-[70px]

          h-[26vh]
          sm:h-[28vh]

          max-h-[280px]
          min-h-[160px]

          bg-[#7ef1d4]
          z-10
        "
      />

      {/* Download CV Section */}
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-0
          bottom-[5vh]

          w-[22vw]
          sm:w-[28vw]
          md:w-[300px]

          max-w-[330px]
          min-w-[140px]

          h-[12vh]

          max-h-[100px]
          min-h-[70px]

          bg-[#7ef1d4]
          z-10

          flex
          items-center
          justify-center

          px-2
        "
      >
        <a
          href="/ADITH_TP.pdf"
          download
          className="
            bg-[#ef1c25]
            text-white

            border-[3px]
            sm:border-[4px]
            border-black

            px-3
            sm:px-6
            lg:px-8

            py-2

            text-[10px]
            sm:text-sm
            md:text-lg
            lg:text-xl

            font-black
            uppercase
            whitespace-nowrap

            shadow-[4px_4px_0px_#000]

            hover:translate-x-[2px]
            hover:translate-y-[2px]
            hover:shadow-none

            transition-all
            duration-200
          "
        >
          Download CV
        </a>
      </motion.div>

      {/* Right Bottom Shape */}
      <div
        className="
          absolute
          right-0
          bottom-0

          w-[30vw]
          sm:w-[28vw]

          max-w-[420px]
          min-w-[180px]

          h-[18vh]

          max-h-[200px]
          min-h-[100px]

          bg-[#7ef1d4]
          z-10
          clip-path-step
        "
      />

      {/* Grey Floating Block */}
      <div
        className="
          absolute
          right-[5vw]
          sm:right-[8vw]

          bottom-[4vh]
          sm:bottom-[8vh]

          w-[22vw]
          sm:w-[20vw]

          max-w-[320px]
          min-w-[140px]

          h-[10vh]

          max-h-[120px]
          min-h-[70px]

          bg-[#d9d9d9]
          shadow-xl
          z-20
        "
      />
    </>
  );
};

export default Blocks;