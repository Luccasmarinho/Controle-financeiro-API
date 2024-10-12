import nodemailer from "nodemailer"
import crypto from "crypto"

function senhaAleatoria(length = 15) {
    return crypto.randomBytes(length).toString('hex').slice(0, length);
}


const serviceRedefinirSenha = (destinatario) => {
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
        from: process.env.MAIL_FROM,
        to: destinatario,
        subject: "Redefinição de senha",
        text: `Sua senha é ${senhaAleatoria()}`
    })
}

export default serviceRedefinirSenha