import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';

import { sendResponse } from '../../utils/sendResponse';
import { STATUS_CODES } from '../../core/constants/httpStatusCode';
import { doctorService } from './doctor.service';

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const doctor = await doctorService.createDoctor(req.body);
  sendResponse(res, {
    statusCode: STATUS_CODES.CREATED,
    success: true,
    message: 'Doctor create successfully',
    data: doctor,
  });
});

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const doctor = await doctorService.getAllDoctors();
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Get all doctors',
    data: doctor,
  });
});

const getDoctorById = catchAsync(async (req: Request, res: Response) => {
  const doctor = await doctorService.getDoctorById(req.params.id);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Get single doctor',
    data: doctor,
  });
});

const updateDoctor = catchAsync(async (req: Request, res: Response) => {
  const doctor = await doctorService.updateDoctor(req.params.id, req.body);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Update doctor successfully',
    data: doctor,
  });
});

const deleteDoctor = catchAsync(async (req: Request, res: Response) => {
  const doctor = await doctorService.deleteDoctor(req.params.id);
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Delete doctor successfully',
    data: doctor,
  });
});

export const doctorController = {
  createDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
  deleteDoctor,
};
