import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className="relative mt-1 mr-1.5 md:mr-2">
      {children}
    </motion.span>
  );
};

const ScrollRevealText = ({ text, className = "" }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 90%", "start 40%"],
  });

  const words = text.split(" ");

  return (
    <p
      ref={container}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default ScrollRevealText;
