import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Failure from "@/components/sections/Failure";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Failure />
      <Contact />
    </>
  );
}
