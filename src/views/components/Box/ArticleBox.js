const ArticleBox = ({
  className = '',
  image = '',
  title = '',
  content = ''
}) => (
  <article className={`box article-box ${className}`}>
    {image}
    <div className="article-box__body">
      <h2 className="title">{title}</h2>
      <p>{content}</p>
    </div>
  </article>
);

export default ArticleBox;
