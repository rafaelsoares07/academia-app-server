import { Request, Response } from "express";

import * as academyAuthService from "../../services/auth/academyAuthService";

export async function signin(req: Request, res: Response) {

    const result = await academyAuthService.signin(req.body)

    res.send(result)
}

export async function signup(req: Request, res: Response) {

    const result = await academyAuthService.signup(req.body)

    res.send(result)
}