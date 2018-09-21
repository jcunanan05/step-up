import { Fragment } from 'react';
import Head from './__head';

const Body = ({ children }) => (
  <Fragment>
    <Head />

    <div className="App">{children}</div>
  </Fragment>
);

export default Body;
