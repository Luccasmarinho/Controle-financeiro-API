import express from "express";
const rotaLogin = express.Router();

import login from "../controllers/user/login-user-controller.js";
import validateBody from "../middlewares/validateBody.js";
import schema from "../schemas/user-schemas.js";

rotaLogin.post(
    "/login", 
    validateBody(schema.login),
    login
)

export default rotaLogin

