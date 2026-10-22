import Link from "next/link";
import { projectCaseStudies } from "@/data/projects";

export default function Projects() {
  return (
    <section className="projects-page" id="projects">
      <div className="projects-intro"><div className="section-kicker">Engineering projects</div><h1>Systems work, documented with evidence.</h1><p>Six projects across AI products, developer tooling, embedded systems, product design, and this portfolio. Each case study separates verified implementation from open questions.</p></div>
      <div className="project-filters"><span className="filter-active">All work</span><span>AI products</span><span>Developer tooling</span><span>Embedded</span><span>Product design</span></div>
      <div className="case-study-list">{projectCaseStudies.map((project, index) => <article className="case-study" key={project.slug}><div className="case-number">{String(index + 1).padStart(2, "0")}</div><div className="case-content"><div className="case-meta">{project.category} · {project.status}</div><h2>{project.name}</h2><p className="case-summary">{project.summary}</p><div className="case-grid"><div><h3>Problem</h3><p>{project.problem}</p></div><div><h3>Evidence</h3><p>{project.evidence}</p></div></div><div className="case-footer"><span>{project.stack.join(" · ")}</span><Link href={`/projects/${project.slug}`}>Read case study →</Link></div></div></article>)}</div>
    </section>
  );
}
