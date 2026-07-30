import { motion } from "framer-motion";
import { User, MapPin, Briefcase, Mail } from "lucide-react";
import Button from "../../components/common/Button";
import ScrollRevealText from "../../components/common/ScrollRevealText/ScrollRevealText";

const About = () => {
  return (
    <section id="about" className="bg-[#050816] py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-center gap-3"
        >
          <User className="text-blue-500" size={24} />
          <h2 className="text-2xl font-bold tracking-wider text-white">
            ABOUT ME
          </h2>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/50 backdrop-blur-xl"
        >
          {/* Minimal Background */}
          <div className="relative z-10 grid gap-10 p-10 lg:grid-cols-[1.5fr_1fr]">
            {/* Left Column: Text & Button */}
            <div className="flex flex-col justify-center">
              <ScrollRevealText 
                text="I'm a passionate Flutter & Full Stack Developer who loves turning ideas into real-world products. I specialize in building beautiful mobile apps, powerful web applications and scalable backend systems."
                className="text-xl md:text-2xl lg:text-3xl font-medium leading-tight text-white"
              />
              <div className="mt-8">
                <Button variant="secondary" className="group">
                  <User size={18} className="text-blue-400" />
                  <span>Know More About Me</span>
                </Button>
              </div>
            </div>

            {/* Right Column: Info Grid & Graphic */}
              <div className="grid gap-6">
                <div className="flex items-center gap-4">
                  <User size={20} className="text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Name</p>
                    <p className="font-medium text-slate-200">Abin Raj</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin size={20} className="text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Location</p>
                    <p className="font-medium text-slate-200">Tamil Nadu, India</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Briefcase size={20} className="text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Experience</p>
                    <p className="font-medium text-slate-200">6+ Months</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Mail size={20} className="text-slate-400" />
                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email</p>
                    <p className="font-medium text-slate-200 break-all">abinraj207@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;