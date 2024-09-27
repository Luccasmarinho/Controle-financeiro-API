const schemaErros = {
    tipoDosErros: [
        "string.empty",
        "any.required",
        "string.email",
        "string.min",
        "string.max",
        "number.positive",
        "number.base",
        "number.integer",
    ],
    mensagemErrorTraduzida: [
        "O campo $ não pode ficar vazio.",
        "O campo $ é obrigatório.",
        "Digite um $ válido.",
        "O campo $ deve ter no mínimo 8 caracteres.",
        "O campo $ deve ter no máximo 50 caracteres.",
        "O campo $ deve ser um número positivo",
        "O campo $ deve ser um número",
        "O campo $ deve ser um número inteiro"
    ]
};

export default schemaErros