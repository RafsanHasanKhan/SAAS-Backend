import { Router } from 'express';
import { doctorController } from './doctor.controller';
import { authMiddleware } from '../../core/middlewares/auth';

const router = Router();

router.post('/', authMiddleware, doctorController.createDoctor);
router.get('/', doctorController.getAllDoctors);
router.get('/:id', doctorController.getDoctorById);
router.put('/:id', authMiddleware, doctorController.updateDoctor);
router.delete('/:id', authMiddleware, doctorController.deleteDoctor);

export const DoctorRuters = router;
