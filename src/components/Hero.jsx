import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function Hero() {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      id="hero"
      style={{
        padding: "40px 24px",
        marginTop: "20px",
        borderRadius: "18px",
        background:
          theme === "dark"
            ? "linear-gradient(135deg, rgba(123,30,59,0.55), rgba(10,10,18,0.95))"
            : "linear-gradient(135deg, #ffffff, #e8e8f0)",
        boxShadow: "0 18px 40px rgba(0,0,0,0.65)",
        border: "1px solid rgba(255,255,255,0.06)",
        opacity: 0,
        animation: "fadeIn 1s ease forwards"
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "12px",
          color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
          letterSpacing: "0.05em"
        }}
      >
        I design, build, and integrate complete systems.
      </h2>

      <p
        style={{
          fontSize: "1rem",
          color: theme === "dark" ? "#a0a0b3" : "#3a3a45",
          marginBottom: "20px",
          maxWidth: "800px"
        }}
      >
        Full‑stack apps, embedded systems, drones, PCBs, AI pipelines, and mechanical assemblies —
        engineered end‑to‑end with reliability, clarity, and real‑world performance.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px"
        }}
      >
        <span className="tag">Full‑Stack Engineering</span>
        <span className="tag">Embedded Systems</span>
        <span className="tag">Robotics & Drones</span>
        <span className="tag">3D Printing & CAD</span>
        <span className="tag">AI Integration</span>
        <span className="tag">Systems Engineering</span>
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a
          href="#projects"
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            background: theme === "dark" ? "#c9a46b" : "#7b1e3b",
            color: theme === "dark" ? "#050509" : "#f5f5f7",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 10px 24px rgba(0,0,0,0.7)"
          }}
        >
          View Projects
        </a>

        <a
          href="#about"
          style={{
            padding: "10px 18px",
            borderRadius: "999px",
            border: "1px solid rgba(255,255,255,0.18)",
            background: theme === "dark" ? "rgba(5,5,9,0.85)" : "#ffffff",
            color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
            fontWeight: 600,
            textDecoration: "none"
          }}
        >
          Learn More
        </a>
      </div>
    </section>
  );
}
