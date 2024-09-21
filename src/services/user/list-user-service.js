import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const lista = async () => {
    const listaUser = await prisma.usuario.findMany()
    return listaUser
}

export default lista