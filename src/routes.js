const routes = require("express").Router();
const DevController = require("./controllers/DevController");

routes.post("/devs", DevController.store);
routes.get("/devs", DevController.index);

module.exports = routes;
