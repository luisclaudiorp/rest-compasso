const Client = require("../schema/Client");
const Repository = require("./Repository");

class ClientRespository extends Repository {
  constructor() {
    super(Client);
  }
}

module.exports = new ClientRespository();
