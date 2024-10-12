import express from "express";
const rotasUser = express.Router();

import criarUsuario from "../controllers/user/create-user-controller.js";
import listagemUsuarios from "../controllers/user/list-user-controller.js";
import deletarUsuario from "../controllers/user/delete-user-controller.js";
import dadosUsuarioLogado from "../controllers/user/data-user-controller.js";
import redefinirSenha from "../controllers/user/mail-user-controller.js";

import schema from "../schemas/user-schemas.js";
import validateBody from "../middlewares/validateBody.js";
import autenticacaoToken from "../middlewares/token-autenticate.js";

rotasUser.post(
    "/usuarios",
    validateBody(schema.user),
    criarUsuario
)

rotasUser.post(
    "/send",
    validateBody(schema.mail),
    redefinirSenha

)

rotasUser.get(
    "/usuarios",
    autenticacaoToken,
    listagemUsuarios
)

rotasUser.delete(
    "/usuarios/:id",
    autenticacaoToken,
    deletarUsuario
)

rotasUser.get(
    "/dados/usuario",
    autenticacaoToken,
    dadosUsuarioLogado
)

export default rotasUser