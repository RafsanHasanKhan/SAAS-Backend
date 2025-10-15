import { Router } from 'express';
import { authMiddleware } from '../../core/middlewares/auth';
import { appointmentController } from './appointment.controller';

const router = Router();

router.post('/', authMiddleware, appointmentController.createAppointment);
router.get('/', authMiddleware, appointmentController.getAllAppointments);
router.get('/:id', authMiddleware, appointmentController.getAppointmentById);
router.put('/:id', authMiddleware, appointmentController.updateAppointment);
router.delete('/:id', authMiddleware, appointmentController.deleteAppointment);

export const AppointmentRouters = router;