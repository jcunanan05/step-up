import Section from '../../components/Section';
import MarkdownContent from '../../components/MarkdownContent';

const News = ({ data }) => {
  const { title, content } = data;
  return (
    <Section name={title}>
      <h2 className="section__title title is-2">{title}</h2>
      <MarkdownContent content={content} />
    </Section>
  );
};

export default News;
