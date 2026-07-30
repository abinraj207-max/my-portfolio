import { motion } from "framer-motion";
import clsx from "clsx";

const Card = ({ children, className = "" }) => {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className={clsx(
        "rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;