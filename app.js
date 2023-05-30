/* server instance setup */
const express = require('express');
const app = express();
const host = 'localhost';
const port = 300;
app.listen(port, host, () => {
  console.log(`Server is now being hosted at: http://${host}:${port}`);
});

/* always serve public directory */
app.use(express.static('public'));

/* routers */
const pagesRouter = require('./routes/index.js');
app.use(pagesRouter);
