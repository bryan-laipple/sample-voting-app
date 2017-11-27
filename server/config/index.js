'use strict';

// update process.env with any values from .env file
require('dotenv').config();

// load convict with configuration schema
const config = require('convict')(require('./schema.json'));

// load environment specific configuration files
const env = config.get('env');
// config.loadFile(`./${env}.json`);  currently just using .env

config.validate({allowed: 'strict'});

// export plain JS Object to abstract away convict
module.exports = config.getProperties();
