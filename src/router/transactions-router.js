import express from "express";
const rotasTransacao = express.Router();

import criarTransacao from "../controllers/transactions/create-transaction-controller.js";

import schema from "../schemas/transaction-schema.js";
import validateBody from "../middlewares/validateBody.js"
import autenticacaoToken from "../middlewares/token-autenticate.js";

rotasTransacao.post(
    "/transacoes",
    validateBody(schema.transacao),
    autenticacaoToken,
    criarTransacao
);

export default rotasTransacao