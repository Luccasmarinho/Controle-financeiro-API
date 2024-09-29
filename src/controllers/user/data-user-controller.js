import serviceDadosUsuario from "../../services/user/data-user-service.js"

const dadosUsuarioLogado = async (req, res) => {
    const { id } = req.user.verificandoToken
    try {
        const dadosUser = await serviceDadosUsuario(id)
        return res.status(200).json([req.user, dadosUser])
    } catch (error) {
        return res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}` })
    }
}

export default dadosUsuarioLogado