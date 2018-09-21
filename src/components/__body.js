import { Fragment } from 'react';
import Head from './__head';

const Body = ({ children }) => (
  <Fragment>
    <Head />

    { children }
  </Fragment>
);

export default Body;
