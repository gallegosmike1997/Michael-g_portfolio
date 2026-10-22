import Link from "next/link";

const projects = [
  { name: "Re-Hardwire", category: "AI development", problem: "Unhealthy digital habits lack structured tools for behavioral rewiring.", solution: "AI-assisted desktop application combining habit tracking, behavioral science, and LLM coaching.", stack: "Python · FastAPI · Local LLM · Memory layer", challenges: "Offline AI integration, memory persistence, cross-platform deployment", results: "GitHub milestones, community interest, Kickstarter preparation" },
  { name: "Super AI Stack", category: "AI infrastructure", problem: "Developers need one clear interface for working across model providers.", solution: "A model-routing architecture connecting a Next.js interface to gateway APIs and provider adapters.", stack: "Next.js · TypeScript · Gateway API · LLM routing", challenges: "Provider abstraction, streaming responses, resilient fallbacks", results: "A foundation for rapid experimentation and reusable AI features" },
  { name: "Custom Drone Builds", category: "Robotics & embedded", problem: "Off-the-shelf platforms limit payload, repairability, and control.", solution: "Designed and tuned custom airframes across mechanical, electrical, and firmware layers.", stack: "CAD · Flight controllers · ESCs · Embedded firmware", challenges: "Weight distribution, signal reliability, tuning, iterative prototyping", results: "Repeatable prototypes with an end-to-end engineering workflow" },
  { name: "Embedded PCB Designs", category: "Embedded systems", problem: "Prototype concepts need reliable sensor and microcontroller integration.", solution: "KiCad-designed boards for control, sensing, and rapid hardware iteration.", stack: "KiCad · Microcontrollers · Sensors · C/C++", challenges: "Power distribution, signal integrity, enclosure constraints", results: "Production-minded boards ready for firmware and bench testing" },
];

export default function Projects() {
  return <section className="projects-page" id="projects">
    <div className="projects-intro"><div className="section-kicker">Engineering projects</div><h1>Case studies from software to the shop floor.</h1><p>Explore the problem, architecture, constraints, and outcomes behind the systems I build.</p></div>
    <div className="project-filters"><span className="filter-active">All work</span><span>AI development</span><span>Embedded</span><span>Robotics</span><span>Manufacturing</span></div>
    <div className="case-study-list">{projects.map((project, index) => <article className="case-study" key={project.name}><div className="case-number">0{index + 1}</div><div className="case-content"><div className="case-meta">{project.category}</div><h2>{project.name}</h2><div className="case-grid"><div><h3>Problem</h3><p>{project.problem}</p></div><div><h3>Solution</h3><p>{project.solution}</p></div><div><h3>Technical challenges</h3><p>{project.challenges}</p></div><div><h3>Results</h3><p>{project.results}</p></div></div><div className="case-footer"><span>{project.stack}</span><Link href="/contact">Discuss this project →</Link></div></div></article>)}</div>
  </section>;
}
