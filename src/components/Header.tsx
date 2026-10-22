"use client";

import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";

export default function Header() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("Header must be rendered inside ThemeProvider");
  }

  const { theme, toggleTheme } = themeContext;
  const isDark = theme === "dark";

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 32px",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        background: isDark
          ? "rgba(5,5,9,0.55)"
          : "rgba(240,240,245,0.55)",
      }}
    >
      {/* LEFT SIDE — PHOTO, NAME + TITLE */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-dL8RzKxNj0yRnZBlTG037OqFba3qNJ.jpg"
          alt="Michael Gallegos"
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            objectFit: "cover",
            objectPosition: "center 28%",
            border: isDark ? "2px solid #c9a46b" : "2px solid #7b1e3b",
            boxShadow: isDark
              ? "0 4px 16px rgba(0,0,0,0.35)"
              : "0 4px 16px rgba(0,0,0,0.18)",
          }}
        />
        <div>
          <h1
          style={{
            margin: 0,
            fontSize: "2.2rem",
            fontWeight: 800,
            letterSpacing: "0.07em",
            color: isDark ? "#d7d7e0" : "#1a1a1f",
          }}
        >
          Michael Gallegos
        </h1>

        <p
          style={{
            margin: 0,
            fontSize: "1rem",
            color: isDark ? "#a0a0b3" : "#3a3a45",
          }}
        >
          Multi‑Disciplinary Engineer
        </p>
        </div>
      </div>

      {/* RIGHT SIDE — NAVIGATION + THEME TOGGLE */}
      <nav
        style={{
          display: "flex",
          gap: "16px",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            fontWeight: 600,
            color: isDark ? "#d7d7e0" : "#1a1a1f",
            textDecoration: "none",
          }}
        >
          Home
        </a>

        <a
          href="/cover-letter"
          style={{
            fontWeight: 600,
            color: isDark ? "#d7d7e0" : "#1a1a1f",
            textDecoration: "none",
          }}
        >
          Cover Letter
        </a>

        <a
          href="/resume"
          style={{
            fontWeight: 600,
            color: isDark ? "#d7d7e0" : "#1a1a1f",
            textDecoration: "none",
          }}
        >
          Resume
        </a>

        <a
          href="/projects"
          style={{
            fontWeight: 600,
            color: isDark ? "#d7d7e0" : "#1a1a1f",
            textDecoration: "none",
          }}
        >
          Projects
        </a>

        <a
          href="/contact"
          style={{
            fontWeight: 600,
            color: isDark ? "#d7d7e0" : "#1a1a1f",
            textDecoration: "none",
          }}
        >
          Contact
        </a>

        {/* THEME TOGGLE BUTTON */}
        <button
          onClick={toggleTheme}
          style={{
            padding: "6px 14px",
            borderRadius: "999px",
            border: "none",
            cursor: "pointer",
            background: isDark ? "#c9a46b" : "#7b1e3b",
            color: isDark ? "#050509" : "#f5f5f7",
            fontWeight: 600,
            boxShadow: isDark
              ? "0 4px 12px rgba(0,0,0,0.4)"
              : "0 4px 12px rgba(0,0,0,0.2)",
            transition: "0.2s ease",
          }}
        >
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>
      </nav>
    </header>
  );
}
