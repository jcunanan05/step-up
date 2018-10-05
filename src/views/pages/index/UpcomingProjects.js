import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';
import Image from '../../components/Image';
import imageSources from './imageSources';

const Project = ({ title = '', content = '', image = '' }) => (
  <article className="box project">
    {image}
    <div className="project__body">
      <h2 className="title">{title}</h2>
      <p>{content}</p>
    </div>
  </article>
);

const UpcomingProjects = () => (
  <Section name="upcoming-projects">
    <h2 className="section__title title is-2">Upcoming Projects</h2>
    <Columns>
      <Column className="is-4">
        <Project
          image={
            <Image
              className="is-5by3"
              alt="Marching Band"
              src={imageSources.marchingBand3}
            />
          }
          title="Marching Band"
          content={
            'The community is planning to make a lively and wonderful band.'
          }
        />
      </Column>
    </Columns>
  </Section>
);

export default UpcomingProjects;
