import { Router } from 'express';
import { userRouter } from './user-routes.js';
import  cityRouter  from './cities.js';


const router = Router();

router.use('/users', userRouter);
router.use('/cities', cityRouter);


export default router;
