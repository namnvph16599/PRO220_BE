import { Router } from "express";
import {accountController} from '../controllers'
import { login } from "../controllers/Login.controller";
import validate from "../middlewares/validate";
import { accountValidation } from "../validations";

const router = Router()

router.get('/list',accountController.listAccount)
router.post('/addAccount',validate(accountValidation.createAccount),accountController.addAccount)
router.delete('/deleteAccount/:id',validate(accountValidation.getById),accountController.deleteAccount)
router.put('/updateAccount/:id',validate(accountValidation.createAccount),accountController.updateAccount)
router.post('/login',validate(accountValidation.login),login)

export default router