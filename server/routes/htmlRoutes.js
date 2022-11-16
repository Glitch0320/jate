const path = require('path');

module.exports = (app) =>
  app.get('/', (req, res) =>
    console.log(path.join(__dirname, '../client/dist/index.html'))
  );
