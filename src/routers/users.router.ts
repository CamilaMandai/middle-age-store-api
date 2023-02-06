import express from 'express';
import usersController from '../controllers/users.controller';

const router = express.Router();

// router.get('/', (req, res) => res.send('olá'));
router.post('/', usersController.create);

export default router;