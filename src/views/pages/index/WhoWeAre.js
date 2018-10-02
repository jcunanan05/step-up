import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';

const WhoWeAre = () => (
  <Section name="who-we-are" className="content">
    <Columns>
      <Column className="is-one-third">
        <h2 className="section__title title is-2">Who We Are</h2>
      </Column>
      <Column>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias placeat
          vel repellendus voluptates temporibus assumenda dolore unde! Tempore,
          inventore perspiciatis quia fugit cumque, sed pariatur sunt
          repellendus voluptatibus placeat commodi?
        </p>
      </Column>
    </Columns>
  </Section>
);

export default WhoWeAre;
