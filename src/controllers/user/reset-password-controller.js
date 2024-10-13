import serviceRedefinirSenha from "../../services/user/reset-password-service.js"

const redefinirSenha = (req, res) => {
    const { token } = req.query
    const { senha } = req.body
    try {
        serviceRedefinirSenha(token, senha)
        return res.status(200).json({ Mensagem: "Senha alterada com sucesso." })
    } catch (error) {
        res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}` })
    }
}

export default redefinirSenha