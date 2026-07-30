import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      className="mb-14 text-center"
    >
      <p className="mb-3 text-blue-400">{subtitle}</p>

      <h2 className="text-4xl font-bold text-white">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;