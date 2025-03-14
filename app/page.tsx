import Hero from "@/components/sections/hero";
import Servicesnav from "@/components/sections/servicesnav";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Projects from "@/components/sections/projects";
import Faq from "@/components/sections/faq";
import CallToAction from "@/components/sections/callToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <Servicesnav />
      <About />
      <Services />
      {/* <Projects /> */}
      <Faq />
      <CallToAction />
    </main>
  );
}
