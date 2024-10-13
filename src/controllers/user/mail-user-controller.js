import serviceEnviarEmail from "../../services/user/mail-user-service.js"

const enviarEmail = (req, res) => {
    const { email } = req.body
    serviceEnviarEmail(email)
    return res.status(200).json({ Mensagem: "Email enviado com sucesso." })
}

export default enviarEmail