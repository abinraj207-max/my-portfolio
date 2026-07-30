import Hero from "../../sections/Hero";
import About from "../../sections/About";
import Skills from "../../sections/Skills";
import Projects from "../../sections/Projects";
import Experience from "../../sections/Experience";
import Services from "../../sections/Services";
import Github from "../../sections/Github";
import Testimonials from "../../sections/Testimonials";
import Contact from "../../sections/Contact";
import FooterCTA from "../../sections/FooterCTA";

import LaptopScrollIntro from "../../components/common/LaptopScrollIntro/LaptopScrollIntro";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#050816] text-white overflow-x-hidden">
      <LaptopScrollIntro>
        <Hero />
      </LaptopScrollIntro>
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Services />
      {/* <Github /> */}
      {/* <Testimonials /> */}
      <Contact />
    </main>
  );
};

export default Home;