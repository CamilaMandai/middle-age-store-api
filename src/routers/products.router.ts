import express from 'express';
import productsController from '../controllers/products.controller';

const router = express.Router();

router.get('/', (req, res) => res.send('olá'));
router.post('/', productsController.create);

export default router;