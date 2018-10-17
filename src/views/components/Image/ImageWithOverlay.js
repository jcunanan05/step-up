import Image from './index';

const Overlay = ({ visible }) => {
  if (!visible) return '';

  return <span className="image__overlay" />;
};

const ImageWithOverlay = ({ src = '', alt = '', className = '' }) => (
  <Image src={src} alt={alt} className={className}>
    <Overlay visible={src} />
  </Image>
);

export default ImageWithOverlay;
