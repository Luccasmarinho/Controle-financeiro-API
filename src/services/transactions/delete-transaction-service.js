import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { appError } from "../../errors/app-errors.js";

const serviceDeletar = async (userId, paramsId) => {
    const transacaoExiste = await prisma.transacao.findUnique({
        where: {
            id: Number(paramsId)
        }
    })

    if (!transacaoExiste || userId != transacaoExiste.usuario_id) {
        appError("Você não tem permissão para deletar esse usuário.", 403)
    } else {
        const deletarUser = await prisma.transacao.delete({
            where: {
                id: Number(paramsId)
            }
        })
        return deletarUser
    }
}

export default serviceDeletar