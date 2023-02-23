import express from 'express';
import { permissionController } from '../controllers';
import validate from '../middlewares/validate';
import { PermissionValidation } from '../validations';

const router = express.Router();

router.post('/permission', validate(PermissionValidation.permission), permissionController.create);
router.get('/permission', permissionController.list);

export default router;