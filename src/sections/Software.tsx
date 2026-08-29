import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Software() {
  return (
    <Section id="software" title="Software & Full‑Stack Engineering">
      <Card title="Re‑Hardwire — AI Application">
        <ul>
          <li>Python + Streamlit full‑stack architecture</li>
          <li>ONNX TTS pipeline</li>
          <li>Custom routing engine</li>
          <li>WSL2 environment rebuilds</li>
        </ul>
      </Card>

      <Card title="Python Engineering">
        <ul>
          <li>CLI tools</li>
          <li>Server stack debugging</li>
          <li>Dependency isolation</li>
        </ul>
      </Card>

      <Card title="Rust & Web Development">
        <ul>
          <li>Rust CLI experiments</li>
          <li>Web projects</li>
          <li>Android prototypes</li>
        </ul>
      </Card>
    </Section>
  );
}
