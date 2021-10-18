const ClientController = require("../app/Controllers/ClientController");
const createValidation = require("../app/validators/client/createValidation");

module.exports = (server, routes, prefix = "/api/city/client") => {
  routes.get("/", ClientController.get);
  routes.post("/", createValidation, ClientController.post);
  routes.put("/:id", ClientController.update);
  routes.delete("/:id", ClientController.delete);
  routes.use(prefix, server);
};
