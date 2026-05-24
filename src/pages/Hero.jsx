import React from 'react';
import Nav from '../component/Nav.jsx';
import { motion } from "framer-motion";
import Content from '../component/Content.jsx';
import HeroImg from '../component/HeroImg.jsx';
import Blocks from '../component/Blocks.jsx';

export default function Hero() {
return (
<div className="min-h-screen overflow-hidden bg-[#f3f3f3] font-sans relative">
  {/* Grid Background */}
  <div className="absolute inset-0 opacity-40"
    style={{ 
      backgroundImage: 'linear-gradient(to right, #dcdcdc 1px, transparent 1px), linear-gradient(to bottom, #dcdcdc 1px, transparent 1px)',
      backgroundSize: '60px 60px',}}/>
    {/* Navbar */}
    <Nav/>
  
    {/* Main Hero */}
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-28 sm:pt-36">
      {/* Huge Background Text */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">

        {/* Animated Background Glow */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1.4, opacity: 0.18 }}
          transition={{ duration: 2, ease: "easeOut", }}
          className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#7ef1d4] blur-3xl"/>
        {/* Main Title */}
        <motion.h1
  initial={{ opacity: 0, y: -200, scale: 0.7 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration: 1.5,
    ease: [0.16, 1, 0.3, 1],
  }}
  className="
    absolute
    top-[10%]
    inset-x-0
    flex
    justify-center
    text-center
    font-black
    uppercase
    text-black
    leading-none
    text-[52px]
    sm:text-[80px]
    md:text-[120px]
    lg:text-[160px]
    xl:text-[220px]
    2xl:text-[260px]
    px-2
    z-10
  "
>
  Portfolio
</motion.h1>
          {/* Left Text */}
        <motion.h2
          initial={{ opacity: 0, x: -300, rotate: 20, }}
          animate={{ opacity: 1, x: 0, rotate: -6, }}
          transition={{ delay: 0.5, duration: 1.2, ease: "anticipate", }}
          whileHover={{ scale: 1.08, x: 20, }}
          className=" absolute top-[26%] sm:top-[35%] left-[2%] text-[80px] sm:text-[90px] md:text-[120px] xl:text-[150px]
            leading-none font-black uppercase text-black" >
          Visual
        </motion.h2>
            
        {/* Right Text */}
        <motion.h2
          initial={{ opacity: 0, x: 300, rotate: 20, }}
          animate={{ opacity: 1, x: 0, rotate: -8, }}
          transition={{ delay: 0.7, duration: 1.2, ease: "anticipate", }}
          whileHover={{ scale: 1.08, x: -20, }}
          className=" absolute top-[26%] sm:top-[35%] right-[4%] text-[80px] sm:text-[90px] md:text-[120px] xl:text-[150px]
            leading-none font-black uppercase text-black">
          Design
        </motion.h2>
            
        {/* Scanning Line */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear", }}
          className=" absolute top-0 w-[20%] h-full bg-white/20 skew-x-12 blur-xl " />
      </div>
      {/* Mint Shapes */}
      <Blocks/>
      
      {/* Main Image */}
      <HeroImg/>

      {/* Red Content Section */}
      <Content/>

    </section>
</div>
    );  
  } 
