import "./theme/layout.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

import Software from "./sections/Software";
import Robotics from "./sections/Robotics";
import Embedded from "./sections/Embedded";
import Additive from "./sections/Additive";
import AI from "./sections/AI";
import Systems from "./sections/Systems";
import Projects from "./sections/Projects";
import Roadmap from "./sections/Roadmap";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Software />
      <Robotics />
      <Embedded />
      <Additive />
      <AI />
      <Systems />
      <Projects />
      <Roadmap />
    </>
  );
}
