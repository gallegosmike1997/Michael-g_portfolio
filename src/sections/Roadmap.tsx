import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Roadmap() {
  return (
    <Section id="roadmap" title="Engineering Roadmap & Future Goals">
      <Card title="Technical Growth Areas">
        <p>
          I treat engineering as an evolving system — always expanding into deeper control, smarter AI,
          and more integrated hardware/software stacks.
        </p>
        <ul>
          <li>Advanced robotics control theory</li>
          <li>RAG + embeddings</li>
          <li>Vision‑based AI systems</li>
          <li>Complex PCB design</li>
          <li>Rust systems programming</li>
          <li>Cloud deployment pipelines</li>
          <li>End‑to‑end hardware/software platforms</li>
        </ul>
      </Card>
    </Section>
  );
}
