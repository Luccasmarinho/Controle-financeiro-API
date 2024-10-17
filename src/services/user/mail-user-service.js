import nodemailer from "nodemailer"
import jwt from "jsonwebtoken";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const serviceEnviarEmail = async (destinatario) => {
    const token = jwt.sign({ destinatario }, process.env.SECRET_KEY, { expiresIn: "24h" })

    const usuarioExistente = await prisma.usuario.findUnique({
        where: {
            email: destinatario
        }
    })

    if (!usuarioExistente) {
        return
    }

    const link = `https://controle-financeiro-frontend-mocha.vercel.app/src/pages/reset-pass.html?token=${token}`

    const transporter = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: true,
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    })

    transporter.sendMail({
        from: "Luccas Marinho <luccas88oliveira@gmail.com>",
        to: destinatario,
        subject: "Redefinição de senha",
        text: `Você solicitou a alteração de senha. Clique neste link e altere-a: ${link}. Caso não tenha solicitado, ignore esse E-mail.`
    })
}

export default serviceEnviarEmail
