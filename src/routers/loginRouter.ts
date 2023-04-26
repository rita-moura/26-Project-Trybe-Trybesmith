import { Router } from 'express';
import * as userController from '../controllers/usersController';
import validateLogin from '../middlewares/loginMiddleware';

const loginRouter = Router();

loginRouter.post('/', validateLogin, userController.loginUser);

export default loginRouter;