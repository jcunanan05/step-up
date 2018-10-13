const express = require('express');
const router = express.Router();
const { createClient } = require('../../libraries/Contentful');

router.get('/', (_, res) => {
  const client = createClient();

  client
    .getEntries({ content_type: 'banner', include: 1 })
    .then(entry => res.send(entry));
});

module.exports = router;
