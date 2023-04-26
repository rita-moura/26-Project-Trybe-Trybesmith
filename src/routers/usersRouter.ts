import { Router } from 'express';
import * as userController from '../controllers/usersController';
import validateUser from '../middlewares/userMiddleware';

const userRouter = Router();

userRouter.post('/', validateUser, userController.create);

export default userRouter;