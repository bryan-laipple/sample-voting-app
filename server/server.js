'use strict';

const Koa = require('koa');
const body = require('koa-json-body');
const mount = require('koa-mount');
const graphqlHTTP = require('koa-graphql');
const koaWebpack = require('koa-webpack');

const { env } = require('./config')
const schema = require('./schema/schema');
const webpackConfig = require('../webpack.config.js');

const app = new Koa();

app.use(body({
  limit: '10kb',
  fallback: true
}));
app.use(mount('/graphql', graphqlHTTP({
  schema,
  graphiql: env === 'development'
})));
app.use(koaWebpack({
  config: webpackConfig
}));

module.exports = app;
