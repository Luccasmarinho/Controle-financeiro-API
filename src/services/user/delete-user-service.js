import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const deletar = async (id) => {
    const deletarUser = await prisma.usuario.delete({
        where: {
            id
        }
    })

    if (deletarUser) {

    }

    return deletarUser
}

export default deletar