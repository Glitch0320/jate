const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
console.log(process.env)

app.use(express.static('../client/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./routes/htmlRoutes')(app)

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
  }

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
