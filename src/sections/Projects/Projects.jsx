import { motion } from "framer-motion";
import { ArrowRight, TerminalSquare } from "lucide-react";
import Tilt from "react-parallax-tilt";

const projects = [
  {
    title: "ZEETRACKZ",
    subtitle: "Business Management Platform",
    description: "Complete business management solution with POS, inventory, staff management, analytics and more.",
    image: "https://picsum.photos/seed/project1/600/400",
    tags: ["Flutter", "NestJS", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Zwipez",
    subtitle: "Food Delivery Platform",
    description: "End-to-end food delivery ecosystem with customer, restaurant & delivery partner apps.",
    image: "https://picsum.photos/seed/project2/600/400",
    tags: ["Flutter", "NestJS", "Firebase"],
    link: "#",
  },
  {
    title: "Attendance App",
    subtitle: "Smart Attendance System",
    description: "Real-time attendance tracking with reports, leave management and analytics.",
    image: "https://picsum.photos/seed/project3/600/400",
    tags: ["Flutter", "Supabase", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Offline POS",
    subtitle: "Offline Billing System",
    description: "Powerful offline POS billing software with inventory, barcode, GST billing and reports.",
    image: "https://picsum.photos/seed/project4/600/400",
    tags: ["Flutter", "Local DB", "Printer SDK"],
    link: "#",
  },
  {
    title: "TN E-Ration Shop",
    subtitle: "(Concept Project)",
    description: "E-ration ordering system for Tamil Nadu with home delivery and order tracking.",
    image: "https://picsum.photos/seed/project5/600/400",
    tags: ["Flutter", "NestJS", "PostgreSQL"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#050816] py-28 relative">
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            <TerminalSquare className="text-blue-500" size={24} />
            <h2 className="text-2xl font-bold tracking-wider text-white uppercase">
              Featured Projects
            </h2>
          </motion.div>

        </div>

        {/* Project Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {projects.map((project, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              transitionSpeed={2000}
              scale={1.02}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
              glareBorderRadius="1rem"
              className="h-full"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-slate-700 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.05)]"
              >
                {/* Image Area */}
                <div className="relative h-40 w-full overflow-hidden bg-slate-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-white">{project.title}</h3>
                  <p className="mb-3 text-xs font-medium text-blue-400">{project.subtitle}</p>
                  <p className="mb-6 flex-1 text-xs leading-relaxed text-slate-400">
                    {project.description}
                  </p>

                  {/* Tech Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-slate-700/50 bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Link */}

                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;