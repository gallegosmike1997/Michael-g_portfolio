export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "40px",
        padding: "20px",
        textAlign: "center",
        fontSize: "0.85rem",
        color: "var(--text-muted)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        opacity: 0,
        animation: "fadeIn 1s ease forwards",
        animationDelay: "0.4s"
      }}
    >
      © Michael — Multi‑Disciplinary Engineer · Colorado Springs, CO  
      <br />
      Portfolio built with React · Dark/Light Metallic Theme
    </footer>
  );
}
