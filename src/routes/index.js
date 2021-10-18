const { Router } = require("express");
const city = require("./city.router");
const client = require("./client.router");

module.exports = (server) => {
  server.use((req, res, next) => {
    city(server, new Router());
    client(server, new Router());
    next();
  });
};
