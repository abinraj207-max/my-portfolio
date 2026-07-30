import { motion } from "framer-motion";
import { Rocket, Code2, Server, Trophy, Activity } from "lucide-react";

const timeline = [
  {
    year: "2026",
    icon: Rocket,
    title: "Intern",
    description: "Completed a 3-month internship at Zeed Innovation.",
  },
  {
    year: "2026",
    icon: Code2,
    title: "Intern",
    description: "Completed a 3-month internship at Zeedz Innovation.",
  },
  {
    year: "Present",
    icon: Trophy,
    title: "Developer",
    description: "Currently working as a Developer at Zeedz Innovation.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#050816] py-28 relative">
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex items-center"
        >
          <h2 className="text-2xl font-bold tracking-wider text-white uppercase">
            Experience Timeline
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[3fr_1fr]">
          
          {/* Timeline Section */}
          <div className="relative rounded-3xl border border-slate-800 bg-slate-900 p-8 lg:p-10">
            {/* Horizontal Line for md+ screens */}
            <div className="absolute left-10 right-10 top-20 hidden h-[1px] bg-slate-800 md:block" />
            
            <div className="grid gap-10 md:grid-cols-3 md:gap-6 relative z-10">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="relative flex flex-col items-center text-center md:items-start md:text-left"
                  >
                    {/* Clean Node */}
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-800">
                      <Icon size={20} className="text-slate-400" />
                    </div>

                    <span className="mb-2 text-xs font-semibold text-slate-500 tracking-widest uppercase">
                      {item.year}
                    </span>
                    <h3 className="mb-3 text-sm font-bold text-white lg:text-base">
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-400">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Quote Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center rounded-3xl border border-slate-800 bg-slate-900 p-8"
          >
            <div className="mb-4 text-5xl font-serif text-slate-700">"</div>
            <p className="mb-6 text-sm font-medium leading-relaxed text-slate-300 italic">
              I love building products that make a difference. Code is not just my skill, it's my passion.
            </p>
            <div className="mt-auto text-right font-signature text-2xl text-slate-500" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Abin Raj
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;