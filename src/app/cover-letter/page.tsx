"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function CoverLetterPage() {
  return (
    <>
      <Header />
      <main className="cover-letter-page">
        <header className="cover-letter-hero">
          <p className="eyebrow">A personal note · Michael Gallegos</p>
          <h1>Building things that bring the pieces together.</h1>
          <p className="cover-letter-intro">
            I&apos;m a self-taught, multidisciplinary engineer who loves turning
            complicated ideas into things people can actually use. I&apos;m drawn
            to the space where software, electronics, and the physical world
            meet—and to the patient, hands-on work of making all of it work
            together.
          </p>
          <div className="cover-letter-capabilities" aria-label="Areas I can contribute">
            <span>Full-stack &amp; AI applications</span>
            <span>Embedded firmware &amp; STM32</span>
            <span>PCB design &amp; integration</span>
            <span>Robotics, drones &amp; flight tuning</span>
            <span>CAD &amp; rapid prototyping</span>
          </div>
        </header>

        <article className="cover-letter-story">
          <p>
            I didn&apos;t come to engineering through just one door. I&apos;ve
            learned by building—writing software, working with microcontrollers,
            designing boards, shaping parts in CAD, and testing ideas in the
            real world. Each discipline has taught me to look beyond the
            immediate task and ask how the whole system will behave for the
            person relying on it.
          </p>
          <p>
            That perspective is what I bring to a team. I can move between a
            user-facing application and the firmware or hardware beneath it, and
            I enjoy finding the point where those pieces connect. When something
            isn&apos;t working, I stay curious, work through the details, and keep
            learning until I understand the problem—not just the symptom.
          </p>

          <div className="cover-letter-capability-note">
            <p className="eyebrow">What I can contribute today</p>
            <p>
              I can build web applications with Python, React, Next.js, and
              FastAPI; integrate AI tools and models; develop STM32 firmware;
              design KiCad PCBs; and take robotics or drone projects from CAD
              and integration through testing. I&apos;m also comfortable
              debugging across Windows, Linux, and WSL2 environments.
            </p>
          </div>

          <p>
            I care about making useful things, being someone a team can count
            on, and staying open to what I still have to learn. I&apos;m looking
            for a place where I can contribute across disciplines, take
            ownership of meaningful problems, and grow alongside people who
            care about doing thoughtful work.
          </p>
          <p>
            Thank you for taking the time to learn a little about me. I&apos;d be
            glad to share more about my work and hear what your team is building.
          </p>
          <div className="cover-letter-signoff">
            <p>Warmly,</p>
            <p className="cover-letter-signature">Michael Gallegos</p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
