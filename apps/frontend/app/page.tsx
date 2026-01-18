import ContentLayout from "@/components/ui/ContentLayout";
import Intro from "@/components/sections/Intro";
import WhatIDo from "@/components/sections/WhatIDo";
import Work from "@/components/sections/Work";
import Thinking from "@/components/sections/Thinking";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <ContentLayout>
      <Intro />
      <WhatIDo />
      <Work />
      <Thinking />
      <Contact />
    </ContentLayout>
  );
}
