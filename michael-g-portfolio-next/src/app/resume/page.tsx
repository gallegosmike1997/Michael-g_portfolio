"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ResumePage() {
  return (
    <>
      <Header />
      <main
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "40px 24px",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            marginBottom: "40px",
          }}
        >
          <h1
            style={{
              fontSize: "2.2rem",
              marginBottom: "8px",
              fontWeight: "700",
              letterSpacing: "0.05em",
            }}
          >
            Michael Gallegos
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--text-muted)",
              marginBottom: "12px",
            }}
          >
            Multi-Disciplinary Engineer
          </p>
          <p
            style={{
              fontSize: "0.9rem",
              color: "var(--text-muted)",
            }}
          >
            Colorado Springs, CO • Software • Robotics • Embedded Systems • AI • CAD • 3D Printing
          </p>
        </div>

        <section
          style={{
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "16px",
              fontWeight: "600",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "8px",
            }}
          >
            Professional Summary
          </h2>
          <p style={{ marginBottom: "12px", lineHeight: "1.7" }}>
            Full-stack engineer specializing in complete system design and integration. Expertise across software development, embedded systems, robotics, PCB design, AI pipelines, and additive manufacturing. Proven ability to blend mechanical design, electrical systems, and firmware into reliable, end-to-end solutions.
          </p>
        </section>

        <section
          style={{
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "16px",
              fontWeight: "600",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "8px",
            }}
          >
            Core Competencies
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px",
            }}
          >
            <div>
              <h3 style={{ marginBottom: "8px", fontSize: "1rem" }}>
                Software & Full-Stack
              </h3>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>• Python + Streamlit</li>
                <li>• React & Next.js</li>
                <li>• Full-stack architecture</li>
                <li>• API design & integration</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: "8px", fontSize: "1rem" }}>
                Embedded & Hardware
              </h3>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>• STM32 microcontroller programming</li>
                <li>• PCB design (KiCad)</li>
                <li>• Firmware development</li>
                <li>• Electrical debugging</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: "8px", fontSize: "1rem" }}>
                Robotics & Drones
              </h3>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>• Custom drone design & build</li>
                <li>• Flight controller tuning</li>
                <li>• Control systems</li>
                <li>• Mechanical integration</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: "8px", fontSize: "1rem" }}>
                CAD & Manufacturing
              </h3>
              <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                <li>• Mechanical design & CAD</li>
                <li>• 3D printing (FDM)</li>
                <li>• Additive manufacturing</li>
                <li>• Rapid prototyping</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          style={{
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "16px",
              fontWeight: "600",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "8px",
            }}
          >
            Experience
          </h2>
          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                marginBottom: "4px",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              Multi-Disciplinary Engineering (Self-Directed)
            </h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-muted)",
                marginBottom: "8px",
              }}
            >
              Colorado Springs, CO • Ongoing
            </p>
            <ul style={{ listStyle: "none", paddingLeft: "0" }}>
              <li>
                • Designed and built custom drones from mechanical CAD through flight testing and tuning
              </li>
              <li>• Developed full-stack AI applications with Python + Streamlit + ONNX TTS</li>
              <li>
                • Engineered embedded systems with STM32 microcontrollers and custom PCBs
              </li>
              <li>• Created mechanical assemblies and prototypes using CAD and 3D printing</li>
              <li>• Debugged complex multi-OS environments and server stacks</li>
            </ul>
          </div>
        </section>

        <section
          style={{
            marginBottom: "32px",
          }}
        >
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "16px",
              fontWeight: "600",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "8px",
            }}
          >
            Projects
          </h2>
          <div style={{ marginBottom: "16px" }}>
            <h3
              style={{
                marginBottom: "4px",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              Re-Hardwire — AI Mental Health Platform
            </h3>
            <p style={{ marginBottom: "8px", color: "var(--text-muted)" }}>
              Full-stack Streamlit app with ONNX TTS, custom routing engine, trauma-informed UX
            </p>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <h3
              style={{
                marginBottom: "4px",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              Custom Drone Builds
            </h3>
            <p style={{ marginBottom: "8px", color: "var(--text-muted)" }}>
              End-to-end drone engineering: CAD, electrical systems, firmware, flight tuning
            </p>
          </div>
          <div style={{ marginBottom: "16px" }}>
            <h3
              style={{
                marginBottom: "4px",
                fontSize: "1.1rem",
                fontWeight: "600",
              }}
            >
              Embedded PCB Design
            </h3>
            <p style={{ marginBottom: "8px", color: "var(--text-muted)" }}>
              KiCad-designed PCBs for sensor integration, microcontroller breakouts, power systems
            </p>
          </div>
        </section>

        <section>
          <h2
            style={{
              fontSize: "1.4rem",
              marginBottom: "16px",
              fontWeight: "600",
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              paddingBottom: "8px",
            }}
          >
            Tools & Technologies
          </h2>
          <p style={{ marginBottom: "8px" }}>
            <strong>Languages:</strong> Python, JavaScript/TypeScript, Rust, C/C++
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Frameworks:</strong> React, Next.js, Streamlit, FastAPI
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Embedded:</strong> STM32, ARM Cortex, UART, I2C, SPI, PWM
          </p>
          <p style={{ marginBottom: "8px" }}>
            <strong>Design:</strong> KiCad, CAD, FreeCAD, Fusion 360
          </p>
          <p>
            <strong>Systems:</strong> Windows, Linux, WSL2, macOS, terminal-centric workflows
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
