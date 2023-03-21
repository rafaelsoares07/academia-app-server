import joi from "joi"

export const academySignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().required()
})