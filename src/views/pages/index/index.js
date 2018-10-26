import { createClient } from '../../../libraries/Contentful';
import Main from './Main';

async function getInitialProps() {
  const client = createClient();
  const landingPage = await client.getEntries({ content_type: 'landingPage' });

  const news = await client.getEntries({
    content_type: 'projectPosts',
    'fields.type': 'news',
    include: 3
  });
  const projects = await client.getEntries({
    content_type: 'projectPosts',
    'fields.type': 'project',
    include: 3
  });

  return { landingPage, news, projects };
}

const Index = props => <Main {...props} />;

Index.getInitialProps = getInitialProps;

export default Index;
