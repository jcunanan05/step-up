const express = require('express');
const next = require('next');
const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// dev environment variables
if (dev) {
  require('dotenv').config();
}

/* eslint-disable no-console */

app
  .prepare()
  .then(() => {
    const server = express();

    // static files route
    server.use(
      `/${process.env.PUBLIC_URL}`,
      express.static(`${__dirname}/src/public`)
    );

    // pipe requests via nextJS
    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
