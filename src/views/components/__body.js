import { Fragment } from 'react';

const Body = ({ children, className = '' }) => (
  <Fragment>
    <div className={`App ${className}`}>{children}</div>
  </Fragment>
);

export default Body;
