const mongoose = require('mongoose');
const { mongodb } = require('./keys');
mongoose
  .connect(mongodb.URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then((db) => console.log('DB is Connected'))
  .catch((err) => console.log(err));
