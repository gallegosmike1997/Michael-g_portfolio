import Section from "@/components/Section";
import Card from "@/components/Card";

export default function About() {
  return (
    <Section id="about" title="About Me">
      <Card title="Who I Am">
        <p>
          I'm a multi‑disciplinary engineer who builds complete systems — software, hardware,
          robotics, embedded firmware, electrical circuits, and mechanical assemblies. My work
          blends full‑stack development, AI integration, microcontroller engineering, drone
          design, PCB prototyping, and additive manufacturing.
        </p>
      </Card>

      <Card title="How I Work">
        <p>
          I approach engineering as a unified discipline. Whether I'm designing a PCB, tuning
          a flight controller, building an AI pipeline, or debugging a multi‑OS environment,
          I focus on reliability, clarity, and real‑world performance.
        </p>
      </Card>

      <Card title="What Drives Me">
        <p>
          I love building tools that solve real problems — systems that feel engineered,
          intentional, and deeply integrated. I thrive in environments where software,
          hardware, and AI intersect.
        </p>
      </Card>
    </Section>
  );
}
