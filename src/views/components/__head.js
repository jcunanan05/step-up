import Head from 'next/head';
import '../../styles/app.scss';

const defaultData = {
  title: 'Step Up Now! Community Programs',
  description:
    'Step Up Now Community aims to help youth and newcomers. Contact us now!'
};

const GoogleVerifcation = () => (
  <meta
    name="google-site-verification"
    content="rvpV57YcjGmMsLLd5r2krZaf1k99b_45xqgP5fD2PdU"
  />
);

const ModifiedHead = ({
  title = defaultData.title,
  description = defaultData.description
}) => (
  <Head>
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content={description} />
    <GoogleVerifcation />
  </Head>
);

export default ModifiedHead;
