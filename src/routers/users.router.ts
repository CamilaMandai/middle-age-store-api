import express from 'express';
import usersController from '../controllers/users.controller';
import usersMiddlewares from '../middlewares/users.middlewares';

const router = express.Router();

router.get('/', usersController.findAll);
router.post(
  '/', 
  usersMiddlewares.usernameToCreate,
  usersMiddlewares.passwordToCreate,
  usersMiddlewares.levelToCreate,
  usersMiddlewares.vocationToCreate,
  usersController.create,
);

export default router;