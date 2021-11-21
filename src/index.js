const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const mocks = {
  Query: () => ({ brands: [...new Array(6)] }),
  Brand: () => ({
    id: () => 1,
    name: () => 'LarderDB',
    location: () => 'Cleveland, OH',
    category: () => 'Food',
  }),
};

const server = new ApolloServer({ typeDefs, mocks });

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
