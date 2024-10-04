import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { appError } from "../../errors/app-errors.js"

const serviceLista = async (userId, queryId, page, limit) => {
    if (!queryId) {
        appError("Parâmetro necessário ausente.", 400)
    }

    if (userId != queryId) {
        appError("Você não tem permissão para listar esse usuário.", 403)
    } else {
        const skip = (page - 1) * limit;
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
            },
            skip: skip,
            take: Number(limit),
        })
        const totalTransacoes = await prisma.transacao.count({
            where: {
                usuario_id: Number(queryId),
            },
        });

        return {
            listarTransacao,
            totalPages: Math.ceil(totalTransacoes / limit),
            currentPage: page
        }
    }
}

export default serviceLista