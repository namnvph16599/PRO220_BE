import { Router } from "express";
import {accountController} from '../controllers'
import { login } from "../controllers/login.controller";
import validate from "../middlewares/validate";
import { accountValidation } from "../validations";

const router = Router()

router.get('/accounts',accountController.getAll)
router.get('/account/:id',validate(accountValidation.getById),accountController.getById)
router.post('/register',validate(accountValidation.createAccount),accountController.create)
router.delete('/deleteaccount/:id',validate(accountValidation.getById),accountController.removeById)
router.put('/updateaccount/:id',validate(accountValidation.createAccount),accountController.updateById)
router.post('/login',validate(accountValidation.login),login)

export default router