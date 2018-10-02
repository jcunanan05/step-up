const Section = ({ children, className = '', name = '' }) => (
  <section id={name} className={`section ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export default Section;
