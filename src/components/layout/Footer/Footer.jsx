import { Heart } from "lucide-react";
import Container from "../Container";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-[#03050d] py-6">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-xs text-slate-500 md:text-sm md:w-1/3">
            © {new Date().getFullYear()} <span className="font-semibold text-slate-300">ABIN RAJ</span>. All rights reserved.
          </p>

          <p className="text-xs text-slate-400 md:text-sm md:w-1/3 text-center">
            Building digital products with passion & innovation.
          </p>

          <div className="flex justify-center md:justify-end md:w-1/3">
            <Heart size={16} className="text-red-500 fill-red-500" />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;