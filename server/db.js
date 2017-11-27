'use strict';

const mongoose = require('mongoose');

const { mongo } = require('./config');

const MONGO_URI = `mongodb://${mongo.host}:${mongo.port}/${mongo.db}`;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
const connect = () => {
  mongoose.connect(MONGO_URI, {useMongoClient: true, user: mongo.user, pass: mongo.pass});
  mongoose.connection
    .once('open', () => console.log('Connected to MongoLab instance.'))
    .on('error', error => console.log('Error connecting to MongoLab:', error));
};

module.exports = { connect };
