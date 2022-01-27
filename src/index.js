import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs } from '../graphql/schema/typeDefs';
import { resolvers } from '../graphql/resolver/resolver';
import { db_connect } from '../config/db';

import { User, Todo } from '../model';

const startApolloServer = async () => {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: {
      User,
      Todo,
    },
  });

  db_connect();
  await server.start();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log(`listening at port http://localhost:4000${server.graphqlPath}`);
  });
};

startApolloServer();
