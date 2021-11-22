const resolvers = {
  Query: {
    brands: (parent, args, { dataSources }, info) => {
      return dataSources.brandAPI.getBrands();
    },
    brand: (parent, { brandId }, { dataSources }) => {
      return dataSources.brandAPI.getBrand(brandId);
    },
  },
};

module.exports = resolvers;
