'use strict';

const mongoose = require('mongoose');

const { mongo } = require('./config');

if (!mongo.host || !mongo.db || !mongo.user || !mongo.pass) {
  throw new Error(`MongoDB config error.  The following environment vars are required:
MONGO_HOST,
MONGO_DB,
MONGO_USER,
MONGO_PASS
`);
}

const mongo_uri = `mongodb://${mongo.host}:${mongo.port}/${mongo.db}`;
const mongo_opts = {
  useMongoClient: true,
  user: mongo.user,
  pass: mongo.pass
};

mongoose.Promise = global.Promise;
const connect = () => {
  mongoose.connect(mongo_uri, mongo_opts);
  mongoose.connection
    .once('open', () => console.log('Connected to MongoDB instance.'))
    .on('error', error => console.log('Error connecting to MongoDB:', error));
};

module.exports = { connect };
