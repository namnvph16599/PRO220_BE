import express from 'express';
import { ServiceController } from '../controllers';
import validate from '../middlewares/validate';

const router = express.Router();

router.post('/service', ServiceController.createService);
router.get('/service', ServiceController.listService);

router.get('/banner/:id', ServiceController.getByIdService);
router.delete('/banner/:id', ServiceController.removeByIdService);
router.patch(
    '/banner/:id',
    ServiceController.updateByIdService,
);

export default router;
