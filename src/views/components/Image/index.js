const Image = ({ src = '', alt = '', className = '', children }) => (
  <figure className={`image ${className}`}>
    <img src={src} alt={alt} />
    {children}
  </figure>
);

export default Image;
