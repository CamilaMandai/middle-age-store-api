import express from 'express';
import loginController from '../controllers/login.controller';
import loginMiddleware from '../middlewares/login.middleware';

const router = express.Router();

router.post('/', loginMiddleware.login, loginController.login);

export default router;