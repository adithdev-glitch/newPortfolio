import React from 'react'
import { motion } from "framer-motion";

const Blocks = () => {
  return (
    <>
    <div className="absolute left-0 bottom-20 w-[120px] sm:w-[130px] h-[220px] sm:h-[280px] bg-[#7ef1d4] z-10" ></div>
        <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 3, ease: [0.22, 1, 0.36, 1], }}
            className="absolute left-0 bottom-10 w-[120px] sm:w-[330px] h-[220px] sm:h-[100px] bg-[#7ef1d4] z-10 flex items-center justify-center">
            
            <a href="/ADITH_TP.pdf" download
                className="bg-[#ef1c25] text-white border-[4px] border-black px-4 sm:px-8 py-2 text-sm sm:text-xl font-black uppercase
                shadow-[4px_4px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all duration-200">
                Download CV
            </a>
        </motion.div>
        <div className="absolute right-0 bottom-0 w-[220px] sm:w-[420px] h-[140px] sm:h-[200px] bg-[#7ef1d4] z-10 clip-path-step" ></div>
          
        {/* Floating Panels */}
        {/* <motion.div
            initial={{ x: -250, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay:3, ease: [0.22, 1, 0.36, 1],}}
            className="absolute left-4 sm:left-20 top-[58%] sm:top-[54%] w-[240px] sm:w-[420px] h-[150px] sm:h-[200px] bg-[#d9d9d9] shadow-xl z-20 p-4 sm:p-6">
            <p className="text-[11px] sm:text-base font-semibold leading-relaxed text-black">
                Heyy! I'm Adith Creative MERN Stack Developer focused on building modern, interactive, and scalable web applications. Passionate about crafting smooth user experiences with React, Node.js, MongoDB, and expressive frontend animations."
                
            </p>
        </motion.div> */}
    <div className="absolute right-4 sm:right-40 bottom-8 sm:bottom-16 w-[180px] sm:w-[320px] h-[90px] sm:h-[120px] bg-[#d9d9d9] shadow-xl z-20" ></div>
    </>
  )
}

export default Blocks
