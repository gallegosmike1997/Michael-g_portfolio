"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CoverLetterPage() {
  return (
    <>
      <Header />
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px 24px",
          minHeight: "100vh",
          lineHeight: "1.8",
        }}
      >
        <div
          style={{
            marginBottom: "32px",
            textAlign: "right",
            fontSize: "0.95rem",
            color: "var(--text-muted)",
          }}
        >
          <p>Michael Gallegos</p>
          <p>Colorado Springs, CO</p>
          <p>Email: gallegosmike1997@gmail.com</p>
          <p>Phone: (719) 673-5372</p>
          <p>GitHub: https://github.com/gallegosmike1997</p>
        </div>

        <div
          style={{
            marginBottom: "32px",
            fontSize: "0.95rem",
            color: "var(--text-muted)",
          }}
        >
          <p>Hello, I am Michael Gallegos.</p>
        </div>

        <section style={{ marginBottom: "24px" }}>
          <p>
            I am a self taught multi-disciplinary engineer with a passion for designing and
            building complete systems. My experience spans full-stack software
            development, embedded systems, robotics, PCB design, AI integration,
            and mechanical engineering. I approach every project with a focus on
            reliability, clarity, and real-world performance.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <p>
            Throughout my engineering journey, I have developed expertise across
            interconnected domains:
          </p>
          <ul
            style={{
              listStyle: "none",
              paddingLeft: "0",
              marginTop: "12px",
            }}
          >
            <li>
              <strong>Software & Full-Stack:</strong> Python, Streamlit, React,
              Next.js, and FastAPI for building scalable applications
            </li>
            <li>
              <strong>Embedded Systems:</strong> STM32 microcontroller
              programming, firmware development, and serial debugging
            </li>
            <li>
              <strong>Hardware Design:</strong> PCB design in KiCad, electrical
              systems integration, and diagnostic workflows
            </li>
            <li>
              <strong>Robotics & Drones:</strong> End-to-end drone design
              including mechanical CAD, electrical integration, flight
              controller tuning, and real-world testing
            </li>
            <li>
              <strong>AI & Automation:</strong> ONNX model integration, pipeline
              optimization, and multi-modal system design
            </li>
            <li>
              <strong>Mechanical Engineering:</strong> CAD design, additive
              manufacturing, rapid prototyping, and assembly optimization
            </li>
            <li>
              <strong>Systems Engineering:</strong> Multi-OS workflows (Windows,
              Linux, WSL2), environment debugging, and integration testing
            </li>
          </ul>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <p>
            What sets me apart is my ability to work across the full stack—from
            designing PCBs and writing firmware to building user interfaces and
            optimizing deployment pipelines. I don't just work in silos; I
            understand how mechanical systems integrate with electrical design,
            how electrical systems require embedded firmware, and how firmware
            must be debugged through software tooling. This holistic approach
            enables me to identify and solve problems that span multiple
            disciplines.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <p>
            I thrive in environments where I can take ownership of complex
            problems and see projects through from conception to deployment. I
            am highly self-directed, detail-oriented, and committed to
            continuous learning. Whether debugging a multi-layered environment
            issue, optimizing an AI pipeline, or bringing a drone from CAD to
            flight-ready, I approach each challenge with rigor and clarity.
          </p>
        </section>

        <section style={{ marginBottom: "24px" }}>
          <p>
            I am excited about the opportunity to bring my multi-disciplinary
            skills, problem-solving mindset, and engineering rigor to your team.
            I am confident that my experience building complete systems will
            enable me to contribute meaningfully to your organization's goals.
          </p>
        </section>

        <section style={{ marginBottom: "32px" }}>
          <p>Thank you for considering my application. I look forward to discussing how I can contribute to your team.</p>
        </section>

        <div
          style={{
            fontSize: "0.95rem",
            color: "var(--text-muted)",
          }}
        >
          <p>Sincerely,</p>
          <p style={{ marginTop: "48px" }}>Michael Gallegos</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
