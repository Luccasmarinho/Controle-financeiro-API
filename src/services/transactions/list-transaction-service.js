import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { appError } from "../../errors/app-errors.js"

const serviceLista = async (userId, queryId) => {
    if (!queryId) {
        appError("Parâmetro necessário ausente.", 400)
    }

    if (userId != queryId) {
        appError("Você não tem permissão para listar esse usuário.", 403)
    } else {
        const listarTransacao = await prisma.transacao.findMany({
            where: {
                usuario_id: Number(queryId)
            },
            select: {
                id: true,
                valor: true,
                tipo: true,
                categoria: true,
                usuario_id: true
            },
            orderBy: {
                id: "asc"
            }
        })
        return listarTransacao
    }
}

export default serviceLista