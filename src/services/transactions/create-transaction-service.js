import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { appError } from '../../errors/app-errors.js';

const serviceCriar = async (data, userId) => {
    const { tipo, usuario_id } = data

    if (tipo != "entrada" && tipo != "saida") {
        appError("Tipo inválido. Apenas entrada ou saida.", 400)
    }

    if (userId != usuario_id) {
        appError("Você não tem permissão para cadastrar essa transação.", 403)
    }

    const criarUser = await prisma.transacao.create({
        data
    })

    return criarUser
}

export default serviceCriar

//
