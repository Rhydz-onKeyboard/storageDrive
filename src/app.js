const server = require('./server/index.js');
const routes = require('./routes/index.routes.js');

require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;
server.use('/', routes);
server.listen(port, () => {
  console.log('Running on port', port);
});
