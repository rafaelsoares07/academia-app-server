import { Router } from 'express'
import { havePermissionAcessMiddleware } from '../../middlewares/haveAccessLevelMiddleware'
import tokenValidation from '../../middlewares/validateJwtToken'
const router = Router()

import * as clientController from '../../controllers/auth/clientAuthController'
import { validateSchemaMiddleware } from '../../middlewares/validateSchemaMiddleware'
import { clientSignUpSchema } from '../../schemas/auth/clientSignUp'

router.post(
    '/sign-up/client',
    validateSchemaMiddleware(clientSignUpSchema),
    tokenValidation,
    havePermissionAcessMiddleware("Academy"),
    clientController.signup
)

router.post(
    '/sign-in/client',
    clientController.signin
)

export default router