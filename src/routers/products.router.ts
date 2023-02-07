import express from 'express';
import productsController from '../controllers/products.controller';
import productsMiddlewares from '../middlewares/products.middlewares';

const router = express.Router();

router.get('/', productsController.findAll);
router.post(
  '/', 
  productsMiddlewares.nameToCreate,
  productsMiddlewares.amountToCreate,
  productsController.create,
);

export default router;