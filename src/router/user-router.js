import express from "express";
const rotasUser = express.Router();

import criarUsuario from "../controllers/user/create-user-controller.js";
import listagemUsuarios from "../controllers/user/list-user-controller.js";
import deletarUsuario from "../controllers/user/delete-user-controller.js";

import schema from "../schemas/user-schemas.js";
import validateBody from "../middlewares/validateBody.js";

rotasUser.post(
    "/usuarios", 
    validateBody(schema.user),
    criarUsuario
)

rotasUser.get(
    "/usuarios", 
    listagemUsuarios
)

rotasUser.delete(
    "/usuarios/:id",
    deletarUsuario
)

export default rotasUser