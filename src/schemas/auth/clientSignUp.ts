import joi from 'joi'

export const clientSignUpSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    cpf: joi.string().required(),
})