const { gql } = require('apollo-server');

const typeDefs = gql`
  type Query {
    brands: [Brand!]!
    brand(brandId: Int!): Brand!
  }

  type Brand {
    id: Int!
    name: String!
    location: String
    category: String!
  }
`;

module.exports = typeDefs;
