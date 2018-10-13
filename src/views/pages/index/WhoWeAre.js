import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';
import MarkdownContent from '../../components/MarkdownContent';

const WhoWeAre = ({ data }) => {
  const { title, content } = data;
  return (
    <Section name={title}>
      <Columns>
        <Column className="is-one-third">
          <h2 className="section__title title is-2">{title}</h2>
        </Column>
        <Column>
          <MarkdownContent content={content} />
        </Column>
      </Columns>
    </Section>
  );
};

export default WhoWeAre;
