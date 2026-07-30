import { motion } from "framer-motion";
import { Smartphone, Monitor, Server, Database, Wrench } from "lucide-react";
import Tilt from "react-parallax-tilt";

const skillCategories = [
  {
    title: "Mobile Development",
    icon: Smartphone,
    colorClass: "from-blue-600 via-blue-500 to-cyan-400",
    glowColor: "rgba(59, 130, 246, 0.15)",
    glowTip: "#60a5fa",
    themeColor: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    skills: [
      { name: "Flutter", percentage: 95 },
      { name: "Dart", percentage: 90 },
      { name: "Firebase", percentage: 85 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Monitor,
    colorClass: "from-cyan-500 via-teal-400 to-emerald-400",
    glowColor: "rgba(6, 182, 212, 0.15)",
    glowTip: "#22d3ee",
    themeColor: "text-cyan-400 border-cyan-500/20 bg-cyan-500/10",
    skills: [
      { name: "React.js", percentage: 90 },
      { name: "HTML5", percentage: 95 },
      { name: "CSS3", percentage: 90 },
      { name: "JavaScript", percentage: 85 },
      { name: "Tailwind CSS", percentage: 90 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    colorClass: "from-violet-600 via-purple-500 to-fuchsia-400",
    glowColor: "rgba(139, 92, 246, 0.15)",
    glowTip: "#c084fc",
    themeColor: "text-purple-400 border-purple-500/20 bg-purple-500/10",
    skills: [
      { name: "NestJS", percentage: 90 },
      { name: "Express.js", percentage: 85 },
      { name: "Node.js", percentage: 85 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    colorClass: "from-emerald-500 via-green-400 to-teal-400",
    glowColor: "rgba(16, 185, 129, 0.15)",
    glowTip: "#34d399",
    themeColor: "text-emerald-400 border-emerald-500/20 bg-emerald-500/10",
    skills: [
      { name: "PostgreSQL", percentage: 90 },
      { name: "Supabase", percentage: 85 },
    ],
  },
  {
    title: "Tools & Services",
    icon: Wrench,
    colorClass: "from-amber-500 via-orange-500 to-yellow-400",
    glowColor: "rgba(245, 158, 11, 0.15)",
    glowTip: "#fbbf24",
    themeColor: "text-amber-400 border-amber-500/20 bg-amber-500/10",
    skills: [
      { name: "Razorpay", percentage: 90 },
      { name: "Cloudinary", percentage: 85 },
      { name: "Git & GitHub", percentage: 90 },
      { name: "Docker", percentage: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-[#050816] py-28 relative overflow-hidden">
      {/* Background radial accent glows for the whole section */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-600/5 blur-[120px] pointer-events-none" />

      {/* Scoped CSS animations for shimmer sweep */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .shimmer-sweep {
          animation: shimmer 3s infinite linear;
        }
      `}</style>

      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex items-center gap-3"
        >
          <Server 
            className="text-blue-500" 
            size={24} 
            style={{ filter: "drop-shadow(0 0 8px rgba(59,130,246,0.6))" }}
          />
          <h2 className="text-2xl font-bold tracking-wider text-white uppercase font-mono">
            Skills & Technologies
          </h2>
        </motion.div>

        {/* Skill Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Tilt
                key={category.title}
                tiltMaxAngleX={8}
                tiltMaxAngleY={8}
                perspective={1000}
                scale={1.02}
                transitionSpeed={1200}
                className="h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  className="relative overflow-hidden h-full rounded-2xl border border-slate-800/80 bg-[#0f172a]/30 backdrop-blur-xl p-6 transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)] group flex flex-col justify-between"
                >
                  {/* Glowing background circles that brighten on hover */}
                  <div 
                    className="absolute -right-20 -top-20 w-44 h-44 rounded-full blur-[70px] pointer-events-none transition-all duration-700 opacity-60 group-hover:opacity-100 group-hover:scale-110" 
                    style={{ backgroundColor: category.glowColor }}
                  />
                  <div 
                    className="absolute -left-20 -bottom-20 w-44 h-44 rounded-full blur-[70px] pointer-events-none transition-all duration-700 opacity-30 group-hover:opacity-60" 
                    style={{ backgroundColor: category.glowColor }}
                  />

                  <div className="relative z-10">
                    {/* Category Header */}
                    <div className="mb-6 flex items-center gap-3">
                      <div 
                        className={`flex items-center justify-center w-10 h-10 rounded-lg border text-lg transition-all duration-500 group-hover:scale-110 group-hover:border-opacity-50 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] ${category.themeColor}`}
                        style={{ filter: `drop-shadow(0 0 5px ${category.glowTip}33)` }}
                      >
                        <Icon size={20} />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill Bars List */}
                    <div className="space-y-5">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group/skill">
                          {/* Skill Name & Progress Number */}
                          <div className="mb-2 flex justify-between text-xs font-semibold tracking-wider font-mono">
                            <span className="text-slate-300 group-hover/skill:text-white transition-colors duration-200">
                              {skill.name}
                            </span>
                            <span className="text-slate-400 group-hover/skill:text-white transition-colors duration-200">
                              {skill.percentage}%
                            </span>
                          </div>
                          
                          {/* Progress Track */}
                          <div className="h-2 w-full rounded-full bg-slate-950/80 border border-slate-900/60 overflow-hidden relative shadow-[inset_0_1px_3px_rgba(0,0,0,0.6)]">
                            {/* Animated Filled Bar */}
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
                              className={`h-full rounded-full bg-gradient-to-r ${category.colorClass} relative`}
                            >
                              {/* Shimmer sweep overlay */}
                              <div className="absolute inset-0 shimmer-sweep bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                              
                              {/* Glowing neon tip point */}
                              <div 
                                className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white z-10"
                                style={{
                                  boxShadow: `0 0 6px #fff, 0 0 10px ${category.glowTip}, 0 0 18px ${category.glowTip}`
                                }}
                              />
                            </motion.div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Tilt>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;