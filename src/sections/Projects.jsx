import Section from "../components/Section";
import Card from "../components/Card";

export default function Projects() {
  return (
    <Section id="projects" title="Featured Engineering Projects">
      <Card title="Re‑Hardwire — AI Application">
        <p>
          A full‑stack AI mental health tool with custom routing, ONNX TTS, and trauma‑informed UX.
        </p>
      </Card>

      <Card title="Custom Drone Builds">
        <p>
          Fully engineered drones including mechanical design, electrical systems, firmware, and tuning.
        </p>
      </Card>

      <Card title="3D Printer Firmware Mods">
        <p>
          Custom firmware and mechanical upgrades for 3D printers used in prototyping pipelines.
        </p>
      </Card>

      <Card title="Embedded PCB Designs">
        <p>
          KiCad‑designed PCBs for microcontroller and sensor integration projects.
        </p>
      </Card>

      <Card title="Rust Utilities & Experiments">
        <p>
          Beginner‑level Rust CLI tools and systems programming explorations.
        </p>
      </Card>
    </Section>
  );
}
