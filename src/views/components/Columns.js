export const Column = ({ children, className = '' }) => (
  <div className={`column ${className}`}>{children}</div>
);

const Columns = ({ children, className = '' }) => (
  <div className={`columns ${className}`}>{children}</div>
);

export default Columns;
