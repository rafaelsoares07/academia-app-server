import { Request, Response } from "express";


import * as clientAuthService from '../../services/auth/clientAuthService';

export async function signup(req: Request, res: Response) {

    const data = req.body
    const academyId = Number(res.locals.token.userId)

    const result = await clientAuthService.signup(data, academyId)

    res.send(result)
}

export async function signin(req: Request, res: Response) {

    const result = await clientAuthService.signin(req.body)
    res.send(result)
}