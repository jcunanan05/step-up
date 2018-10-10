import { kebabCase } from '../../helpers';

const Section = ({ children, className = '', name = '' }) => (
  <section
    id={kebabCase(name.toLowerCase())}
    className={`section ${className}`}
  >
    <div className="container">{children}</div>
  </section>
);

export default Section;
