import { Router } from 'express';
import { accountController } from '../controllers';
import { login, requestRefreshToken } from '../controllers/login.controller';
import { verifyAndAdminAuth } from '../middlewares/auth';
import validate from '../middlewares/validate';
import { accountValidation } from '../validations';

const router = Router();

router.get('/accounts', accountController.getAll);
router.get('/account/:id', validate(accountValidation.getById), accountController.getById);
router.delete('/accounts/:id', validate(accountValidation.getById), accountController.removeById);
router.put(
    '/accounts/:id',
    validate(accountValidation.getById),
    validate(accountValidation.createAccount),
    accountController.updateById,
);
router.post('/login', validate(accountValidation.login), login);
router.post('/refrehToken', requestRefreshToken);
router.post('/register', validate(accountValidation.register), accountController.register);

export default router;
