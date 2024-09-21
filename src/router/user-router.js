import express from "express";
const rotasUser = express.Router();

import criarUsuario from "../controllers/user/create-user-controller.js"

rotasUser.post(
    "/usuarios", 
    criarUsuario
)

export default rotasUser