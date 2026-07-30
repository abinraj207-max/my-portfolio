import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValue, animate } from "framer-motion";

const LaptopScrollIntro = ({ children }) => {
  const containerRef = useRef(null);
  const [viewportSize, setViewportSize] = useState({ w: 1200, h: 800 });
  const [isMounted, setIsMounted] = useState(false);

  // Monitor viewport size to make the zoom mathematically exact
  useEffect(() => {
    setIsMounted(true);
    const handleResize = () => {
      setViewportSize({ w: window.innerWidth, h: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine laptop dimensions based on viewport width
  const getLaptopDimensions = () => {
    const width = viewportSize.w;
    if (width < 640) {
      // Mobile
      const laptopW = Math.min(width * 0.85, 340);
      return { w: laptopW, h: laptopW * 0.625 };
    } else if (width < 1024) {
      // Tablet
      const laptopW = Math.min(width * 0.75, 600);
      return { w: laptopW, h: laptopW * 0.625 };
    } else {
      // Desktop
      const laptopW = Math.min(width * 0.55, 800);
      return { w: laptopW, h: laptopW * 0.625 };
    }
  };

  const { w: laptopW, h: laptopH } = getLaptopDimensions();

  // For mobile viewports, force the inner website preview to render at a desktop aspect ratio (1280x800)
  // so that the laptop displays a high-fidelity desktop site instead of a squished mobile layout.
  const previewW = viewportSize.w < 768 ? 1280 : viewportSize.w;
  const previewH = viewportSize.w < 768 ? 800 : viewportSize.h;

  // Calculate inner content scale to contain the full screen inside the laptop bezel
  const scaleInner = Math.min(laptopW / previewW, laptopH / previewH);

  // Zoom target factor: how much the laptop must scale to match the viewport size exactly
  // Add a small extra multiplier (e.g. 1.05) to ensure the bezel goes completely off-screen
  const zoomTarget = (viewportSize.w / laptopW) * 1.05;

  // Set up scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // 1. Laptop Lid Swing Open on Mount + Scroll Adjust
  // Starts closed (-105deg) and swings open to active viewing angle (-15deg) on mount
  const lidOpenValue = useMotionValue(-105);
  useEffect(() => {
    if (isMounted) {
      animate(lidOpenValue, -15, {
        type: "spring",
        stiffness: 50,
        damping: 15,
        delay: 0.2,
      });
    }
  }, [isMounted, lidOpenValue]);

  // As user scrolls from 0.0 to 0.65, tilt the lid back to 0deg (perfectly flat/parallel to viewport)
  const scrollTilt = useTransform(scrollYProgress, [0.0, 0.65], [0, 15]);
  const lidRotateX = useTransform([lidOpenValue, scrollTilt], ([openVal, tiltVal]) => openVal + tiltVal);

  // 2. Laptop scale zoom
  // Start scaling from scroll progress 0.15 to 0.75
  const scale = useTransform(scrollYProgress, [0.0, 0.15, 0.75, 1.0], [1.0, 1.0, zoomTarget, zoomTarget]);

  // 3. Keyboard base rotation, translation, and fade out
  const baseRotateX = useTransform(scrollYProgress, [0.0, 0.15, 0.7, 1.0], [75, 75, 88, 88]);
  const baseTranslateY = useTransform(scrollYProgress, [0.0, 0.15, 0.7, 1.0], [0, 0, 800, 800]);
  const baseOpacity = useTransform(scrollYProgress, [0.0, 0.4, 0.65, 1.0], [1, 1, 0, 0]);

  // 4. Bezel and frame opacity & border-radius
  // As the screen goes fullscreen, fade the frame and make corner rounded-none
  const bezelOpacity = useTransform(scrollYProgress, [0.5, 0.75], [1, 0]);
  const bezelRadius = useTransform(scrollYProgress, [0.5, 0.72], [12, 0]);

  // 5. Hide the scroll-intro overlay once fully scrolled so user can interact with main page
  const mainVisibility = useTransform(scrollYProgress, [0.75, 0.8], ["block", "none"]);
  const pageOpacity = useTransform(scrollYProgress, [0.72, 0.82], [0, 1]);

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: "230vh" }}
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 left-0 h-screen w-full overflow-hidden bg-[#050816] flex items-center justify-center z-20">
        {/* Glow ambient background behind the laptop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
        
        {/* 3D Perspective Wrapper */}
        <div
          className="relative flex flex-col items-center justify-center pointer-events-none z-10"
          style={{
            perspective: 1200,
            perspectiveOrigin: "50% 50%",
            width: laptopW,
            height: laptopH,
          }}
        >
          {/* Laptop Container (Scales up on scroll) */}
          <motion.div
            style={{ scale }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* 1. LAPTOP LID / SCREEN */}
            <motion.div
              style={{
                rotateX: lidRotateX,
                transformStyle: "preserve-3d",
                transformOrigin: "bottom center",
                width: laptopW,
                height: laptopH,
              }}
              className="relative z-20 bg-slate-900 border-[8px] md:border-[12px] border-slate-800 rounded-t-xl md:rounded-t-2xl shadow-2xl flex items-center justify-center overflow-hidden select-none"
            >
              {/* Web camera dot */}
              <div className="absolute top-[3px] md:top-[5px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-slate-950 rounded-full border border-slate-800 flex items-center justify-center z-30">
                <div className="w-0.5 h-0.5 bg-blue-900 rounded-full" />
              </div>

              {/* Bezel frame borders that fade out at the end */}
              <motion.div
                style={{ opacity: bezelOpacity, borderRadius: bezelRadius }}
                className="absolute inset-0 border border-slate-700/30 pointer-events-none z-30"
              />

              {/* Glossy Screen reflection overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-transparent pointer-events-none z-20"
                style={{ mixBlendMode: "overlay" }}
              />

              {/* Screen Content Window */}
              <motion.div
                style={{ borderRadius: bezelRadius }}
                className="relative w-full h-full bg-[#050816] overflow-hidden"
              >
                {/* Scaled Website Wrapper */}
                <div
                  style={{
                    width: previewW,
                    height: previewH,
                    transform: `scale(${scaleInner})`,
                    transformOrigin: "center center",
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    x: "-50%",
                    y: "-50%",
                  }}
                  className="pointer-events-none select-none overflow-hidden"
                >
                  {children}
                </div>
              </motion.div>
            </motion.div>

            {/* 2. LAPTOP HINGE */}
            <motion.div
              style={{ opacity: bezelOpacity }}
              className="relative z-10 w-[96%] h-2.5 bg-gradient-to-b from-slate-950 to-slate-900 border-x border-slate-800 z-15"
            />

            {/* 3. LAPTOP BASE (KEYBOARD) */}
            <motion.div
              style={{
                rotateX: baseRotateX,
                y: baseTranslateY,
                opacity: baseOpacity,
                transformOrigin: "top center",
                transformStyle: "preserve-3d",
                width: laptopW * 1.04,
                height: laptopH * 0.9,
              }}
              className="relative bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 rounded-b-xl border-x-[4px] border-b-[8px] border-slate-750 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)] z-10 flex flex-col justify-between p-[4%] pt-[3%]"
            >
              {/* Keyboard keys mockup */}
              <div className="w-full flex-grow flex flex-col justify-between gap-[2%] bg-slate-950/80 p-2 rounded-lg border border-slate-700/30 shadow-inner">
                {/* 5 rows of keyboard keys */}
                {[...Array(5)].map((_, rIdx) => {
                  const keyCounts = [14, 14, 13, 12, 8];
                  const isSpacebarRow = rIdx === 4;

                  return (
                    <div key={rIdx} className="w-full flex justify-between gap-[1.5%]">
                      {[...Array(keyCounts[rIdx])].map((_, kIdx) => {
                        // Make some keys larger for spacebar and modifiers
                        let flexGrow = 1;
                        if (isSpacebarRow && kIdx === 3) {
                          flexGrow = 6; // Spacebar
                        } else if (rIdx === 3 && (kIdx === 0 || kIdx === 11)) {
                          flexGrow = 2; // Shift keys
                        }

                        return (
                          <div
                            key={kIdx}
                            style={{ flexGrow }}
                            className="h-[8px] md:h-[12px] bg-slate-800 rounded-[2px] border border-slate-700/50 flex items-center justify-center shadow-[0_0_2px_rgba(6,182,212,0.4)]"
                          >
                            {/* Key backlight glow */}
                            <div className="w-[80%] h-[80%] rounded-[1px] bg-cyan-500/10 shadow-[0_0_3px_rgba(6,182,212,0.3)]" />
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Trackpad */}
              <div className="w-[30%] h-[20%] mx-auto bg-slate-900/60 rounded-md border border-slate-700/40 shadow-inner mt-[3%]" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Actual interactive Hero & Page Content visible after scroll */}
      {/* We layer it below/behind so it transitions in smoothly and is fully interactive */}
      <motion.div
        style={{
          opacity: pageOpacity,
          pointerEvents: useTransform(scrollYProgress, (p) => (p > 0.72 ? "auto" : "none")),
        }}
        className="absolute bottom-0 left-0 w-full z-30"
      >
        <div className="h-screen w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default LaptopScrollIntro;
