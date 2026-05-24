import { motion } from "framer-motion";
import { assets } from "../assests/assest.js";

import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { MdAttachEmail } from "react-icons/md";

const fade = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen bg-[#060606] text-white flex flex-col overflow-x-hidden">

      {/* MAIN CONTENT */}
      <div
        className="
          flex-1
          grid
          grid-cols-1
          md:grid-cols-2
          items-center
          gap-12
          px-6
          md:px-24
          pt-20
          pb-10
        "
      >

        {/* LEFT SIDE */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl sekuya-regular mb-6">
            Let’s Talk
          </h1>

          <p className="text-gray-400 max-w-md leading-relaxed mb-10">
            Have an idea, a project, or an opportunity?
            I’d love to hear about it.
          </p>

          <div className="space-y-4 text-gray-300 text-lg">

            {/* EMAIL */}
            <motion.a
              href="mailto:adhidrive46@email.com"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="relative pl-7 flex items-center tracking-wide hover:text-white transition"
            >
              <MdAttachEmail className="absolute left-0 text-white text-xl" />

              adhidrive46@email.com
            </motion.a>

            {/* LOCATION */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              Thrissur, Kerala, India
            </motion.p>

            {/* AVAILABILITY */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              Available for freelance & full-time
            </motion.p>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
<motion.div
  variants={fade}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="flex items-center justify-center h-full"
>

  {/* CONTAINER */}
  <div
    className="
      relative
      w-[280px]
      sm:w-[340px]
      md:w-[420px]
      lg:w-[500px]
    "
  >

    {/* IMAGE */}
    <motion.img
      src={assets.trafic2}
      alt="Traffic Illustration"
      initial={{
        opacity: 0,
        scale: 0.95,
        y: 120,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: 0.5,
        duration: 1,
        ease: "easeOut",
      }}
      className="w-full h-auto object-contain"
    />

    {/* INSTAGRAM */}
    <motion.a
      href="https://www.instagram.com/adi.hh_?igsh=aWFhbTZuNWcxYmVh"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-[33%] left-[38%]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.9, duration: 0.8 }}
      whileHover={{ scale: 1.15 }}
    >
      <FaInstagram
        className="
          w-7 h-7
          sm:w-8 sm:h-8
          md:w-10 md:h-10
          text-red-500
          opacity-90
          rounded-full
          mix-blend-screen
          drop-shadow-[0_0_12px_rgba(239,68,68,0.7)]
        "
      />
    </motion.a>

    {/* GITHUB */}
    <motion.a
      href="https://github.com/adithdev-glitch"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-[47%] left-[37%]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.2, duration: 0.8 }}
      whileHover={{ scale: 1.15 }}
    >
      <FaGithub
        className="
          w-7 h-7
          sm:w-8 sm:h-8
          md:w-10 md:h-10
          text-yellow-400
          opacity-90
          rounded-full
          mix-blend-screen
          drop-shadow-[0_0_12px_rgba(250,204,21,0.7)]
        "
      />
    </motion.a>

    {/* LINKEDIN */}
    <motion.a
      href="https://linkedin.com/in/adithtp"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-[62%] left-[38%]"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 1.5, duration: 0.8 }}
      whileHover={{ scale: 1.15 }}
    >
      <FaLinkedin
        className="
          w-7 h-7
          sm:w-8 sm:h-8
          md:w-10 md:h-10
          text-emerald-400
          opacity-90
          rounded-full
          mix-blend-screen
          drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]
        "
      />
    </motion.a>

  </div>
</motion.div>
      </div>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black py-4">

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm"
        >

          {/* LEFT */}
          <span className="text-gray-400 tracking-widest tinos-regular">
            Developed by ADITH TP
          </span>

          {/* RIGHT */}
          <div className="flex items-center gap-6 text-gray-500">

            <span>
              All rights reserved © 2026
            </span>

            <button
              onClick={scrollToTop}
              className="
                border border-white/20
                px-3 py-1
                tracking-widest
                hover:bg-white
                hover:text-black
                transition
              "
            >
              TOP ↑
            </button>

          </div>
        </motion.div>
      </footer>
    </section>
  );
}