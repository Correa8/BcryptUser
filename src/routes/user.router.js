const {
  getAll,
  create,
  getOne,
  remove,
  update,
  login,
} = require("../controllers/user.controllers");
const express = require("express");
const { verifyJwt } = require("../utils/verifyJwt");
const routerUser = express.Router();

//Rutas Estaticas
routerUser.route("/").get(verifyJwt, getAll).post(create);
routerUser.route("/login").post(login);

//-----------------------------------------------------

//Rutas Dinamicas
routerUser.route("/:id").get(getOne).delete(remove).put(update);

module.exports = routerUser;
