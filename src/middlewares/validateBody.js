import schemaErros from "../schemas/errors-schema.js"

const validateBody = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body)
        next()
    } catch (error) {
        const nomeDoErroIngles = error.details[0].type
        const nomeDoErroPortugues = schemaErros.mensagemErrorTraduzida
        const nomeDoCampo = error.details[0].path[0]

        schemaErros.tipoDosErros.forEach((erro, i) => {
            
            if (erro == nomeDoErroIngles) return res.status(400).json({ Mensagem: nomeDoErroPortugues[i].replace("$", nomeDoCampo) })
        })

        // return res.status(500).json({ Mensagem: ` Erro interno no servidor: ${error.message}` })
    }
}

export default validateBody