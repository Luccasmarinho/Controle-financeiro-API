const validateBody = (schema) => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body)
        next()
    } catch (error) {
        res.status(400).json({ Mensagem: `${error.message}`})
    }
}

export default validateBody