import serviceDeletar from "../../services/user/delete-user-service.js"

const deletarUsuario = (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}`})
    }
}

export default deletarUsuario