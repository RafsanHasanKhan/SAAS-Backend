import { Router } from 'express';
import { UserRouters } from '../modules/user/user.route';

const router = Router();

const moduleRoutes = [{ path: '/users', route: UserRouters }];

moduleRoutes.forEach(r => router.use(r.path, r.route));

export default router;
