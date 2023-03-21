import * as academyController from "../../controllers/auth/academyAuthController";

import validateJwtToken from '../../middlewares/validateJwtToken';
import { validateSchemaMiddleware } from "../../middlewares/validateSchemaMiddleware";
import { academySignUp } from "../../schemas/auth/academySignUp";
import { academySignIn } from "../../schemas/auth/academySingIn";

import { Router } from "express";
import { havePermissionAcessMiddleware } from "../../middlewares/haveAccessLevelMiddleware";
const router = Router()

router.post(
    "/sign-in/academy",
    validateSchemaMiddleware(academySignIn),
    academyController.signin
)

router.post(
    "/sign-up/academy",
    validateSchemaMiddleware(academySignUp),
    academyController.signup
)

router.post(
    "/token",
    validateJwtToken,
    havePermissionAcessMiddleware("Academy")
)

export default router