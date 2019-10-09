const routes = require("express").Router();
const DevController = require("./controllers/DevController");
const LikeController = require("./controllers/LikeController");

routes.post("/devs", DevController.store);
routes.get("/devs", DevController.index);

routes.post("/devs/:devId/likes", LikeController.store);

module.exports = routes;
