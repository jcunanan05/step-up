import WhoWeAre from './WhoWeAre';
import Projects from './Projects';
import News from './News';
import Main from './Main';
import { createClient } from '../../../libraries/Contentful';
import LandingPageModel from './Model/LandingPage';
import PostsModel from './Model/Posts';

async function getInitialProps() {
  const client = createClient();
  const landingPage = await client.getEntries({ content_type: 'landingPage' });
  const posts = await client.getEntries({ content_type: 'projectPosts' });
  const entries = { landingPage, posts };

  return { entries };
}

const Index = ({ entries }) => {
  const LandingPage = new LandingPageModel().setEntries(entries.landingPage);
  const Posts = new PostsModel().setEntries(entries.posts);
  const { banner, whoWeAre, projects, news, sections } = LandingPage;

  return (
    <Main data={{ banner: banner[0], sections }}>
      <WhoWeAre data={whoWeAre[0]} />
      <Projects data={projects[0]} projects={Posts.projects} />
      <News data={news[0]} news={Posts.news} />
    </Main>
  );
};

Index.getInitialProps = getInitialProps;

export default Index;
