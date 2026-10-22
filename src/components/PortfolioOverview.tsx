import Link from "next/link";

const metrics = [
  ["10+", "software projects"],
  ["5+", "AI integrations"],
  ["3D", "printing experience"],
  ["CNC", "operations experience"],
];

const skills = [
  ["Python", "Advanced"],
  ["AI integration", "Advanced"],
  ["Next.js", "Intermediate"],
  ["FastAPI", "Intermediate"],
  ["Embedded systems", "Intermediate"],
  ["CAD & manufacturing", "Advanced"],
];

export default function PortfolioOverview() {
  return (
    <>
      <section className="overview-hero">
        <div className="eyebrow">AI developer / systems engineer</div>
        <h1>Engineering intelligent systems that hold up in the real world.</h1>
        <p className="hero-copy">
          I&apos;m Michael Gallegos, a multidisciplinary engineer working across AI-powered software,
          embedded systems, robotics, automation, and manufacturing technologies.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/projects">View engineering projects</Link>
          <a className="button button-secondary" href="/resume">Download resume</a>
        </div>
        <div className="hero-status"><span className="status-dot" /> Currently building: Re-Hardwire, Ampli-AI-Fund, Super AI Stack</div>
      </section>

      <section className="overview-section" id="at-a-glance">
        <div className="section-kicker">At a glance</div>
        <div className="metrics-grid">{metrics.map(([value, label]) => <div className="metric" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div>
      </section>

      <section className="overview-section split-section" id="about">
        <div><div className="section-kicker">Systems perspective</div><h2>Practical experience, modern tools.</h2></div>
        <div><p>I combine field experience with software development to create tools that solve concrete problems. My work moves from user need to architecture, prototype, test, and deployment.</p><Link className="text-link" href="/projects">Read the case studies →</Link></div>
      </section>

      <section className="overview-section" id="skills">
        <div className="section-kicker">Skills matrix</div>
        <div className="skills-grid">{skills.map(([skill, level]) => <div className="skill-row" key={skill}><span>{skill}</span><span className="skill-level">{level}</span></div>)}</div>
      </section>

      <section className="overview-section" id="timeline">
        <div className="section-kicker">Engineering path</div>
        <div className="timeline"><span>CNC operations</span><i>→</i><span>Industrial systems</span><i>→</i><span>Field technician</span><i>→</i><span>Software & AI</span><i>→</i><span>Founder projects</span></div>
      </section>
    </>
  );
}
