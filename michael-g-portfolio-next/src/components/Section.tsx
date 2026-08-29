"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
}

export default function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
}: SectionProps) {
  return (
    <motion.section
      id={id}
      className="section-block"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <div className="section-header">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        {children}
      </div>
    </motion.section>
  );
}
