const express = require('express');
const router = express.Router();
const banner = require('./banner');

router.use('/banner', banner);

module.exports = router;
