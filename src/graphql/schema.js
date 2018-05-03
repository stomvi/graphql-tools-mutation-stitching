import {
  makeExecutableSchema,
  mergeSchemas,
} from 'graphql-tools';

const baseSchema = makeExecutableSchema({
  typeDefs: `
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello() {
        return 'world';
      },
    },
  },
});

const mutationOnlySchema = makeExecutableSchema({
  typeDefs: `
    type Mutation {
      test: String!
    }
  `,
  resolvers: {
    Mutation: {
      test() {
        return 'result';
      },
    },
  },
});

const schema = mergeSchemas({
  schemas: [
    baseSchema,
    mutationOnlySchema,
  ],
});

export default schema;
