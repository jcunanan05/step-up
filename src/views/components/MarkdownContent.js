import processMarkdown from '../../libraries/Marked';
import { isEmpty } from 'lodash';

const MarkdownContent = ({ content }) => {
  if (isEmpty(content)) return '';

  return (
    <div
      className="content"
      dangerouslySetInnerHTML={{
        __html: processMarkdown(content)
      }}
    />
  );
};

export default MarkdownContent;
