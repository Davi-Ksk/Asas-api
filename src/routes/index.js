const { Router } = require("express");

const sessionsRoutes = require("./sessions.routes");
const usersRoutes = require("./users.routes");

const routes = Router();

routes.use("/sessions", sessionsRoutes);
routes.use("/users", usersRoutes);

module.exports = routes;