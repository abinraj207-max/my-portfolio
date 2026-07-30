import { motion } from "framer-motion";
import Container from "../Container";
import Button from "../../common/Button";

const menus = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Services",
  "Contact",
];

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/40 bg-[#050816]/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}

          <motion.h1
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer text-2xl font-bold text-white"
          >
            <span className="text-blue-500">ABIN</span> RAJ
          </motion.h1>

          {/* Menu */}

          <nav className="hidden items-center gap-8 md:flex">
            {menus.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-slate-300 transition hover:text-blue-400"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Resume */}

          <a href="./resume.pdf" download="Abin_Raj_Resume.pdf">
            <Button>
              Download CV
            </Button>
          </a>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;