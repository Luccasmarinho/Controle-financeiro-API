import serviceLogin from "../../services/user/login-user-service.js";


const login = async (req, res) => {
    try {
        const usuarioLogado = await serviceLogin(req.body)
        return res.status(200).json(usuarioLogado)
    } catch (error) {
        const mensagemRetorno = error.message == "Email não cadastrado." || error.message == "Senha incorreta. Tente novamente."
        ? res.status(error.status).json({ Mensagem: `${error.message}` }) 
        : res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}`})

        return mensagemRetorno
    }
}

export default login