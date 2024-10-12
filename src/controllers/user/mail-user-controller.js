import serviceRedefinirSenha from "../../services/user/mail-user-service.js"

const redefinirSenha = (req, res) => {
    const { email } = req.body
    serviceRedefinirSenha(email)
    return res.status(200).json({ Mensagem: "Email enviado com sucesso." })
}

export default redefinirSenha