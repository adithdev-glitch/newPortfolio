import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const rowsRef = useRef([]);

  useEffect(() => {
    rowsRef.current.forEach((el) => {
      const overlay = el.querySelector(".paint");

      gsap.fromTo(
        overlay,
        { scaleX: 1 },
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  const addRef = (el) => {
    if (el && !rowsRef.current.includes(el)) {
      rowsRef.current.push(el);
    }
  };
  return (
    <section className="w-full min-h-screen bg-[#ececec] flex items-center justify-center px-4 overflow-hidden">
      <div className="relative w-full max-w-[1500px]">

        {/* Top Right Dot + Line */}
        <div className="absolute right-0 top-[20px] hidden md:flex flex-col items-center">
          <div className="w-5 h-5 bg-black rounded-full" />
          <div className="w-[3px] h-[90px] border-r-[3px] border-dashed border-black" />
        </div>

        {/* Left Dot + Line */}
        <div className="absolute left-0 top-[265px] hidden md:flex items-center">
          <div className="w-5 h-5 bg-black rounded-full" />
          <div className="w-[190px] border-t-[3px] border-dashed border-black" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col items-center text-center leading-none">

          {/* Heading */}
          <h1 className="font-black text-black text-[55px] sm:text-[75px] md:text-[110px] tracking-[-4px]">
            I'm ADITH TP,
          </h1>

          {/* Highlight Row */}
          <div className="flex flex-wrap justify-center items-center mt-6 gap-2">

      {/* Row 1 */}
      <div ref={addRef} className="relative overflow-hidden bg-[#86ffe8] border-[3px] border-dashed border-black px-6 md:px-10 py-3">
        <div className="paint absolute inset-0 bg-black origin-left" />
        <span className="relative font-black text-[50px] sm:text-[70px] md:text-[105px] leading-none tracking-[-4px]">
          M E A R N
        </span>
      </div>

      {/* Row 2 */}
      <div ref={addRef} className="relative overflow-hidden border-[3px] border-dashed border-black px-6 md:px-10 py-3">
        <div className="paint absolute inset-0 bg-black origin-left" />
        <span className="relative font-black text-[50px] sm:text-[70px] md:text-[105px] leading-none tracking-[-4px]">
          DEVELOPER
        </span>
      </div>

      {/* Row 3 */}
      <div ref={addRef} className="relative overflow-hidden bg-[#86ffe8] border-[3px] border-dashed border-black px-6 md:px-10 py-3">
        <div className="paint absolute inset-0 bg-black origin-left" />
        <span className="relative font-black text-[50px] sm:text-[70px] md:text-[105px] leading-none tracking-[-4px]">
          STACK
        </span>
      </div>

    </div>

          {/* Bottom Text */}
          <div className="mt-6 relative">
            <h2 className="font-black text-black text-[50px] sm:text-[70px] md:text-[105px] leading-[0.95] tracking-[-4px]">
            I turn ideas into products
            <br />
            through development,
            <br />
            interaction and innovation.
            </h2>

            {/* Red Star */}
            <div className="absolute bottom-[-10px] right-[-60px] text-red-600 text-[70px] rotate-12">
              ✦
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}