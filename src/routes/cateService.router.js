import express from 'express';
import { cateServiceController } from '../controllers';
import validate from '../middlewares/validate';
import { cateServiceValidate } from '../validations';

const router = express.Router();

router.get('/category', cateServiceController.getAll);
router.get('/category/:id', validate(cateServiceValidate.getById), cateServiceController.getById);
router.post('/category', validate(cateServiceValidate.createCateService), cateServiceController.create);
router.delete('/category/:id', validate(cateServiceValidate.getById), cateServiceController.removeById);
router.patch(
    '/category/:id',
    validate(cateServiceValidate.createCateService),
    validate(cateServiceValidate.getById),
    cateServiceController.updateById,
);
export default router;
