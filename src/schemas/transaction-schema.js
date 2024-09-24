import Joi from "joi";

const schema = {
    transacao: Joi.object({
        categoria: Joi.string().required(),
        valor: Joi.number().positive().precision(2).required(),
        tipo: Joi.string().required(),
        usuario_id: Joi.number().integer().required(),
    })
}

export default schema