import marked from 'marked';

const renderer = new marked.Renderer();
renderer.link = (href, title, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

export const options = {
  gfm: true,
  breaks: true,
  renderer
};

const processMarkdown = text => marked(text, options);

export default processMarkdown;
