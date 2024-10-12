import nodemailer from "nodemailer"
import crypto from "crypto"
import jwt from "jsonwebtoken";

function senhaAleatoria(length = 15) {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
}


const serviceRedefinirSenha = (destinatario) => {
    const token = jwt.sign({ destinatario }, process.env.SECRET_KEY, { expiresIn: "1h" })

    const link = `https://controle-financeiro-frontend-mocha.vercel.app?token=${token}`

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

export default serviceRedefinirSenha
