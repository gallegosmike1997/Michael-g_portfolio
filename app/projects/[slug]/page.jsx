"use client";

import Section from "../../../components/Section";
import Card from "../../../components/Card";
import Image from "next/image";
import { projects } from "../../../data/projects";

export default function ProjectPage({ params }) {
  const { slug } = params;
  const project = projects[slug];

  if (!project) {
    return (
      <Section id="project" title="Project Not Found">
        <Card title="Error">
          <p>The project you are looking for does not exist.</p>
        </Card>
      </Section>
    );
  }

  return (
    <Section id="project" title={project.title}>
      <Card title="Overview">
        <p>{project.description}</p>
      </Card>

      <Card title="Technical Breakdown">
        <ul>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </Card>

      <Card title="Images">
        {project.images.map((src) => (
          <Image
            key={src}
            src={src}
            alt={project.title}
            width={800}
            height={600}
            style={{ borderRadius: "12px", marginBottom: "20px" }}
          />
        ))}
      </Card>
    </Section>
  );
}
