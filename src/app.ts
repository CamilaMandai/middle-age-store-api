import express from 'express';
import productsRouter from './routers/products.router';
// import productsController from '../controllers/products.controller';

const app = express();

app.use(express.json());

app.use('/products', productsRouter);

export default app;
