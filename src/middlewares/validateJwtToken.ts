import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config()

export default async function tokenValidation(req: Request, res: Response, next: NextFunction) {

    try {

        const token = req.headers.authorization?.replace("Bearer ", "").trim();
        console.log(token)
        if (!token) {
            res.status(401).send('nao veio tokenn')
            return
        }
        console.log(process.env.KEYPASS)
        const tokenValid = jwt.verify(token, process.env.KEYPASS || "YXZ25678910")
        if (!tokenValid) {

            res.status(401).send('token invalido')
            return
        }
        console.log(tokenValid)
        res.locals.token = tokenValid
        next()

    }
    catch (err) {
        res.status(401).send("Token Invalido")
        return
    }
}