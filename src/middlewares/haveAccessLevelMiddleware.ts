import { NextFunction, Request, Response } from "express"


export function havePermissionAcessMiddleware(permission: string) {

    return async (req: Request, res: Response, next: NextFunction) => {

        const acessLevel = res.locals.token.accessLevel

        if (acessLevel != permission) {
            res.send("não tem o nivel de acesso necessario").status(401)
        }
        else {
            console.log("Nivel de acesso:  " + acessLevel)
            next()
        }

    }

}