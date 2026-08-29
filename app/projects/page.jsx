"use client";

import Section from "../../components/Section";
import Card from "../../components/Card";
import { projects } from "../../data/projects";

export default function ProjectsPage() {
  return (
    <Section id="projects" title="Engineering Projects">
      {Object.entries(projects).map(([slug, project]) => (
        <Card key={slug} title={project.title}>
          <p>{project.description}</p>
          <a href={`/projects/${slug}`} style={{ fontWeight: 600 }}>
            View Project →
          </a>
        </Card>
      ))}
    </Section>
  );
}
