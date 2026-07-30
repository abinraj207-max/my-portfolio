import { motion } from "framer-motion";

const technologies = [
  "Flutter",
  "React",
  "NestJS",
  "Express.js",
  "PostgreSQL",
  "Supabase",
  "Firebase",
  "Docker",
];

const HeroTech = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.08,
          }}
          whileHover={{
            y: -4,
            scale: 1.04,
          }}
          className="cursor-default rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-sm font-medium text-slate-300 transition-colors duration-300 hover:border-blue-500 hover:text-white"
        >
          {tech}
        </motion.div>
      ))}
    </div>
  );
};

export default HeroTech;