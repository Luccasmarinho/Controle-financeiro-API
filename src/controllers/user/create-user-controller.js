import criar from "../../services/user/create-user-service.js"

const criarUsuario = async (req, res) => {
    try {
        await criar(req.body)
        return res.status(201).json({ Mensagem: "Usuário cadastrado com sucesso." })
        
    } catch (error) {
        const mensagemRetorno = error.message == "Email já cadastrado." 
        ? res.status(error.status).json({ Mensagem: `${error.message}` }) 
        : res.status(500).json({ Mensagem: `Erro interno do servidor: ${error.message}`})

        return mensagemRetorno
    }
}

export default criarUsuario