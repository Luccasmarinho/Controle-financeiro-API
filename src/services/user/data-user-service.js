import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const serviceDadosUsuario = async (userId) => {
    const dadosUser = await prisma.usuario.findUnique({
        where: {
            id: Number(userId)
        }
    })
    delete dadosUser.senha

    return dadosUser
}

export default serviceDadosUsuario