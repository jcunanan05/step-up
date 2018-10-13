import WhoWeAre from './WhoWeAre';
import Projects from './Projects';
import News from './News';
import IndexContainer from './IndexContainer';
import { createClient } from '../../../libraries/Contentful';
import DataModel from './DataModel';

async function getInitialProps() {
  const client = createClient();
  const entries = await client.getEntries({
    content_type: ['landingPage']
  });
  return { entries };
}

const Index = ({ entries }) => {
  const LandingPage = new DataModel(entries);
  const { banner, whoWeAre, projects, news, sections } = LandingPage;
  return (
    <IndexContainer data={{ banner, sections }}>
      <WhoWeAre data={whoWeAre[0]} />
      <Projects data={projects[0]} />
      <News data={news[0]} />
    </IndexContainer>
  );
};

Index.getInitialProps = getInitialProps;

export default Index;
