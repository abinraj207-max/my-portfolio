import { motion } from "framer-motion";
import {
  Smartphone,
  Globe,
  Server,
  Database,
  CreditCard,
  Cloud,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Flutter App Development",
    description:
      "Cross-platform Android & iOS applications with clean UI and high performance.",
  },
  {
    icon: Globe,
    title: "Frontend Development",
    description:
      "Modern responsive websites using React.js, JavaScript and Tailwind CSS.",
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "REST APIs using NestJS, Express.js, JWT authentication and clean architecture.",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designing secure and optimized PostgreSQL & Supabase databases.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description:
      "Razorpay, Firebase Authentication and third-party API integrations.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description:
      "Cloudinary integration, Docker basics and deployment-ready applications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-[#050816] py-28 relative">
      <div className="mx-auto w-full max-w-7xl px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900 px-4 py-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
              Services
            </span>
          </div>
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            What I Can Build
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-400">
            I develop complete digital products from mobile apps to backend
            systems, helping transform ideas into scalable software solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex flex-col rounded-3xl border border-slate-800 bg-slate-900 p-6 md:p-8 transition-all duration-300 hover:-translate-y-2 hover:border-slate-700"
              >
                {/* Icon Box */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900/50 transition-colors group-hover:border-slate-700">
                  <Icon size={24} className="text-slate-400" />
                </div>

                <h3 className="mb-4 text-xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="text-sm leading-relaxed text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;