"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "2.4rem",
          fontWeight: 800,
          marginBottom: "20px",
        }}
      >
        Contact Me
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
          }}
        />

        <textarea
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={6}
          style={{
            padding: "12px",
            borderRadius: "8px",
            border: "1px solid #444",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "12px 20px",
            borderRadius: "999px",
            border: "none",
            background: "#7b1e3b",
            color: "#fff",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      {status === "success" && (
        <p style={{ marginTop: "20px", color: "green", fontWeight: 600 }}>
          Message sent successfully!
        </p>
      )}

      {status === "error" && (
        <p style={{ marginTop: "20px", color: "red", fontWeight: 600 }}>
          Failed to send message.
        </p>
      )}
    </section>
  );
}
-