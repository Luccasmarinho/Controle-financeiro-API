import jwt from "jsonwebtoken";

const autenticacaoToken = async (req, res, next) => {
    const { authorization } = req.headers

    if (!authorization) {
        return res.status(401).json({ Mensagem: "Usuário não autorizado." })
    }

    const token = authorization.split(" ")[1]

    try {
        const { id } = await jwt.verify(token, process.env.SECRET_KEY)

        req.userId = id
        
        next()
    } catch (error) {
        const mensagemRetorno = error.message == "invalid signature"
        ? res.status(401).json({ Mensagem: "Usuário não autorizado." })
        : res.status(401).json({ Mensagem: "Usuário não autorizado." })

        return mensagemRetorno
    }

}

export default autenticacaoToken