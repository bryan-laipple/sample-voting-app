'use strict';

require('dotenv').config();
const config = require('convict')(require('./schema.json'));
const env = config.get('env');
// config.loadFile(`./${env}.json`);  currently just using .env
config.validate({allowed: 'strict'});


// const config = convict({
//   mongo: {
//     host: {
//       doc: "MongoDB hostname",
//       format: "",
//       default: "localhost",
//       env: "MONGO_HOST"
//     },
//     port: {
//       doc: "MongoDB port",
//       format: "port",
//       default: "27017",
//       env: "MONGO_PORT"
//     },
//     db: {
//       doc: "MongoDB database name",
//       format: "String",
//       env: "MONGO_DB"
//     },
//     user: {
//       doc: "MongoDB username",
//       format: "String",
//       env: "MONGO_USER"
//     },
//     pass: {
//       doc: "MongoDB password",
//       format: "String",
//       env: "MONGO_PASS"
//     }
//   }
// })

module.exports = config.getProperties();
