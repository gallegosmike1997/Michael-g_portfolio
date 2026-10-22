"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PortfolioOverview from "@/components/PortfolioOverview";
import About from "@/sections/About";
import Software from "@/sections/Software";
import Robotics from "@/sections/Robotics";
import Embedded from "@/sections/Embedded";
import Additive from "@/sections/Additive";
import AI from "@/sections/AI";
import Systems from "@/sections/Systems";
import Projects from "@/sections/Projects";
import Roadmap from "@/sections/Roadmap";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PortfolioOverview />
        <About />
        <Software />
        <Robotics />
        <Embedded />
        <Additive />
        <AI />
        <Systems />
        <Projects />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
