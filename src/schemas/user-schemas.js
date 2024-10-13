import Joi from "joi";

const schema = {
    login: Joi.object({
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).max(50).required()
    }),
    user: Joi.object({
        nome: Joi.string().required(),
        email: Joi.string().email().required(),
        senha: Joi.string().min(8).max(50).required()
    }),
    mail: Joi.object({
        email: Joi.string().email().required()
    }),
    resetPass: Joi.object({
        senha: Joi.string().min(8).max(50).required()
    })

}

export default schema