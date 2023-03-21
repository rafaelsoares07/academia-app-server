import { Router } from "express";
import { havePermissionAcessMiddleware } from "../../middlewares/haveAccessLevelMiddleware";
import tokenValidation from "../../middlewares/validateJwtToken";

import * as costumerController from '../../controllers/costumer/costumerController';

const router = Router()

router.get(
    '/costumers/academy',
    tokenValidation,
    havePermissionAcessMiddleware("Academy"),
    costumerController.getAllCostumersByAcademy
)

router.get(
    '/costumers/instructor',
    tokenValidation,
    havePermissionAcessMiddleware("Instrutor"),
    costumerController.getAllCostumersByInstructor
)

export default router