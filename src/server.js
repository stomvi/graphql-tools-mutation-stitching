import express from 'express';
import graphqlRouter from './graphql';

const app = express();
const port = 8080;

// use graphqql middleware
app.options('/graphql');
app.use(graphqlRouter);

app.listen(port, (err) => {
  if (err) {
    console.error(err); // eslint-disable-line no-console
  }

  console.log(`Express is listening on port ${port}`); // eslint-disable-line no-console
});
