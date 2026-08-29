import Section from "@/components/Section";
import Card from "@/components/Card";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <Card title="Get in Touch">
        <p>
          I'm always open to engineering collaborations, technical discussions, or project
          opportunities. Reach out anytime.
        </p>

        <ul>
          <li>
            Email: <strong>your-email@example.com</strong>
          </li>
          <li>
            GitHub: <strong>github.com/yourusername</strong>
          </li>
          <li>Location: Colorado Springs, CO</li>
        </ul>
      </Card>
    </Section>
  );
}
