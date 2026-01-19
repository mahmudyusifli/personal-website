import ContentLayout from "@/components/ui/ContentLayout";
import Intro from "@/components/sections/Intro";
import About from "@/components/sections/About";
import Work from "@/components/sections/Work";
import Thinking from "@/components/sections/Thinking";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <ContentLayout>
      <Intro />
      <About />
      <Work />
      <Thinking />
      <Contact />
    </ContentLayout>
  );
}
