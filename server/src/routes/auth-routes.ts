import { Router  } from 'express';
import { login, signUp } from '../controllers/authController.js';




const router = Router();

// POST /login - Login a user
router.post('/login', login);

// Sign up router
router.post('/signup', signUp);



export default router;
