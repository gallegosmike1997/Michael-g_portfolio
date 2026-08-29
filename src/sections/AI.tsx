import Section from "@/components/Section";
import Card from "@/components/Card";

export default function AI() {
  return (
    <Section id="ai" title="AI & Model Integration">
      <Card title="ONNX TTS Pipeline">
        <p>
          I integrate ONNX‑based text‑to‑speech models into full‑stack applications, optimizing
          runtime performance and audio quality.
        </p>
        <ul>
          <li>Model loading and runtime configuration</li>
          <li>Audio generation and output handling</li>
          <li>Latency optimization and pipeline tuning</li>
          <li>Integration with Python and Streamlit</li>
        </ul>
      </Card>

      <Card title="AI Engineering & Multi‑Modal Systems">
        <p>
          My AI work focuses on integrating models into real applications, designing routing logic,
          and building user‑centric AI features.
        </p>
        <ul>
          <li>Prompt engineering and model routing</li>
          <li>Multi‑modal integration (audio, text, UI)</li>
          <li>Performance profiling and optimization</li>
        </ul>
      </Card>

      <Card title="Future AI Expansion">
        <p>
          I'm actively expanding into deeper AI domains to support more advanced engineering tools.
        </p>
        <ul>
          <li>Embeddings and RAG pipelines</li>
          <li>Vision‑based AI systems</li>
          <li>Local inference optimization</li>
        </ul>
      </Card>
    </Section>
  );
}
