import serviceDeletar from "../../services/user/delete-user-service.js"

const deletarUsuario = async (req, res) => {
    const { id: userId } = req.user.verificandoToken;
    const { id: paramsId } = req.params;

    try {
        await serviceDeletar(userId, paramsId)
        return res.status(200).json({ Mensagem: "Usuário deletado com sucesso." })
    } catch (error) {
        const mensagemRetorno = error.message == "Você não tem permissão para deletar esse usuário."
        ? res.status(error.status).json({ Mensagem: `${error.message}` }) 
        : res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}`})

        return mensagemRetorno
    }
}

export default deletarUsuario