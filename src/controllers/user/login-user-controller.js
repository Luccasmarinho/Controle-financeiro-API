const login = (req, res) => {
    try {
        return res.status(200).json({ Mensagem: "Login" })
    } catch (error) {
        res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}`})
    }
}

export default login