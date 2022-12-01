import { Router } from "express";
import {accountController} from '../controllers'
import { login } from "../controllers/Login.controller";
import validate from "../middlewares/validate";
import { accountValidation } from "../validations";

const router = Router()

router.get('/Accounts',accountController.listAccount)
router.get('/Account/:id',accountController.getAccount)
router.post('/Register',validate(accountValidation.createAccount),accountController.addAccount)
router.delete('/DeleteAccount/:id',validate(accountValidation.getById),accountController.deleteAccount)
router.put('/UpdateAccount/:id',validate(accountValidation.createAccount),accountController.updateAccount)
router.post('/Login',validate(accountValidation.login),login)

export default router