import express from "express";
const rotasTransacao = express.Router();

import criarTransacao from "../controllers/transactions/create-transaction-controller.js";

import autenticacaoToken from "../middlewares/token-autenticate.js";

rotasTransacao.post(
    "/transacoes",
    autenticacaoToken,
    criarTransacao
);

export default rotasTransacao