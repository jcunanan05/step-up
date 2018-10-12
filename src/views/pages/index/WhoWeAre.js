import processMarkdown from '../../../libraries/Marked';
import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';
import { landingPage } from './defaultData';

const WhoWeAre = () => {
  const { title, content } = landingPage[0];
  return (
    <Section name={title}>
      <Columns>
        <Column className="is-one-third">
          <h2 className="section__title title is-2">{title}</h2>
        </Column>
        <Column>
          <div
            className="content"
            dangerouslySetInnerHTML={{
              __html: processMarkdown(content)
            }}
          />
        </Column>
      </Columns>
    </Section>
  );
};

export default WhoWeAre;
