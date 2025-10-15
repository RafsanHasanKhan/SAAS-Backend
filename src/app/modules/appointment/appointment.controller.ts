import { Request, Response } from 'express';
import { catchAsync } from '../../utils/catchAsync';
import { STATUS_CODES } from '../../core/constants/httpStatusCode';
import { appointmentService } from './appointment.service';
import { sendResponse } from '../../utils/sendResponse';

const createAppointment = catchAsync(async (req: Request, res: Response) => {
  const appointment = await appointmentService.createAppointment(req.body);
  sendResponse(res, {
    statusCode: STATUS_CODES.CREATED,
    success: true,
    message: 'Appointment create successfully',
    data: appointment,
  });
});

const getAllAppointments = catchAsync(async (req: Request, res: Response) => {
  const appointment = await appointmentService.getAllAppointments();
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Get all appointment successfully',
    data: appointment,
  });
});

const getAppointmentById = catchAsync(async (req: Request, res: Response) => {
  const appointment = await appointmentService.getAppointmentById(
    req.params.id
  );
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Appointment fetched successfully',
    data: appointment,
  });
});

const updateAppointment = catchAsync(async (req: Request, res: Response) => {
  const appointment = await appointmentService.updateAppointment(
    req.params.id,
    req.body
  );
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Update Appointment successfully',
    data: appointment,
  });
});

const deleteAppointment = catchAsync(async (req: Request, res: Response) => {
  const appointment = await appointmentService.deleteAppointment(
    (req.params.id, req.body)
  );
  sendResponse(res, {
    statusCode: STATUS_CODES.OK,
    success: true,
    message: 'Delete Appointment successfully',
    data: appointment,
  });
});

export const appointmentController = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};
