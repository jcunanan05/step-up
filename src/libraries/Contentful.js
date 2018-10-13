const contentful = require('contentful');

const defaultConfig = {
  SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  ACCESS_TOKEN: process.env.CONTENTFUL_API_KEY
};

const createClient = (config = defaultConfig) => {
  const options = {
    host: 'cdn.contentful.com',
    space: config.SPACE_ID,
    accessToken: config.ACCESS_TOKEN
  };

  return contentful.createClient(options);
};

module.exports = { createClient };
