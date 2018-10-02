import { Fragment } from 'react';
import Head from './__head';

const Body = ({ children, className = '' }) => (
  <Fragment>
    <Head />

    <div className={`App ${className}`}>{children}</div>
  </Fragment>
);

export default Body;
