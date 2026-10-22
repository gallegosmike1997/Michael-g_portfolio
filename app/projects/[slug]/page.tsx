import Link from "next/link";
import { notFound } from "next/navigation";
import { projectCaseStudies } from "@/data/projects";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectCaseStudies.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projectCaseStudies.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <>
      <Header />
      <main className="case-study-page">
      <Link className="text-link" href="/projects">← Back to projects</Link>
      <div className="case-study-hero">
        <div className="section-kicker">{project.category}</div>
        <h1>{project.name}</h1>
        <p>{project.summary}</p>
        <div className="case-tags"><span>{project.status}</span>{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        {project.images && <div className="case-visual-grid">{project.images.map((image) => <figure className="case-visual" key={image.src}><img src={image.src} alt={image.alt} /><figcaption>Supplied visual evidence for {project.name}.</figcaption></figure>)}</div>}
      </div>
      <div className="detail-grid">
        <section><div className="section-kicker">Problem</div><h2>Why this work exists</h2><p>{project.problem}</p></section>
        <section><div className="section-kicker">Observed approach</div><h2>How it is framed</h2><p>{project.approach}</p></section>
        <section><div className="section-kicker">Evidence</div><h2>What is verified</h2><p>{project.evidence}</p></section>
        <section><div className="section-kicker">Roadmap</div><h2>Next engineering step</h2><p>{project.nextStep}</p></section>
      </div>
      </main>
      <Footer />
    </>
  );
}
