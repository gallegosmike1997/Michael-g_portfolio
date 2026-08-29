"use client";

import Section from "../../components/Section";
import Card from "../../components/Card";

export default function ResumePage() {
  return (
    <>
      <Section id="resume" title="Resume — Michael Gallegos">

        <Card title="Professional Summary">
          <p>
            Multi-disciplinary engineer with hands-on experience across software development,
            embedded systems, robotics, additive manufacturing, electrical engineering, AI
            integration, and full-stack application design. Proven ability to design, build,
            program, and deploy complex systems end-to-end—from hardware prototypes and custom
            firmware to full-stack applications and AI-powered tools. Highly adaptable,
            self-directed, and capable of solving problems across mechanical, electrical, and
            software domains.
          </p>
        </Card>

        <Card title="Core Competencies">
          <ul>
            <li>Software Engineering: Python, Rust (beginner), JavaScript, Android Studio, VS Code, multi-language development, full-stack app architecture</li>
            <li>AI & ML Integration: ONNX models, TTS pipelines, prompt engineering, model routing, performance optimization</li>
            <li>Embedded Systems: STM32 Cube Programmer, ST-Link, serial debugging, firmware flashing, microcontroller workflows</li>
            <li>Electrical Engineering: Circuit design, soldering (above proficient), sensor integration, power systems, troubleshooting</li>
            <li>Mechanical & CAD: 3D CAD modeling, KiCad PCB design, drone frame design, mechanical assemblies</li>
            <li>Additive Manufacturing: 3D printer building, custom firmware, calibration, part design, rapid prototyping</li>
            <li>Robotics & Drones: Custom drone builds, flight controller programming, sensor systems, motor control</li>
            <li>Systems & OS: WSL2, Linux terminal, Windows, macOS, multi-OS navigation, environment configuration</li>
            <li>DevOps & Tooling: Git, version control recovery, environment debugging, dependency management</li>
          </ul>
        </Card>

        <Card title="Technical Skills">
          <p><strong>Programming Languages:</strong> Python, Rust (beginner), JavaScript, Bash, C (basic), HTML/CSS</p>
          <p><strong>Software & Tools:</strong> Streamlit, VS Code, Android Studio, STM32 Cube Programmer, KiCad, Fusion 360/Onshape, Git, Uvicorn, WebSockets, ONNX Runtime</p>
          <p><strong>Hardware & Robotics:</strong> ESC calibration, flight controller setup, soldering, PCB prototyping, sensor integration, microcontroller programming</p>
          <p><strong>AI Tools:</strong> ONNX models, TTS pipelines, embeddings (developing), model optimization</p>
          <p><strong>Operating Systems:</strong> Windows, Linux (multiple distros), WSL2, macOS</p>
        </Card>

        <Card title="Engineering Experience — Re-Hardwire (Founder/Engineer)">
          <ul>
            <li>Designed and built a modular AI-powered emotional recovery application using Python and Streamlit</li>
            <li>Implemented ONNX-based TTS models and multi-modal AI systems</li>
            <li>Developed custom routing engine, state management, and modular architecture</li>
            <li>Managed WSL2 rebuilds, dependency conflicts, and server stack debugging</li>
            <li>Created trauma-informed UX flows and grounding tools</li>
            <li>Integrated Git version control, branch recovery, and project structure optimization</li>
          </ul>
        </Card>

        <Card title="Custom Drone Engineering Projects">
          <ul>
            <li>Built custom drones including frame design, motor selection, ESC configuration, and sensor integration</li>
            <li>Programmed flight controllers, configured firmware, and tuned flight characteristics</li>
            <li>Designed and soldered wiring harnesses, power systems, and PCB components</li>
            <li>Performed serial debugging, ST-Link flashing, and microcontroller configuration</li>
          </ul>
        </Card>

        <Card title="3D Printing & Additive Manufacturing">
          <ul>
            <li>Built and modified 3D printers with custom firmware and hardware upgrades</li>
            <li>Designed 3D printable components using CAD tools</li>
            <li>Calibrated printers, tuned firmware parameters, optimized print quality</li>
          </ul>
        </Card>

        <Card title="Embedded & Electrical Engineering Projects">
          <ul>
            <li>Designed PCBs using KiCad for sensor systems and microcontroller projects</li>
            <li>Programmed STM32 microcontrollers using Cube Programmer and ST-Link</li>
            <li>Built and tested circuits, performed soldering, debugged electrical issues</li>
          </ul>
        </Card>

        <Card title="Software Development & Web Projects">
          <ul>
            <li>Developed multi-language software tools and automation scripts</li>
            <li>Built beginner-level Rust applications and explored systems programming</li>
            <li>Created websites and web tools using HTML, CSS, JavaScript, Python backends</li>
          </ul>
        </Card>

        <Card title="Education & Training">
          <ul>
            <li>MMGD AVP Program (1 Year) — Multimedia, Game Development, Audio/Visual Production</li>
            <li>High School Program — Digital design, interactive media, technical production</li>
            <li>Self-directed engineering training across software, hardware, robotics, and AI systems</li>
          </ul>
        </Card>

        <Card title="Projects">
          <ul>
            <li>Re-Hardwire AI Application — Full-stack AI mental health tool</li>
            <li>Custom Drone Builds — Fully engineered drones with custom firmware</li>
            <li>3D Printer Firmware Mods — Custom firmware and mechanical upgrades</li>
            <li>Embedded PCB Designs — KiCad boards for microcontroller integration</li>
            <li>Rust Utilities — Beginner-level CLI tools</li>
          </ul>
        </Card>

        <Card title="Additional Strengths">
          <ul>
            <li>Strong problem-solving across mechanical, electrical, and software domains</li>
            <li>Highly persistent and self-motivated with rapid learning ability</li>
            <li>Comfortable with complex debugging and multi-OS workflows</li>
            <li>Capable of designing, building, coding, and deploying complete systems end-to-end</li>
          </ul>
        </Card>

        <Card title="AI Pipeline Development & Custom HMI Tool Integration">
          <ul>
            <li>Built AI pipeline integrating SAM2, GPT-J, and LLAMA models</li>
            <li>Developed custom HMI tool for warehouse productivity</li>
            <li>Applied AI-driven automation to optimize industrial processes</li>
          </ul>
        </Card>

        <Card title="Industrial CNC & Laser Cutting Expertise">
          <ul>
            <li>Operated plasma CNC beamline and plate cutting machines</li>
            <li>Maintained 30kW industrial steel laser cutter</li>
            <li>Skilled in CNC programming, setup, troubleshooting</li>
          </ul>
        </Card>

        <Card title="Warehouse Systems & Retail POS Expertise">
          <ul>
            <li>Performed POS pinpad upgrades at Kroger locations</li>
            <li>Designed warehouse layouts and workflows</li>
            <li>Certified forklift operator</li>
            <li>ITAR & EMAC qualified for military materials handling</li>
            <li>Experienced with SIMS for material transfers and sales orders</li>
            <li>Knowledgeable in OSHA regulations and safe work practices</li>
          </ul>
        </Card>

      </Section>
    </>
  );
}
