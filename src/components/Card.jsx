import { colors } from "../theme/colors";

export default function Card({ title, children }) {
  return (
    <div style={{
      padding: "16px",
      borderRadius: "12px",
      background: `radial-gradient(circle at top left, ${colors.maroon}25, #050509)`,
      border: "1px solid rgba(255,255,255,0.06)"
    }}>
      <h3 style={{ color: colors.platinum }}>{title}</h3>
      <div style={{ color: colors.textMuted }}>{children}</div>
    </div>
  );
}
