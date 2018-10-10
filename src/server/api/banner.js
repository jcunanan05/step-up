const express = require('express');
const router = express.Router();

router.get('/', (_, res) => {
  const client = require('../../libraries/Contentful');

  client
    .getEntries({ content_type: 'banner', include: 1 })
    .then(entry => res.send(entry));
});

module.exports = router;
