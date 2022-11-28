import express from "express";
import {
    add,
    list,
    read,
    remove,
    update
} from "../controllers/order.controller";

const router = express.Router();

router.get('/orders', list)
router.get('/orders/:id', read)
router.post('/orders', add)
router.delete('/orders/:id', remove)
router.patch('/orders/:id', update)

export default router;