const dadosUsuarioLogado = (req, res) => {
    try {
        return res.status(200).json(req.user)
    } catch (error) {
        res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}` })
    }
}

export default dadosUsuarioLogado