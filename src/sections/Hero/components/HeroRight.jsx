import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../../../assets/images/myimage.png";
import { 
  SiFlutter, 
  SiReact, 
  SiJavascript, 
  SiNestjs, 
  SiPostgresql, 
  SiFirebase, 
  SiCloudinary 
} from "react-icons/si";

const techIcons = [
  { Icon: SiFlutter, color: "#02569B" },
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiNestjs, color: "#E0234E" },
  { Icon: SiPostgresql, color: "#336791" },
  { Icon: SiFirebase, color: "#FFCA28" },
  { Icon: SiCloudinary, color: "#3448C5" },
];

const HeroRight = () => {
  return (
    <div className="relative flex items-center justify-center min-h-[600px] w-full mt-10 lg:mt-0">
      {/* Background Glow */}
      <div className="absolute h-[400px] w-[400px] rounded-full border border-blue-500/20 bg-blue-600/10 blur-2xl shadow-[0_0_100px_rgba(37,99,235,0.3)]" />
      <div className="absolute h-[450px] w-[450px] rounded-full border border-blue-500/30" />
      <div className="absolute h-[550px] w-[550px] rounded-full border border-blue-500/10" />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 h-[400px] w-[400px] overflow-hidden rounded-full border-4 border-blue-500/50 bg-slate-900 shadow-[0_0_40px_rgba(37,99,235,0.4)]"
      >
        <img
          src={profileImage}
          alt="Abin Raj"
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      {/* Orbiting Tech Icons */}
      <div className="absolute h-[550px] w-[550px] z-20 pointer-events-none group">
        <div 
          className="absolute inset-0 group-hover:[animation-play-state:paused]"
          style={{ animation: "spin 60s linear infinite" }}
        >
          {techIcons.map((tech, index) => {
            const angle = index * (360 / techIcons.length);
            return (
              <div 
                key={index}
                className="absolute inset-0"
                style={{ transform: `rotate(${angle}deg)` }}
              >
                <div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ transform: `rotate(-${angle}deg)` }}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="pointer-events-auto flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-transform hover:scale-110 group-hover:[animation-play-state:paused]"
                    style={{ animation: "spin 60s linear infinite reverse" }}
                  >
                    <tech.Icon size={28} style={{ color: tech.color }} />
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Typing Animation Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="absolute -bottom-10 z-30 flex items-center justify-center rounded-xl border border-blue-500/40 bg-slate-900/80 px-6 py-4 shadow-[0_0_20px_rgba(37,99,235,0.3)] backdrop-blur-md"
      >
        <span className="mr-2 text-blue-400">{">"}</span>
        <TypeAnimation
          sequence={[
            "I build products that",
            500,
            "I build products that solve real problems..",
            2000,
            "I build scalable mobile apps..",
            2000,
            "I build secure backend systems..",
            2000,
          ]}
          wrapper="span"
          speed={50}
          className="text-sm font-medium text-slate-300 md:text-base font-mono"
          repeat={Infinity}
        />
      </motion.div>
      
      {/* Glowing base under typing box */}
      <div className="absolute -bottom-24 z-0 flex flex-col items-center justify-center">
        <div className="absolute h-10 w-64 rounded-full bg-blue-600/30 blur-2xl" />
        <div className="absolute mt-4 h-6 w-48 rounded-[100%] border-t border-blue-500/50 shadow-[0_-5px_15px_rgba(37,99,235,0.3)]" />
        <div className="absolute mt-8 h-4 w-32 rounded-[100%] border-t border-blue-500/80 shadow-[0_-5px_20px_rgba(37,99,235,0.5)]" />
      </div>
    </div>
  );
};

export default HeroRight;