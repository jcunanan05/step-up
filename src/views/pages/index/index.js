import WhoWeAre from './WhoWeAre';
import UpcomingProjects from './UpcomingProjects';
import News from './News';
import IndexContainer from './IndexContainer';
import { banner, landingPage } from './defaultData';
import { createClient } from '../../../libraries/Contentful';

const defaultData = {
  banner,
  landingPage
};

const Index = ({
  banner = defaultData.banner,
  landingPage = defaultData.landingPage
}) => (
  <IndexContainer banner={banner} landingPage={landingPage}>
    <WhoWeAre />
    <UpcomingProjects />
    <News />
  </IndexContainer>
);

Index.getInitialProps = async () => {
  const client = createClient();

  const entries = await client.getEntries({
    content_type: ['landingPage', 'banner']
  });

  const banner = entries.items.filter(
    entry => entry.sys.contentType.sys.id === 'banner'
  );

  const landingPage = entries.items.filter(
    entry => entry.sys.contentType.sys.id === 'landingPage'
  );

  return {
    banner: banner[0].fields,
    landingPage: landingPage.map(entry => entry.fields)
  };
};

export default Index;
