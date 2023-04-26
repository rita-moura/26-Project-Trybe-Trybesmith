import { Router } from 'express';
import * as userController from '../controllers/usersController';

const userRouter = Router();

userRouter.post('/', userController.create);

export default userRouter;