import serviceLista from "../../services/transactions/list-transaction-service.js"

const listarTransacao = async (req, res) => {
    const { id: userId } = req.user.verificandoToken
    const { usuario_id: queryId } = req.query

    try {
        const listaTransacao = await serviceLista(userId, Number(queryId))
        return res.status(200).json(listaTransacao)
    } catch (error) {
        const mensagemRetorno = error.message == "Você não tem permissão para listar esse usuário."
        || error.message == "Parâmetro necessário ausente."
        ? res.status(error.status).json({ Mensagem: `${error.message}` }) 
        : res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}`})

        return mensagemRetorno
    }
}

export default listarTransacao