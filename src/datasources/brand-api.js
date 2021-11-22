const { RESTDataSource } = require('apollo-datasource-rest');

class BrandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'http://localhost:1337/api/';
  }

  getBrands() {
    return this.get('brands');
  }

  getBrand(brandId) {
    return this.get(`brands/${brandId}`);
  }
}

module.exports = BrandAPI;
