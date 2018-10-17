import { Component } from 'react';
import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';
import ImageWithOverlay from '../../components/Image/ImageWithOverlay';
import MarkdownContent from '../../components/MarkdownContent';
import ImageModel from './Model/Image';
import ArticleBox from '../../components/Box/ArticleBox';

const NewsPost = ({ title = '', content = '', image = '' }) => (
  <Column className="is-4">
    <ArticleBox title={title} image={image} content={content} />
  </Column>
);

class News extends Component {
  renderNews = () => {
    return this.props.news.map(({ title, content, image }) => {
      const Image = new ImageModel().setImage(image);
      return (
        <NewsPost
          key={title}
          image={
            <ImageWithOverlay
              className="is-5by3"
              alt={Image.fields.title}
              src={Image.url}
            />
          }
          title={title}
          content={content}
        />
      );
    });
  };

  render() {
    const { title, content } = this.props.data;
    return (
      <Section name={title}>
        <h2 className="section__title title is-2">{title}</h2>
        <MarkdownContent content={content} />

        <Columns>{this.renderNews()}</Columns>
      </Section>
    );
  }
}

export default News;
