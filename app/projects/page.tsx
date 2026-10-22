"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Projects from "@/sections/Projects";
import ProjectMediaUploader from "@/components/ProjectMediaUploader";

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main>
        <Projects />
        <ProjectMediaUploader />
      </main>
      <Footer />
    </>
  );
}
