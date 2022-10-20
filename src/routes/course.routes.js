const { Router } = require("express");

const courseRoutes = Router();

courseRoutes.post("/", (request, response) => {

  const { idcourse, name, description } = request.body;

  response.json({ idcourse, name, description });

})

module.exports = courseRoutes;