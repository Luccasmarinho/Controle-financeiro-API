import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


const serviceRedefinirSenha = async (token, senha) => {
    const { destinatario } = jwt.verify(token, process.env.SECRET_KEY)

    const senhaCriptografada = await bcrypt.hash(senha, 10)

    const atualizandoSenha = await prisma.usuario.update({
        where: {
            email: destinatario
        },
        data: {
            senha: senhaCriptografada
        }
    })

    return atualizandoSenha

}

export default serviceRedefinirSenha