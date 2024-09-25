import express from "express";
const rotasTransacao = express.Router();

import criarTransacao from "../controllers/transactions/create-transaction-controller.js";
import listarTransacao from "../controllers/transactions/list-transaction-controller.js";
import deletarTransacao from "../controllers/transactions/delete-transaction-controller.js";

import schema from "../schemas/transaction-schema.js";
import validateBody from "../middlewares/validateBody.js"
import autenticacaoToken from "../middlewares/token-autenticate.js";

rotasTransacao.post(
    "/transacoes",
    validateBody(schema.transacao),
    autenticacaoToken,
    criarTransacao
);

rotasTransacao.get(
    "/transacoes",
    autenticacaoToken,
    listarTransacao
)

rotasTransacao.delete(
    "/transacoes/:id",
    autenticacaoToken,
    deletarTransacao
)

export default rotasTransacao