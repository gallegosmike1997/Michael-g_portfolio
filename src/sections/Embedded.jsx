import Section from "../components/Section";
import Card from "../components/Card";

export default function Embedded() {
  return (
    <Section id="embedded" title="Embedded Systems, Electrical Engineering & PCB Design">
      <Card title="STM32 & Microcontroller Engineering">
        <p>
          I develop firmware and hardware integrations for STM32‑based systems and other microcontrollers,
          handling everything from flashing and peripheral setup to sensor drivers and serial debugging.
        </p>
        <ul>
          <li>STM32 Cube Programmer + ST‑Link flashing workflows</li>
          <li>Peripheral configuration (PWM, UART, I2C, SPI)</li>
          <li>Sensor driver development and microcontroller integration</li>
          <li>Serial debugging and telemetry pipelines</li>
          <li>Firmware bring‑up for custom PCB designs</li>
        </ul>
      </Card>

      <Card title="KiCad PCB Design & Prototyping">
        <p>
          I design PCBs for robotics, drones, and embedded systems — focusing on clean routing, stable
          power delivery, and reliable sensor integration.
        </p>
        <ul>
          <li>Board layout and routing in KiCad</li>
          <li>Sensor boards, power regulation circuits, microcontroller breakouts</li>
          <li>Prototype assembly and electrical testing</li>
          <li>Revision cycles based on real‑world performance</li>
        </ul>
      </Card>

      <Card title="Electrical Engineering & Soldering">
        <p>
          My electrical engineering work supports embedded systems, drones, and robotics platforms through
          reliable wiring, power systems, and diagnostic workflows.
        </p>
        <ul>
          <li>Above‑proficient soldering for fine‑pitch components</li>
          <li>Harness creation, connector work, and cable management</li>
          <li>Voltage regulation and signal routing</li>
          <li>Bench diagnostics and electrical troubleshooting</li>
          <li>Integration of electrical systems with firmware and mechanical assemblies</li>
        </ul>
      </Card>

      <Card title="Embedded Debugging & Tooling">
        <p>
          I use a combination of terminal tools, serial interfaces, and microcontroller utilities to debug
          embedded systems under real‑world conditions.
        </p>
        <ul>
          <li>PuTTY, ST‑Link, serial terminals, and telemetry tools</li>
          <li>Multi‑OS workflows across Windows, Linux, and WSL2</li>
          <li>Log‑driven debugging and iterative firmware refinement</li>
          <li>Hardware‑software integration testing</li>
        </ul>
      </Card>
    </Section>
  );
}
