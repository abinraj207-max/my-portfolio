import { motion } from "framer-motion";
import clsx from "clsx";

const Button = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  icon,
  disabled = false,
  type = "button",
}) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.04,
      }}
      whileTap={{
        scale: 0.97,
      }}
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "flex items-center justify-center gap-2 rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        variant === "primary" &&
          "bg-blue-600 hover:bg-blue-500 text-white",

        variant === "secondary" &&
          "border border-slate-700 text-white hover:border-blue-500",

        className
      )}
    >
      {children}

      {icon}
    </motion.button>
  );
};

export default Button;