import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Robotics() {
  return (
    <Section id="robotics" title="Robotics, Drones & Mechatronics">
      <Card title="Custom Drone Engineering">
        <p>
          I design and build drones from scratch — combining mechanical CAD, electrical systems,
          embedded firmware, and flight tuning into fully functional aerial platforms.
        </p>
        <ul>
          <li>CAD‑designed frames and structural components</li>
          <li>Motor/ESC selection and power system engineering</li>
          <li>Flight controller programming and firmware configuration</li>
          <li>Sensor integration (IMU, GPS, barometer, telemetry)</li>
          <li>Serial debugging, ST‑Link workflows, and microcontroller tuning</li>
          <li>Harness creation and above‑proficient soldering</li>
        </ul>
      </Card>

      <Card title="Robotics & Control Systems">
        <p>
          My robotics work blends mechanical design, embedded systems, and control theory to create
          reliable, testable robotic assemblies.
        </p>
        <ul>
          <li>Motor control and ESC tuning</li>
          <li>Sensor fusion and real‑time data handling</li>
          <li>Mechanical assemblies for robotics platforms</li>
          <li>Iterative tuning and flight/bench testing logs</li>
          <li>Safety, redundancy, and failure‑mode considerations</li>
        </ul>
      </Card>

      <Card title="Embedded Firmware for Robotics">
        <p>
          I write and configure firmware for STM32‑based controllers and custom PCBs used in drone
          and robotics systems.
        </p>
        <ul>
          <li>STM32 Cube Programmer + ST‑Link flashing</li>
          <li>Peripheral configuration (PWM, UART, I2C, SPI)</li>
          <li>Sensor drivers and microcontroller integration</li>
          <li>Serial debugging and telemetry workflows</li>
          <li>Firmware bring‑up for custom PCB designs</li>
        </ul>
      </Card>

      <Card title="Mechanical & Electrical Integration">
        <p>
          Robotics requires seamless integration between hardware and software — I design both sides
          and ensure they work together under real‑world conditions.
        </p>
        <ul>
          <li>3D printed mounts, frames, and enclosures</li>
          <li>Electrical routing and power distribution</li>
          <li>High‑strength mechanical assemblies</li>
          <li>Rapid prototyping using CAD + additive manufacturing</li>
        </ul>
      </Card>
    </Section>
  );
}
