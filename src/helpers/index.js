export const kebabCase = text => {
  if (text === '') return '';

  return text.split(' ').join('-');
};
