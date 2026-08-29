"use client";

import { useContext } from "react";
import { ThemeContext } from "@/theme/ThemeContext";
import { motion } from "framer-motion";

export default function Hero() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme } = context;

  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
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
      }}
    >
      <h2
        style={{
          fontSize: "2rem",
          marginBottom: "12px",
          color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
          letterSpacing: "0.05em",
        }}
      >
        I design, build, and integrate complete systems.
      </h2>

      <p
        style={{
          fontSize: "1rem",
          color: theme === "dark" ? "#a0a0b3" : "#3a3a45",
          marginBottom: "20px",
          maxWidth: "800px",
        }}
      >
        Full‑stack apps, embedded systems, drones, PCBs, AI pipelines, and
        mechanical assemblies — engineered end‑to‑end with reliability,
        clarity, and real‑world performance.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginTop: "20px",
        }}
      >
        <a
          href="#software"
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            background: theme === "dark" ? "#2a2a3a" : "#e0e0e8",
            color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
            textDecoration: "none",
            fontSize: "0.95rem",
            border: "1px solid rgba(255,255,255,0.1)",
            cursor: "pointer",
            transition: "all 0.3s",
          }}
        >
          Explore My Work →
        </a>
      </div>
    </motion.section>
  );
}
