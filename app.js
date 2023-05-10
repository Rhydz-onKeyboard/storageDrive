const server = require('./src/server/index.js');
const routes = require('./src/routes/index.routes.js');


require('dotenv').config();

const port = process.env.PORT || 3000;
server.use('/', routes);
server.listen(port, () => {
  console.log('Running on port', port);
});
