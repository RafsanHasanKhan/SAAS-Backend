import { Router } from 'express';
import { UserRouters } from '../modules/user/user.route';
import { DoctorRuters } from '../modules/doctor/doctor.route';
import { AppointmentRouters } from '../modules/appointment/appointment.route';

const router = Router();

const moduleRoutes = [
  { path: '/users', route: UserRouters },
  { path: '/doctors', route: DoctorRuters },
  { path: '/appointments', route: AppointmentRouters },
];

moduleRoutes.forEach(r => router.use(r.path, r.route));

export default router;
