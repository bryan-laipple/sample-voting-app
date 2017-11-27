# Voting App

This is a sample full-stack web application written in Node, Koa, Mongo, GraphQL and React. It features examples of:
- Server
  - **[Koa](http://koajs.com/)** web framework
  - Configuration with **[convict](https://github.com/mozilla/node-convict)** and **[dotenv](https://github.com/motdotla/dotenv)**
  - GraphQL server by **[koa-graphql](https://github.com/chentsulin/koa-graphql)**
  - MongoDB data modeling with **[mongoose](http://mongoosejs.com/)** 
- Client
  - Navigation with **[react-router](https://github.com/ReactTraining/react-router)**
  - GraphQL client by **[apollo-client](https://www.apollographql.com/docs/react/)**
  - Material design with **[materialize](http://next.materializecss.com/getting-started.html)**

### Setup and running locally

Koa requires _**node v7.6.0 or higher**_ for ES2015 and async function support.

The server side part of the app requires a [MongoDB](https://www.mongodb.com/) instance running.  This can be a local installation,
a running [Docker container](https://hub.docker.com/_/mongo/),
or one hosted by a service (e.g. [mLab](https://mlab.com/)).

The following environment variables can be used to configure the Node/Koa server to connect to MongoDB:
- **MONGO_HOST** - hostname (defaults to `localhost`)
- **MONGO_PORT** - port (defaults to `27017`)
- **MONGO_DB** - database name
- **MONGO_USER** - username with read/write permissions
- **MONGO_PASS** - password

An additional environment variable can be used to configure the HTTP port the server listens on:
- **HTTP_PORT** - defaults to `3000`

The Node/Koa server leverages the [dotenv](https://www.npmjs.com/package/dotenv) package for configuration so the above
variables can easily be stored in a file named **`.env`** in the root directory after cloning, if desired.

After configuration of the MongoDB variables you can build and run locally with the following commands:
```
npm install
npm run start:prod
```

### Docker

The provided **`Dockerfile`** can be used to build a Docker image.  Here are some example commands to build and run the image.
```
docker build -t voting-app .
docker run -d -p 3000:3000 --env-file .env voting-app
```

Choosing a different port:
```
docker run -d -p 4000:4000 --env-file .env -e HTTP_PORT=4000 voting-app
```

### GraphiQL

When `NODE_ENV` is set to `development`, the [GraphiQL](https://github.com/graphql/graphiql) interactive IDE is available in the browser at `/graphql`
(e.g. [http://localhost:3000/graphql](http://localhost:3000/graphql)).  This is the default behavior when running locally.
When running in a Docker container it can be overridden:
```
docker run -d -p 3000:3000 --env-file .env -e NODE_ENV=development voting-app
```

### Special Thanks

This sample application was made possible, in part, thanks to [Stephen Grider](https://github.com/StephenGrider)
and his GraphQL with React course on [Udemy](https://www.udemy.com/graphql-with-react-course/).