import { Request, Response } from "express";

import * as costumerService from '../../services/costumer/costumerService';

export async function getAllCostumersByAcademy(req: Request, res: Response) {

    const academyId = Number(res.locals.token.userId)

    const result = await costumerService.getAllCostumersByAcademy(academyId)

    res.send(result)
}

export async function getAllCostumersByInstructor(req: Request, res: Response) {

    const instructorId = Number(res.locals.token.userId)

    const result = await costumerService.getAllCostumersByAcademy(instructorId)

    res.send(result)
}