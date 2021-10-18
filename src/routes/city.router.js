const CityController = require("../app/controllers/CityController");
const createValidation = require("../app/validators/city/createValidation");
const updateValidation = require("../app/validators/city/updateValidation");

module.exports = (server, routes, prefix = "/api/city") => {
  routes.get("/", CityController.get);
  routes.post("/", createValidation, CityController.create);
  routes.put("/:id", updateValidation, CityController.update);
  routes.delete("/:id", CityController.delete);
  server.use(prefix, routes);
};
