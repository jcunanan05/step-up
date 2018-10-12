const VelocityAnimate =
  typeof window !== 'undefined' ? require('velocity-animate') : '';

const Velocity = (element, properties, options = {}) => {
  if (VelocityAnimate !== '') VelocityAnimate(element, properties, options);
};

module.exports = Velocity;
