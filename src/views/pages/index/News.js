import processMarkdown from '../../../libraries/Marked';
import Section from '../../components/Section';
import { sections } from './data';

const News = () => {
  const { title, content } = sections[2];
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
