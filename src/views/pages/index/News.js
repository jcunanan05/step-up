import processMarkdown from '../../../libraries/Marked';
import Section from '../../components/Section';
import { landingPage } from './defaultData';

const News = () => {
  const { title, content } = landingPage[2];
  return (
    <Section name={title}>
      <h2 className="section__title title is-2">{title}</h2>
      <div
        className="content"
        dangerouslySetInnerHTML={{
          __html: processMarkdown(content)
        }}
      />
    </Section>
  );
};

export default News;
