import ContentLayout from "@/components/ui/ContentLayout";
import Intro from "@/components/sections/Intro";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Work from "@/components/sections/Work";
import Contact from "@/components/sections/Contact";
//add info
export default function Home() {
  return (
    <ContentLayout>
      <Intro />
      <About />
      <Experience />
      <Work />
      <Contact />
    </ContentLayout>
  );
}
