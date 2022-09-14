const { faker } = require("@faker-js/faker");

class Company {
  constructor() {
    this.name = faker.company.name();
    this.city = faker.address.city();
    this.state = faker.address.state();
    this.zipCode = faker.address.zipCode();
    this.country = faker.address.country();
    this._id = faker.datatype.uuid();
  }
}

module.exports = Company;
