import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeroLeft from "./components/HeroLeft";
import HeroRight from "./components/HeroRight";

const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 350]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-[#050816] pt-24 lg:pt-28"
    >
      {/* Minimal Background */}

      {/* Background Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#ffffff 1px,transparent 1px),
            linear-gradient(to bottom,#ffffff 1px,transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Parallax Background Shapes */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute left-[5%] top-[15%] h-64 w-64 rounded-full bg-blue-600/5 blur-[100px]" 
      />
      <motion.div 
        style={{ y: y2, rotate: y1 }}
        className="absolute right-[10%] top-[30%] h-48 w-48 rounded-full border border-slate-700/20 bg-slate-800/10 backdrop-blur-xl" 
      />
      <motion.div 
        style={{ y: y3 }}
        className="absolute left-[40%] bottom-[20%] h-24 w-24 rounded-full border border-blue-500/10 bg-transparent" 
      />

      {/* Hero */}

    <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <HeroLeft />

          {/* Right */}

          <HeroRight />

        </div>

      </div>

      {/* Bottom Gradient */}

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#050816] to-transparent" />
    </section>
  );
};

export default Hero;