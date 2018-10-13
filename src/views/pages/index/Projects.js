import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';
import ArticleBox from '../../components/Box/ArticleBox';
import Image from '../../components/Image';
import imageSources from './imageSources';

const Project = ({ title = '', content = '', image = '' }) => (
  <Column className="is-4">
    <ArticleBox title={title} image={image} content={content} />
  </Column>
);

const Projects = ({ data }) => {
  const { title } = data;
  return (
    <Section name={title}>
      <h2 className="section__title title is-2">{title}</h2>

      <Columns>
        <Project
          image={
            <Image
              className="is-5by3"
              alt="Marching Band"
              src={imageSources.marchingBand3}
            />
          }
          title="Marching Band"
          content="Step Up Now is planning to make a lively Marching band!"
        />
      </Columns>
    </Section>
  );
};

export default Projects;
