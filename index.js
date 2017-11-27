'use strict';

const { httpPort } = require('./server/config');
const app = require('./server/server');
const db = require('./server/db');

db.connect();
app.listen(httpPort, () => console.log(`Listening on port ${httpPort}`));
