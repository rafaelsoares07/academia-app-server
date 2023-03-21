import { Request, Response } from "express";


import * as instructorAuthService from '../../services/auth/instructorAuthService';

export async function signup(req: Request, res: Response) {

    const data = req.body
    const academyId = Number(res.locals.token.userId)

    const result = await instructorAuthService.signup(data, academyId)

    res.send(result)
}

export async function signin(req: Request, res: Response) {

    const result = await instructorAuthService.signin(req.body)
    res.send(result)
}