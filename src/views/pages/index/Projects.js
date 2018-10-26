import { Component } from 'react';
import Section from '../../components/Section';
import Columns, { Column } from '../../components/Columns';
import ArticleBox from '../../components/Box/ArticleBox';
import ImageWithOverlay from '../../components/Image/ImageWithOverlay';
import ImageModel from '../../../models/Image';

const Project = ({ title = '', content = '', image = '' }) => (
  <Column className="is-4">
    <ArticleBox title={title} image={image} content={content} />
  </Column>
);

class Projects extends Component {
  renderProjects = () => {
    return this.props.projects.map(({ title, content, image }) => {
      const Image = new ImageModel(image);
      return (
        <Project
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
    const { title } = this.props.data;
    return (
      <Section name={title}>
        <h2 className="section__title title is-2">{title}</h2>
        <Columns>{this.renderProjects()}</Columns>
      </Section>
    );
  }
}

export default Projects;
