const express = require('express');
const router = express.Router();
const banner = require('./banner');
const { createClient } = require('../../libraries/Contentful');

router.use('/banner', banner);

router.use('/home-page', async (_, res) => {
  const client = createClient();

  const entries = await client.getEntries({
    content_type: ['landingPage', 'banner']
  });

  res.send(entries);
});

module.exports = router;
