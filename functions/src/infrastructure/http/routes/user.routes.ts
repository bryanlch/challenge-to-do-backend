import { Router } from 'express';
import { profileUser, createUser, checkUser } from '../controllers/user.controller';

const router = Router();

router.post('/', createUser);
router.get('/profile', profileUser);
router.get('/check/:email', checkUser);

export const userRoutes = router;