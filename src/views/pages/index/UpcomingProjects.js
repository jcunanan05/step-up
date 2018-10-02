import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';

const UpcomingProjects = () => (
  <Section name="upcoming-projects" className="content">
    <h2 className="section__title title is-2">Upcoming Projects</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias placeat vel
      repellendus voluptates temporibus assumenda dolore unde! Tempore,
      inventore perspiciatis quia fugit cumque, sed pariatur sunt repellendus
      voluptatibus placeat commodi?
    </p>

    <Columns>
      <Column className="is-4">
        <article className="box content">
          <h2 className="title">Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptas molestiae, omnis rerum voluptatum rem recusandae et harum
            eos mollitia velit itaque, soluta ducimus, veniam illum porro
            asperiores. Animi, eveniet.
          </p>
        </article>
      </Column>
      <Column className="is-4">
        <article className="box content">
          <h2 className="title">Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptas molestiae, omnis rerum voluptatum rem recusandae et harum
            eos mollitia velit itaque, soluta ducimus, veniam illum porro
            asperiores. Animi, eveniet.
          </p>
        </article>
      </Column>
      <Column className="is-4">
        <article className="box content">
          <h2 className="title">Title</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptas molestiae, omnis rerum voluptatum rem recusandae et harum
            eos mollitia velit itaque, soluta ducimus, veniam illum porro
            asperiores. Animi, eveniet.
          </p>
        </article>
      </Column>
    </Columns>
  </Section>
);

export default UpcomingProjects;
