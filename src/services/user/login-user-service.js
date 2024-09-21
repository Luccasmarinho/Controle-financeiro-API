import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import bcrypt from "bcrypt";
import { appError } from '../../errors/app-errors.js';
import jwt from "jsonwebtoken";



const serviceLogin = async (data) => {
    const { email, senha } = data

    const usuarioExiste = await prisma.usuario.findUnique({
        where: {
            email
        }
    })
    
    if (!usuarioExiste) {
        appError("Email não cadastrado.", 400)
    } else {
        const comparandoSenha = await bcrypt.compare(senha, usuarioExiste.senha)

        if (!comparandoSenha) {
            appError("Senha incorreta. Tente novamente.", 400)
        } else {
            const payload = { id: usuarioExiste.id }
            const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "24h" })
            
            delete usuarioExiste.senha

            const objRetorno = {
                Mensagem: "Usuário logado com sucesso.",
                token,
                user: usuarioExiste
            }
            return objRetorno
        }
    }
}

export default serviceLogin