import { Router } from 'express';
import { AuthenticatedRequest, protect } from '../middleware/authMiddleware';
import { signup, signin, logout } from '../controllers/authController';

const router = Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/logout', logout);
router.get('/me', protect, (req: AuthenticatedRequest, res) => {
    return res.status(200).json(req.user);
});

export default router;
