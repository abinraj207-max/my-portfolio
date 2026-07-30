import { motion } from "framer-motion";

const SocialButton = ({ icon, href }) => {
  return (
    <motion.a
      whileHover={{
        y: -4,
      }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900 text-white transition-all hover:border-blue-500"
    >
      {icon}
    </motion.a>
  );
};

export default SocialButton;