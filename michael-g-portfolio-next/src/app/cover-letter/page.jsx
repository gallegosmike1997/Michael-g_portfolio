"use client";

import Section from "../../components/Section";
import Card from "../../components/Card";

export default function CoverLetterPage() {
  return (
    <>
      <Section id="cover-letter" title="Cover Letter — Michael Gallegos">
        <Card title="Introduction">
          <p>
            I am a multi-disciplinary engineer with hands-on experience across software
            development, embedded systems, robotics, additive manufacturing, electrical
            engineering, AI integration, and full-stack application design. I build complete
            systems end-to-end — from hardware prototypes and custom firmware to full-stack
            applications and AI-powered tools. My background spans mechanical, electrical,
            and software domains, giving me the ability to solve problems holistically and
            engineer solutions that work reliably in real-world environments.
          </p>
        </Card>

        <Card title="Why I Build">
          <p>
            Engineering is not just a profession for me — it is the way I understand and
            interact with the world. I thrive in environments where software, hardware,
            and AI intersect. Whether I’m designing a PCB, tuning a flight controller,
            building an AI pipeline, or debugging a multi-OS environment, I approach each
            challenge with curiosity, persistence, and a commitment to clarity and
            reliability.
          </p>
        </Card>

        <Card title="What I Bring to a Team">
          <p>
            I bring a unique combination of hands-on engineering experience and
            self-directed learning. I am comfortable working across multiple domains:
            software engineering, embedded systems, robotics, electrical engineering,
            additive manufacturing, and AI integration. I am highly adaptable, able to
            quickly learn new tools and technologies, and capable of building systems
            that are both technically sound and user-centered.
          </p>
          <ul>
            <li>Full-stack development with Python, JavaScript, and multi-language tooling</li>
            <li>AI integration using ONNX models, TTS pipelines, and model routing</li>
            <li>Embedded systems engineering with STM32, ST-Link, serial debugging</li>
            <li>Electrical engineering, soldering, circuit design, and PCB prototyping</li>
            <li>Mechanical design using CAD tools and additive manufacturing workflows</li>
            <li>Robotics and drone engineering including firmware tuning and sensor integration</li>
            <li>Multi-OS systems engineering across Windows, Linux, WSL2, and macOS</li>
          </ul>
        </Card>

        <Card title="Professional Mindset">
          <p>
            I am highly persistent, detail-oriented, and comfortable working through
            complex debugging challenges. I enjoy designing systems that are modular,
            maintainable, and scalable. I believe in building tools that empower users,
            improve workflows, and solve real problems. My engineering philosophy centers
            on clarity, reliability, and thoughtful design.
          </p>
        </Card>

        <Card title="Closing Statement">
          <p>
            I am excited to bring my multi-disciplinary engineering background to a team
            that values innovation, hands-on problem solving, and end-to-end system
            development. I look forward to contributing to projects that push boundaries,
            integrate multiple engineering domains, and create meaningful impact.
          </p>
          <p>
            Thank you for your time and consideration.
          </p>
          <p>
            <strong>— Michael Gallegos</strong>
          </p>
        </Card>
      </Section>
    </>
  );
}
