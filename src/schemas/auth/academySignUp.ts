import joi from "joi"

export const academySignUp = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    cidade: joi.string().required(),
    rua: joi.string().required(),
    numero: joi.string().required(),
    accessLevelId: joi.number()
})
