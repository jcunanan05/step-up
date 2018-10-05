import processMarkdown from '../../../libraries/Marked';
import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';

const markdown = {
  title: `
    Who We Are
  `,
  content:
    'We are a new community that aims to help people to step up now, learn new things, be adventurous!'
};

const WhoWeAre = () => (
  <Section name="who-we-are">
    <Columns>
      <Column className="is-one-third">
        <h2 className="section__title title is-2">{markdown.title}</h2>
      </Column>
      <Column>
        <div
          className="content"
          dangerouslySetInnerHTML={{
            __html: processMarkdown(markdown.content)
          }}
        />
      </Column>
    </Columns>
  </Section>
);

export default WhoWeAre;
