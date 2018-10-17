import Head from 'next/head';
import '../../styles/app.scss';

const defaultTitle = 'Step Up Now!';

const ModifiedHead = ({ title = defaultTitle }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  </Head>
);

export default ModifiedHead;
