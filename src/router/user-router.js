import express from "express";
const rotasUser = express.Router();

import criarUsuario from "../controllers/user/create-user-controller.js";
import listagemUsuarios from "../controllers/user/list-user-controller.js";

rotasUser.post(
    "/usuarios", 
    criarUsuario
)

rotasUser.get(
    "/usuarios", 
    listagemUsuarios
)

export default rotasUser