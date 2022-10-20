const { Router } = require("express")

const userRouter = require("./users.routes");
const courseRouter = require("./course.routes")

const routes = Router()

routes.use("/users", userRouter)
routes.use("/course", courseRouter)

module.exports = routes;