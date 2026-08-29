import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Systems() {
  return (
    <Section id="systems" title="Systems Engineering & Multi‑OS Workflows">
      <Card title="Multi‑OS Engineering">
        <p>
          I work across Windows, Linux (multiple distros), WSL2, and macOS to build and debug
          engineering environments.
        </p>
        <ul>
          <li>Environment setup and rebuilds</li>
          <li>Cross‑platform tooling and workflows</li>
          <li>Terminal‑centric development</li>
        </ul>
      </Card>

      <Card title="Environment & Stack Debugging">
        <p>
          I specialize in diagnosing complex dependency conflicts, server stack issues, and
          multi‑layered environment failures.
        </p>
        <ul>
          <li>Uvicorn, websockets, Python stack debugging</li>
          <li>Serial tools (PuTTY, ST‑Link)</li>
          <li>Log‑driven troubleshooting</li>
        </ul>
      </Card>

      <Card title="Systems Integration">
        <p>
          My systems work ensures that software, firmware, and hardware operate together under
          real‑world conditions.
        </p>
        <ul>
          <li>Hardware‑software integration testing</li>
          <li>Multi‑environment deployment workflows</li>
          <li>Performance and reliability tuning</li>
        </ul>
      </Card>
    </Section>
  );
}
