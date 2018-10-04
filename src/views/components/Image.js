const Image = ({ src = '', alt = '', className = '' }) => (
  <figure className={`image ${className}`}>
    <img src={src} alt={alt} />
  </figure>
);

export default Image;
