const City = require("../schema/City");
const Repository = require("./Repository");

class CityRepositoy extends Repository {
  constructor() {
    super(City);
  }
}

module.exports = new CityRepositoy();
