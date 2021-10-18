const express = require("express");
const cors = require("cors");
const router = require("./routes");
require("./infra/connection");

class AppController {
  constructor() {
    this.server = express();
    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());

    this.server.use((req, res, next) => {
      res.header("Access-Controll-AlloW-Origin", "*");
      res.header("Access-Controll-AlloW-Methods", "GET, POST, PUT, DELETE");
      res.header(
        "Access-Controll-AlloW-Headers",
        "Content-type, Authorization, Acept, Origin, X-Requested-With"
      );

      this.server.use(cors());
      next();
    });
  }

  routes() {
    router(this.server);
  }
}

module.exports = new AppController().server;
