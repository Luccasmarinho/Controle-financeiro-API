import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import bcrypt from "bcrypt"

import { appError } from "../../errors/app-errors.js"

const criar = async (data) => {
    const { nome, email, senha } = data

    const usuarioExiste = await prisma.usuario.findFirst({
        where: {
            email
        }
    })

    if (usuarioExiste) {
        appError("Email já cadastrado.", 400)
    } else {
        const senhaEncryptada = await bcrypt.hash(senha, 10)

        const criarUser = await prisma.usuario.create({
            data: {
                nome,
                email,
                senha: senhaEncryptada
            }
        })

        return criarUser
    }
}

export default criar
