import express from 'express';
import graphqlHTTP from 'express-graphql';

import schema from './schema';

const router = express.Router();

router.post('/graphql', graphqlHTTP(async () => ({
  schema,
  graphiql: false,
})));

router.get('/graphql', graphqlHTTP(async () => ({
  schema,
  graphiql: true,
})));

export default router;
