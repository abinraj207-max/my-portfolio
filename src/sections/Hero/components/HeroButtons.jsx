import { ArrowRight, Send } from "lucide-react";
import Button from "../../../components/common/Button/index";

const HeroButtons = () => {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      {/* View Projects */}
      <Button
        className="group min-w-[190px]"
        onClick={() =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span>View My Work</span>

        <ArrowRight
          size={18}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </Button>

      {/* Contact */}
      <Button
        variant="secondary"
        className="group min-w-[190px]"
        onClick={() =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span>Contact Me</span>
        <Send size={18} className="ml-2" />
      </Button>
    </div>
  );
};

export default HeroButtons;