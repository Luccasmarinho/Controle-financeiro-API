import serviceCriar from "../../services/transactions/create-transaction-service.js"

const criarTransacao = async (req, res) => {
    const { id: userId } = req.user.verificandoToken
    try {
        await serviceCriar(req.body, userId)
        return res.status(200).json({ Mensagem: "Transação cadastrada com sucesso." })
    } catch (error) {
        const mensagemRetorno = error.message == "Tipo inválido. Apenas entrada ou saida." 
        || error.message == "Você não tem permissão para cadastrar essa transação."
        ? res.status(error.status).json({ Mensagem: `${error.message}` }) 
        : res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}`})

        return mensagemRetorno
    }
}

export default criarTransacao