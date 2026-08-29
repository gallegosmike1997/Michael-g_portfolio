"use client";

import { useContext } from "react";
import { ThemeContext } from "@/theme/ThemeContext";

export default function Header() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme, toggleTheme } = context;

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
          Michael Gallegos
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
          gap: "24px",
          alignItems: "center",
        }}
      >
        <a
          href="#hero"
          style={{
            color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
            textDecoration: "none",
            fontSize: "0.95rem",
            transition: "color 0.3s",
          }}
        >
          Work
        </a>
        <a
          href="#projects"
          style={{
            color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
            textDecoration: "none",
            fontSize: "0.95rem",
            transition: "color 0.3s",
          }}
        >
          Projects
        </a>
        <a
          href="#contact"
          style={{
            color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
            textDecoration: "none",
            fontSize: "0.95rem",
            transition: "color 0.3s",
          }}
        >
          Contact
        </a>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: theme === "dark" ? "#2a2a3a" : "#e0e0e8",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "8px",
            padding: "8px 12px",
            cursor: "pointer",
            color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
            fontSize: "0.9rem",
          }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}
