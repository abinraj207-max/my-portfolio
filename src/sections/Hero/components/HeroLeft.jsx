import { motion } from "framer-motion";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroTech from "./HeroTech";

const HeroLeft = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      className="flex flex-col justify-center"
    >
      {/* Badge */}

      <HeroBadge />

      {/* Greeting */}

      <p className="mt-8 text-xl font-medium text-slate-400">
        Hi, I'm
      </p>

      {/* Name */}

      <h1 className="mt-2 text-5xl font-black leading-tight text-white md:text-7xl">
        ABIN{" "}
        <span className="text-blue-500">
          RAJ
        </span>
      </h1>

      {/* Title */}

      <h2 className="mt-5 max-w-xl text-2xl font-semibold leading-relaxed text-slate-200 md:text-3xl">
        <span className="text-blue-500">Flutter & Full</span> Stack Developer
      </h2>

      {/* Description */}

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
        Building scalable mobile apps, modern web platforms and secure backend systems.
      </p>

      {/* Buttons */}

      <div className="mt-10">
        <HeroButtons />
      </div>

      {/* Technologies */}

      <div className="mt-12">
        <HeroTech />
      </div>

      {/* Statistics */}

      <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">

        <div>
          <h3 className="text-3xl font-bold text-white">
            5+
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Projects Completed
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">
            6+
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Months Experience
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">
            10+
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Technologies
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white">
            100%
          </h3>

          <p className="mt-2 text-sm text-slate-400">
            Dedication
          </p>
        </div>

      </div>
    </motion.div>
  );
};

export default HeroLeft;