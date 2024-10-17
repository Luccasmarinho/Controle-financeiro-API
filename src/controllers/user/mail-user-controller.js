import serviceEnviarEmail from "../../services/user/mail-user-service.js"

const enviarEmail = async (req, res) => {
    try {
        const { email } = req.body
        await serviceEnviarEmail(email)
        return res.status(200).json({ Mensagem: "Email enviado com sucesso." })
    } catch (error) {
        res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}` })
    }

}

export default enviarEmail