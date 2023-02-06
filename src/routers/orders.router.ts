import express from 'express';
import ordersController from '../controllers/orders.controller';

const router = express.Router();

router.get('/', ordersController.findAll);

export default router;