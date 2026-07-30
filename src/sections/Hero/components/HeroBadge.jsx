// src/sections/Hero/HeroBadge.jsx

import { motion } from "framer-motion";
import { FaCircle } from "react-icons/fa";

const HeroBadge = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex w-fit items-center gap-3 rounded-full border border-slate-700 bg-slate-900/70 px-5 py-2 backdrop-blur-md"
    >
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [1, 0.6, 1],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
      >
        <FaCircle className="text-[10px] text-green-500" />
      </motion.div>

      <span className="text-sm font-medium text-slate-300">
        Available for Opportunities
      </span>
    </motion.div>
  );
};

export default HeroBadge;