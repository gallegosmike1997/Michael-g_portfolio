export default function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="section-block">
      <div className="container">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <div className="section-header">
          <h2>{title}</h2>
          {intro ? <p>{intro}</p> : null}
        </div>
        {children}
      </div>
    </section>
  )
}
