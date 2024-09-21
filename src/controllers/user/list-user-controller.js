import lista from "../../services/user/list-user-service.js"

const listagemUsuarios = async (req, res) => {
    try {
        return res.status(200).json(await lista())
    } catch (error) {
        res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}`})
    }
}

export default listagemUsuarios