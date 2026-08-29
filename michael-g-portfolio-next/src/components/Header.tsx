"use client";

import { useContext, useState } from "react";
import { ThemeContext } from "@/theme/ThemeContext";
import Image from "next/image";

export default function Header() {
  const context = useContext(ThemeContext);
  if (!context) return null;

  const { theme, toggleTheme } = context;
  const [downloadOpen, setDownloadOpen] = useState(false);

  const handleDownload = (type: string) => {
    // Placeholder for PDF generation/download
    // In production, these would be actual PDF files
    alert(`Download ${type} - Coming soon!\n\nPDFs would be generated server-side using libraries like jsPDF or react-pdf`);
  };

  const navLinkStyle = {
    color: theme === "dark" ? "#c9a46b" : "#7b1e3b",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: "500",
    transition: "all 0.3s ease",
    position: "relative" as const,
    paddingBottom: "4px",
    cursor: "pointer",
    "&:hover": {
      opacity: 0.7,
    },
  };

  const navLinkHoverStyle = {
    ...navLinkStyle,
    opacity: 0.7,
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 40px",
        borderBottom: `1px solid ${theme === "dark" ? "rgba(201, 164, 107, 0.15)" : "rgba(123, 30, 59, 0.15)"}`,
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backdropFilter: "blur(12px)",
        background:
          theme === "dark"
            ? "linear-gradient(to bottom, rgba(5,5,9,0.8), rgba(5,5,9,0.5))"
            : "linear-gradient(to bottom, rgba(240,240,245,0.95), rgba(240,240,245,0.85))",
        boxShadow: theme === "dark"
          ? "0 4px 20px rgba(0,0,0,0.3)"
          : "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      {/* Left: Profile Photo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          minWidth: "120px",
        }}
      >
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "50%",
            overflow: "hidden",
            border: `3px solid ${theme === "dark" ? "#c9a46b" : "#7b1e3b"}`,
            boxShadow: theme === "dark"
              ? "0 8px 24px rgba(201, 164, 107, 0.2)"
              : "0 8px 24px rgba(123, 30, 59, 0.2)",
            background: theme === "dark"
              ? "linear-gradient(135deg, rgba(123,30,59,0.3), rgba(201,164,107,0.1))"
              : "linear-gradient(135deg, rgba(123,30,59,0.1), rgba(201,164,107,0.2))",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "28px",
            fontWeight: "700",
            color: theme === "dark" ? "#c9a46b" : "#7b1e3b",
          }}
        >
          MG
        </div>
      </div>

      {/* Center: Brand */}
      <div style={{ flex: 1, textAlign: "center", padding: "0 40px" }}>
        <h1
          style={{
            margin: "0 0 4px 0",
            fontSize: "2.2rem",
            fontWeight: "800",
            letterSpacing: "0.02em",
            background: theme === "dark"
              ? "linear-gradient(135deg, #c9a46b 0%, #d7d7e0 100%)"
              : "linear-gradient(135deg, #7b1e3b 0%, #5a1428 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            transition: "all 0.3s ease",
          }}
        >
          Michael Gallegos
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "0.95rem",
            fontWeight: "500",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: theme === "dark" ? "#c9a46b" : "#7b1e3b",
            opacity: 0.8,
          }}
        >
          Multi‑Disciplinary Engineer
        </p>
      </div>

      {/* Right: Navigation & Controls */}
      <div
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
          justifyContent: "flex-end",
          minWidth: "500px",
        }}
      >
        {/* Navigation */}
        <nav
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
        >
          <a
            href="/cover-letter"
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.textDecoration = "none";
            }}
            style={{
              color: theme === "dark" ? "#c9a46b" : "#7b1e3b",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "500",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            Cover Letter
          </a>

          <a
            href="/resume"
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.textDecoration = "none";
            }}
            style={{
              color: theme === "dark" ? "#c9a46b" : "#7b1e3b",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "500",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            Resume
          </a>

          <a
            href="/#projects"
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.textDecoration = "none";
            }}
            style={{
              color: theme === "dark" ? "#c9a46b" : "#7b1e3b",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "500",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            Projects
          </a>

          <a
            href="/#software"
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.textDecoration = "none";
            }}
            style={{
              color: theme === "dark" ? "#c9a46b" : "#7b1e3b",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "500",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            Work
          </a>

          <a
            href="/#contact"
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.7";
              e.currentTarget.style.textDecoration = "underline";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.textDecoration = "none";
            }}
            style={{
              color: theme === "dark" ? "#c9a46b" : "#7b1e3b",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: "500",
              transition: "all 0.3s ease",
              cursor: "pointer",
            }}
          >
            Contact
          </a>
        </nav>

        {/* Download Button with Dropdown */}
        <div style={{ position: "relative" }}>
          <button
            onClick={() => setDownloadOpen(!downloadOpen)}
            style={{
              background: theme === "dark"
                ? "linear-gradient(135deg, #c9a46b 0%, #a37d4a 100%)"
                : "linear-gradient(135deg, #7b1e3b 0%, #5a1428 100%)",
              border: "none",
              borderRadius: "8px",
              padding: "10px 18px",
              cursor: "pointer",
              color: theme === "dark" ? "#050509" : "#f5f5f7",
              fontSize: "0.9rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              boxShadow: theme === "dark"
                ? "0 4px 12px rgba(201, 164, 107, 0.3)"
                : "0 4px 12px rgba(123, 30, 59, 0.3)",
              transform: downloadOpen ? "scale(1.05)" : "scale(1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = theme === "dark"
                ? "0 8px 20px rgba(201, 164, 107, 0.4)"
                : "0 8px 20px rgba(123, 30, 59, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = theme === "dark"
                ? "0 4px 12px rgba(201, 164, 107, 0.3)"
                : "0 4px 12px rgba(123, 30, 59, 0.3)";
            }}
          >
            📥 Download
          </button>

          {/* Dropdown Menu */}
          {downloadOpen && (
            <div
              style={{
                position: "absolute",
                top: "48px",
                right: 0,
                background: theme === "dark" ? "#151520" : "#ffffff",
                border: `1px solid ${theme === "dark" ? "rgba(201, 164, 107, 0.2)" : "rgba(123, 30, 59, 0.2)"}`,
                borderRadius: "12px",
                boxShadow: theme === "dark"
                  ? "0 12px 32px rgba(0,0,0,0.4)"
                  : "0 12px 32px rgba(0,0,0,0.15)",
                overflow: "hidden",
                zIndex: 1001,
                animation: "slideDown 0.2s ease",
              }}
            >
              <button
                onClick={() => {
                  handleDownload("Portfolio PDF");
                  setDownloadOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  background: "transparent",
                  border: "none",
                  color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  borderBottom: `1px solid ${theme === "dark" ? "rgba(201, 164, 107, 0.1)" : "rgba(123, 30, 59, 0.1)"}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme === "dark"
                    ? "rgba(201, 164, 107, 0.1)"
                    : "rgba(123, 30, 59, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                📄 Full Portfolio
              </button>
              <button
                onClick={() => {
                  handleDownload("Resume PDF");
                  setDownloadOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  background: "transparent",
                  border: "none",
                  color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                  borderBottom: `1px solid ${theme === "dark" ? "rgba(201, 164, 107, 0.1)" : "rgba(123, 30, 59, 0.1)"}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme === "dark"
                    ? "rgba(201, 164, 107, 0.1)"
                    : "rgba(123, 30, 59, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                📋 Resume
              </button>
              <button
                onClick={() => {
                  handleDownload("Cover Letter PDF");
                  setDownloadOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  background: "transparent",
                  border: "none",
                  color: theme === "dark" ? "#d7d7e0" : "#1a1a1f",
                  fontSize: "0.9rem",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = theme === "dark"
                    ? "rgba(201, 164, 107, 0.1)"
                    : "rgba(123, 30, 59, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                }}
              >
                ✉️ Cover Letter
              </button>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: theme === "dark"
              ? "linear-gradient(135deg, rgba(201,164,107,0.2), rgba(201,164,107,0.05))"
              : "linear-gradient(135deg, rgba(123,30,59,0.2), rgba(123,30,59,0.05))",
            border: `1.5px solid ${theme === "dark" ? "rgba(201, 164, 107, 0.3)" : "rgba(123, 30, 59, 0.3)"}`,
            borderRadius: "10px",
            padding: "10px 14px",
            cursor: "pointer",
            color: theme === "dark" ? "#c9a46b" : "#7b1e3b",
            fontSize: "1.1rem",
            fontWeight: "600",
            transition: "all 0.3s ease",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = theme === "dark"
              ? "0 4px 12px rgba(201, 164, 107, 0.2)"
              : "0 4px 12px rgba(123, 30, 59, 0.2)";
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "none";
            e.currentTarget.style.transform = "scale(1)";
          }}
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </header>
  );
}
