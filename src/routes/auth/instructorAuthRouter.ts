import { Router } from 'express'
import { havePermissionAcessMiddleware } from '../../middlewares/haveAccessLevelMiddleware'
import tokenValidation from '../../middlewares/validateJwtToken'
const router = Router()

import * as instructorController from '../../controllers/auth/instructorAuthController'

router.post(
    '/sign-up/instructor',
    tokenValidation,
    havePermissionAcessMiddleware("Academy"),
    instructorController.signup
)

router.post(
    '/sign-in/instructor',
    instructorController.signin
)


export default router