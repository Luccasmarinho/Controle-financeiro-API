import jwt from "jsonwebtoken";

const autenticacaoToken = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ Mensagem: "Usuário não autorizado."})
    }

    const token = authorization.split(" ")[1]

    try {
        const verificandoToken = await jwt.verify(token, process.env.SECRET_KEY)

        const dataExpiracaoDoToken = new Date(verificandoToken.exp * 1000).toLocaleString()  

        req.user = {verificandoToken, dataExpiracaoDoToken}
        
        next()
    } catch (error) {
        const mensagemRetorno = error.message == "invalid signature"
        ? res.status(401).json({ Mensagem: "Usuário não autorizado.", erro: error.message })
        : res.status(401).json({ Mensagem: "Usuário não autorizado.", erro: error.message })

        return mensagemRetorno
    }

}

export default autenticacaoToken