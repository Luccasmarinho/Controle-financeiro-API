import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { appError } from '../../errors/app-errors.js'

const serviceDeletar = async (userId, paramsId) => {

    if (userId != paramsId) {
        appError("Você não tem permissão para deletar esse usuário.", 403)
    } else {
        const deletarUser = await prisma.usuario.delete({
            where: {
                id: Number(paramsId)
            }
        })
        return deletarUser
    }
}

export default serviceDeletar