const { Router } = require("express");

const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {

  const { iduser, email, password } = request.body;

  response.json({ iduser, email, password });

})

module.exports = usersRoutes;