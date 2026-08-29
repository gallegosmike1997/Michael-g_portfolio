import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        background:
          theme === "dark"
            ? "rgba(5,5,9,0.55)"
            : "rgba(240,240,245,0.55)",
      }}
    >
      {/* Brand */}
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "1.4rem",
            letterSpacing: "0.05em",
            color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
          }}
        >
          Michael
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "0.85rem",
            color: theme === "dark" ? "#a0a0b3" : "#3a3a45",
          }}
        >
          Multi‑Disciplinary Engineer
        </p>
      </div>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <a href="#about">About</a>
        <a href="#software">Software</a>
        <a href="#robotics">Robotics</a>
        <a href="#embedded">Embedded</a>
        <a href="#additive">3D Printing</a>
        <a href="#ai">AI</a>
        <a href="#systems">Systems</a>
        <a href="#projects">Projects</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#contact">Contact</a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            padding: "6px 14px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            background:
              theme === "dark"
                ? "#c9a46b"
                : "#7b1e3b",
            color:
              theme === "dark"
                ? "#050509"
                : "#f5f5f7",
            fontWeight: 600,
            boxShadow:
              theme === "dark"
                ? "0 4px 12px rgba(0,0,0,0.4)"
                : "0 4px 12px rgba(0,0,0,0.2)",
            transition: "0.2s ease",
          }}
        >
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
}
