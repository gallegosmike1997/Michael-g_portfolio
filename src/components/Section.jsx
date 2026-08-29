import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, intro, children }) {
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
  )
}
