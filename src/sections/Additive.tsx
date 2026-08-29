import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Additive() {
  return (
    <Section id="additive" title="Additive Manufacturing, 3D Printing & CAD">
      <Card title="3D Printer Engineering">
        <p>
          I build, modify, and tune 3D printers for high‑precision prototyping, including firmware
          customization, mechanical upgrades, and calibration workflows.
        </p>
        <ul>
          <li>Custom firmware configuration and tuning</li>
          <li>Mechanical upgrades for stability and accuracy</li>
          <li>Bed leveling, extrusion tuning, and print optimization</li>
          <li>Hardware troubleshooting and repair</li>
        </ul>
      </Card>

      <Card title="CAD & Mechanical Design">
        <p>
          I design functional mechanical parts for drones, robotics, and embedded systems using
          professional CAD workflows.
        </p>
        <ul>
          <li>Drone frames, mounts, and enclosures</li>
          <li>Mechanical assemblies for embedded hardware</li>
          <li>Rapid prototyping using FDM printing</li>
          <li>Iterative design based on real‑world testing</li>
        </ul>
      </Card>

      <Card title="Prototyping & Fabrication">
        <p>
          My additive manufacturing workflow supports fast iteration cycles for robotics, drones,
          and embedded systems.
        </p>
        <ul>
          <li>Functional prototypes for mechanical systems</li>
          <li>Design‑test‑refine cycles</li>
          <li>Integration with electrical and firmware constraints</li>
        </ul>
      </Card>
    </Section>
  );
}
