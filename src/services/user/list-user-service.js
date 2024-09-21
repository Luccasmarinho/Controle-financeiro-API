import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const serviceLista = async () => {
    const listaUser = await prisma.usuario.findMany()
    return listaUser
}

export default serviceLista